const path = require("path");
const fs = require("fs");

/**
 *
 * @name json-dsl-parser
 * @description
 * json으로 정리된 SKP DSL 토큰명을 값으로 파싱해주는 도구입니다.
 *
 * @example
 * color: $globel-blue-100 -> color: #00f0ff
 */

module.exports = function dslParser(source) {
  let dstJson = null;
  // DSL 토큰을 syrup.json 이라는 이름으로 넘겨줍니다.
  const dslTokenFilename = "syrup.json";

  dstJson = path.resolve(__dirname, dslTokenFilename);

  const dstInfo = JSON.parse(fs.readFileSync(dstJson, "utf8"));
  const splittedCode = source.split("\n");
  const parsedDSTCode = splittedCode.map((line) => {
    if (line.includes("$syrup")) {
      trimmedline = String(line).trim().replace(";", "");
      const dstStyleStartIndex = trimmedline.indexOf("$syrup");
      const dstStyleText = trimmedline.substr(dstStyleStartIndex);
      // Note(Chanmin): !important 구문을 사용하는 경우
      const isImportantStyle = line.includes("!important");
      let trimmedTextKey = "";
      if (isImportantStyle) {
        trimmedTextKey = dstStyleText
          .replace("$", "")
          .replace("!important", "")
          .trim();
      } else {
        trimmedTextKey = dstStyleText.replace("$", "");
      }

      const dstTrimmedResult = getValueByKey(dstInfo, trimmedTextKey);
      if (!dstTrimmedResult?.value) {
        console.log(
          `${trimmedTextKey}는 존재하지 않는 키입니다.\n토큰을 다시 확인해주세요.`
        );
        return;
      }
      const { type, value } = dstTrimmedResult;

      if (type === "border") {
        const trimmedColor = value.color
          .replace("{", "")
          .replace("}", "")
          .split(".");
        const colorKey = trimmedColor[trimmedColor.length - 1];
        const dstValue = `${value.width}px solid ${
          getValueByKey(dstInfo, colorKey).value
        } ${isImportantStyle ? "!important;" : ""}`;
        return line.replace(dstStyleText, dstValue);
      }

      if (type === "boxShadow") {
        const { x, y, blur, spread, color } = value;
        const shorthandedShadow = `${pixelToRem({ pixel: x })}rem ${pixelToRem({
          pixel: y,
        })}rem ${pixelToRem({ pixel: blur })}rem ${pixelToRem({
          pixel: spread,
        })}rem ${color} ${isImportantStyle ? "!important" : ""};`;
        return line.replace(dstStyleText, shorthandedShadow);
      }

      if (type === "lineHeights" || type === "fontSizes") {
        return line.replace(
          dstStyleText,
          `${pixelToRem({ pixel: value })}rem  ${
            isImportantStyle ? "!important" : ""
          };`
        );
      }

      if (type === "typography") {
        const fontStyle = {};
        // Note: {['fontFamily', '{fontFamilies.pretendard}'], ... }
        const fontStyleEntries = Object.entries(value);
        const trimmedFontStyleValues = fontStyleEntries.map((entry) => {
          const [key, value] = entry;
          const trimmedValue = getBracketTrimmedValue(value);
          const style = trimmedValue.split(".").reduce((acc, fontStyleKey) => {
            try {
              if (acc[fontStyleKey]) {
                return acc[fontStyleKey];
              }
            } catch (err) {
              console.error(
                `DSL 파싱 실패! : ${key} 키 하위에는 ${fontStyleKey}가 존재하지 않습니다.`
              );
              throw new Error(
                `DSL 파싱 실패! : ${key} 키 하위에는 ${fontStyleKey}가 존재하지 않습니다.`
              );
            }
          }, dstInfo);
          return { ...style, type: key };
        });

        trimmedFontStyleValues.forEach(
          (trimmedValue) => (fontStyle[trimmedValue.type] = trimmedValue.value)
        );

        const combinedFontStyle = `
          font-family: ${fontStyle.fontFamily} ${
          isImportantStyle ? "!important" : ""
        };
          font-weight: ${parseFontWeight(fontStyle.fontWeight)}  ${
          isImportantStyle ? "!important" : ""
        };
          font-size: ${pixelToRem({
            pixel: fontStyle.fontSize,
          })}rem  ${isImportantStyle ? "!important" : ""};
          line-height: ${pixelToRem({ pixel: fontStyle.lineHeight })}rem  ${
          isImportantStyle ? "!important" : ""
        };
          text-decoration: ${fontStyle.textDecoration}  ${
          isImportantStyle ? "!important" : ""
        };
          letter-spacing: ${pixelToRem({
            pixel: fontStyle.letterSpacing,
          })}rem  ${isImportantStyle ? "!important" : ""};
        `;

        return combinedFontStyle;
      } else {
        return line.replace(dstStyleText, value);
      }
    }
    return line;
  });

  return parsedDSTCode.join("\n").trim();
};

const pixelToRem = ({ pixel, basePixel = 10 }) => {
  return Number(pixel / basePixel);
};

const getBracketTrimmedValue = (key) => {
  let trimmedKey = key;
  if (trimmedKey.includes("{")) {
    trimmedKey = trimmedKey.replace("{", "");
  }
  if (trimmedKey.includes("}")) {
    trimmedKey = trimmedKey.replace("}", "");
  }
  return trimmedKey;
};

const parseFontWeight = (fontWeight) => {
  switch (fontWeight) {
    case "Bold":
      return 700;
    case "Medium":
      return 500;
    case "Regular":
      return 400;
    default:
      return 400;
  }
};

const getValueByKey = (obj, targetKey) => {
  for (const key in obj) {
    try {
      if (key === targetKey) {
        return obj[key];
      } else if (typeof obj[key] === "object") {
        const value = getValueByKey(obj[key], targetKey);
        if (value !== null) {
          return value;
        }
      }
    } catch (err) {
      throw new Error(
        `'${key}' 키를 찾을 수 없습니다.\nDSL 토큰을 다시 확인해주세요.`
      );
    }
  }
  return null; // Key not found
};

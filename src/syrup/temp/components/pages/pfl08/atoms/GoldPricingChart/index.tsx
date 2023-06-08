import React from 'react';

type Props = {};

const DATA_COUNT = 12;
const labels = [];
for (let i = 0; i < DATA_COUNT; ++i) {
  labels.push(i.toString());
}
const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Cubic interpolation (monotone)',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.red,
      fill: false,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
    },
    {
      label: 'Cubic interpolation',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.blue,
      fill: false,
      tension: 0.4,
    },
    {
      label: 'Linear interpolation (default)',
      data: datapoints,
      borderColor: Utils.CHART_COLORS.green,
      fill: false,
    },
  ],
};
var config_ctx_gold_line = {
  type: 'line',
  data: {
    labels: ['', '', '', '', '', '', ''], //데이터 수만큼 빈값 유지(1주일이면 7개)
    datasets: [
      {
        data: [190, 1000, 300, 0, 600, 820, 590],
        fill: false,
        lineTension: dataset.linetention, //곡률
        borderColor: gradient_line,
        borderWidth: dataset.lineborderwidth, //그래프 라인 두께
        pointRadius: 0,
      },
    ],
  },
  options: {
    events: [], //hover시 툴팁 사라지는 현상 방지
    showAllTooltips: true, // call tooltip plugin
    maintainAspectRatio: false,
    responsive: true,
    legend: false, //범례보기
    layout: {
      padding: {
        left: 0,
        right: 20, //우측 여백 조정
        top: 5,
        bottom: 5,
      },
    },
    scales: {
      x: {
        display: true,
        gridLines: {
          display: false,
          color: 'transparent',
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          color: 'transparent',
        },
      },
      y: {
        //removing everything
        display: false,
        beginAtZero: true,
        grid: {
          //display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: false, //범례보기
      tooltips: false,
      annotation: {
        annotations: {
          line1: {
            drawTime: 'afterDraw',
            id: 'hline',
            type: 'line',
            // yMin: get_avg(),
            // yMax: get_avg(),
            // borderColor: avg_borderColor,
            // borderWidth: avg_borderWidth,
            // borderDash: [avg_borderlength, avg_borderspace], //점선 [length, space]
          },
        },
      },
    },
  },
};

const index = (props: Props) => {
  return <div>index</div>;
};

export default index;

import BottomSheet from '@components/common/BottomSheet';
import React from 'react';
import ProductCategoryItem from './atom/ProductCategoryItem';
import Spacing from '@components/common/Spacing';
import style from './pfp18.module.scss';

type Props = {};

function Pfp18Page(props: Props) {
  return (
    <div>
      <BottomSheet title="구매할 상품을 선택해 주세요" hasCloseButton>
        <Spacing size={17} />
        <div className={style['bottomsheet-scroll-area']}>
          <ProductCategoryItem icon="/static/syrup_ico_40_list_domestic_stock.png" name="국내 주식" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_Overseas_stock.png" name="해외 주식" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_fund.png" name="펀드" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_ELSDLS.png" name="ELS/DLS" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_domestic_stock.png" name="국내 주식" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_bitcoin.png" name="가상자산" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_gold.png" name="금" />
          <ProductCategoryItem icon="/static/syrup_ico_40_list_treasurer.png" name="명품 조각" />
        </div>
        <Spacing size={16} />
      </BottomSheet>
    </div>
  );
}

export default Pfp18Page;

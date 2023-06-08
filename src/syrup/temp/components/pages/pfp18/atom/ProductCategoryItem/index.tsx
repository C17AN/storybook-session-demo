import React from 'react';
import style from './ProductCategoryItem.module.scss';
import Text from '@components/common/Text';

type Props = {
  icon?: string;
  name?: string;
};

function ProductCategoryItem({ icon, name }: Props) {
  return (
    <li className={style.container}>
      <img src={icon} alt={name} className={style.icon} />
      <Text typography="t900" className={style.name} as="p">
        {name}
      </Text>
    </li>
  );
}

export default ProductCategoryItem;

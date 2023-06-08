import React, { ReactNode } from 'react';
import style from './ListRow.module.scss';
import classNames from 'classnames';

export type ListRowProps = {
  icon?: ReactNode;
  name?: string;
  isNewItem?: boolean;
  content?: string;
  leftBottomAccessary?: ReactNode;
  rightBottomAccessary?: ReactNode;
  rightBottomToolTop?: ReactNode;
  hideBorderBottom?: boolean;
  bottomAccessary?: ReactNode;
};

function ListRow({
  icon,
  name,
  content,
  isNewItem,
  leftBottomAccessary,
  rightBottomAccessary,
  rightBottomToolTop,
  hideBorderBottom,
  bottomAccessary,
}: ListRowProps) {
  return (
    <div className={classNames(style['list-row-container'], hideBorderBottom && style['border-bottom-hidden'])}>
      <div className={classNames(style.container, hideBorderBottom && style['border-bottom-hidden'])}>
        {typeof icon === 'string' && icon ? (
          <img src={icon ?? ''} alt={name} className={style.icon} width={40} height={40} />
        ) : (
          <>{icon}</>
        )}
        <div className={style['content-wrapper']}>
          <div className={style['title-wrapper']}>
            <div className={style.name}>{name}</div>
            {isNewItem && <img className={style['new-badge']} src="/static/syrup_ico_new_badge_primary.png" />}
            {leftBottomAccessary && <div className={style['lower-left-accesary']}>{leftBottomAccessary}</div>}
          </div>
          <div className={style['right-content-container']}>
            <div className={style.content}>{content}</div>
            {rightBottomAccessary && (
              <div
                className={classNames(style['lower-right-accesary'], rightBottomToolTop ? style['has-tooltip'] : '')}
              >
                {rightBottomAccessary}
              </div>
            )}
            <span className={style.tooltip}>{rightBottomToolTop && rightBottomToolTop}</span>
          </div>
        </div>
      </div>
      {bottomAccessary && <div className={style['bottom-accessary']}>{bottomAccessary}</div>}
    </div>
  );
}

export default ListRow;

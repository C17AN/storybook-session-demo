import styles from './toast.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface toastProps {
  txt: string;
}

export default function Toast({ txt }: toastProps) {
  return (
    <div className={cx('toast')}>
      <p>
        {txt.split('<br>').map((txt) => (
          <>
            {txt}
            <br />
          </>
        ))}
      </p>
    </div>
  );
}

import { refreshPage } from '../../../utils/refreshPage';
import styles from './Index.module.scss';

const ButtonRefresh = () => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={refreshPage}>
        Refresh Page
      </button>
    </div>
  );
};

export default ButtonRefresh;

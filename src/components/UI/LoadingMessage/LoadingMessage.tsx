import styles from './Index.module.scss';

const LoadingMessage = () => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingMessage;

import styles from './Index.module.scss';

const ErrorMessage = () => {
  return (
    <div className={styles.statusContainer}>
      <div className={styles.error}>
        Oops! Something went wrong. Please refresh the page
      </div>
    </div>
  );
};

export default ErrorMessage;

import styles from './Index.module.scss';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
    </div>
  );
};

export default Main;

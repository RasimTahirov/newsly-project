import styles from './Index.module.scss';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <Home />
    </div>
  );
};

export default Main;

import styles from './Index.module.scss';

import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation/Navigation';
import Home from '../../../pages/Home/Home';

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

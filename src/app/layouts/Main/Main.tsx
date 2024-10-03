import styles from './Index.module.scss';

import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation/Navigation';
import AppRoutesNav from '../../routes/AppRoutesNav';
import AppRoutesCategory from '../../routes/AppRoutesCategory';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <AppRoutesNav />
      <AppRoutesCategory />
    </div>
  );
};

export default Main;

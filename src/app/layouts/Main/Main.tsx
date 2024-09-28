import styles from './Index.module.scss';

import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation/Navigation';

import AppRoutes from '../../routes/AppRoutes';
import AppRoutes2 from '../../routes/AppRoutes2';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <AppRoutes />
      <AppRoutes2 />
    </div>
  );
};

export default Main;

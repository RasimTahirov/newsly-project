import styles from './Index.module.scss';

import Header from '../../../components/Header/Header';
import Navigation from '../../../components/Navigation/Navigation';
import AppRoutes from '../../routes/AppRoutes';

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <AppRoutes />
    </div>
  );
};

export default Main;

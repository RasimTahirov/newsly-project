import { useEffect, useState } from 'react';

import logo from './assets/logo.svg';

import styles from './Index.module.scss';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
  const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.containerTime}>
          <span className={styles.date}>{formattedDate}</span>
          <span className={styles.time}>{formattedTime}</span>
        </div>
        <div className={styles.currencyRates}>
          <span>USD 90,39</span>
          <span>EUR 99,91</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

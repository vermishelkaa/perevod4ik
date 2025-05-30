import React from 'react';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';
import { ReactComponent as BellIcon } from '../../assets/icons/bell.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const Header = () => {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Переводчик';
      case '/dictionary':
        return 'Словарик';
      case '/history':
        return 'История';
      case '/stats':
        return 'Моя статистика';
      case '/settings':
        return 'Настройки';
      default:
        return '';
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{getTitle()}</h1>

      <div className={styles.icons}>
        <BellIcon className={styles.icon} />
        <UserIcon className={styles.icon} />
      </div>
    </header>

    
  );
};

export default Header;

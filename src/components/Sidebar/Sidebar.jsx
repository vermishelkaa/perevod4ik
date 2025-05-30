import React from 'react';
import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

import { ReactComponent as TranslateIcon } from '../../assets/icons/translate.svg';
import { ReactComponent as BookIcon } from '../../assets/icons/book.svg';
import { ReactComponent as HistoryIcon } from '../../assets/icons/history.svg';
import { ReactComponent as StatsIcon } from '../../assets/icons/stats.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>название</div>

      <div className={styles.user}>
        <div className={styles.avatar}></div>
        <div>
          <div className={styles.username}>Никнейм</div>
          <div className={styles.role}>Эксперт</div>
        </div>
      </div>

      <nav className={styles.menu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          <TranslateIcon className={styles.icon} />
          Переводчик
        </NavLink>

        <NavLink
          to="/dictionary"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          <BookIcon className={styles.icon} />
          Словарик
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          <HistoryIcon className={styles.icon} />
          История
        </NavLink>

        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          <StatsIcon className={styles.icon} />
          Моя статистика
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          <SettingsIcon className={styles.icon} />
          Настройки
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

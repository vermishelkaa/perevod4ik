import React from 'react';
import styles from './HistoryPage.module.css';
import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';

const HistoryPage = () => {
  const historyGroups = [
    {
      label: 'Сегодня',
      items: [
        {
          original: '¿Cómo estás?',
          translated: 'Как дела?',
          lang: 'Испанский → Русский',
          time: '14:32',
        },
      ],
    },
    {
      label: 'Вчера',
      items: [
        {
          original: 'Bonjour',
          translated: 'Здравствуйте',
          lang: 'Французский → Русский',
          time: '10:15',
        },
        {
          original: '¿Cómo estás?',
          translated: 'Как дела?',
          lang: 'Испанский → Русский',
          time: '14:32',
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Временной разброс:</span>
          <button className={styles.dropdown}>
            Последние 7 дней
            <ArrowDownIcon className={styles.arrowIcon} />
          </button>
        </div>

        <div className={styles.filterGroup}>
          <span className={styles.filterLabel}>Языки:</span>
          <button className={styles.dropdown}>
            Все
            <ArrowDownIcon className={styles.arrowIcon} />
          </button>
        </div>

        <button className={styles.applyButton}>Применить</button>
      </div>

      {historyGroups.map((group, index) => (
        <div key={index} className={styles.historyGroup}>
          <h3 className={styles.groupTitle}>{group.label}</h3>
          {group.items.map((item, idx) => (
            <div key={idx} className={styles.historyCard}>
              <div className={styles.cardTop}>
                <span className={styles.cardLang}>
                  {item.lang} • {item.time}
                </span>
                <StarIcon className={styles.trashIcon} />
              </div>
              <div>
                <p className={styles.original}>{item.original}</p>
                <p className={styles.translated}>{item.translated}</p>
              </div>
            </div>
          ))}
        </div>
      ))}

      <button className={styles.loadMore}>Загрузить ещё</button>
    </div>
  );
};

export default HistoryPage;

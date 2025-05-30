import React from 'react';
import styles from './TranslatorPage.module.css';
import { ReactComponent as SwapIcon } from '../../assets/icons/swap.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { ReactComponent as MicIcon } from '../../assets/icons/mic.svg';
import { ReactComponent as SoundIcon } from '../../assets/icons/sound.svg';
import { ReactComponent as TipIcon } from '../../assets/icons/tip.svg';

const TranslatorPage = () => {
  return (
    <div className={styles.page}>

      <div className={styles.translationBlock}>
        <div className={styles.topRow}>
          <select className={styles.select}>
            <option>Авто распознание</option>
          </select>
          <SwapIcon className={styles.icon} />
          <select className={styles.select}>
            <option>Испанский</option>
          </select>
        </div>

        <div className={styles.textAreas}>
          <textarea
            className={styles.inputBox}
            placeholder="Введите текст здесь..."
          />
          <textarea className={styles.inputBox} readOnly />
        </div>

        <div className={styles.actionsRow}>
          <div className={styles.iconGroup}>
            <MicIcon className={styles.icon} />
            <SoundIcon className={styles.icon} />
          </div>
          <div className={styles.iconGroup}>
            <StarIcon className={styles.icon} />
            <CopyIcon className={styles.icon} />
          </div>
        </div>
      </div>



<div className={styles.miniDictionaryContainer}>
  <h2 className={styles.subTitle}>Мини словарик</h2>
  <div className={styles.miniDictionaryGrid}>
    <div className={`${styles.card} ${styles.cardDescription}`}>
      <h3>Описание</h3>
      <p><span className={styles.tag}>(сущ.)</span> Приветствие или выражение хорошего</p>
      <p><span className={styles.tag}>(исп.)</span> Используется для приветствия кого то, в жизни, по телефону или просто так</p>
    </div>

    <div className={`${styles.card} ${styles.cardExamples}`}>
      <h3>Примеры употребления</h3>
      <p>“Привет, как ты сегодня?”</p>
      <p>“А? Здравствуйте!”</p>
      <p>“Доброго дня, я в гости!”</p>
    </div>

    <div className={`${styles.card} ${styles.cardSynonyms}`}>
      <h3>Синонимы</h3>
      <div className={styles.tags}>
        <span>Привет</span>
        <span>Здравствуйте</span>
        <span>Доброго дня</span>
      </div>
    </div>

    <div className={styles.card} style={{ height: '166px' }}>
  <h3>Полезные советы</h3>
  <ul className={styles.tipsList}>
    <li>
      <TipIcon className={styles.tipIcon} />
      Используйте “Hola” для неформального приветствия.
    </li>
    <li>
      <TipIcon className={styles.tipIcon} />
      В официальных ситуациях лучше сказать “Buenos días”.
    </li>
    <li>
      <TipIcon className={styles.tipIcon} />
      Повседневное приветствие.
    </li>
  </ul>
</div>

  </div>
</div>






<div className={styles.recentTranslationsContainer}>
  <h2 className={styles.recentTitle}>Недавние переводы</h2>

  <div className={styles.translationCard}>
    <div className={styles.translationTop}>
      <p className={styles.translationLang}>Испанский → Русский</p>
      <p className={styles.translationTime}>2 минуты назад</p>
    </div>
    <p className={styles.translationOriginal}>Как дела?</p>
    <p className={styles.translationResult}>¿Cómo estás?</p>
  </div>

  <div className={styles.translationCard}>
    <div className={styles.translationTop}>
      <p className={styles.translationLang}>Испанский → Русский</p>
      <p className={styles.translationTime}>2 минуты назад</p>
    </div>
    <p className={styles.translationOriginal}>Как дела?</p>
    <p className={styles.translationResult}>¿Cómo estás?</p>
  </div>
</div>



    </div>
  );
};

export default TranslatorPage;

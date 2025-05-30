import React from 'react';
import styles from './DictionaryPage.module.css';
import { ReactComponent as SoundIcon } from '../../assets/icons/sound.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/star2.svg';

const DictionaryPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.card}>
        <div className={styles.headerRow}>
        <div className={styles.titleBlock}>
            <div className={styles.title}>
            <h2>Hola</h2>
        <span className={styles.transcription}>/həˈləʊ/</span>
        </div>
        <div className={styles.subIcons}>
      <span className={styles.badge}>Существительное</span>
      <SoundIcon className={styles.sound} />
    </div>
    </div>
  <StarIcon className={styles.star} />
</div>


    <div className={styles.section}>
      <p className={styles.label}>Перевод</p>
      <p className={styles.text}>Простое приветствие кого то в неформальной обстановке</p>
    </div>
    <div className={styles.section}>
      <p className={styles.label}>Примеры</p>
      <ul className={styles.examples}>
        <li>Bueno, hola señorita Ichigatsu</li>
        <li>Hola, ¿abuela Lopez?</li>
      </ul>
    </div>
    <div className={styles.section}>
      <p className={styles.label}>Синонимы</p>
      <div className={styles.synonyms}>
        <span>Привет</span>
        <span>Здравствуйте</span>
        <span>Доброго дня</span>
      </div>
    </div>
    </div>

    <h3 className={styles.similarTitle}>Похожее</h3>
    <div className={styles.similarWrapper}>
    {Array(10).fill(0).map((_, i) => (
    <div key={i} className={styles.similarCard}>
      <div className={styles.similarHeader}>
        <h4 className={styles.similarWord}>Prosperadlos</h4>
        <StarIcon className={styles.similarStar} />
      </div>
      <p className={styles.similarSub}>Приветствую</p>
      <p className={styles.similarQuote}>
        <em>“Pues si en la ciudad reina la paz, los negocios prosperan.”</em>
      </p>
    </div>
    ))}
    </div>

    </div>
  );
};

export default DictionaryPage;

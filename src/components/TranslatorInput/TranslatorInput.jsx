import React, { useState, useEffect } from 'react';
import styles from './TranslatorInput.module.css';
import { translateText } from '../../api/translate';

const TranslatorInput = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
  const delayDebounce = setTimeout(() => {
    if (inputText.trim()) {
      translateText(inputText, 'auto', 'es') 
        .then(setTranslatedText)
        .catch((err) => setTranslatedText('Ошибка перевода'));
    } else {
      setTranslatedText('');
    }
  }, 500);

  return () => clearTimeout(delayDebounce);
}, [inputText]);


  return (
    <div className={styles.translationBlock}>
      <div className={styles.topRow}>
        <select className={styles.select}>
          <option>Авто распознание</option>
        </select>
        <select className={styles.select}>
          <option>Испанский</option>
        </select>
      </div>

      <div className={styles.textAreas}>
        <textarea
          className={styles.inputBox}
          placeholder="Введите текст здесь..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <textarea
          className={styles.inputBox}
          readOnly
          value={translatedText}
        />
      </div>
    </div>
  );
};

export default TranslatorInput;

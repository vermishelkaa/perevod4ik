import axios from 'axios';

const endpoints = [
  'https://libretranslate.de/translate',
  'https://translate.argosopentech.com/translate'
];

export const translateText = async (text, sourceLang = 'auto', targetLang = 'ru') => {
  for (let url of endpoints) {
    try {
      const res = await axios.post(url, {
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      return res.data.translatedText;
    } catch (err) {
      console.warn(`❌ Ошибка при запросе к ${url}:`, err.message);
    }
  }

  throw new Error('Все API недоступны');
};

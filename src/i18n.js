// i18n.js
import zh from '../public/data/content-zh.json';
import en from '../public/data/content-en.json';
import ja from '../public/data/content-ja.json';

const i18nMap = { zh, en, ja };

export function getI18n(lang = 'zh') {
  return i18nMap[lang] || zh;
}

export const LANGS = [
  { key: 'zh', label: '繁體中文' },
  { key: 'en', label: 'English' },
  { key: 'ja', label: '日本語' },
]; 
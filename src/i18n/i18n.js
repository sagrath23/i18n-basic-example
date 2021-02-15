import { labels as spanishLabels } from './langs/ES-co';
import { labels as englishLabels } from './langs/EN-us';

const english = 'EN-us';

const translate = (lang = 'EN-us') => {
    const labelsToUse = lang === english ? englishLabels : spanishLabels;

    return (key) => labelsToUse[key] || '-';
};

export const labels = translate(process.env.REACT_APP_LANG);

type TranslationFunction = (key: string) => string;

type CustomKeys = {
  morning_greating?: string;
  afternoon_greating?: string;
  evening_greating?: string;
  night_greating?: string;
};

type LanguageTranslations = {
  [key: string]: {
    morning_greating: string;
    afternoon_greating: string;
    evening_greating: string;
    night_greating: string;
  };
};

const defaultTranslations: LanguageTranslations = {
  en: {
    morning_greating: 'Good morning, ',
    afternoon_greating: 'Good afternoon, ',
    evening_greating: 'Good evening, ',
    night_greating: 'Good night, '
  },
  id: {
    morning_greating: 'Selamat pagi, ',
    afternoon_greating: 'Selamat siang, ',
    evening_greating: 'Selamat sore, ',
    night_greating: 'Selamat malam, '
  }
};

export const getGreeting = (
  name: string,
  language: string = 'en',
  customKeys: CustomKeys = {}
): string => {
  const hours = new Date(Date.now()).getHours();
  const translations = defaultTranslations[language] || defaultTranslations['en'];
  const keys = { ...translations, ...customKeys };

  const greetingKey = hours >= 5 && hours < 12
    ? keys.morning_greating
    : hours >= 12 && hours < 18
    ? keys.afternoon_greating
    : hours >= 18 && hours < 21
    ? keys.evening_greating
    : keys.night_greating;

  return `${greetingKey}${name}`;
};

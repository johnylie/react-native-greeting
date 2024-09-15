# react-native-greeting [![npm version](https://badge.fury.io/js/react-native-greeting.svg)](https://badge.fury.io/js/react-native-greeting)

A React Native utility function that provides time-based greetings in English and Indonesian. This package is designed to be flexible and customizable with support for basic localization needs.

## Features

- Provides a greeting message based on the current time of day.
- Supports English (`'en'`) and Indonesian (`'id'`) languages.
- Allows customization of translation keys for different times of the day.

## Installation

**npm**

```bash
npm install react-native-greeting --save
```

### Platform compatibility

This project is compatible with **iOS**,  **Android**, **Windows** and **macOS**.  
This project supports both **the old** (paper) **and the new architecture** (fabric).  
This project is compatible with [expo](https://docs.expo.dev/).

### Getting Started

If any step seems unclear, please create a pull request.

### Usage

Import the `getGreeting` function from `react-native-greeting` and use it like so:

```tsx
import { getGreeting } from 'react-native-greeting';

const name = 'John';
const greeting = getGreeting(name); // Returns greeting in default language (English) based on current time
console.log(greeting); // Output could be: "Good morning, John" or "Good evening, John" depending on the time of day
```

### Custom Language Example

```tsx
const name = 'Johny';
const greeting = getGreeting(name, 'id'); // Returns greeting in Indonesian
console.log(greeting); // Output: "Selamat pagi, Johny" or "Selamat malam, Johny" based on the time
```

### Custom Greeting Example

```tsx
const customKeys = {
  morning_greating: 'Hey, good morning! '
};
const greeting = getGreeting('Johny', 'en', customKeys);
console.log(greeting); // Output: "Hey, good morning! Johny"
```

### API
```tsx
getGreeting(name: string, language?: string, customKeys?: CustomKeys): string
```
## Parameters

| Parameter   | Type                     | Description                                                                                       |
|-------------|--------------------------|---------------------------------------------------------------------------------------------------|
| `name`      | `string`                 | **Required**. The name of the person to greet.                                                    |
| `language`  | `string (optional)`       | The language to use for the greeting. Defaults to `'en'` (English).                               |
| `customKeys`| `CustomKeys (optional)`   | An object with optional custom greetings for different times of the day (morning, afternoon, etc). |

### `CustomKeys` Structure

| Key                  | Type     | Description                                                  |
|----------------------|----------|--------------------------------------------------------------|
| `morning_greating`    | `string` | Optional. Custom greeting for morning (5:00 - 11:59).        |
| `afternoon_greating`  | `string` | Optional. Custom greeting for afternoon (12:00 - 17:59).     |
| `evening_greating`    | `string` | Optional. Custom greeting for evening (18:00 - 20:59).       |
| `night_greating`      | `string` | Optional. Custom greeting for night (21:00 - 4:59).          |

Returns:
A greeting string in the specified language or with custom keys, adjusted for the time of day.

## Time-Based Greeting Logic

The greeting returned by the `getGreeting` function is based on the current hour of the day:

- **Morning (5:00 - 11:59)**: Uses the `morning_greating` key.
- **Afternoon (12:00 - 17:59)**: Uses the `afternoon_greating` key.
- **Evening (18:00 - 20:59)**: Uses the `evening_greating` key.
- **Night (21:00 - 04:59)**: Uses the `night_greating` key.

If the time is outside these ranges, the function defaults to the `night_greating`.

## Customization Examples

### Adding More Languages

You can easily add support for return languages by overriding the `defaultTranslations` object:

Currently supported languageTranslations:

```typescript
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
  },
};
```

### Contributing

Feel free to contribute by adding more languages or improving the time-based logic. Follow these steps:

- Fork the repository.
- Create your feature branch (git checkout -b feature/my-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/my-feature).
- Create a new Pull Request.

### License

MIT

### Translations

This readme is available in:

- [English](./README.md)

## 📝 Author

👤 **Johny Lie**

- Github: [@johnylie](https://github.com/johnylie)

## 🌱 Show your support

Please ⭐️ this repository if this project helped you!

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/johnylie)

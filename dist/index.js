"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGreeting = void 0;
var defaultTranslations = {
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
var getGreeting = function (name, language, customKeys) {
    if (language === void 0) { language = 'en'; }
    if (customKeys === void 0) { customKeys = {}; }
    var hours = new Date(Date.now()).getHours();
    var translations = defaultTranslations[language] || defaultTranslations['en'];
    var keys = __assign(__assign({}, translations), customKeys);
    var greetingKey = hours >= 5 && hours < 12
        ? keys.morning_greating
        : hours >= 12 && hours < 18
            ? keys.afternoon_greating
            : hours >= 18 && hours < 21
                ? keys.evening_greating
                : keys.night_greating;
    return "".concat(greetingKey).concat(name);
};
exports.getGreeting = getGreeting;

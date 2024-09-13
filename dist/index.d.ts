type CustomKeys = {
    morning_greating?: string;
    afternoon_greating?: string;
    evening_greating?: string;
    night_greating?: string;
};
export declare const getGreeting: (name: string, language?: string, customKeys?: CustomKeys) => string;
export {};

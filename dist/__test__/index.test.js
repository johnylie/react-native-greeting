"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var index_1 = require("../index");
describe('getGreeting function', function () {
    var clock;
    beforeEach(function () {
        clock = sinon_1.default.useFakeTimers();
    });
    afterEach(function () {
        clock.restore();
    });
    it('should return the correct morning greeting in English', function () {
        clock.setSystemTime(new Date(2024, 8, 13, 9, 0));
        expect((0, index_1.getGreeting)('Johny')).toBe('Good morning, Johny');
    });
    it('should return the correct afternoon greeting in English', function () {
        clock.setSystemTime(new Date(2024, 8, 13, 14, 0));
        expect((0, index_1.getGreeting)('Johny')).toBe('Good afternoon, Johny');
    });
    it('should return the correct evening greeting in Indonesian', function () {
        clock.setSystemTime(new Date(2024, 8, 13, 19, 0));
        expect((0, index_1.getGreeting)('Johny', 'id')).toBe('Selamat sore, Johny');
    });
    it('should return the correct night greeting in English', function () {
        clock.setSystemTime(new Date(2024, 8, 13, 22, 0));
        expect((0, index_1.getGreeting)('Johny')).toBe('Good night, Johny');
    });
    it('should return custom morning greeting', function () {
        clock.setSystemTime(new Date(2024, 8, 13, 9, 0));
        var customKeys = { morning_greating: 'Rise and shine, ' };
        expect((0, index_1.getGreeting)('Johny', 'en', customKeys)).toBe('Rise and shine, Johny');
    });
    it('should return custom evening greeting in Indonesian', function () {
        clock.setSystemTime(new Date(2024, 8, 13, 19, 0));
        var customKeys = { evening_greating: 'Selamat malam, ' };
        expect((0, index_1.getGreeting)('Johny', 'id', customKeys)).toBe('Selamat malam, Johny');
    });
});

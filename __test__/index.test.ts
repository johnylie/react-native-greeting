import sinon from 'sinon';
import { getGreeting } from '../index';

describe('getGreeting function', () => {
  let clock: sinon.SinonFakeTimers;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
  });

  it('should return the correct morning greeting in English', () => {
    clock.setSystemTime(new Date(2024, 8, 13, 9, 0));
    expect(getGreeting('Johny')).toBe('Good morning, Johny');
  });

  it('should return the correct afternoon greeting in English', () => {
    clock.setSystemTime(new Date(2024, 8, 13, 14, 0));
    expect(getGreeting('Johny')).toBe('Good afternoon, Johny');
  });

  it('should return the correct evening greeting in Indonesian', () => {
    clock.setSystemTime(new Date(2024, 8, 13, 19, 0));
    expect(getGreeting('Johny', 'id')).toBe('Selamat sore, Johny');
  });

  it('should return the correct night greeting in English', () => {
    clock.setSystemTime(new Date(2024, 8, 13, 22, 0));
    expect(getGreeting('Johny')).toBe('Good night, Johny');
  });

  it('should return custom morning greeting', () => {
    clock.setSystemTime(new Date(2024, 8, 13, 9, 0));
    const customKeys = { morning_greating: 'Rise and shine, ' };
    expect(getGreeting('Johny', 'en', customKeys)).toBe('Rise and shine, Johny');
  });

  it('should return custom evening greeting in Indonesian', () => {
    clock.setSystemTime(new Date(2024, 8, 13, 19, 0));
    const customKeys = { evening_greating: 'Selamat malam, ' };
    expect(getGreeting('Johny', 'id', customKeys)).toBe('Selamat malam, Johny');
  });
});

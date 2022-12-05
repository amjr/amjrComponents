import '@testing-library/jest-dom';

jest.setTimeout(10000);

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));

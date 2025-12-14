import { getStatusMessage } from '../app';

describe('getStatusMessage', () => {
  it('returns the expected status string', () => {
    expect(getStatusMessage()).toBe('I am working');
  });
});

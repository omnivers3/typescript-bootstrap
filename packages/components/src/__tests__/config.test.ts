import { config } from '../config';

describe('config', () => {
  it('returns stuff', () => {
    const c = {
      version: '1234',
    };
    const actual = config(c);
    expect(actual).toEqual('{\"version\":\"1234\"}');
  });
});

import { Cloth } from './cloth';

describe('Cloth', () => {
  it('should create an instance', () => {
    expect(new Cloth('', '', '', new Date(), new Date())).toBeTruthy();
  });
});

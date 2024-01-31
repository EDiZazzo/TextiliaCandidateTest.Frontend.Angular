import { Cloth } from './cloth';

describe('Cloth', () => {
  it('should create an instance', () => {
    expect(new Cloth(0, '', '', '', new Date(), new Date())).toBeTruthy();
  });
});

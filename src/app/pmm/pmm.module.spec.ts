import { PmmModule } from './pmm.module';

describe('PmmModule', () => {
  let pmmModule: PmmModule;

  beforeEach(() => {
    pmmModule = new PmmModule();
  });

  it('should create an instance', () => {
    expect(pmmModule).toBeTruthy();
  });
});

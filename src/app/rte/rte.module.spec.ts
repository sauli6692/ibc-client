import { RteModule } from './rte.module';

describe('RteModule', () => {
  let rteModule: RteModule;

  beforeEach(() => {
    rteModule = new RteModule();
  });

  it('should create an instance', () => {
    expect(rteModule).toBeTruthy();
  });
});

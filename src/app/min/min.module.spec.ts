import { MinModule } from './min.module';

describe('MinModule', () => {
  let minModule: MinModule;

  beforeEach(() => {
    minModule = new MinModule();
  });

  it('should create an instance', () => {
    expect(minModule).toBeTruthy();
  });
});

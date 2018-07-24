import { AdmModule } from './adm.module';

describe('AdmModule', () => {
  let admModule: AdmModule;

  beforeEach(() => {
    admModule = new AdmModule();
  });

  it('should create an instance', () => {
    expect(admModule).toBeTruthy();
  });
});

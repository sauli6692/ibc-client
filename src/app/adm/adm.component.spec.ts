import { TestBed } from '@angular/core/testing';

import { AdmComponent } from './adm.component';

describe('Adm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AdmComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AdmComponent);
    expect(fixture.componentInstance instanceof AdmComponent).toBe(true, 'should create AdmComponent');
  });
});

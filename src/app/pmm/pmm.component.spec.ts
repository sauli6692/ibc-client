import { TestBed } from '@angular/core/testing';

import { PmmComponent } from './pmm.component';

describe('Pmm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [PmmComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(PmmComponent);
    expect(fixture.componentInstance instanceof PmmComponent).toBe(true, 'should create PmmComponent');
  });
});

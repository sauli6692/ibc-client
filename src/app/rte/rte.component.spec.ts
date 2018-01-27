import { TestBed } from '@angular/core/testing';

import { RteComponent } from './rte.component';

describe('Rte', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [RteComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(RteComponent);
    expect(fixture.componentInstance instanceof RteComponent).toBe(true, 'should create RteComponent');
  });
});

import { TestBed } from '@angular/core/testing';

import { CoreComponent } from './core.component';

describe('Core', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [CoreComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(CoreComponent);
    expect(fixture.componentInstance instanceof CoreComponent).toBe(true, 'should create CoreComponent');
  });
});

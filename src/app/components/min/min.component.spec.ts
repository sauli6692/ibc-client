import { TestBed } from '@angular/core/testing';

import { MinComponent } from './min.component';

describe('Min', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [MinComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(MinComponent);
    expect(fixture.componentInstance instanceof MinComponent).toBe(true, 'should create MinComponent');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUseExampleComponent } from './use-example.component';

describe('FormUseExampleComponent', () => {
  let component: FormUseExampleComponent;
  let fixture: ComponentFixture<FormUseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUseExampleComponent } from './table-use-example.component';

describe('TableUseExampleComponent', () => {
  let component: TableUseExampleComponent;
  let fixture: ComponentFixture<TableUseExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableUseExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableUseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

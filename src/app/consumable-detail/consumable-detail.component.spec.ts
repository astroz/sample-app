import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsumableDetailComponent} from './consumable-detail.component';

describe('ConsumableDetailComponent', () => {
  let component: ConsumableDetailComponent;
  let fixture: ComponentFixture<ConsumableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumableDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

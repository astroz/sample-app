import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsumableDetailComponent} from './consumable-detail.component';
import {ConsumablesComponent} from '../consumables/consumables.component';

describe('ConsumableDetailComponent', () => {
  let component: ConsumableDetailComponent;
  let fixture: ComponentFixture<ConsumableDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumableDetailComponent ],
      providers: [ ConsumablesComponent ]
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

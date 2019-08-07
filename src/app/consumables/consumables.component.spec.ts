import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConsumablesComponent} from './consumables.component';
import {ConsumableDetailComponent} from '../consumable-detail/consumable-detail.component';

describe('ConsumablesComponent', () => {
  let component: ConsumablesComponent;
  let fixture: ComponentFixture<ConsumablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumablesComponent, ConsumableDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

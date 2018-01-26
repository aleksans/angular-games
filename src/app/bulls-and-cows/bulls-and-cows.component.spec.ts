import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullsAndCowsComponent } from './bulls-and-cows.component';

describe('BullsAndCowsComponent', () => {
  let component: BullsAndCowsComponent;
  let fixture: ComponentFixture<BullsAndCowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullsAndCowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullsAndCowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

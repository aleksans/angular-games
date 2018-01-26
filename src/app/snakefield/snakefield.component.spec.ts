import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakefieldComponent } from './snakefield.component';

describe('SnakefieldComponent', () => {
  let component: SnakefieldComponent;
  let fixture: ComponentFixture<SnakefieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakefieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

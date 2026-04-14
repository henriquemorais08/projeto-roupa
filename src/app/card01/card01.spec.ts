import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card01 } from './card01';

describe('Card01', () => {
  let component: Card01;
  let fixture: ComponentFixture<Card01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card01],
    }).compileComponents();

    fixture = TestBed.createComponent(Card01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

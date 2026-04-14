import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card02 } from './card02';

describe('Card02', () => {
  let component: Card02;
  let fixture: ComponentFixture<Card02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card02],
    }).compileComponents();

    fixture = TestBed.createComponent(Card02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

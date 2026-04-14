import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card03 } from './card03';

describe('Card03', () => {
  let component: Card03;
  let fixture: ComponentFixture<Card03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card03],
    }).compileComponents();

    fixture = TestBed.createComponent(Card03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

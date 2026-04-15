import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card04 } from './card04';

describe('Card04', () => {
  let component: Card04;
  let fixture: ComponentFixture<Card04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card04],
    }).compileComponents();

    fixture = TestBed.createComponent(Card04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

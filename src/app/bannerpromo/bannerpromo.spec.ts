import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bannerpromo } from './bannerpromo';

describe('Bannerpromo', () => {
  let component: Bannerpromo;
  let fixture: ComponentFixture<Bannerpromo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bannerpromo],
    }).compileComponents();

    fixture = TestBed.createComponent(Bannerpromo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

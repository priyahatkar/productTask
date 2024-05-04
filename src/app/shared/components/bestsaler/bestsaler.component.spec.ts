import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsalerComponent } from './bestsaler.component';

describe('BestsalerComponent', () => {
  let component: BestsalerComponent;
  let fixture: ComponentFixture<BestsalerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsalerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestsalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

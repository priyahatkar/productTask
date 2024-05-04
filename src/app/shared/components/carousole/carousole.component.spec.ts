import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousoleComponent } from './carousole.component';

describe('CarousoleComponent', () => {
  let component: CarousoleComponent;
  let fixture: ComponentFixture<CarousoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarousoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarousoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

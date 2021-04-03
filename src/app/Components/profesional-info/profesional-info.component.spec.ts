import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalInfoComponent } from './profesional-info.component';

describe('ProfesionalInfoComponent', () => {
  let component: ProfesionalInfoComponent;
  let fixture: ComponentFixture<ProfesionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

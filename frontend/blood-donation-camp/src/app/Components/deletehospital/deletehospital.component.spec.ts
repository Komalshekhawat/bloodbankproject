import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehospitalComponent } from './deletehospital.component';

describe('DeletehospitalComponent', () => {
  let component: DeletehospitalComponent;
  let fixture: ComponentFixture<DeletehospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletehospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletehospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

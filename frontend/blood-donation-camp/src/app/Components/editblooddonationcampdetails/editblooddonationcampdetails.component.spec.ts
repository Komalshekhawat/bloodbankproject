import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditblooddonationcampdetailsComponent } from './editblooddonationcampdetails.component';

describe('EditblooddonationcampdetailsComponent', () => {
  let component: EditblooddonationcampdetailsComponent;
  let fixture: ComponentFixture<EditblooddonationcampdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditblooddonationcampdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditblooddonationcampdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteblooddonordetailsComponent } from './deleteblooddonordetails.component';

describe('DeleteblooddonordetailsComponent', () => {
  let component: DeleteblooddonordetailsComponent;
  let fixture: ComponentFixture<DeleteblooddonordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteblooddonordetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteblooddonordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

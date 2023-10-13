import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMernComponent } from './course-mern.component';

describe('CourseMernComponent', () => {
  let component: CourseMernComponent;
  let fixture: ComponentFixture<CourseMernComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMernComponent]
    });
    fixture = TestBed.createComponent(CourseMernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

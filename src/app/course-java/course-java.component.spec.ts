import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseJavaComponent } from './course-java.component';

describe('CourseJavaComponent', () => {
  let component: CourseJavaComponent;
  let fixture: ComponentFixture<CourseJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseJavaComponent]
    });
    fixture = TestBed.createComponent(CourseJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

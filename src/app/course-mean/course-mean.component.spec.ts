import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMeanComponent } from './course-mean.component';

describe('CourseMeanComponent', () => {
  let component: CourseMeanComponent;
  let fixture: ComponentFixture<CourseMeanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMeanComponent]
    });
    fixture = TestBed.createComponent(CourseMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

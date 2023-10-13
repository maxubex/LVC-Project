import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMevnComponent } from './course-mevn.component';

describe('CourseMevnComponent', () => {
  let component: CourseMevnComponent;
  let fixture: ComponentFixture<CourseMevnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMevnComponent]
    });
    fixture = TestBed.createComponent(CourseMevnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

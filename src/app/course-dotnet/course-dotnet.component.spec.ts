import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDotnetComponent } from './course-dotnet.component';

describe('CourseDotnetComponent', () => {
  let component: CourseDotnetComponent;
  let fixture: ComponentFixture<CourseDotnetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDotnetComponent]
    });
    fixture = TestBed.createComponent(CourseDotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

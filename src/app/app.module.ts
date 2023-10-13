import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseJavaComponent } from './course-java/course-java.component';
import { CourseDotnetComponent } from './course-dotnet/course-dotnet.component';
import { CourseMeanComponent } from './course-mean/course-mean.component';
import { CourseMernComponent } from './course-mern/course-mern.component';
import { CourseMevnComponent } from './course-mevn/course-mevn.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CourseComponent } from './course/course.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    RegistrationComponent,
    ContactUsComponent,
    CourseJavaComponent,
    CourseDotnetComponent,
    CourseMeanComponent,
    CourseMernComponent,
    CourseMevnComponent,
    GalleryComponent,
    CourseComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

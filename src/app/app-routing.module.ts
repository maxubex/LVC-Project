import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'courses', component: CoursesComponent },
  { path:'course-java', component: CourseJavaComponent },
  { path:'course-dotnet', component: CourseDotnetComponent },
  { path:'course-mean', component: CourseMeanComponent },
  { path:'course-mern', component: CourseMernComponent },
  { path:'course-mevn', component: CourseMevnComponent },
  { path:'registration', component: RegistrationComponent },
  { path:'users', component: UserComponent },
  { path:'gallery', component: GalleryComponent },
  { path:'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

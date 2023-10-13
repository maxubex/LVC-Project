import { Component } from '@angular/core';
import { ICourse } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses: ICourse[] = [
    {
      title: 'JAVA',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus justo, sed porttitor ipsum maximus a.',
      image: './assets/images/java.jpg',
      link: '/course-java'
    },
    {
      title: 'DOT NET',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus justo, sed porttitor ipsum maximus a.',
      image: './assets/images/dotnet.jpg',
      link: '/course-dotnet'
    },
    {
      title: 'MEAN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus justo, sed porttitor ipsum maximus a.',
      image: './assets/images/mean.png',
      link: '/course-mean'
    },
    {
      title: 'MERN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus justo, sed porttitor ipsum maximus a.',
      image: './assets/images/mern.png',
      link: '/course-mern'
    },
    {
      title: 'MEVN',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mollis lacus justo, sed porttitor ipsum maximus a.',
      image: './assets/images/mevn.png',
      link: '/course-mevn'
    }
  ]
  
}

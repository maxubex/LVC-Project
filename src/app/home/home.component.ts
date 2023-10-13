import { Component } from '@angular/core';
import { ICourse } from '../course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  courses: ICourse[] = [
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

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  // Reactive Form
  regForm!: FormGroup;
    constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.regForm = this.fb.group({
       name: ['', Validators.required ],
       designation: ['', Validators.required ],
       address: ['', Validators.required ],
       email: ['', Validators.required ]
    });
  }
  
}

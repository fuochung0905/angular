import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData :any= {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  };
  
  constructor(private router:Router,private auth: AuthService) {
  
  }
onSubmit() {
  this.auth.register(this.formData).subscribe(response => {
    console.log('Response:', response);
  }, error => {
    console.error('Error:', error);
  });
}
}


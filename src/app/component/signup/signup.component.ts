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
    password: ''
  };
  
  constructor(private router:Router,private auth: AuthService) {
  
  }
onSubmit() {
  this.auth.register(this.formData).subscribe(response => {
  this.router.navigateByUrl('login');
  }, error => {
    console.error('Error:', error);
  });
}
}



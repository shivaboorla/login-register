import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email = '';
  password = '';
  username = '';
  gender = '';
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router) {

  }

  // registerform = this.formBuilder.group({
  //   id: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
  //   name: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
  //   email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
  //   gender: new FormControl(''),
  //   role: new FormControl(''),
  //   isactive: new FormControl(false),
  // });

  registrationForm() {
    if (this.username == '') {
      this.toastr.warning("Enter your username");
      return;
    }
    if (this.email == '') {
      this.toastr.warning("Enter your email");
      return;
    }
    if (this.password == '') {
      this.toastr.warning("Enter your password");
      return;
    }
    // if (this.gender == '') {
    //   this.toastr.warning("Select Male/Female");
    //   return;
    // }
    this.service.register(this.email, this.password);
    this.email = '';
    this.password = '';
    this.username = '';
    // this.gender = '';
    //   if (this.registerform.valid) {
    //     this.service.postRegister(this.registerform.value).subscribe(res => {
    //       this.toastr.success('Registration Succesfully');
    //       // this.toastr.success('Please contact admin for enable access', 'Registered Succesfully');
    //       this.router.navigate(['login']);
    //     })
    //   } else {
    //     this.toastr.warning('Please enter valid data');
    //   }
  }

}

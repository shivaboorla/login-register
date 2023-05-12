import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router) {

  }

  registerform = this.formBuilder.group({
    id: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.formBuilder.control('male'),
    role: this.formBuilder.control(''),
    isactive: this.formBuilder.control(false),
  });

  registrationForm() {
    if (this.registerform.valid) {
      this.service.postRegister(this.registerform.value).subscribe(res => {
        // this.toastr.success('Registered Succesfully')
        this.toastr.success('Please contact admin for enable access', 'Registered Succesfully');
        this.router.navigate(['login']);
      })
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }

}

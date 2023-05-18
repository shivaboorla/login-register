import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router) {
    sessionStorage.clear();
  }
  // userdata: any;

  // loginform = this.formBuilder.group({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),

  // });

  loginSubmitForm() {
    if (this.email == '') {
      this.toastr.warning("Enter your email");
      return;
    }
    if (this.password == '') {
      this.toastr.warning("Enter your password");
      return;
    }
    this.service.login(this.email, this.password);
    this.email = '';
    this.password = '';
    // if (this.loginform.valid) {
    //   this.service.fetchData(this.loginform.value.username).subscribe(res => {
    //     this.userdata = res;
    //     console.log(this.userdata);

    //     if (this.userdata.password === this.loginform.value.password) {
    //       if (this.userdata.isactive) {
    //         sessionStorage.setItem('username', this.userdata.id);
    //         sessionStorage.setItem('userrole', this.userdata.role);
    //         this.router.navigate(['']);
    //       } else {
    //         this.toastr.error('In active User');
    //       }
    //     } else {
    //       this.toastr.error('Invalid Credentials');
    //     }
    //   })
    // } else {
    //   this.toastr.error('Enter Valid Details')
    // }
  }

}

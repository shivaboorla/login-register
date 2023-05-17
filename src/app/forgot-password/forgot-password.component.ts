import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email = '';
  constructor(private service: AuthService, private toastr: ToastrService) {

  }

  sendLink() {
    this.service.forgotpassword(this.email);
    this.toastr.success("we have sent link to your email id. please verify and then login");
    this.email = '';
  }

}

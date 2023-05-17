import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private fireauth: AngularFireAuth,
    private toastr: ToastrService, private router: Router) { }

  apiUrl = ' http://localhost:3000/user';

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then((res) => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }, err => {
      this.toastr.error('something went wrong!!');
      this.router.navigate(['/login']);
    }
    )
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then((res) => {
      this.toastr.success('Registration Successfull!!');
      this.router.navigate(['/login'])
    }, err => {
      this.toastr.error(err.message);
      this.router.navigate(['/login'])
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }, err => {
      this.toastr.warning(err.message);
    })
  }

  forgotpassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/login'])
    }, err => {
      this.toastr.warning('enter email id');
    })

  }

  getAll() {
    return this.http.get(this.apiUrl);
  }
  fetchData(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }
  postRegister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata)
  }
  updateUser(code: any, inputdata: any) {
    return this.http.put(this.apiUrl + '/' + code, inputdata)
  }
}

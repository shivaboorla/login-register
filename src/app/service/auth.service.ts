import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = ' http://localhost:3000/user';

  getAll() {
    return this.http.get(this.apiUrl);
  }
  fetchCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }
  postRegister(inputdata: any) {
    return this.http.post(this.apiUrl, inputdata)
  }
  updateUser(code: any, inputdata: any) {
    return this.http.put(this.apiUrl + '/' + code, inputdata)
  }
}

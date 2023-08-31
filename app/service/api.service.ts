import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../interface/login.interface';
import { ResponseI } from '../interface/response.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private myAppUrl: string;



  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;

  }

  signIn(ResponseI: ResponseI): Observable<any> {
    return this.http.post(`${this.myAppUrl}`, ResponseI);
  }

  login(LoginI: LoginI) {
    return this.http.post(`${this.myAppUrl}login`, LoginI, { withCredentials: true });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {


  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://wo-fifa.azurewebsites.net/');
  }
// public get(url:string){
//   return this.http.get(url)
// }


  // getAllData(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/endpoint`);
  // }

  // Agrega más métodos para las operaciones CRUD (create, update, delete)
}

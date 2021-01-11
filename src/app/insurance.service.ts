import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './appmodel/user';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }
  
  registerUser(user: User) : Observable<any> {
    let url = "http://localhost:8080/spring-rest-mvc/api/register";
    return this.http.post(url, user);   
  }
}
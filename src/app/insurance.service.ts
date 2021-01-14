import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminLogin } from './appmodel/adminLogin';
import { Estimate } from './appmodel/estimate';
import { Login } from './appmodel/login';
import { User } from './appmodel/user';
import { Vehicle } from './appmodel/vehicle';
import { Claim } from './appmodel/claim';
import { VehicleModel } from './appmodel/vehicleModel';
import { InsuranceClaim } from './appmodel/insuranceClaim';
import { ValidateClaim } from './appmodel/validate-claim';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<any> {
    let url = "http://localhost:8181/register";
    return this.http.post(url, user);
  }

  login(login: Login): Observable<any> {
    let url = "http://localhost:8181/login";
    return this.http.post(url, login);
  }

  fetchVehicleModels(): Observable<VehicleModel[]> {
    let url = "http://localhost:8181/fetchVehicleModel";
    return this.http.get<VehicleModel[]>(url);
  }

  fetchPremiums(vehicle: Vehicle): Observable<Estimate[]> {
    let url = "http://localhost:8181/get-estimates";
    return this.http.post<Estimate[]>(url, vehicle);
  }

  adminlogin(adminLogin: adminLogin) : Observable<any>{
    let url = "http://localhost:8181/adminlogin";
    return this.http.post(url, adminLogin);  
  }

  registerVehicle(vehicle: Vehicle) :Observable<any> {
    console.log("registerVehicle working!");
    let url = "http://localhost:8181/register-vehicle";
    return this.http.post(url, vehicle);
  }

  claim(claim: Claim) : Observable<any>{
    let url = "http://localhost:8181/claim";
    return this.http.post(url, claim);  
  }

  fetchAllClaims(): Observable<InsuranceClaim[]> {
    let url = "http://localhost:8181//validate";
    return this.http.get<InsuranceClaim[]>(url);
  }

  validateClaim(validateClaim: ValidateClaim): Observable<any> {
    let url = "http://localhost:8181//validate-claim";
    return this.http.post(url, validateClaim);
  }

  denyClaim(validateClaim: ValidateClaim): Observable<any> {
    let url = "http://localhost:8181//deny-claim";
    return this.http.post(url, validateClaim);
  }
}

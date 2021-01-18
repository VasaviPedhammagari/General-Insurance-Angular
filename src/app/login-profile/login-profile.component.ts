import { Component, OnInit } from '@angular/core';
import { MotorInsurance } from '../appmodel/motorInsurance';
import { InsuranceClaim } from '../appmodel/insuranceClaim';
import { User } from '../appmodel/user';
import { InsuranceService } from '../insurance.service';

@Component({
  selector: 'app-login-profile',
  templateUrl: './login-profile.component.html',
  styleUrls: ['./login-profile.component.css']
})
export class LoginProfileComponent implements OnInit {

  constructor(private insuranceService: InsuranceService) { }

  policyNumber:number;
  userId : number;
  userName : string;
  motorInsuranceList : MotorInsurance[];
  //policyNumberList : Array<number>;
  length1:number;
  length2:number;
  claimNumber : number;
  insuranceClaimList : InsuranceClaim[];
  claimNumberList : Array<number>;
  policyNumberList : number[];
  user: User;

  ngOnInit(): void {
    this.userId = parseInt(sessionStorage.getItem('userId') || '{}');
    this.userName = sessionStorage.getItem('userName') || '{}';
    this.insuranceService.insuranceDetails(this.userId).subscribe(response => {
      this.motorInsuranceList = response;
      var sortedArray: MotorInsurance[] = this.motorInsuranceList.sort((obj1, obj2) => {​​
        if (obj1.policyNumber < obj2.policyNumber) {​​
            return 1;
        }​​
        if (obj1.policyNumber > obj2.policyNumber) {​​
            return -1;
        }​​
        return 0;
     }​​);
      this.length1 = this.motorInsuranceList.length;
      this.policyNumberList = new Array<number>(this.motorInsuranceList.length);
      for(var i =0; i < this.length1;i++){
        console.log(JSON.stringify(this.motorInsuranceList[i]));
        this.insuranceService.claimDetails(parseInt(this.motorInsuranceList[i].policyNumber)).subscribe(response => {
          this.insuranceClaimList = response;
          this.claimNumberList = new Array<number>(this.insuranceClaimList.length);
        })
        this.policyNumberList[i]=parseInt(this.motorInsuranceList[i].policyNumber);
        this.user = this.motorInsuranceList[i].user;
      }
      console.log(JSON.stringify(this.user));
      sessionStorage.setItem('policyNumbers',JSON.stringify(this.policyNumberList));
      sessionStorage.setItem('email',this.user.email);
      sessionStorage.setItem('mobileNumber',String(this.user.phoneNo));
      sessionStorage.setItem('userDetails', JSON.stringify(this.user));
      console.log(JSON.stringify(this.policyNumberList));
    })
  }

}

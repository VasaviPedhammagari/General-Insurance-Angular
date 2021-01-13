import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PremiumCalulatorComponent } from './premium-calulator/premium-calulator.component';
import { ShowPlansComponent } from './show-plans/show-plans.component';
import { InsurancePlanComponent } from './insurance-plan/insurance-plan.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'vehicle-registration', component: VehicleComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'premium-calculate', component: PremiumCalulatorComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'show-plans', component: ShowPlansComponent },
  { path: 'choose-plan', component: InsurancePlanComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment-summary', component: PaymentSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, VehicleComponent, LoginComponent, InsurancePlanComponent, PaymentComponent,
  ResetPasswordComponent, ForgotPasswordComponent, PaymentSummaryComponent]

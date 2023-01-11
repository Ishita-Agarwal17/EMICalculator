import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [{
  path: '', redirectTo:"loan", pathMatch: "full",
},
{
  path: 'loan' , component: LoanComponent,
},
{ path:'**', redirectTo:'loan', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

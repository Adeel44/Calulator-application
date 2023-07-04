import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'cal', loadChildren: () => import('./calculator/calculator.module').then(mod => mod.CalculatorModule) },
  { path: '', redirectTo: 'cal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

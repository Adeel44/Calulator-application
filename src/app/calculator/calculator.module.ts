import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { ContainerComponent } from './container/container.component';
import { DisplayComponent } from './display/display.component';
import { ButtonsComponent } from './button-container/buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { OperatorContainerComponent } from './operator-container/operator-container.component';
import { OperatorsComponent } from './operator-container/operators/operators.component';


console.log("calculator module")

@NgModule({
  declarations: [
    ContainerComponent,
    DisplayComponent,
    ButtonsComponent,
    ButtonContainerComponent,
    OperatorContainerComponent,
    OperatorsComponent,
    
  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    
    
  ]
})
export class CalculatorModule { }

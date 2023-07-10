import { Component } from '@angular/core';
import { ButtonInput, CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {


  screenValue = "";
  result:any;


  constructor(public calcultorService: CalculatorService) {

  }
  childData(event: any) {

    debugger
  

    this.screenValue = this.calcultorService.screenValue
    let operator = this.screenValue[this.screenValue.length - 2];

    const PrevKey = this.screenValue[this.screenValue.length - 1];

    if (PrevKey === '*' && event.label=== '-') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }

     // if last char of display is / || * || - + return nothing 

    // if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' ) {
    //   return
    // }

    if (PrevKey === '+'  && event.label !== '=' ) {
      return
    }
    if (PrevKey === '-'   && event.label !== '='  ) {
      return
    }
    if (PrevKey === '*'   && event.label !== '='  ) {
      return
    }
    if (PrevKey === '/'   && event.label !== '=' ) {
      return
    }


     // conditons  after . can not enter opertor 
    if (operator === '-' && PrevKey == '.') {
      return
    }
    if (operator === '+' && PrevKey == '.') {
      return
    }
    if (operator === '*' && PrevKey == '.') {
      return
    }
    if (operator === '/' && PrevKey == '.') {
      return
    }

    if (event.label === '+'  && PrevKey == '.') {
      // deleting the last char dot from string 
      let screenValue = this.screenValue.slice(0, -1);
      this.screenValue = screenValue
    }
    if (event.label === '-'  && PrevKey == '.') {
      // deleting the last char dot from string 
      let screenValue = this.screenValue.slice(0, -1);
      this.screenValue = screenValue
    }

    if (event.label === '*'  && PrevKey == '.') {
      // deleting the last char dot from string 
      let screenValue = this.screenValue.slice(0, -1);
      this.screenValue = screenValue
    }
    if (event.label === '/'  && PrevKey == '.') {
      // deleting the last char dot from string 
      let screenValue = this.screenValue.slice(0, -1);
      this.screenValue = screenValue
    }

    if (event.type == 'operator') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }

    if (event.label === '=' && event.type === 'operator' ) {
  
      this.screenValue = this.calcultorService.screenValue;
      try {   
        this. result = (eval(this.screenValue))
        let result = (eval(this.screenValue))
        this.screenValue = result
        if (result === undefined) {
          this.screenValue = ""
        }

      } catch (error) {
        alert('Invalid opertor error');
      }

    }

  }
  
  onButtonClick(event: ButtonInput) {

    const PrevKey = this.screenValue[this.screenValue.length - 1];
    const opkey= this.screenValue[this.screenValue.length - 2];
    if (PrevKey == '0' && opkey === '+' && event.type == 'number'&& event.label!= '.'){
      let screenValue=this.screenValue.slice(0, -1);
      screenValue= screenValue+ event.label.toString()
       //deleting last char from string 
      this.screenValue= screenValue.slice(0, -1);
    }

    if (PrevKey == '0'&& opkey === '*'&& event.type == 'number' && event.label!= '.'){
      let screenValue=this.screenValue.slice(0, -1);
      screenValue= screenValue+ event.label.toString()
      //deleting last char from string 
      this.screenValue= screenValue.slice(0, -1);

    }

    if (PrevKey == '0'&& opkey === '/'&& event.type == 'number' && event.label!= '.'){
      let screenValue=this.screenValue.slice(0, -1);
      screenValue= screenValue+ event.label.toString()
      //deleting last char from string 
      this.screenValue= screenValue.slice(0, -1);

    }

    if (PrevKey == '0'&& opkey === '-'&& event.type == 'number' && event.label!= '.'){
      let screenValue=this.screenValue.slice(0, -1);
      screenValue= screenValue+ event.label.toString()
      //deleting last char from string 
      this.screenValue= screenValue.slice(0, -1);

    }

    // conditon for 0 not in the start 

    if (this.screenValue == '0'&& this.screenValue.length === 1 && event.label!== '.'){
      this.screenValue = ''
    }
    

    if (event.type == 'number'&& this.screenValue=== this.result){
      this.screenValue=""
    }
    
    if (event.type == 'number') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }

    if (event.label === 'C' && this.screenValue) {

      this.screenValue = ""
    }
    
  }
}

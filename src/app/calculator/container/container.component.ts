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
    console.log("event is "+event)

    if (event.type == 'operator') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }


    if (event.label == '=') {
     

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
   

    if (event.type == 'number'&& this.screenValue=== this.result) {
      this.screenValue=""
    }

    if (event.type == 'number') {
      let screenValue = event.label
      screenValue = screenValue.toString()
      this.screenValue += screenValue;
    }

    if (event.label === 'C') {

      this.screenValue = ""
    }
    


  }


}

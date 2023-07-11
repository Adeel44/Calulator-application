import { Component, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonInput, CalculatorService } from '../../services/calculator.service';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {

  screenValue!: string;
  result = "";


  constructor(public calcultorService: CalculatorService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("changes")
  }

  @Output() childEvent = new EventEmitter();

  //pass data  from operator component to parent operator-cantainer component through button click functions
  calculateValue(data: ButtonInput) {

    this.childEvent.emit(data);
  }

  handleOnClickPlus(data: ButtonInput) {
    this.screenValue = this.calcultorService.screenValue
    //condition * not in start
    if (data.label == '+' && this.screenValue.length < 1) {
      return
    }
    this.childEvent.emit(data);

  }

  handleOnClickMinus(data: ButtonInput) {
    this.childEvent.emit(data);
  }

  handleOnClickMulti(data: ButtonInput) {

    this.screenValue = this.calcultorService.screenValue
    //condition * not in start
    if (data.label == '*' && this.screenValue.length < 1) {
      return
    }
    this.childEvent.emit(data);
  }

  handleOnClickDivide(data: ButtonInput) {
    //  debugger
    this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    //condition / not in start
    if (data.label == '/' && this.screenValue.length < 1) {
      return
    }
    this.childEvent.emit(data);

  }

}

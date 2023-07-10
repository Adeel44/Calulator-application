import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonInput, CalculatorService } from '../../services/calculator.service';



@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  screenValue = ""

  @Output() childEvent = new EventEmitter<ButtonInput>();
  //  @Output() childEvent = new EventEmitter();

  constructor(public calcultorService: CalculatorService) {
  }

  //pass data object from button component to parent button cantainer component through button click functions

  handleOnClick(event: ButtonInput) {
    this.childEvent.emit(event)
  }

  handleOnClick5(data: ButtonInput) {

    this.childEvent.emit(data)
  }
  handleOnClick6(data: ButtonInput) {

    this.childEvent.emit(data)
  }

  handleOnClick7(data: ButtonInput) {
    this.childEvent.emit(data)

  }
  handleOnClick8(data: ButtonInput) {

    this.childEvent.emit(data)
  }
  handleOnClick9(data: ButtonInput) {

    this.childEvent.emit(data)
  }
  handleOnClick1(data: ButtonInput) {

    this.childEvent.emit(data)
  }
  handleOnClick2(data: ButtonInput) {


    this.childEvent.emit(data)

  }
  handleOnClick3(data: ButtonInput) {

    this.childEvent.emit(data)

  }
  handleOnClick0(data: ButtonInput) {
    //debugger
    this.screenValue = this.calcultorService.screenValue
    let res = this.screenValue.toString().slice(-1);
    console.log(res)

    const PrevKey = this.screenValue[this.screenValue.length - 2];
    if (PrevKey === '*' && res === "0") {
      return

    }
    if (PrevKey === '+' && res === "0") {
      return

    }
    if (PrevKey === '/' && res === "0") {
      return

    }
    if (PrevKey === '-' && res === "0") {
      return

    }

    let checks = this.calcultorService.screenValue
    // condition for cannot put 0 in start 
    if (checks == '0' && checks.length === 1) {
      return
    } else {
      this.childEvent.emit(data)
    }

  }
  handleOnClear(data: ButtonInput) {

    this.childEvent.emit(data)

  }

  onClickdot(data: ButtonInput) {
    //debugger
    // condition for . 
    if (data.label == '.' && data.type == 'number') {
      const lastNum = this.getLastOperand()
      console.log("LAst index of .:" + lastNum.lastIndexOf("."))

      if (lastNum.lastIndexOf(".") >= 0) {
        return
      }

    }
    this.childEvent.emit(data)
  }

  getLastOperand() {

    this.screenValue = this.calcultorService.screenValue
    let pos: number;
    console.log(this.screenValue)
    pos = this.screenValue.toString().lastIndexOf("+")

    if (this.screenValue.toString().lastIndexOf("-") > pos) pos = this.screenValue.toString().lastIndexOf("-")
    if (this.screenValue.toString().lastIndexOf("*") > pos) pos = this.screenValue.toString().lastIndexOf("*")
    if (this.screenValue.toString().lastIndexOf("/") > pos) pos = this.screenValue.toString().lastIndexOf("/")

    console.log('Last ' + this.screenValue.toString().substr(pos + 1))
    return this.screenValue.toString().substr(pos + 1)
  }

}

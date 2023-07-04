import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ButtonInput, CalculatorService } from '../../services/calculator.service';


@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {

  screenValue!: string;
  result="";


  constructor(public calcultorService: CalculatorService) {

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("changes")
  }
  

  @Input() metadataplus!: ButtonInput;
  @Input() metadataminus!: ButtonInput;
  @Input() metadatamulty!: ButtonInput;
  @Input() metadatadivide!: ButtonInput;
  @Input() metadatacalculate!: ButtonInput;


  @Output() childEvent = new EventEmitter();



  calculateValue(){
  
      this.childEvent.emit(this.metadatacalculate);
      
      
    }

    handleOnClickPlus(){
    this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      // let current = this.calcultorService.screenValue;
      // this.childEvent.emit(current);
      return
    }
    else {
      this.childEvent.emit(this.metadataplus);

    }


    }
    handleOnClickMinus(){
      this.screenValue = this.calcultorService.screenValue
    const PrevKey = this.screenValue[this.screenValue.length - 1];
    if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
      // let current = this.calcultorService.screenValue;
      // this.childEvent.emit(current);
      return
    }
    else {
      this.childEvent.emit(this.metadataminus);

    }

    }

    handleOnClickMulti(){
     
      this.screenValue = this.calcultorService.screenValue
      const PrevKey = this.screenValue[this.screenValue.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
        return
      }
      else {
        this.childEvent.emit(this.metadatamulty);
  
      }

    }
    handleOnClickDivide(){
      this.screenValue = this.calcultorService.screenValue
      const PrevKey = this.screenValue[this.screenValue.length - 1];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '.') {
        // let current = this.calcultorService.screenValue;
        // this.childEvent.emit(current);
        return
      }
      else {
        this.childEvent.emit(this.metadatadivide);
  
      }

    }

}

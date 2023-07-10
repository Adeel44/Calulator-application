import { Component , Output ,EventEmitter, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit  ,OnChanges{

  
   screenValue = "";
   @Input()currentScreenValue:any;
   
   constructor(private calcultorService:CalculatorService){

   }

   ngOnChanges(changes: SimpleChanges): void {
    
    this.screenValue = this.currentScreenValue
    console.log("S"+this.screenValue)

    this.calcultorService.screenValue = this.screenValue;
    console.log("crrentvlue"+this.screenValue)
     
   }

   ngOnInit(): void {

     // passing data from child to child through service

      this.calcultorService.screenValue = this.screenValue;
      console.log("cr"+this.screenValue)

   }


   














  













}

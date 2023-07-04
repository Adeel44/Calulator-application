import { Component ,Output,EventEmitter } from '@angular/core';
import { ButtonInput } from '../services/calculator.service';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent {
  
  

  @Output() childEvent = new EventEmitter<ButtonInput>();


  onButtonClick(event:ButtonInput){
   
    //this.childEvent.emit(this.metadata)
    this.childEvent.emit(event)

  }





}

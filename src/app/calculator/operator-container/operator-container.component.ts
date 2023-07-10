import { Component ,Output ,EventEmitter} from '@angular/core';
import { ButtonInput } from '../services/calculator.service';

@Component({
  selector: 'app-operator-container',
  templateUrl: './operator-container.component.html',
  styleUrls: ['./operator-container.component.css']
})
export class OperatorContainerComponent {
  //metadata!:ButtonInput
  
  @Output() childEvent = new EventEmitter<ButtonInput>();

  //passing event object from opertor cantainer  to parent  cantainer component through Output 

  onButtonClick(event:ButtonInput){
    
    this.childEvent.emit(event)

  }

}

import { Component ,Output ,EventEmitter} from '@angular/core';
import { ButtonInput } from '../services/calculator.service';

@Component({
  selector: 'app-operator-container',
  templateUrl: './operator-container.component.html',
  styleUrls: ['./operator-container.component.css']
})
export class OperatorContainerComponent {
  metadata!:ButtonInput
  
  @Output() childEvent = new EventEmitter<ButtonInput>();

  onButtonClick(event:ButtonInput){
    console.log(event)
    this.metadata= event;
    this.childEvent.emit(this.metadata)

  }

}

import { Injectable } from '@angular/core';


export interface ButtonInput
{
  type: string, 
  label: string|number
}

@Injectable({
  providedIn: 'root'
})


export class CalculatorService {

  constructor() { }

  public screenValue!:string;


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'tda-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

 // testarr: = ["text", "button", "checkbox"] 

  @Input({ required: true }) type = '';

}

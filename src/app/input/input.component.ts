import { Component, Input } from '@angular/core';

let index = 0;

@Component({
  selector: 'tda-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input({ required: true }) label!: string;
  @Input() id = `input-text-${index++}`;

}

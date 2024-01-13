import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

let index = 0;

@Component({
  selector: 'tda-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input({ required: true }) label!: string;
  @Input() id = `input-text-${index++}`;
  @Input() control = new FormControl();

}

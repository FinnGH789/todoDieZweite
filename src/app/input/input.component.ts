import { Component, HostListener, Injector, Input, OnInit, forwardRef, inject } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControlDirective, FormControlName, FormGroupDirective, NG_VALUE_ACCESSOR, NgControl, NgModel, ReactiveFormsModule } from '@angular/forms';

let index = 0;

@Component({
  selector: 'tda-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
      {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => InputComponent),
       multi: true,
      },
     ],
    })
    export class InputComponent implements ControlValueAccessor, OnInit {
      
      @Input({ required: true }) label!: string;
      @Input() id = `input-text-${index++}`;
      
       protected control!: AbstractControl;
       protected disabled = false;
       protected value?: string;
      
       private injector = inject(Injector);
      private onChangeFn: OnChangeFn = () => {};
       private onTouchedFn: OnTouchedFn = () => {};
      
       ngOnInit(): void {
      const ngControl = this.injector.get(NgControl);
     if (ngControl instanceof FormControlName) {
       this.control = this.injector
     .get(FormGroupDirective)
       .getControl(ngControl);
       } else if (ngControl instanceof FormControlDirective) {
       this.control = (ngControl as FormControlDirective)
       .form as AbstractControl;
     } else {
       this.control = (ngControl as NgModel).control;
      }
       }
      
       writeValue(value: string): void {
        this.value = value ?? '';
       }
      
       registerOnChange(onChangeFn: OnChangeFn): void {
        this.onChangeFn = onChangeFn;
       }
      
       registerOnTouched(onTouchedFn: OnTouchedFn): void {
        this.onTouchedFn = onTouchedFn;
       }
      
       setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
       }
      
       @HostListener('input', ['$event.target.value'])
       protected handleInputEvent(value: string) {
        if (this.disabled) {
        return;
        }
        this.value = value;
        this.onChangeFn(value);
       }
      
       @HostListener('focusout')
       protected handleFocusoutEvent() {
        if (this.disabled) {
        return;
        }
        this.onTouchedFn();
       }
      }
      
      type OnChangeFn = (value: string) => void;
      type OnTouchedFn = () => void;
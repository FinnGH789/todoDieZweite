import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './ToDo/form/form.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnalyticsComponent } from './ToDo/analytics/analytics.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,AnalyticsComponent , RouterOutlet, FormComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TodoSteroid';
}

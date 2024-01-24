import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTodoComponent } from './summary-todo.component';

describe('SummaryTodoComponent', () => {
  let component: SummaryTodoComponent;
  let fixture: ComponentFixture<SummaryTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

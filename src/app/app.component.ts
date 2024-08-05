import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator-app';
  display: string = '';
  currentNumber: string = '';
  previousNumber: string = '';
  operator: string = '';

  numClick(num: number) {
    this.currentNumber += num;
    this.display = this.currentNumber;
  }

  oper(op: string) {
    if (this.currentNumber === '') return;

    if (this.previousNumber !== '') {
      this.calculate();
    }

    this.operator = op;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  calculate() {
    let result: number;

    const prev = parseFloat(this.previousNumber);
    const curr = parseFloat(this.currentNumber);

    switch (this.operator) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case 'x':
        result = prev * curr;
        break;
      case '/':
        result = prev / curr;
        break;
      default:
        return;
    }

    this.currentNumber = result.toString();
    this.display = this.currentNumber;
    this.operator = '';
    this.previousNumber = '';
  }

  clear() {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operator = '';
    this.display = '';
  }
}

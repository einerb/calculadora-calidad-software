import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public buttonsOperation = [
    7,
    8,
    9,
    '/',
    4,
    5,
    6,
    '*',
    1,
    2,
    3,
    '-',
    0,
    '.',
    '=',
    '+',
  ];
  public numbersOne: string = '';
  public numbersTwo: string = '';
  public results: number = 0;
  public numberShow: string = '';
  public active: boolean = false;
  public sign: string = '';

  constructor() {}

  ngOnInit() {}

  public operation($event: any) {
    if (typeof $event === 'number' || $event === '.') {
      this.numberShow = this.numberShow + $event.toString();
      this.numbersOne = this.numbersOne + $event.toString();
      if (this.active) {
        this.numbersTwo = this.numbersTwo + $event.toString();
      }
    } else {
      if ($event !== '=') this.sign = $event;
      var n1 = 0;
      var n2 = 0;
      n1 = +this.numbersOne;
      n2 = +this.numbersTwo;

      switch ($event) {
        case '+':
          this.results = n1;
          this.active = true;
          this.numberShow = '';
          break;
        case '-':
          this.results = n1;
          this.active = true;
          this.numberShow = '';
          break;
        case '*':
          this.results = n1;
          this.active = true;
          this.numberShow = '';
          break;
        case '/':
          this.results = n1;
          this.active = true;
          this.numberShow = '';
          break;
        default:
          if (this.results === 0 || isNaN(n2)) {
            Swal.fire(
              'Error',
              'No hay valores para hacer la operación',
              'error'
            );
          } else {
            if (this.sign === '+') {
              this.results = this.results + n2;
            } else if (this.sign === '-') {
              this.results = this.results - n2;
            } else if (this.sign === '*') {
              this.results = this.results * n2;
            } else {
              this.results = this.results / n2;
            }

            this.numberShow = this.results.toString();

            this.clear();
            this.active = false;
          }
          break;
      }
    }
  }

  public notShow() {
    this.numberShow = '';
    this.clear();
  }

  private clear() {
    this.results = 0;
    this.numbersOne = '';
    this.numbersTwo = '';
  }
}

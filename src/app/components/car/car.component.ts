import {Component, Input, OnInit} from '@angular/core';

export type CarType = 'employee' | 'manager';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  @Input() type: CarType = 'employee';

  ngOnInit() {
  }

  getStyle(): object {
    switch ( this.type ) {
      case 'manager' : return { fill: 'red'};
      default: return { fill: 'black'};
    }
  }
}


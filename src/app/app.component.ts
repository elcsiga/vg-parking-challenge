import {Component} from '@angular/core';
import {CarType} from './components/car/car.component';

export interface Car {
  id: number;
  type: CarType;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  queue: Car[] = [];
  parkings: Car[][] = [[], [], []];

  constructor() {
    this.fillqueue();

    setInterval(() => {
      this.park(0);
    }, 2000);
  }

  fillqueue() {
    this.queue.push({id : 1, type: 'employee'});
    this.queue.push({id : 2, type: 'manager'});
    this.queue.push({id : 3, type: 'employee'});
    this.queue.push({id : 4, type: 'employee'});
    this.queue.push({id : 5, type: 'manager'});
    this.queue.push({id : 6, type: 'employee'});
  }

  park( slot: number ) {
    const car =  this.queue.pop();
    if (car) {
      this.parkings[slot].push(car);
    }


  }
}

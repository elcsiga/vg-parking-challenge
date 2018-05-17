import {Component, Input, OnInit} from '@angular/core';
import {carSize} from '../../common';

@Component({
  selector: 'app-street',
  templateUrl: './street.component.html',
  styleUrls: ['./street.component.css']
})
export class StreetComponent implements OnInit {

  @Input() pos : {x: number; y: number} = {x:1, y:1};
  @Input() size : {w: number; h: number} = {w:10, h:3};
  constructor() { }

  ngOnInit() {
  }

  getPos(): object {
    return {
      left: this.pos.x * carSize + 'px',
      top: this.pos.y * carSize + 'px'
    }
  }
}

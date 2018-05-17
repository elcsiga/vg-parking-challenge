import {Component, Input, OnInit} from '@angular/core';
import {carSize} from '../../common';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() pos : {x: number; y: number} = {x:1, y:1};
  @Input() size : {w: number; h: number} = {w:10, h:3};
  constructor() { }

  ngOnInit() {
  }

  getPos(): object {
    const border = 10;
    return {
      left: this.pos.x * carSize - border + 'px',
      top: this.pos.y * carSize - border + 'px',
      width: this.size.w * carSize + 'px',
      height: this.size.h * carSize + 'px'
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss']
})
export class PlayGroundComponent implements OnInit {

  color: string;
  colorName: string;

  constructor() { }
  onSwitchItem(param) {
    param == 'a' ? this.colorName = 'primary' : (param == 'b' ? this.colorName = 'secondary' : (param == 'c' ? this.colorName = 'success' : (param == 'd' ? this.colorName = 'danger' : this.colorName = 'warning')))

  }
  ngOnInit() {
    
  }

}

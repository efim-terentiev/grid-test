import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../grid/grid.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private grid: GridComponent
  ) { }

  ngOnInit() {
    console.log(this.grid);
  }

  public toggle() {
    this.grid.enabled = !this.grid.enabled;
  }

}

import { Component, OnInit } from '@angular/core';
import { drivers } from '../drivers';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  drivers = drivers;
  constructor() { }

  ngOnInit() {
  }

  createItem() {

  }

  deleteItem() {

  }

}

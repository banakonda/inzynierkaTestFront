import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tables',
  templateUrl: './time-tables.component.html',
  styleUrls: ['./time-tables.component.scss']
})
export class TimeTablesComponent implements OnInit {
  buttons = ["Informatyka", "Matematyka", "Fizyka"];
  selected = this.buttons[0];

  constructor() { }

  ngOnInit(): void {
  }

}

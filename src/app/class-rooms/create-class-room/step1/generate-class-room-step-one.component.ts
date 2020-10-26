import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ClassRoom } from 'src/app/data/models/ClassRoom';

@Component({
  selector: 'app-generate-class-room-step-one',
  templateUrl: './generate-class-room-step-one.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class GenerateClassRoomStepOneComponent implements OnInit {
  @Input() newClassRoom: ClassRoom;
  constructor() { }

  ngOnInit(): void {
  }

}

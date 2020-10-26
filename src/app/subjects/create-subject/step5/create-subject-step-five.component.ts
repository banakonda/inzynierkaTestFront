import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'src/app/data/models/Subject';


@Component({
  selector: 'app-create-subject-step-five',
  templateUrl: './create-subject-step-five.component.html',
})
export class CreateSubjectStepFiveComponent implements OnInit {
  @Input() newSubject: Subject;
  constructor() { }

  ngOnInit(): void {
  }

}

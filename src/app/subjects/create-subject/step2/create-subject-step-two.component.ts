import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { StudyFieldAPI } from 'src/app/data/models/Field';
import { Subject } from 'src/app/data/models/Subject';
import { StudyFieldsService } from 'src/app/study-fields/study-fields.service';

@Component({
  selector: 'app-create-subject-step-two',
  templateUrl: './create-subject-step-two.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CreateSubjectStepTwoComponent implements OnInit {
  @Input() newSubject: Subject;
  studyFields: StudyFieldAPI[];

  get getSemesters(): number[] {
    const numberOfSemesters = this.studyFields.find(q => q.id === this.newSubject.students.studyFieldID).numberOfSemesters;
    const semesters: number[] = [];

    for (let i = 0; i < numberOfSemesters; i++) {
      semesters.push(i + 1);
    }

    return semesters;
  }

  constructor(
    private sfs: StudyFieldsService,
  ) { }

  ngOnInit(): void {
    this.sfs.getStudyFields().subscribe(fields => this.studyFields = fields);
  }
}

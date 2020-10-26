import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectAPI } from '../data/models/Subject';
import { StudyFieldsService } from '../study-fields/study-fields.service';
import { SubjectsService } from './subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
})
export class SubjectsComponent implements OnInit {
  buttons: any[] = [];
  selected: number;
  listItems$: Observable<SubjectAPI[]>;

  constructor(
    private sfs: StudyFieldsService,
    private ss: SubjectsService,
  ) { }

  ngOnInit(): void {
    this.sfs.getStudyFields().subscribe(q => this.buttons = q);
    this.selected = this.buttons[0].id;
    this.refreshList();
  }

  refreshList() {
    this.listItems$ = this.ss.getSubjects();
  }

}

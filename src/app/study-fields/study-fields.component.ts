import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../data/department.service';
import { DepartmentAPI } from '../data/models/Department';
import { StudyFieldAPI } from '../data/models/Field';
import { StudyFieldsService } from './study-fields.service';

@Component({
  selector: 'app-study-fields',
  templateUrl: './study-fields.component.html',
})
export class StudyFieldsComponent implements OnInit {
  buttons: DepartmentAPI[] = [];
  selected: any;

  listItems$: Observable<StudyFieldAPI[]>;

  constructor(
    private studyFieldService: StudyFieldsService,
    private departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(departments => this.buttons = departments);
    this.selected = this.buttons[0].id;
    this.refreshList();
  }

  deleteStudyField(id: number): void {
    this.studyFieldService.deleteStudyField(id);
  }

  refreshList(): void {
    this.listItems$ = this.studyFieldService.getStudyFields();
  }

}

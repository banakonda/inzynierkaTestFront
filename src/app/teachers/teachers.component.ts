import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudyFieldAPI } from '../data/models/Field';
import { Teacher, TeacherAPI } from '../data/models/Teacher';
import { TitleAPI } from '../data/models/Title';
import { TitleService } from '../data/title.service';
import { StudyFieldsService } from '../study-fields/study-fields.service';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
})
export class TeachersComponent implements OnInit {
  buttons: StudyFieldAPI[] = [];
  selected: number;
  listItems$: Observable<TeacherAPI[]>;
  titles: TitleAPI[];

  constructor(
    private ts: TeachersService,
    private sfs: StudyFieldsService,
    private titleService: TitleService,
  ) { }

  ngOnInit(): void {
    this.sfs.getStudyFields().subscribe(q => this.buttons = q);
    //this.selected = this.buttons[0].id;
    this.titleService.getTitles().subscribe(t => this.titles = t);
    this.refreshList();
  }

  getTitleToDisplay(item: TeacherAPI): string {
    return this.titles.find(q => q.id === item.titleID).name;
  }

  refreshList(): void {
    this.listItems$ = this.ts.getTeachers();
  }

  deleteTeacher(id: number): void {
    this.ts.deleteTeacher(id).subscribe();
    this.refreshList();
  }

}

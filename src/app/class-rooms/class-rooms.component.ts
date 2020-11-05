import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentService } from '../data/department.service';
import { DepartmentAPI } from '../data/models/Department';
import { StudyFieldAPI } from '../data/models/Field';
import { StudyFieldsService } from '../study-fields/study-fields.service';
import { ClassRoomService } from './class-rooms.service';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './class-rooms.component.html',
})
export class ClassRoomsComponent implements OnInit {
  buttons: StudyFieldAPI[] = [];
  selected: any;

  listItems$: Observable<any[]>;
  constructor(
    private sfs: StudyFieldsService,
    private classRoomsService: ClassRoomService,
  ) { }

  ngOnInit(): void {
    this.sfs.getStudyFields().subscribe(q => this.buttons = q);
    //this.selected = this.buttons[0].id;
    this.refreshList();
  }

  refreshList(): void {
    this.listItems$ = this.classRoomsService.getClassRooms();
  }

  deleteClassRooms(id: number): void {
    this.classRoomsService.deleteClassRooms(id).subscribe();
    this.refreshList();
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassRoomsComponent } from './class-rooms/class-rooms.component';
import { CreateClassRoomComponent } from './class-rooms/create-class-room/create-class-room.component';
import { CreateFieldComponent } from './study-fields/create-field/create-field.component';
import { StudyFieldsComponent } from './study-fields/study-fields.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TimeTablesComponent } from './time-tables/time-tables.component';


const routes: Routes = [
  { path: 'fields', component: StudyFieldsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'class', component: ClassRoomsComponent },
  { path: 'timetables', component: TimeTablesComponent },
  { path: 'create-teacher', component: CreateTeacherComponent },
  { path: 'create-field', component: CreateFieldComponent },
  { path: 'create-subject', component: CreateSubjectComponent },
  { path: 'create-class-rooms', component: CreateClassRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

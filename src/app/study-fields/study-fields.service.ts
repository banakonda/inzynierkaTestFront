import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudyField, StudyFieldAPI } from '../data/models/Field';

@Injectable({
  providedIn: 'root'
})
export class StudyFieldsService {
  studyFields: StudyFieldAPI[] = [{
    id: 1,
    name: 'Informatyka',
    degree: 1,
    numberOfSemesters: 7,
    departmentID: 1,
  }, {
    id: 2,
    name: 'Matematyka',
    degree: 1,
    numberOfSemesters: 6,
    departmentID: 1,
  }, {
    id: 3,
    name: 'Fizyka',
    degree: 1,
    numberOfSemesters: 6,
    departmentID: 1,
  }];
  constructor() { }

  getStudyFields(): Observable<StudyFieldAPI[]> {
    return of(this.studyFields);
  }

  createStudyField(studyField: StudyField) {
    console.log(studyField);
  }
  editStudyField(studyField: StudyFieldAPI) {

  }
  deleteStudyField(id: number) {

  }
}

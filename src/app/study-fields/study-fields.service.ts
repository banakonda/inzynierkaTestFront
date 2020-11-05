import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { StudyField, StudyFieldAPI } from '../data/models/Field';

@Injectable({
  providedIn: 'root'
})
  export class StudyFieldsService {

    private baseUrl = "http://localhost:8888/fields"

  // studyFields: StudyFieldAPI[] = [{
  //   id: 1,
  //   name: 'Informatyka',
  //   degree: 1,
  //   numberOfSemesters: 7,
  //   departmentID: 1,
  // }, {
  //   id: 2,
  //   name: 'Matematyka',
  //   degree: 1,
  //   numberOfSemesters: 6,
  //   departmentID: 1,
  // }, {
  //   id: 3,
  //   name: 'Fizyka',
  //   degree: 1,
  //   numberOfSemesters: 6,
  //   departmentID: 1,
  // }];
  constructor(private httpClient: HttpClient) { 
  }



  getStudyFields(): Observable<StudyFieldAPI[]> {
    //return of(this.studyFields);
    return this.httpClient.get<StudyFieldAPI[]>(`${this.baseUrl}/findAllStudyFields`);
  }

  createStudyField(studyField: StudyField): Observable<StudyField> {
    console.log(studyField);
    const url = `${this.baseUrl}/addStudyField`; 
    return this.httpClient.post<StudyField>(url, studyField);
  }

  editStudyField(studyField: StudyFieldAPI) {

  }
  
  deleteStudyField(id: number): Observable<{}> {
    const url = `${this.baseUrl}/delete/${id}`; 
    return this.httpClient.delete(url);
  }
}

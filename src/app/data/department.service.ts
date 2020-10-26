import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartmentAPI } from './models/Department';


export const Departments: DepartmentAPI = {
  id: 1,
  name: 'Wydział Informatyki i Telekomunikacji',
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor() { }

  getDepartments(): Observable<DepartmentAPI[]> {
    return of([Departments]);
  }
}

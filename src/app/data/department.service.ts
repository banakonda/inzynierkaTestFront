import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DepartmentAPI } from './models/Department';


// export const Departments: DepartmentAPI = {
//   id: 1,
//   name: 'Wydział Informatyki i Telekomunikacji',
// };

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = "http://localhost:8888/department"

  constructor(private httpClient: HttpClient) { }

  getDepartments(): Observable<DepartmentAPI[]> {
    return this.httpClient.get<DepartmentAPI[]>(`${this.baseUrl}/findAllDepartments`);
  }
}

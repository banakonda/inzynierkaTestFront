import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TitleAPI } from './models/Title';


// export const Titles: TitleAPI[] = [{
//   id: 1,
//   name: 'inż.',
// }, {
//   id: 2,
//   name: 'mgr',
// }, {
//   id: 3,
//   name: 'mgr inż.',
// }, {
//   id: 4,
//   name: 'dr',
// }, {
//   id: 5,
//   name: 'dr inż.',
// }, {
//   id: 6,
//   name: 'dr hab.',
// }, {
//   id: 7,
//   name: 'dr hab. inż.',
// }, {
//   id: 8,
//   name: 'dr hab. prof PK',
// }, {
//   id: 9,
//   name: 'dr hab. inż prof PK',
// }, {
//   id: 10,
//   name: 'prof. dr hab.',
// }, {
//   id: 11,
//   name: 'prof. dr hab. inż.',
// }];

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private baseUrl = "http://localhost:8888/title"

  constructor(private httpClient: HttpClient) { }

  getTitles(): Observable<TitleAPI[]> {
    //return of(Titles);
    return this.httpClient.get<TitleAPI[]>(`${this.baseUrl}/findAllTitles`);

  }
}

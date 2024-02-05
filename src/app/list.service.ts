import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  // getList() {
  //   throw new Error('Method not implemented.');
  // }

  // private listUrl = 'assets/list.json';

  constructor(private http: HttpClient) { }

  // getStrings(): Observable<any> {
  //   return this.http.get<any>(this.listUrl);
  // }
}

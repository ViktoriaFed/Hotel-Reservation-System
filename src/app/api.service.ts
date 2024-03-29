import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiBaseUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/api/todo`);
  }
}

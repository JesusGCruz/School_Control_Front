import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'https://mvc-school-control.onrender.com';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application-json' })
  }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.baseUrl + '/api/students/getAll');
  }

  getStudent(id: string): Observable<IStudent> {
    return this.http.get<IStudent>(this.baseUrl + '/getOne/' + id);
  }
}

import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { IStudent } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  //private baseUrl = 'https://mvc-school-control.onrender.com/api/students';
  private baseUrl = 'http://localhost:3000/api/students';


  constructor(private http: HttpClient) { }


  private _created$ = new Subject<IStudent>();
  created$ = this._created$.asObservable();

  private _deleted$ = new Subject<IStudent>();
  deleted$ = this._deleted$.asObservable();

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.baseUrl + '/getAll');
  }

  createStudent(student: IStudent): Observable<IStudent> {
    console.log(student, this.httpOptions.headers);
    //this.http.post<IStudent>(this.baseUrl + '/api/students/insertOne', student, this.httpOptions)
    return this.http.post<IStudent>(this.baseUrl + '/insertOne', student, this.httpOptions)
      .pipe(
        tap(s => this._created$.next(s))
      );
  }

  deleteStudent(id: string): Observable<void> {
    const url = this.baseUrl + '/deleteOne/' + id;
    return this.http.delete<void>(url, this.httpOptions);
  }
}

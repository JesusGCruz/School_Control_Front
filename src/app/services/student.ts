import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private baseUrl = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application-json'})
  }
}

import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { StudentService } from '../../services/student';
import { IStudent } from '../../models/student.model';

@Component({
  selector: 'app-table',
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  students: IStudent[] = [];
  constructor(private studentsService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentsService.getStudents().subscribe({
      next: data => {
        this.students = data
        console.log('Estudiantes', this.students)
      },
      error: err => console.error('Error al cargar estudiantes: ' + err)
    });
  }
}

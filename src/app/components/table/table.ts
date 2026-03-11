import { NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, signal } from '@angular/core';
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
  constructor(private studentsService: StudentService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadStudents();

    this.studentsService.created$.subscribe(s => {
      this.students.push(s);
      this.cdr.detectChanges();
    });

    this.studentsService.deleted$.subscribe(student => {
      this.students = this.students.filter(s => s.student_id != student.student_id);
      this.cdr.detectChanges();
    });
  }

  loadStudents(): void {
    this.studentsService.getStudents().subscribe({
      next: data => {
        this.students = data
        //console.log('Estudiantes', this.students)
      },
      error: err => console.error('Error al cargar estudiantes: ' + err)
    });
  }

  removeStudent(id: string) {
    this.studentsService.deleteStudent(id).subscribe({
      next: () => {
        this.students = this.students.filter(st => st.student_id != id);
      },
      error: err => console.log('Error al eliminar estudiante>', err)
    });
  }

}

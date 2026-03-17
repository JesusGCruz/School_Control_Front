import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../services/student';
import { IStudent } from '../../models/student.model';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form implements OnInit {
  studentForm!: FormGroup;
  private editing: boolean = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) { }

  
  clearForm(): void {
    this.editing = false;
    console.log('Editar NO');
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      student_id: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      grade: [null, [Validators.required, Validators.min(1)]],
      group: ['', Validators.required],
      average: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
    });
    this.studentService.edit$.subscribe(student => {
      this.studentForm.patchValue(student);
      this.editing = true;
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
      return;
    }
    const student: IStudent = this.studentForm.value;

    if (this.editing) {
      this.studentService.updateStudent(student).subscribe({
        next: s => {
          console.log('Estudiante actualizado>', s);
          this.editing = false;
          this.studentForm.reset();
        },
        error: err => {
          console.error('Error al actualizar al estudiante>', err);
          alert('Error al actualizar al estudiante');
        }
      });
    } else {
      this.studentService.createStudent(student).subscribe({
        next: s => {
          console.log('Estudiante guardado', s);
          this.studentForm.reset();
        },
        error: err => {
          console.error('Error al guardar al estudiante>', err);
          alert('Error al guardar al estudiante');
        }
      });
    }
  }
}

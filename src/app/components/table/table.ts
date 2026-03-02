import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [NgFor],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  students = [
    {
      student_id: "D22390093",
      name: "Carlos",
      lastname: "Slim",
      grade: 5,
      group: "A",
      average: 89
    }, {
      student_id: "D22390141",
      name: "Tirzin",
      lastname: "Gei",
      grade: 8,
      group: "A",
      average: 92
    }, {
      student_id: "D22390101",
      name: "Doctora",
      lastname: "Lares",
      grade: 8,
      group: "B",
      average: 75
    }
  ]
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Form } from './components/form/form';
import { Table } from './components/table/table';

@Component({
  selector: 'app-root',
  imports: [Navbar, Form, Table],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('school-control');
}

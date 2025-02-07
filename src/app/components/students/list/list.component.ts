import { Component, OnInit } from '@angular/core';
import { Student } from '../../../core/model/student';
import { StudentService } from '../../../core/service/student.service';
import {FormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  imports: [FormsModule, NgFor],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] | undefined= [];

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll(){
    this.studentService.getList().subscribe(data => {
      this.students = data;
    });
  }

  details(id: number){
    this.router.navigate(['details', id]);
  }

  update(id: number){
    this.router.navigate(['edit', id]);
  }

  delete(id: number){
    this.studentService.delete(id).subscribe( data => {
      console.log(data);
      this.getAll();
    })
  }
}

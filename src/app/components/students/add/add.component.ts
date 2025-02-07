import { Component, OnInit } from '@angular/core';
import { Student } from '../../../core/model/student';
import { StudentService } from '../../../core/service/student.service';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class CreateStudentComponent implements OnInit {

  student!: Student;
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStudent(){
    this.studentService.create(this.student).subscribe( data =>{
      console.log(data);
      this.goToListPage();
    },
    error => console.log(error));
  }

  goToListPage(){
    this.router.navigate(['/list']);
  }
  
  onSubmit(){
    console.log(this.student);
    this.saveStudent();
  }
}

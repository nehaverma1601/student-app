import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Student } from '../../../core/model/student';
import { StudentService } from '../../../core/service/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id!: number;
  student!: Student;
  
  constructor(private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getById(this.id).subscribe(data => {
      this.student = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.studentService.update(this.id, this.student).subscribe( data =>{
      this.goToListPage();
    }
    , error => console.log(error));
  }

  goToListPage(){
    this.router.navigate(['/list']);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Student } from '../../../core/model/student';
import { StudentService } from '../../../core/service/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [FormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id !: number
  student !: Student
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getById(this.id).subscribe( data => {
      this.student = data;
    });
  }

}

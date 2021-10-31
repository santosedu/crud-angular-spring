import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  //coursesService: CoursesService;

  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService) {
    //this.courses = [];
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list();
   }

  ngOnInit(): void {
  }

}

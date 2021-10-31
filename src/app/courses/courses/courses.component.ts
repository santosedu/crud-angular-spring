import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:Course[] = [
    { _id: '1', name: 'Angular', category: 'Frontend'},
    { _id: '2', name: 'Spring', category: 'Backend' }  ,
    { _id: '3', name: 'Java', category: 'Programming Languages'}

  ];
  displayedColumns = ['name', 'category'];

  constructor(private coursersService:CoursesService) {
    //this.courses = [];
   }

  ngOnInit(): void {
  }

}

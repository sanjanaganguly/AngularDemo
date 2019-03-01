import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department-List</h3>
  <ul class = "items">
  <li (click)="OnSelect(department)" *ngFor="let department of departments">
  <span class = "badge">{{department.id}}</span>
  {{department.name}}
  </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {id:1, "name":"Node.js"},
    {id:2, "name":"Angular"},
    {id:3, "name":"Java"}
  ];
  constructor(private router : Router) { }

  ngOnInit() {
  }
  OnSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}

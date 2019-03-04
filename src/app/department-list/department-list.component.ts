import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
  <h3>Department-List</h3>
  <ul class = "items">
  <li (click)="OnSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
  <span class = "badge">{{department.id}}</span>
  {{department.name}}
  </li>
  </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {id:1, "name":"Node.js"},
    {id:2, "name":"Angular"},
    {id:3, "name":"Java"}
  ];
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param:ParamMap)=>{
      let id = parseInt(param.get('id'));
      this.selectedId = id;
    }
    );
  }
  OnSelect(department){
    //this.router.navigate(['/departments', department.id]); //Absolute Routing
    this.router.navigate([department.id],{relativeTo:this.route}); //relative Routing
  }
  
  isSelected(department){
    return department.id === this.selectedId;
  }

}

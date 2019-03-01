import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
  <h3>You have selected department with id = {{departmentId}}</h3>
  <a (click)="goPrevious()">Previou &nbsp;</a>
  
  <a (click)="goNext()">Next</a>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id; */
    this.route.paramMap.subscribe((params:ParamMap) =>
    {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious(){
    let PreviousId = this.departmentId-1;
    this.router.navigate(['/departments',PreviousId]);
  }
  goNext(){
    let NextId = this.departmentId+1;
    this.router.navigate(['/departments',NextId]);
  }


}

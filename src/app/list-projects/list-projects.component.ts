import { Component, Input, OnInit,HostListener, Output,EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { project } from '../models/project.model';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})

export class ListProjectsComponent implements OnInit {
  @Input() listProjects: project[] =[];
  @Output() editView = new EventEmitter<any>();
  @Output() sub = new EventEmitter<any>();

  dataSource = new MatTableDataSource<any>();
  public innerWidth: any;
  columnsToDisplay:string[] = ['name', 'projectManager','assigned','status','action'];

  constructor() {

  }

  ngOnInit() {

    this.innerWidth = window.innerWidth;
    this.dataSource.data = this.listProjects;
  }

  ngAfterContentInit(): void {
   /*  this.sub.emit('My projects'); */
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.

  }

   @HostListener('window:resize', ['$event'])
    onResize() {
    this.innerWidth = window.innerWidth;
  }

  firtsLetter(a: string){
    let aux = a.split(' ').map(i => i.charAt(0));
    return aux[0]+''+aux[1];
  }

  edit(project:any,projectId:number){
   /*  this.editView.emit({view:'edit', sub:'edit Project',project,projectId}); */
    this.editView.emit({view:'edit',project,projectId});
  }

  deleteProject(projectId:number){
     this.dataSource.data.splice(projectId ,1);
     this.dataSource.data = this.listProjects;
  }
}

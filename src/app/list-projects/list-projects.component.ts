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

  showMenu:boolean = false;
  left:number = 0;
  top:number= 0;
  projectId:number= 0;
  project:any;
  dataSource = new MatTableDataSource<any>();
  public innerWidth: any;
  columnsToDisplay:string[] = ['name', 'projectManager','assigned','status','action'];

  constructor() {
  }

  edit(){
    this.editView.emit({view:'edit', sub:'edit Project',project:this.project,id:this.projectId});
  }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      this.dataSource.data = this.listProjects;
  }

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.className == 'buttonMenu material-icons') {
            this.showMenu = true;
          }
          else{
            this.showMenu = false}
      }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  firtsLetter(a: string){
    let aux = a.split(' ').map(i => i.charAt(0));
    return aux[0]+''+aux[1];
  }

  openPopMenu(e:any,p:any,index:number){
    this.project= p;
    this.projectId = index;
    this.left = e.clientX - 74;
    this.top = e.clientY + 16;
  }

  deleteProject(){
     this.dataSource.data.splice(this.projectId ,1);
     this.dataSource.data = this.listProjects;
     this.showMenu = !this.showMenu;
  }
}

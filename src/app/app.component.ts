
import { Component } from '@angular/core';
import { project } from './models/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
   }

  title = 'estoestest';
  view:string = 'list';
  projectId:number= 0;
  subText:string = 'My projects';
  project!: project;

  projects:project[]=[
    {
      projectName:'Landing page',
      creationDate: '09/09/2020 10:30 am',
      projectManager:'Walt Cosani',
      assigned:'Ignacio Truffa',
      status:'Disabled',
      userImg:'imgUser',
      description:''
    },
    {
      projectName:'E-Commerce',
      creationDate: '09/09/2020 10:30 am',
      projectManager:'Emma Carreon',
      assigned:'Ignacio Truffa',
      status:'Enabled',
      userImg:'imgUser',
      description:''
    },
    {
      projectName:'CRM Linkroom',
      creationDate: '09/09/2020 10:30 am',
      projectManager:'Walt Cosani',
      assigned:'Emma Carreon',
      status:'Enabled',
      userImg:'imgUser',
      description:''
    },
  ]
  ngOnInit(): void {
  }

  setView(e:any){
    this.view = e.view;
    this.subText= e.title;
  }

  showEdit(event:any){
    this.view = event.view;
    this.projectId = event.projectId;
    this.project = event.project;
  }

  changeSub(e:string){
    console.log("entra a changesub",e)
    this.subText = e;
  }

  getDate(){
    let date = new Date();
    let formatDate = date.toLocaleTimeString('en-AR',{day:'2-digit',month:'2-digit',year:'numeric',hour: '2-digit', minute:'2-digit', hour12: true });
    formatDate = formatDate.replace(',','');
    return formatDate;
  }

  updateProjects(event:any){
    let project = event;
    this.projects[this.projectId].projectName = project['projectName'].value;
    this.projects[this.projectId].creationDate = this.getDate();
    this.projects[this.projectId].projectManager = project['projectManager'].value;
    this.projects[this.projectId].assigned = project['assigned'].value;
    this.projects[this.projectId].status= project['status'].value;
    this.projects[this.projectId].description= project['description'].value;
    this.view= 'list';
    this.subText='My projects';
  }

  createProject(event:any){
    let newProject = event;
    let project:project = {
      projectName:'',
      creationDate: '',
      projectManager:'',
      assigned:'',
      status:'',
      userImg:'',
      description:''
    };

    project.projectName= newProject.projectName.value;
    project.creationDate= this.getDate();
    project.projectManager= newProject.projectManager.value;
    project.assigned= newProject.assigned.value;
    project.status= newProject.status.value;
    project.userImg= 'imgUser';
    project.description= newProject.description.value;
    this.projects.push(project);

    this.view= 'list';
    this.subText='My projects';
  }
}

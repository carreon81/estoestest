import { Component, OnInit,Input, Output ,EventEmitter} from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { project } from '../models/project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})

export class EditProjectComponent implements OnInit {
  editForm:any ={};
  projectName = ''
  description = ''
  projectManager = ''
  assigned = ''
  status = ''


@Input() selectProject!:project;
@Output() save = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
      this.editForm =  this.formBuilder.group({
        projectName: new FormControl("",{validators:Validators.required,updateOn: 'change'}),
        description: new FormControl(""),
        projectManager: new FormControl(""),
        assigned : new FormControl(""),
        status : new FormControl(""),
      }, {updateOn: 'change'})

    }

  ngOnInit(): void {
    this.editForm.controls['projectName'].setValue(this.selectProject.projectName);
    this.editForm.controls['description'].setValue(this.selectProject.description);
    this.editForm.controls['projectManager'].setValue(this.selectProject.projectManager);
    this.editForm.controls['assigned'].setValue(this.selectProject.assigned);
    this.editForm.controls['status'].setValue(this.selectProject.status );
  }

  saveEdit(){
    let project = this.editForm.controls;
    this.save.emit(project);
  }
}

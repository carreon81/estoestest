import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  editForm:any ={};
  projectName = ''
  description = ''
  projectManager = ''
  assigned = ''
  status = ''

  @Output() saveNew = new EventEmitter<any>();

  constructor( private formBuilder:FormBuilder) {
    this.editForm =  this.formBuilder.group({
      projectName: new FormControl("",{validators:Validators.required,updateOn: 'change'}),
      description: new FormControl("",{validators:Validators.required,updateOn: 'change'}),
      projectManager: new FormControl("",{validators:Validators.required,updateOn: 'change'}),
      assigned : new FormControl("",{validators:Validators.required,updateOn: 'change'}),
      status : new FormControl("",{validators:Validators.required,updateOn: 'change'}),
    }, {updateOn: 'change'})
  }

  ngOnInit(): void {
  }

  saveNewProject(){
    let project = this.editForm.controls;
    this.saveNew.emit(project);
  }

}

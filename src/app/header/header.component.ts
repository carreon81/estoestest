import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  @Output() changeView = new EventEmitter<any>();
  @Input() title: any;
  @Input() view:string = 'list';

  constructor() {}



  addProject(){
    this.changeView.emit({view:'new',title:'Add project'});
 /*    this.title = 'Add project'; */
  }

  backToList(){
    this.changeView.emit({view:'list',title:'My projects'})
  /*   this.title = 'My projects'; */
  }
}

import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() changeView = new EventEmitter<string>();
  @Input() sub: string ='';

  constructor() { }
  ngOnInit(): void {

  }

  addProject(){
    this.sub="Add project";
    this.changeView.emit('new');
  }

  backToList(){
    this.changeView.emit('list');
    this.sub="My projects";
  }
}

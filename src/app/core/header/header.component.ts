import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu=false
  @Output() menuState = new EventEmitter()
  
 
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu(){
    this.showMenu=!this.showMenu
    this.menuState.emit(this.showMenu)
  }
  showItems=false
  imgClicked(){
this.showItems=!this.showItems

  }

  

}

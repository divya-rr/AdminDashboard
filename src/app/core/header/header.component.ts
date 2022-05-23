import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu=false
  @Input() menuItem1:any
  @Input() menuItem2:any
  @Output() menuState = new EventEmitter()
  
 
  constructor(private router:Router) { }

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
  logout(){
    this.router.navigateByUrl('/login')
   localStorage.removeItem('loggedInUser')
  }


  

}

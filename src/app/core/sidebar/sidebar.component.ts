import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  showFiller=false
  @ViewChild('drawer') drawer!:SidebarComponent
  @Input() isMenuClicked!: boolean
  showMenu=true

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
    console.log("Clicked ",this.isMenuClicked );
    this.drawer?.toggle()
  
  }

  toggle(){
  this.isMenuClicked=!this.isMenuClicked
    
  }
 

}

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('drawer') drawer!:SidebarComponent
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  isMenuClicked:boolean=false
  menuClicked(event:any)
  {
    this.isMenuClicked=event
    console.log(this.isMenuClicked)

  }
  // ngAfterViewInit(){
  //   this.drawer.toggle()
  //   this.cdr.detectChanges()
  // }

}

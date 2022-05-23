import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
   
  }
  navItems:any[] = [
    
    {
      name: 'Base',
      url: '/base',
      icon: 'extension',
      children: [
        {
          name: 'Cards',
          url: '/base/cards',
          icon: ''
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: ''
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: ''
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: ''
        },
        {
          name: 'Pagination',
          url: '/base/paginations',
          icon: ''
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: ''
        },
        {
          name: 'Progress',
          url: '/base/progress',
          icon: ''
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: ''
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: ''
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: ''
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: ''
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'send',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: ''
        },
        {
          name: 'Dropdowns',
          url: '/buttons/dropdowns',
          icon: ''
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: ''
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'pie_chart'
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'star_border',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: '',
         
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: ''
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: '',
         
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: ''
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'notification_important',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: ''
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: ''
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: ''
        }
      ]
    }
   
  ];
  mainCardItems:any[] = [
    
    {
      color: 'blue',
      value: '26K',
      percentage: '(-12.4%)'},
      {
        color: 'rgba(51, 153, 255)',
        value: '26K',
        percentage: '(-12.4%)'},
        {
          color: 'gold',
          value: '26K',
          percentage: '(-12.4%)'},
          {
            color: 'red',
            value: '26K',
            percentage: '(-12.4%)'},

    ]
    mediaDetails:any[]=[
      {
        heading:'Followers',
        name:'Tweet',
        icon:'bi bi-facebook',
        color:'rgba(59, 89, 152)'
      },
      {
        heading:'Followers',
        name:'Tweet',
        icon:'bi bi-twitter',
        color:'rgba(0, 172, 237)'
      },
      {
        heading:'Followers',
        name:'Tweet',
        icon:'bi bi-linkedin',
        color:'rgba(72, 117, 180)'
      },

    ]
    menuItem1:any[] = [
  {
        
         color:'blue',
         value:'Updates',
         icon:'notification_important'
       },
       {
        color:'green',
        value:'Messages',
        icon:'mail_outline'
      },
      {
        color:'red',
        value:'Tasks',
        icon:'check_circle_outline'
      },
      {
        color:'yellow',
        value:'Comments',
        icon:'message'
      },


      ]
      menuItem2:any[] = [
        {
             
               color:'',
               value:'Profile',
               icon:'person_pin'
             },
             {
              color:'',
              value:'Settings',
              icon:'settings'
            },
            {
              color:'grey',
              value:'Payments',
              icon:'credit_card'
            },
            {
              color:'blue',
              value:'Projects',
              icon:'description'
            },
      
      
            ]
  isMenuClicked:boolean=false
  menuClicked(event:any)
  {
    this.isMenuClicked=event
    console.log(this.isMenuClicked)
  

  }


}

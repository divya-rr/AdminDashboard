import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService){}

  canLoad(route: Route): boolean {
    
    let url = route.path;
    console.log('Url:'+ url);
    if (url=='dashboard' && !this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/login')
      this.toastr.error('You are not authorised to visit dashboard page');
      return false;
    }  
    return true; 
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/service/auth.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.scss']
})
export class AdminPagesComponent {

  constructor(private authService: AuthService, private router: Router) {

  }

  public signOut(): void {
    this.authService.logOut()
    // .then((data: any) => {
    //   if (data) {
    this.router.navigate(['/login'])
    //   }
    // })
    // .catch((err: Error) => {
    //   this.loading = false;
    // });
  }
}

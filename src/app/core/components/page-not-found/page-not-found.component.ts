import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '~/service/auth.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public fallbackString!: string;
  public displayReturnBtn!: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.fallbackString = this.authService.loggedIn() ? 'Home' : 'Login';
    this.displayReturnBtn = this.router.url.startsWith('/admin') ? true : false;
  }

  public goBack(): void {
    this.router.navigate(['/'])
  }

}

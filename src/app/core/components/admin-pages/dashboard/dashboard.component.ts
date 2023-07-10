import { Component } from '@angular/core';
import { AuthService } from '~/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public username!: string;

  constructor(private authService: AuthService) {
    this.username = this.authService.getUsername();
  }
}

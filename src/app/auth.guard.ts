import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '~/service/auth.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard {
  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }
}

import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '~/service/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  public loading!: boolean;

  constructor(
    private authentication: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createLoginForm();
  }

  ngOnInit() {
    this.checkAuth();
  }

  public createLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  public checkAuth(): void {
    if (this.authentication.loggedIn()) {
      this.router.navigate(['/'])
    }
  }

  public login() {
    this.loading = true;
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;
    const params = { username, password }
    this.authentication.login(params)
      // .then((data: any) => {
      //   if (data) {
      this.router.navigate(['/'])
      this.loading = false;
      //   }
      // })
      // .catch((err: Error) => {
      //   this.loading = false;
      // });
  }
}

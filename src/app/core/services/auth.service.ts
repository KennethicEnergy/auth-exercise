import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { first } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  }

  constructor(private http: HttpClient) {}

  public login(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = new HttpParams()
        .set('username', params.username)
        .set('password', params.password)
        console.log(body);
      // this.http
      //   .post('auth/login', body, this.httpOptions)
      //   .subscribe({
      //     next: (data: any) => { 
      //       const key = 'sessionToken'
      localStorage.setItem('access-token', body.toString());
      localStorage.setItem("userName", params.username);
      //   resolve(data)
      // }, 
      // error: (err) => { reject(err) },
      // });
    })
  }

  public logOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      // this.http
      //   .post('user/auth/logout', this.httpOptions)
      //   .pipe(first())
      //   .subscribe({
      //     next: () => {
      localStorage.removeItem('access-token');
      localStorage.removeItem('userName');
      //     resolve(true)
      //   },
      //   error: (err) => { reject(err) },
      // })
    })
  }

  public loggedIn(): boolean {
    return !!localStorage.getItem('access-token')
  }

  public getAccessToken(): any {
    const token = localStorage.getItem('access-token')
    return token ? token : null
  }

  public getUsername(): string {
    return localStorage.getItem('userName') || '';
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, catchError, concatMap, from, throwError } from 'rxjs';
import { AuthService } from '~/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return from(
      new Promise(resolve => resolve(localStorage.getItem('access-token')))
    ).pipe(
      concatMap((data) => {
        request = request.clone({
          url: request.url,
        })
        return next.handle(request).pipe(
          catchError(err => {
            // handle error events here
            if (err.hasOwnProperty('error')) {
              // console.log('err.error', err.error)
            }
            return throwError(() => err);
          })
        )
      })
    )
  }
}

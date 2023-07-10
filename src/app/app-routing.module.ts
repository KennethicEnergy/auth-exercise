import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from '~/core-components/authentication/login/login.component'
import { AdminPagesComponent } from '~/core-components/admin-pages/admin-pages.component'
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component'
import { AuthGuardGuard } from './auth.guard'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'forgot-password',
  //   component: ForgotPasswordComponent,
  // },
  {
    path: 'admin',
    component: AdminPagesComponent,
    canActivate: [AuthGuardGuard],
    loadChildren: () => import('~/core-components/admin-pages/admin-pages.module').then(x => x.AdminPagesModule)
  },
  {
    path: '',
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

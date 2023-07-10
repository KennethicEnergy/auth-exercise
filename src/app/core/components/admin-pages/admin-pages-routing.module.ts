import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(x => x.DashboardModule)
  },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./about/about.module').then(x => x.AboutModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(x => x.UserProfileModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

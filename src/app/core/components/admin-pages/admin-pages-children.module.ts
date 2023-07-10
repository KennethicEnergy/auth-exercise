import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  imports: [],
  declarations: [
    AboutComponent,
    UserProfileComponent,
    DashboardComponent
  ],
})
export class AdminPagesChildrenModule {}

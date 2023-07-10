import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoreRoutingModule } from './core-routing.module'
import { PageNotFoundModule } from '~/core-components/page-not-found/page-not-found.module'
import { AuthenticationModule } from '~/core-components/authentication/authentication.module'
import { AdminPagesModule } from '~/core-components/admin-pages/admin-pages.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from '~/shared/shared.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AdminPagesModule,
    AuthenticationModule,
    PageNotFoundModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class CoreModule {}

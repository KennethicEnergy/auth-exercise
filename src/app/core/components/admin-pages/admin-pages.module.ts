import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-pages-routing.module'
import { AdminPagesComponent } from './admin-pages.component'
import { SharedModule } from '~/shared/shared.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AdminPagesComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminPagesModule {}

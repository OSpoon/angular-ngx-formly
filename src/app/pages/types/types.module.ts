import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypesRoutingModule } from './types-routing.module';
import { TypesComponent } from './types.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [TypesComponent],
  imports: [
    CommonModule,
    TypesRoutingModule,
    FormlyModule.forChild(),
    ReactiveFormsModule,
  ],
})
export class TypesModule {}

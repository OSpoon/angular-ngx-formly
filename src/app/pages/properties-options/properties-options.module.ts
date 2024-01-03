import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesOptionsRoutingModule } from './properties-options-routing.module';
import { PropertiesOptionsComponent } from './properties-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [PropertiesOptionsComponent],
  imports: [
    CommonModule,
    PropertiesOptionsRoutingModule,
    FormlyModule.forChild(),
    ReactiveFormsModule,
    FormsModule,
    NzCardModule,
    NzSpaceModule,
    NzButtonModule,
    NzSwitchModule,
    NzDividerModule,
    NzGridModule,
  ],
})
export class PropertiesOptionsModule {}

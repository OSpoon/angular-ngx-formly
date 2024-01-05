import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpressionsRoutingModule } from './expressions-routing.module';
import { ExpressionsComponent } from './expressions.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';

@NgModule({
  declarations: [ExpressionsComponent],
  imports: [
    CommonModule,
    ExpressionsRoutingModule,
    FormlyModule.forChild(),
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    FormsModule,
    NzCardModule,
    NzSpaceModule,
    NzButtonModule,
    NzSwitchModule,
    NzDividerModule,
    NzGridModule,
  ],
})
export class ExpressionsModule {}

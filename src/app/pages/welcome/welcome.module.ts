import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormlyModule.forChild(),
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    NzButtonModule,
    NzTypographyModule,
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}

import { NgModule } from '@angular/core';

import { FormlyNzCheckboxModule } from '@ngx-formly/ng-zorro-antd/checkbox';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { FormlyNzInputModule } from '@ngx-formly/ng-zorro-antd/input';
import { FormlyNzRadioModule } from '@ngx-formly/ng-zorro-antd/radio';
import { FormlyNzSelectModule } from '@ngx-formly/ng-zorro-antd/select';
import { FormlyNzTextAreaModule } from '@ngx-formly/ng-zorro-antd/textarea';

const formlyZorros = [
  FormlyNzCheckboxModule,
  FormlyNzFormFieldModule,
  FormlyNzInputModule,
  FormlyNzRadioModule,
  FormlyNzSelectModule,
  FormlyNzTextAreaModule,
];

@NgModule({
  imports: formlyZorros,
  exports: formlyZorros,
})
export class FormlyZorroModule {}

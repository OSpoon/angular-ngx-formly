import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifyRoutingModule } from './verify-routing.module';
import { VerifyComponent } from './verify.component';
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { Observable, map, of, timer } from 'rxjs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { FormlyNgZorroAntdModule } from '@ngx-formly/ng-zorro-antd';

export function IpValidator(control: AbstractControl): boolean {
  return /(\d{1,3}\.){3}\d{1,3}/.test(control.value);
}
export function IpValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `${field.formControl?.value} 不是有效的 IP 地址`;
}

export function TelephoneAsyncValidator(
  control: AbstractControl
): Observable<boolean> {
  return timer(1000).pipe(
    map(() => /^(\+?86)?1[3-9]\d{9}|\d{3}-?\d{8}$/.test(control.value))
  );
}

export function TelephoneValidatorMessage(
  error: any,
  field: FormlyFieldConfig
) {
  return `${field.formControl?.value} 不是有效的电话号码`;
}

@NgModule({
  declarations: [VerifyComponent],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    FormlyModule.forChild({
      // validators: [
      //   { name: 'ip', validation: IpValidator },
      //   { name: 'telephoneAsync', validation: TelephoneAsyncValidator },
      // ],
      validationMessages: [
        { name: 'required', message: '这是一个必填字段' },
        { name: 'ip', message: IpValidatorMessage },
        { name: 'telephone', message: TelephoneValidatorMessage },
      ],
      types: [
        {
          name: 'ip',
          extends: 'input',
          defaultOptions: {
            validators: {
              ip: IpValidator,
            },
          },
        },
        {
          name: 'telephone',
          extends: 'input',
          defaultOptions: {
            asyncValidators: {
              telephone: TelephoneAsyncValidator,
            },
          },
        },
      ],
    }),
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    NzDividerModule,
  ],
})
export class VerifyModule {}

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

export function fieldMatchValidator(control: AbstractControl) {
  const { password, checkPassword } = control.value;
  console.log('password', password);
  console.log('checkPassword', checkPassword);
  // 跳过两次密码均为空的情况
  if (!checkPassword || !password) {
    return null;
  }
  // 跳过两次密码一致的情况
  if (checkPassword === password) {
    return null;
  }
  // 其他情况都为不一致
  return { fieldMatch: { message: '两次录入的密码不一致' } };
}

@NgModule({
  declarations: [VerifyComponent],
  imports: [
    CommonModule,
    VerifyRoutingModule,
    FormlyModule.forChild({
      validationMessages: [
        { name: 'required', message: '必填字段' },
        {
          name: 'min',
          message: (error: any, field: FormlyFieldConfig) => {
            return `${field.props?.label}最小是: ${error.min}岁`;
          },
        },
        {
          name: 'max',
          message: (error: any, field: FormlyFieldConfig) => {
            return `${field.props?.label}最大是: ${error.max}岁`;
          },
        },
        {
          name: 'minLength',
          message: (error: any, field: FormlyFieldConfig) => {
            return `${field.props?.label}最少: ${error.minLength} 个字符`;
          },
        },
        {
          name: 'maxLength',
          message: (error: any, field: FormlyFieldConfig) => {
            return `${field.props?.label}最多: ${error.maxLength} 个字符`;
          },
        },
        {
          name: 'email',
          message: (error: any, field: FormlyFieldConfig) => {
            return `${field.props?.label}格式不正确`;
          },
        },
        {
          name: 'idcard',
          message: (error: any, field: FormlyFieldConfig) => {
            return `${field.props?.label}格式不正确`;
          },
        },
      ],
      validators: [
        {
          name: 'email',
          validation: (
            c: AbstractControl,
            field: FormlyFieldConfig,
            options?: {
              [id: string]: any;
            }
          ): ValidationErrors | null => {
            return (
              options?.['pattern'] ||
              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            ).test(c.value)
              ? null
              : { email: true };
          },
        },
        {
          name: 'fieldMatch',
          validation: fieldMatchValidator,
        },
      ],
      // validators: [
      //   { name: 'ip', validation: IpValidator },
      //   { name: 'telephoneAsync', validation: TelephoneAsyncValidator },
      // ],
      // validationMessages: [
      //   { name: 'required', message: '这是一个必填字段' },
      //   { name: 'ip', message: IpValidatorMessage },
      //   { name: 'telephone', message: TelephoneValidatorMessage },
      // ],
      // types: [
      //   {
      //     name: 'ip',
      //     extends: 'input',
      //     defaultOptions: {
      //       validators: {
      //         ip: IpValidator,
      //       },
      //     },
      //   },
      //   {
      //     name: 'telephone',
      //     extends: 'input',
      //     defaultOptions: {
      //       asyncValidators: {
      //         telephone: TelephoneAsyncValidator,
      //       },
      //     },
      //   },
      // ],
    }),
    ReactiveFormsModule,
    FormlyNgZorroAntdModule,
    NzDividerModule,
  ],
})
export class VerifyModule {}

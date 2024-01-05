import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'ip',
      type: 'ip',
      props: {
        label: 'IP Address',
        required: true,
      },
      // validators: {
      //   // validation: [IpValidator],
      //   ip: {
      //     expression: (control: AbstractControl) =>
      //       /(\d{1,3}\.){3}\d{1,3}/.test(control.value),
      //     message: (error: any, field: FormlyFieldConfig) =>
      //       `${field.formControl?.value} 不是有效的 IP 地址`,
      //   },
      // },
    },
    {
      key: 'telephone',
      type: 'telephone',
      props: {
        label: 'Telephone',
        required: true,
      },
      // asyncValidators: {
      //   // validation: [TelephoneAsyncValidator],
      //   telephone: {
      //     expression: (control: AbstractControl) =>
      //       timer(1000).pipe(
      //         map(() =>
      //           /^(\+?86)?1[3-9]\d{9}|\d{3}-?\d{8}$/.test(control.value)
      //         )
      //       ),
      //     message: (error: any, field: FormlyFieldConfig) =>
      //       `${field.formControl?.value} 不是有效的电话号码`,
      //   },
      // },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }

  signInForm = new FormGroup({});
  signInModel = {};
  signInFields: FormlyFieldConfig[] = [
    {
      className: 'label-width input-width',
      key: 'username',
      type: 'input',
      props: {
        label: '用户名',
        required: true,
      },
    },
    {
      className: 'label-width input-width',
      key: ' password',
      type: 'input',
      props: {
        label: '密码',
      },
    },
    {
      className: 'label-width input-width',
      key: 'email',
      type: 'input',
      props: {
        label: '邮箱',
      },
    },
    {
      className: 'label-width input-width',
      key: 'phone',
      type: 'input',
      props: {
        label: '电话',
      },
    },
  ];

  onSignIn(model: any) {
    console.log(model);
  }
}

import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class VerifyComponent {
  // form = new FormGroup({});
  // model = { email: 'email@gmail.com' };
  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'ip',
  //     type: 'ip',
  //     props: {
  //       label: 'IP Address',
  //       required: true,
  //     },
  //     // validators: {
  //     //   // validation: [IpValidator],
  //     //   ip: {
  //     //     expression: (control: AbstractControl) =>
  //     //       /(\d{1,3}\.){3}\d{1,3}/.test(control.value),
  //     //     message: (error: any, field: FormlyFieldConfig) =>
  //     //       `${field.formControl?.value} 不是有效的 IP 地址`,
  //     //   },
  //     // },
  //   },
  //   {
  //     key: 'telephone',
  //     type: 'telephone',
  //     props: {
  //       label: 'Telephone',
  //       required: true,
  //     },
  //     // asyncValidators: {
  //     //   // validation: [TelephoneAsyncValidator],
  //     //   telephone: {
  //     //     expression: (control: AbstractControl) =>
  //     //       timer(1000).pipe(
  //     //         map(() =>
  //     //           /^(\+?86)?1[3-9]\d{9}|\d{3}-?\d{8}$/.test(control.value)
  //     //         )
  //     //       ),
  //     //     message: (error: any, field: FormlyFieldConfig) =>
  //     //       `${field.formControl?.value} 不是有效的电话号码`,
  //     //   },
  //     // },
  //   },
  // ];

  // onSubmit(model: any) {
  //   console.log(model);
  // }

  signInForm = new FormGroup({});
  signInModel = {};
  signInFields: FormlyFieldConfig[] = [
    {
      className: 'label-width',
      key: 'username',
      type: 'input',
      props: {
        label: '用户名',
        placeholder: '请输入用户名',
        required: true,
        pattern: /^[\u4e00-\u9fa5]+$/,
      },
      validation: {
        messages: {
          pattern: (error: any, field: FormlyFieldConfig) =>
            `${field.props?.label}仅支持录入中文`,
        },
      },
    },
    {
      className: 'label-width input-width',
      key: 'age',
      type: 'input',
      props: {
        label: '年龄',
        type: 'number',
        placeholder: '请输入年龄',
        required: true,
        min: 18,
        max: 60,
      },
    },
    {
      className: 'label-width',
      key: 'gender',
      type: 'radio',
      props: {
        label: ' 性别',
        options: [
          {
            label: '男',
            value: 'male',
          },
          {
            label: '女',
            value: 'female',
          },
        ],
        required: true,
      },
    },
    {
      className: 'label-width',
      key: 'hobby',
      type: 'select',
      props: {
        label: '兴趣爱好',
        placeholder: '请选择兴趣爱好',
        options: [
          {
            label: '篮球',
            value: 'basketball',
          },
          {
            label: '足球',
            value: 'football',
          },
          {
            label: '乒乓球',
            value: 'pingpong',
          },
        ],
        multiple: true,
        required: true,
      },
    },
    {
      className: 'label-width',
      key: 'email',
      type: 'input',
      props: {
        label: '邮箱',
        placeholder: '请输入邮箱',
        required: true,
      },
      validators: {
        validation: [
          {
            name: 'email',
            options: {
              pattern: /^[a-zA-Z0-9._%+-]+@qq\.[a-zA-Z]{2,}$/,
            },
          },
        ],
      },
    },
    {
      className: 'label-width',
      key: 'idcard',
      type: 'input',
      props: {
        label: '身份证',
        placeholder: '请输入身份证',
        required: true,
      },
      validators: {
        validation: [
          (control: AbstractControl): ValidationErrors | null => {
            return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(control.value)
              ? null
              : { idcard: true };
          },
        ],
      },
    },
    {
      className: 'label-width',
      key: 'phone',
      type: 'input',
      props: {
        label: '手机号',
        placeholder: '请输入手机号',
        required: true,
      },
      validators: {
        phone: {
          expression: (c: AbstractControl) =>
            !c.value || /^(\+?86)?1[3-9]\d{9}|\d{3}-?\d{8}$/.test(c.value),
          message: (error: any, field: FormlyFieldConfig) =>
            `${field.props?.label}格式不正确`,
        },
      },
    },
    {
      className: 'label-width',
      key: 'description',
      type: 'textarea',
      props: {
        label: '个人简介',
        placeholder: '请输入个人简介',
        required: true,
        minLength: 10,
        maxLength: 200,
      },
    },
    {
      className: 'label-width ml14',
      key: 'agree',
      type: 'checkbox',
      defaultValue: false,
      props: {
        label: '同意用户协议',
        options: [
          {
            label: '用户协议',
            value: 'agree',
          },
        ],
        required: true,
      },
    },
  ];

  onSignIn(model: any) {
    console.log(model);
  }
}

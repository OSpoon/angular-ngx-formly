import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      className: 'label-width',
      key: 'username',
      type: 'input',
      props: {
        label: '用户名',
        placeholder: '请输入用户名',
        required: true,
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
      },
    },
    {
      className: 'label-width',
      key: 'hobby',
      type: 'select',
      props: {
        label: '兴趣爱好',
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
      },
    },
    {
      className: 'label-width',
      key: 'description',
      type: 'textarea',
      props: {
        label: '个人简介',
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
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}

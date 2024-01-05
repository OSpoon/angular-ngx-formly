import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { InputFieldComponent } from '../../formly-types/input-field/input-field.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrl: './types.component.less',
})
export class TypesComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: InputFieldComponent,
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}

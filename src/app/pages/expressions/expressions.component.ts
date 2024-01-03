import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrl: './expressions.component.less',
})
export class ExpressionsComponent {
  gridStyle = {
    width: '20%',
    textAlign: 'center',
  };

  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        label: 'FirstName',
        placeholder: 'please input first name',
      },
      expressions: {
        'props.disabled': 'formState.readOnly',
        hide: 'formState.hidden',
        focus: 'formState.focus',
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          return field.options?.fieldChanges?.pipe(
            filter((e) => e.type === 'expressionChanges' && e.field === field),
            tap((e) => console.log(e))
          );
        },
      },
    },
    {
      key: 'lastName',
      type: 'input',
      props: {
        label: 'LastName',
        placeholder: 'please input last name',
      },
      expressions: {
        'props.disabled': (field: FormlyFieldConfig) => {
          return field.options?.formState.readOnly;
        },
        hide: (field: FormlyFieldConfig) => {
          return field.options?.formState.hidden;
        },
        focus: (field: FormlyFieldConfig) => {
          return field.options?.formState.focus;
        },
      },
    },
  ];

  options = {
    formState: {
      readOnly: false,
      hidden: false,
      focus: false,
    },
  };

  onSubmit(model: any) {
    console.log(model);
  }
}

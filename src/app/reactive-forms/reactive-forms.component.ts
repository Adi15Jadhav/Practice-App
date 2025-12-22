import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAliases() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }
}

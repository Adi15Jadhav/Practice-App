import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Actor } from './actor';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  skills = ['Method Actor', 'Singer', 'Dancer', 'DJ'];
  submitted = false;

  model = new Actor(1, 'John D', this.skills[0], 'YRF');

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}

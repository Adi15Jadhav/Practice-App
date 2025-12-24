import { Component } from '@angular/core';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { PostlistComponent } from './postlist/postlist.component';

@Component({
  selector: 'app-root',
  imports: [PostlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice-app';
}

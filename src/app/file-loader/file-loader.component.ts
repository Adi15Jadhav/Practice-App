import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-loader',
  imports: [ReactiveFormsModule],
  templateUrl: './file-loader.component.html',
  styleUrl: './file-loader.component.css',
})
export class FileLoaderComponent {
  http = inject(HttpClient);
  formGroup = new FormGroup({
    file: new FormControl(null),
  });

  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.selectedFile =
      input.files && input.files.length > 0 ? input.files[0] : null;

    console.log(input.files);
  }

  onSubmit() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http
      .post('http://localhost:3000/upload', formData, {
        reportProgress: true,
        observe: 'events' as const,
      })
      .subscribe((event) => {
        console.log(event);
      });
  }
}

import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-error-handler',
  imports: [JsonPipe],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css',
})
export class ErrorHandlerComponent {
  data: any;
  errorMessage: string | null = '';

  http = inject(HttpClient);

  fetchData() {
    this.errorMessage = null;
    this.data = null;

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1hgdt';

    this.http
      .get(apiUrl)
      .pipe(retry(3), catchError(this.handleError.bind(this)))
      .subscribe({
        next: (response) => (this.data = response),
        error: (error) => console.error(error.message),
      });
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      this.errorMessage =
        'Newtwork error: Please check your internet connection.';
    } else {
      this.errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    console.log(error.status);
    return throwError(
      () => new Error('Something went wrong; please try again later.')
    );
  }
}

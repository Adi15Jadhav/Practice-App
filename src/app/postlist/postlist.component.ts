import { Component, inject } from '@angular/core';
import { ConfigService } from '../services/config-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-postlist',
  imports: [CommonModule],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css',
})
export class PostlistComponent {
  private configService = inject(ConfigService);

  posts$ = this.configService.getPosts();
}

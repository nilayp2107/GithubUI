import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  templateUrl: './taskbar.html',
  styleUrls: ['./taskbar.css']
})
export class TaskbarComponent {
  protected readonly title = signal('GithubUI');
}

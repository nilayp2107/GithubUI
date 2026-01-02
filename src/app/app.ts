import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskbarComponent } from './taskbar/taskbar';
import { MenubarComponent } from './menubar/menubar';
import { ProfileComponent } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskbarComponent, MenubarComponent, ProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GithubUI');
}

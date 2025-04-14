import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CoreModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}

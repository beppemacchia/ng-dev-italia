import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly translateService = inject(TranslateService);
  title = 'ng-dev-italia';

  constructor() {
    this.translateService.setDefaultLang('it');
    this.translateService.use('it');
  }
}

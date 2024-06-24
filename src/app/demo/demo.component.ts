import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  ItDropdownComponent,
  ItDropdownItemComponent,
  ItHeaderComponent,
  ItIconComponent,
  ItLanguageSwitcherComponent,
  ItListComponent,
  ItListItemComponent,
  ItMegamenuComponent,
  ItNavBarItemComponent,
} from 'design-angular-kit';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ItHeaderComponent,
    ItLanguageSwitcherComponent,
    ItIconComponent,
    ItNavBarItemComponent,
    ItDropdownComponent,
    ItDropdownItemComponent,
    ItMegamenuComponent,
    ItListComponent,
    ItListItemComponent,
    TranslateModule
  ],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {}

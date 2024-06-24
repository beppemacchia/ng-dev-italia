import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideDesignAngularKit } from 'design-angular-kit';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

import { routes } from './app.routes';
import { TranslateLoader } from '@ngx-translate/core';
import { HttpBackend } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideDesignAngularKit({
      translateLoader: (itPrefix: string, itSuffix: string) => ({
        provide: TranslateLoader,
        useFactory: (http: HttpBackend) =>
          new MultiTranslateHttpLoader(http, [{ prefix: itPrefix, suffix: itSuffix }, { prefix: './i18n/' }]),
        deps: [HttpBackend],
      }),
    }),
  ],
};

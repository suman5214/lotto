import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// allow gesture
import 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule);

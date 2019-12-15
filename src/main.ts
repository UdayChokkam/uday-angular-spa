import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Amplify.configure(awsconfig);
Amplify.configure({
  API: {
    graphql_endpoint: 'https://n2e2vcyggfd6demlmeeho7n7xy.appsync-api.eu-west-1.amazonaws.com/graphql'
  }
});


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

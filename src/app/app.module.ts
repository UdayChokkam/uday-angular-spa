import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DriversComponent } from './drivers/drivers.component';
import { DocumentsComponent } from './documents/documents.component';
import { NgZorroAntdModule, NZ_I18N, en_US, en_GB } from 'ng-zorro-antd';
import { IconsProviderModule } from './icons-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {RouterModule} from '@angular/router';

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DriversComponent,
    DocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    IconsProviderModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'documents', component: DocumentsComponent },
    ])
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

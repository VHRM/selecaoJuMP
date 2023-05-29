import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { ImageApiService } from './services/image-api.service';
import { TimeElapsedPipe } from '../pipes/time-elapsed.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    TimeElapsedPipe
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  providers: [
    ImageApiService
  ],
  bootstrap: [],
  exports: [
    HeaderComponent,
    TimeElapsedPipe
  ]
})
export class SharedModule { }

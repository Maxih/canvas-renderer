import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasPlatformModule } from './canvas-platform/canvas-platform.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CanvasPlatformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

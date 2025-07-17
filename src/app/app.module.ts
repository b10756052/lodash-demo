import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CollectionComponent } from './collection/collection.component';
import { NgModule } from '@angular/core';

const comps = [
  CollectionComponent
]

const HIGHLIGHT_PROVIDE = {
  provide: HIGHLIGHT_OPTIONS,
  useValue: {
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript'),
      scss: () => import('highlight.js/lib/languages/scss'),
      html: () => import('highlight.js/lib/languages/xml'),
    },
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ...comps
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [HIGHLIGHT_PROVIDE],
  bootstrap: [AppComponent]
})
export class AppModule { }

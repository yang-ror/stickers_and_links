import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StickerPanelComponent } from './componeents/sticker-panel/sticker-panel.component';
import { LinkPanelComponent } from './componeents/link-panel/link-panel.component';
import { LinkItemComponent } from './componeents/link-item/link-item.component';
import { LinkBtnComponent } from './componeents/link-btn/link-btn.component';
import { NoteColorBtnComponent } from './componeents/note-color-btn/note-color-btn.component';
import { NoteItemComponent } from './componeents/note-item/note-item.component';
import { NoteBtnComponent } from './componeents/note-btn/note-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    StickerPanelComponent,
    LinkPanelComponent,
    LinkItemComponent,
    LinkBtnComponent,
    NoteColorBtnComponent,
    NoteItemComponent,
    NoteBtnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

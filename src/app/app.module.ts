import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { KanbanCardComponent } from './kanban-card/kanban-card.component';
import { KanbanService } from './services/kanban.service';
import { BacklogComponent } from './backlog/backlog.component';
import { ProgressComponent } from './progress/progress.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanCardComponent,
    BacklogComponent,
    ProgressComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [KanbanService],
  bootstrap: [AppComponent]
})
export class AppModule { }

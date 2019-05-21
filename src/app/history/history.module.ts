import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { HistoryFilterComponent } from './components/history-filter/history-filter.component';
import { HistoryListItemComponent } from './components/history-list-item/history-list-item.component';

@NgModule({
  declarations: [HistoryListComponent, HistoryFilterComponent, HistoryListItemComponent],
  imports: [
    CommonModule
  ]
})
export class HistoryModule { }

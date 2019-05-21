import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuListItemViewModel } from 'core-library/core/view-models/list-item.view-model';
import { Helpers } from 'core-library/core/helpers';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./styles/menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  public tabs: MenuListItemViewModel[];

  @Output()
  public onAction: EventEmitter<string> = new EventEmitter<string>();

  public ngOnInit() {
    if (!this.tabs || !this.tabs.length)
      return;
    this.tabs[0].toggleActive();
  }

  public selectTab(tab: MenuListItemViewModel, event: Event) {
    Helpers.stopPropagation(event);
    if (tab.IsActive)
      return;
    tab.toggleActive();
    this.onAction.emit(tab.Action);
  }

}

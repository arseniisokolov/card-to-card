import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { MenuListItemViewModel } from 'core-library/core/view-models/list-item.view-model';
import { AppActionTypes } from '../../../app-data/app-action-types.enum';

@Component({
  selector: 'cabinet-layout',
  templateUrl: './cabinet-layout.component.html',
  styleUrls: ['./styles/cabinet-layout.component.scss']
})
export class CabinetLayoutComponent implements OnInit {

  /** TO DO: каунтеры, скрывать историю если нет платежей */
  public MenuTabs: MenuListItemViewModel[] = [
    new MenuListItemViewModel(AppActionTypes.toCreateTransfer, "Новый перевод"),
    new MenuListItemViewModel(AppActionTypes.toHistory, "История переводов"),
  ];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.checkInitTab();
  }

  public handleMenuAction(name: AppActionTypes): void {
    switch (name) {
      case AppActionTypes.toCreateTransfer:
        this._router.navigate(['cabinet/create-transfer']);
        break;
      case AppActionTypes.toHistory:
        this._router.navigate(['cabinet/history']);
        break;
    }
  }

  /** Распознает активный таб при запуске приложения */
  private checkInitTab() {
    const route = this._activatedRoute.firstChild || this._activatedRoute;
    route.data.pipe(first())
      .subscribe(data => {
        if (!data || !data.action)
          return;
        const tab = this.MenuTabs.find(i => i.Action == data.action);
        if (tab)
          tab.setActive(true);
      });
  }

}

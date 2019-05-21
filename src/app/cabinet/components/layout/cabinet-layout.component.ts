import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuListItemViewModel } from 'core-library/core/view-models/list-item.view-model';
import { AppActionTypes } from 'src/app/data/app-action-types.enum';

@Component({
  selector: 'cabinet-layout',
  templateUrl: './cabinet-layout.component.html',
  styleUrls: ['./styles/cabinet-layout.component.scss']
})
export class CabinetLayoutComponent implements OnInit {

  /** TO DO: каунтеры, скрывать историю если нет платежей */
  public MenuTabs: MenuListItemViewModel[] = [
    new MenuListItemViewModel('toCreate', "Новый перевод"),
    new MenuListItemViewModel('toHistory', "История переводов"),
  ];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  public handleMenuAction(name: AppActionTypes): void {
    switch (name) {
      case AppActionTypes.toCreateTransfer: this._router.navigate(['cabinet/create-transfer']); break;
      case AppActionTypes.toHistory: this._router.navigate(['cabinet/history']); break;
    }
  }

}

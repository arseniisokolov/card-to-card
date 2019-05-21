import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

//modules
import { CreateTransferModule } from '../create-transfer/create-transfer.module';
import { HistoryModule } from '../history/history.module';

//components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { CreateTransferTabComponent } from './components/create-transfer-tab/create-transfer-tab.component';
import { HistoryTabComponent } from './components/history-tab/history-tab.component';

import { cabinetRoutes } from './cabinet.routes';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CreateTransferTabComponent,
    HistoryTabComponent,
  ],
  exports: [
    CabinetLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cabinetRoutes),
    CreateTransferModule.forRoot(),
    HistoryModule.forRoot(),
  ]
})
export class CabinetModule {
}

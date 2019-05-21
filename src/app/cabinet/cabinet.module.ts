import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabinetLayoutComponent } from './components/layout/cabinet-layout.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [
    CabinetLayoutComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CabinetModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CabinetModule,
      providers: []
    };
  }

}

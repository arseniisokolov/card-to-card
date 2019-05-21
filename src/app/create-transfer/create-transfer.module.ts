import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { CreateTransferFormComponent } from './components/create-transfer-form/create-transfer-form.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [
    CreateTransferFormComponent,
    CardFormComponent
  ],
  exports: [    
    CreateTransferFormComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CreateTransferModule {

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CreateTransferModule,
      providers: []
    };
  }

}

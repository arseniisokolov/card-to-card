import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTransferFormComponent } from './components/create-transfer-form/create-transfer-form.component';
import { CardFormComponent } from './components/card-form/card-form.component';

@NgModule({
  declarations: [CreateTransferFormComponent, CardFormComponent],
  imports: [
    CommonModule
  ]
})
export class CreateTransferModule { }

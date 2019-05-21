import { Component, OnInit } from '@angular/core';
import { TransferFormViewModel } from '../../view-models/transfer-form.view-model';

@Component({
  selector: 'create-transfer-form',
  templateUrl: './create-transfer-form.component.html',
  styleUrls: ['./styles/create-transfer-form.master.scss']
})
export class CreateTransferFormComponent implements OnInit {

  public Model: TransferFormViewModel;

  constructor() { }

  public ngOnInit() {
    this.initialize();
  }

  public submitForm() {
    console.log(this.Model);
  }

  private initialize() {
    this.Model = new TransferFormViewModel();
    this.Model.initialize();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { TransferFormViewModel } from '../../view-models/transfer-form.view-model';
import { TransferService } from '../../data/transfer.service';
import { TosterGlobalService } from 'core-library/modals/data/toster/toster.global.service';
import { TosterTypes } from 'core-library/modals/data/toster/toster-types.enum';
import { ICardTransfer } from 'src/app/app-data/card-transfer.interface';

@Component({
  selector: 'create-transfer-form',
  templateUrl: './create-transfer-form.component.html',
  styleUrls: ['./styles/create-transfer-form.master.scss']
})
export class CreateTransferFormComponent implements OnInit {

  @Input()
  public presetValue: ICardTransfer;

  public Model: TransferFormViewModel;

  constructor(
    private _transferService: TransferService,
    private _tosterService: TosterGlobalService
  ) { }

  public ngOnInit() {
    this.initialize();
  }

  public submitForm() {
    this._transferService.send(this.Model.toModel()).subscribe(() => {
      this._tosterService.showModal({ message: `Перевод на сумму ${this.Model.toModel().amount} отправлен.`, type: TosterTypes.Success })
    }, error => {
      this._tosterService.showModal({ message: error, type: TosterTypes.Error })
    });
  }

  private initialize() {
    this.Model = new TransferFormViewModel();
    this.Model.initialize(this.presetValue);
  }

}

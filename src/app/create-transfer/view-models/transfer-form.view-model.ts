import { FormControl, Validators } from '@angular/forms';
import { FormViewModel } from 'core-library/core/view-models/form.view-model';
import { Helpers } from 'core-library/core/helpers';
import { ICardTransfer } from '../../app-data/card-transfer.interface';
import { CardFormViewModel } from './card-form.view-model';


export class TransferFormViewModel extends FormViewModel<ICardTransfer>{

    public CardFrom: CardFormViewModel;
    public CardTo: CardFormViewModel;

    public get IsValid(): boolean {
        return this.Form.valid && this.CardFrom.Form.valid && this.CardTo.Form.valid;
    }

    public initialize() {
        this.CardFrom = new CardFormViewModel();
        this.CardTo = new CardFormViewModel();
        this.CardFrom.initialize({ title: 'Карта плательщика' });
        this.CardTo.initialize({ title: 'Карта получателя', isReduced: true });
        super.initialize();
    }

    public fromModel(data: ICardTransfer) {
        super.fromModel(data);
        this.Form.value.Amount = data.amount;
        this.CardFrom.fromData(data.cardFrom);
        this.CardTo.fromData(data.cardTo);
    }

    public toModel(): ICardTransfer {
        return {
            id: Helpers.getGuid(),
            amount: this.Form.value.Amount,
            cardFrom: this.CardFrom.toData(),
            cardTo: this.CardTo.toData(),
            docDate: new Date().toString(),
        };
    }

    protected getControls(): { [key: string]: FormControl } {
        return { "Amount": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]) };
    }

}
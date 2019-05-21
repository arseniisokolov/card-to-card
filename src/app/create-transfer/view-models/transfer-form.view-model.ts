import { FormControl, Validators } from '@angular/forms';
import { FormViewModel } from 'core-library/core/view-models/form.view-model';
import { ICardTransfer } from '../../app-data/card-transfer.interface';
import { CardFormViewModel } from './card-form.view-model';


export class TransferFormViewModel extends FormViewModel<ICardTransfer>{

    public CardFrom: CardFormViewModel;
    public CardTo: CardFormViewModel;


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
        let res: ICardTransfer;
        res.amount = this.Form.value.Amount;
        res.cardFrom = this.CardFrom.toData();
        res.cardTo = this.CardTo.toData();
        res.docDate = new Date().toString();
        return res;
    }

    protected getControls(): { [key: string]: FormControl } {
        return { "Amount": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]) };
    }

}
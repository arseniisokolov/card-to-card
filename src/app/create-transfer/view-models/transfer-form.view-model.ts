import { FormViewModel } from 'core-library/core/view-models/form.view-model';
import { ICardTransfer } from '../../app-data/card-transfer.interface';
import { CardFormViewModel } from './card-form.view-model';
import { FormControl, Validators } from '@angular/forms';


export class TransferFormViewModel extends FormViewModel<ICardTransfer>{

    public CardFrom: CardFormViewModel;
    public CardTo: CardFormViewModel;


    public initialize() {
        this.CardFrom = new CardFormViewModel();
        this.CardTo = new CardFormViewModel();
        this.CardFrom.initialize({});
        this.CardTo.initialize({ isReduced: true });
        super.initialize();
    }


    public toData(): ICardTransfer {
        let res: ICardTransfer;
        return res;
    }

    protected getControls(): { [key: string]: FormControl } {
        return { "Amount": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(1)]) };
    }

}
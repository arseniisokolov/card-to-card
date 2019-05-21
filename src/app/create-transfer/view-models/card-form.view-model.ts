import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormViewModel } from 'core-library/core/view-models/form.view-model';
import { ICardRequisites } from '../../app-data/card-transfer.interface';


export class CardFormViewModel extends FormViewModel<ICardRequisites> {

    /** Краткая форма карты */
    public IsReducedMode: boolean;


    public initialize(config: ICardFormConfig) {
        this.IsReducedMode = config.isReduced;
        super.initialize();
    }

    public toData(): ICardRequisites {
        let res: ICardRequisites;
        return res;
    }


    protected getControls(): { [key: string]: FormControl } {
        const formFields = {
            "NumberGroup1": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup2": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup3": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
            "NumberGroup4": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(4), Validators.maxLength(4)]),
        };
        if (!this.IsReducedMode)
            return {
                ...formFields,
                ...{
                    "OwnerEmbossName": new FormControl("", Validators.required),
                    "ExpireMonth": new FormControl("", Validators.required),
                    "ExpireYear": new FormControl("", Validators.required)
                }
            };
        return formFields;
    }

}

/** Настройки для формы карты */
export interface ICardFormConfig {

    /** Краткая форма */
    isReduced?: boolean;

}
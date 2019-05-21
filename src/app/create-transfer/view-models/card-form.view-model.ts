import { FormControl, Validators } from '@angular/forms';
import { FormViewModel } from 'core-library/core/view-models/form.view-model';
import { CardModel, ICardModel } from 'core-library/core/models/card.model';


const Constants = {
    /** Максимальный возможный срок действия карты, лет (с текущего года) */
    maxDuration: 21,
}

export class CardFormViewModel extends FormViewModel<CardModel> {

    /** Краткая форма карты */
    public IsReducedMode: boolean;
    public Title: string;


    public initialize(config: ICardFormConfig) {
        this.IsReducedMode = config.isReduced;
        this.Title = config.title;
        super.initialize();
    }


    public fromModel(data: CardModel) {
        const expNumber = data.getExplodedNumber();
        this.Form.value.NumberGroup1 = expNumber[0];
        this.Form.value.NumberGroup2 = expNumber[1];
        this.Form.value.NumberGroup3 = expNumber[2];
        this.Form.value.NumberGroup4 = expNumber[3];
        if (!this.IsReducedMode) {
            this.Form.value.ExpireMonth = data.ExpireDate.getMonth() + 1;
            this.Form.value.ExpireYear = data.ExpireDate.getFullYear();
            this.Form.value.OwnerEmbossName = data.OwnerEmbossName;
        }
    }

    public toModel(): CardModel {
        const res: CardModel = new CardModel();
        res.Number = CardModel.implodeNumber([this.Form.value.NumberGroup1, this.Form.value.NumberGroup2, this.Form.value.NumberGroup3, this.Form.value.NumberGroup4]);
        if (!this.IsReducedMode) {
            res.OwnerEmbossName = this.Form.value.OwnerEmbossName;
            res.ExpireDate = CardModel.calculateExpire(this.Form.value.ExpireMonth, this.Form.value.ExpireYear);
        }
        return res;
    }

    public fromData(data: ICardModel) {
        if (!data)
            return;
        this.fromModel(new CardModel(data));
    }

    public toData(): ICardModel {
        return this.toModel().toData();
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

    public getValidYears(): number[] {
        let validYears: number[] = [];
        let currentYear: number = new Date().getFullYear();
        let lastYear: number = currentYear + Constants.maxDuration;
        currentYear = Number(String(currentYear).slice(2));
        lastYear = Number(String(lastYear).slice(2));
        for (let resItem = currentYear; resItem <= lastYear; resItem++) {
            validYears.push(resItem)
        }
        return validYears;
    }

}

/** Настройки для формы карты */
export interface ICardFormConfig {

    /** Заголовок формы */
    title?: string;
    /** Краткая форма */
    isReduced?: boolean;

}
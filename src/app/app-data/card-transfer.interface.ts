import { ICardData } from 'core-library/core/models/card/card.data';

/** Перевод с карты на карту */
export interface ICardTransfer {

    /** Идентификатор платежа */
    id: string;
    /** Карта отправителя */
    cardFrom: ICardData;
    /** Карта получателя */
    cardTo: ICardData;
    /** Сумма перевода */
    amount: number;
    /** Дата документа о переводе */
    docDate?: string;

}

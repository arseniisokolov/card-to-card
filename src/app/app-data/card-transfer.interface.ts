import { ICardModel } from 'core-library/core/models/card.model';

/** Перевод с карты на карту */
export interface ICardTransfer {

    /** Карта отправителя */
    cardFrom: ICardModel;
    /** Карта получателя */
    cardTo: ICardModel;
    /** Сумма перевода */
    amount: number;
    /** Дата документа о переводе */
    docDate?: string;


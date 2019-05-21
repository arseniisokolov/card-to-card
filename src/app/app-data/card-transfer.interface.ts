/** Перевод с карты на карту */
export interface ICardTransfer {

    /** Карта отправителя */
    cardFrom: ICardRequisites;
    /** Карта получателя */
    cardTo: ICardRequisites;
    /** Сумма перевода */
    amount: number;
    /** Дата документа о переводе */
    docDate?: string;

}

/** Карта (в переводе с карты на карту) */
export interface ICardRequisites {

    /** Номер */
    number: string;
    /** Эмбоссированное имя держателя */
    ownerEmbossName?: string;
    /** Срок действия */
    expireDate?: string;

}
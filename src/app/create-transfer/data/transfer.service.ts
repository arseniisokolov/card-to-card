import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorage } from 'core-library/core/services/local-storage';
import { ICardTransfer } from '../../app-data/card-transfer.interface';

@Injectable()
export class TransferService {

    private _localStorage: LocalStorage<ICardTransfer> = new LocalStorage('transfers');

    public send(transfer: ICardTransfer): Observable<void> {
        return new Observable<void>(subscriber =>
            this._localStorage.post([transfer])
                .subscribe(() => subscriber.next())
        );
    }

}


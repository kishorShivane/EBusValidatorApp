import { datepickerAnimation } from 'ngx-bootstrap/datepicker/datepicker-animations';

export class transaction
{
    ID: number;
    CreatedDate: Date;
    TransactionDate: Date;
    CardESN: string;
    BusNumber: string;
    GPSLatitude: string;
    GPSLongitude: string;
    Action: string;
}

export class usageSummary
{
    SurName: string;
    FirstName: string;
    Smartcard: string;
    TotalTagIns: string;
    Kilometers: string;
}

export class SearchParams
{
    FromDate: Date;
    ToDate: Date;
}
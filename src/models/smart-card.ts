export class BaseClass{
    Name: string;
    Surname: string;
    CellPhone: string;   
    EMail: string; 
}

export class SmartCard extends BaseClass  {
    constructor()
    {
        super();
    }
    ID: number;
    SmartcardNumber: string;
    Gender: string;
    CardType: string;
    Number: string;
    Status: boolean;
    Guardians: Guardian[];
}

export class Guardian extends BaseClass{
   RelationShip: string;
   TelePhone: string;
}

export class Transaction
{
    BusNumber: string;
    Driver: string;
    ValidatorSerialNumber: string;
    Date: Date;
    Time: string;
}
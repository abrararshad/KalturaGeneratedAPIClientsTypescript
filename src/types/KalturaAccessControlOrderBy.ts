

import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';

export class KalturaAccessControlOrderBy extends KalturaObjectBase {
    private _value : string;
    constructor( value?:string | number){
        super();
        this._value = value + '';
    }

    equals(obj : this) : boolean
    {
        return obj && obj.toString() === this._value;
    }

    toString(){
        return this._value;
    }

    static createdAtAsc = new KalturaAccessControlOrderBy('+createdAt');
	static createdAtDesc = new KalturaAccessControlOrderBy('-createdAt');
}
KalturaTypesFactory.registerType('KalturaAccessControlOrderBy',KalturaAccessControlOrderBy);
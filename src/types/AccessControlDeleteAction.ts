
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AccessControlDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Access Control Profile by id
**/
export class AccessControlDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : AccessControlDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'accesscontrol' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


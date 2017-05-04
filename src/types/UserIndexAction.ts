
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserIndexActionArgs  extends KalturaRequestArgs {
    id : string;
	shouldUpdate? : boolean;
}

/** 
* Index an entry by id.
**/
export class UserIndexAction extends KalturaRequest<string> {

    id : string;
	shouldUpdate : boolean;

    constructor(data : UserIndexActionArgs)
    {
        super(data, 's', '');
        if (typeof this.shouldUpdate === 'undefined') this.shouldUpdate = true;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user' },
				action : { type : 'c' , default : 'index' },
				id : { type : 's'  },
				shouldUpdate : { type : 'b'  }
            }
        );
        return result;
    }
}


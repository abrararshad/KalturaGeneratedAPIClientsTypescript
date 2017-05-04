
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDataEntry } from './KalturaDataEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DataGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/** 
* Get data entry by ID.
**/
export class DataGetAction extends KalturaRequest<KalturaDataEntry> {

    entryId : string;
	version : number;

    constructor(data : DataGetActionArgs)
    {
        super(data, 'o', 'KalturaDataEntry');
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'data' },
				action : { type : 'c' , default : 'get' },
				entryId : { type : 's'  },
				version : { type : 'n'  }
            }
        );
        return result;
    }
}


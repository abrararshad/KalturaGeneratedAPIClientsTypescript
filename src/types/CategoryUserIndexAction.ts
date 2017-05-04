
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CategoryUserIndexActionArgs  extends KalturaRequestArgs {
    userId : string;
	categoryId : number;
	shouldUpdate? : boolean;
}

/** 
* Index CategoryUser by userid and category id
**/
export class CategoryUserIndexAction extends KalturaRequest<number> {

    userId : string;
	categoryId : number;
	shouldUpdate : boolean;

    constructor(data : CategoryUserIndexActionArgs)
    {
        super(data, 'n', '');
        if (typeof this.shouldUpdate === 'undefined') this.shouldUpdate = true;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'categoryuser' },
				action : { type : 'c' , default : 'index' },
				userId : { type : 's'  },
				categoryId : { type : 'n'  },
				shouldUpdate : { type : 'b'  }
            }
        );
        return result;
    }
}


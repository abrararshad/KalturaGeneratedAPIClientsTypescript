
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	flavorParams : KalturaFlavorParams;
}

/** 
* Update Flavor Params by ID
**/
export class FlavorParamsUpdateAction extends KalturaRequest<KalturaFlavorParams> {

    id : number;
	flavorParams : KalturaFlavorParams;

    constructor(data : FlavorParamsUpdateActionArgs)
    {
        super(data, 'o', 'KalturaFlavorParams');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorparams' },
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				flavorParams : { type : 'o'  , subType : 'KalturaFlavorParams'}
            }
        );
        return result;
    }
}


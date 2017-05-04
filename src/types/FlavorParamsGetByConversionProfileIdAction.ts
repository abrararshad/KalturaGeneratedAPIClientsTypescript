
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFlavorParams } from './KalturaFlavorParams';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorParamsGetByConversionProfileIdActionArgs  extends KalturaRequestArgs {
    conversionProfileId : number;
}

/** 
* Get Flavor Params by Conversion Profile ID
**/
export class FlavorParamsGetByConversionProfileIdAction extends KalturaRequest<KalturaFlavorParams[]> {

    conversionProfileId : number;

    constructor(data : FlavorParamsGetByConversionProfileIdActionArgs)
    {
        super(data, 'a', 'KalturaFlavorParams');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorparams' },
				action : { type : 'c' , default : 'getByConversionProfileId' },
				conversionProfileId : { type : 'n'  }
            }
        );
        return result;
    }
}


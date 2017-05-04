
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete Distribution Profile by id
**/
export class DistributionProfileDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : DistributionProfileDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_distributionprofile' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


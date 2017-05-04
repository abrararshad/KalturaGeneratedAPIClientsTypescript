
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Distribution Profile by id
**/
export class DistributionProfileGetAction extends KalturaRequest<KalturaDistributionProfile> {

    id : number;

    constructor(data : DistributionProfileGetActionArgs)
    {
        super(data, 'o', 'KalturaDistributionProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_distributionprofile' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


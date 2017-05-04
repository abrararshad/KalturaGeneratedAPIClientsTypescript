
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerCountActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPartnerFilter;
}

/** 
* Count partner's existing sub-publishers (count includes the partner itself).
**/
export class PartnerCountAction extends KalturaRequest<number> {

    filter : KalturaPartnerFilter;

    constructor(data? : PartnerCountActionArgs)
    {
        super(data, 'n', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner' },
				action : { type : 'c' , default : 'count' },
				filter : { type : 'o'  , subType : 'KalturaPartnerFilter'}
            }
        );
        return result;
    }
}


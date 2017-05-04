
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDistributionProfileListResponse } from './KalturaDistributionProfileListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DistributionProfileListByPartnerActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPartnerFilter;
	pager? : KalturaFilterPager;
}


export class DistributionProfileListByPartnerAction extends KalturaRequest<KalturaDistributionProfileListResponse> {

    filter : KalturaPartnerFilter;
	pager : KalturaFilterPager;

    constructor(data? : DistributionProfileListByPartnerActionArgs)
    {
        super(data, 'o', 'KalturaDistributionProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_distributionprofile' },
				action : { type : 'c' , default : 'listByPartner' },
				filter : { type : 'o'  , subType : 'KalturaPartnerFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


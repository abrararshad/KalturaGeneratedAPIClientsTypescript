
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerListResponse } from './KalturaPartnerListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PartnerListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPartnerFilter;
	pager? : KalturaFilterPager;
}

/** 
* List partners by filter with paging support   Current implementation will only
* list the sub partners of the partner initiating the api call (using the current
* KS).   This action is only partially implemented to support listing sub partners
* of a VAR partner.
**/
export class PartnerListAction extends KalturaRequest<KalturaPartnerListResponse> {

    filter : KalturaPartnerFilter;
	pager : KalturaFilterPager;

    constructor(data? : PartnerListActionArgs)
    {
        super(data, 'o', 'KalturaPartnerListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'partner' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaPartnerFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


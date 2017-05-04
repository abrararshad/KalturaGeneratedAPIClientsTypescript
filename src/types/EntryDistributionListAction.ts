
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryDistributionListResponse } from './KalturaEntryDistributionListResponse';

import { KalturaEntryDistributionFilter } from './KalturaEntryDistributionFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EntryDistributionListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaEntryDistributionFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all distribution providers
**/
export class EntryDistributionListAction extends KalturaRequest<KalturaEntryDistributionListResponse> {

    filter : KalturaEntryDistributionFilter;
	pager : KalturaFilterPager;

    constructor(data? : EntryDistributionListActionArgs)
    {
        super(data, 'o', 'KalturaEntryDistributionListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_entrydistribution' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaEntryDistributionFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileListResponse } from './KalturaDeliveryProfileListResponse';

import { KalturaDeliveryProfileFilter } from './KalturaDeliveryProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeliveryProfileListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaDeliveryProfileFilter;
	pager? : KalturaFilterPager;
}

/** 
* Retrieve a list of available delivery depends on the filter given
**/
export class DeliveryProfileListAction extends KalturaRequest<KalturaDeliveryProfileListResponse> {

    filter : KalturaDeliveryProfileFilter;
	pager : KalturaFilterPager;

    constructor(data? : DeliveryProfileListActionArgs)
    {
        super(data, 'o', 'KalturaDeliveryProfileListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'deliveryprofile' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaDeliveryProfileFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


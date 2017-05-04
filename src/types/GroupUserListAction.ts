
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUserListResponse } from './KalturaGroupUserListResponse';

import { KalturaGroupUserFilter } from './KalturaGroupUserFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GroupUserListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaGroupUserFilter;
	pager? : KalturaFilterPager;
}

/** 
* List all GroupUsers
**/
export class GroupUserListAction extends KalturaRequest<KalturaGroupUserListResponse> {

    filter : KalturaGroupUserFilter;
	pager : KalturaFilterPager;

    constructor(data? : GroupUserListActionArgs)
    {
        super(data, 'o', 'KalturaGroupUserListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'groupuser' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaGroupUserFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


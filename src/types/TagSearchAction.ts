
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTagListResponse } from './KalturaTagListResponse';

import { KalturaTagFilter } from './KalturaTagFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface TagSearchActionArgs  extends KalturaRequestArgs {
    tagFilter : KalturaTagFilter;
	pager? : KalturaFilterPager;
}


export class TagSearchAction extends KalturaRequest<KalturaTagListResponse> {

    tagFilter : KalturaTagFilter;
	pager : KalturaFilterPager;

    constructor(data : TagSearchActionArgs)
    {
        super(data, 'o', 'KalturaTagListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'tagsearch_tag' },
				action : { type : 'c' , default : 'search' },
				tagFilter : { type : 'o'  , subType : 'KalturaTagFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


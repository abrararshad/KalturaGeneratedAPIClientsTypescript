
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAnnotationListResponse } from './KalturaAnnotationListResponse';

import { KalturaCuePointFilter } from './KalturaCuePointFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnnotationListActionArgs  extends KalturaRequestArgs {
    filter? : KalturaCuePointFilter;
	pager? : KalturaFilterPager;
}

/** 
* List annotation objects by filter and pager
**/
export class AnnotationListAction extends KalturaRequest<KalturaAnnotationListResponse> {

    filter : KalturaCuePointFilter;
	pager : KalturaFilterPager;

    constructor(data? : AnnotationListActionArgs)
    {
        super(data, 'o', 'KalturaAnnotationListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'annotation_annotation' },
				action : { type : 'c' , default : 'list' },
				filter : { type : 'o'  , subType : 'KalturaCuePointFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


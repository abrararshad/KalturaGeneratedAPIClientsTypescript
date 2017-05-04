
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaReportResponse } from './KalturaReportResponse';

import { KalturaAnalyticsFilter } from './KalturaAnalyticsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface AnalyticsQueryActionArgs  extends KalturaRequestArgs {
    filter : KalturaAnalyticsFilter;
	pager? : KalturaFilterPager;
}

/** 
* report query action allows to get a analytics data for specific query
* dimensions, metrics and filters.
**/
export class AnalyticsQueryAction extends KalturaRequest<KalturaReportResponse> {

    filter : KalturaAnalyticsFilter;
	pager : KalturaFilterPager;

    constructor(data : AnalyticsQueryActionArgs)
    {
        super(data, 'o', 'KalturaReportResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'analytics' },
				action : { type : 'c' , default : 'query' },
				filter : { type : 'o'  , subType : 'KalturaAnalyticsFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


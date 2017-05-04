
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';

import { KalturaUiConfFilter } from './KalturaUiConfFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfListTemplatesActionArgs  extends KalturaRequestArgs {
    filter? : KalturaUiConfFilter;
	pager? : KalturaFilterPager;
}

/** 
* retrieve a list of available template UIConfs
**/
export class UiConfListTemplatesAction extends KalturaRequest<KalturaUiConfListResponse> {

    filter : KalturaUiConfFilter;
	pager : KalturaFilterPager;

    constructor(data? : UiConfListTemplatesActionArgs)
    {
        super(data, 'o', 'KalturaUiConfListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uiconf' },
				action : { type : 'c' , default : 'listTemplates' },
				filter : { type : 'o'  , subType : 'KalturaUiConfFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplateListResponse } from './KalturaEventNotificationTemplateListResponse';

import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateListByPartnerActionArgs  extends KalturaRequestArgs {
    filter? : KalturaPartnerFilter;
	pager? : KalturaFilterPager;
}


export class EventNotificationTemplateListByPartnerAction extends KalturaRequest<KalturaEventNotificationTemplateListResponse> {

    filter : KalturaPartnerFilter;
	pager : KalturaFilterPager;

    constructor(data? : EventNotificationTemplateListByPartnerActionArgs)
    {
        super(data, 'o', 'KalturaEventNotificationTemplateListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c' , default : 'listByPartner' },
				filter : { type : 'o'  , subType : 'KalturaPartnerFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'}
            }
        );
        return result;
    }
}


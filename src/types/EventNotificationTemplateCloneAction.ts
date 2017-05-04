
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface EventNotificationTemplateCloneActionArgs  extends KalturaRequestArgs {
    id : number;
	eventNotificationTemplate? : KalturaEventNotificationTemplate;
}

/** 
* This action allows registering to various backend event. Use this action to
* create notifications that will react to events such as new video was uploaded or
* metadata field was updated. To see the list of available event types, call the
* listTemplates action.
**/
export class EventNotificationTemplateCloneAction extends KalturaRequest<KalturaEventNotificationTemplate> {

    id : number;
	eventNotificationTemplate : KalturaEventNotificationTemplate;

    constructor(data : EventNotificationTemplateCloneActionArgs)
    {
        super(data, 'o', 'KalturaEventNotificationTemplate');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'eventnotification_eventnotificationtemplate' },
				action : { type : 'c' , default : 'clone' },
				id : { type : 'n'  },
				eventNotificationTemplate : { type : 'o'  , subType : 'KalturaEventNotificationTemplate'}
            }
        );
        return result;
    }
}


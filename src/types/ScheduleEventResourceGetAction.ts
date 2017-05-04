
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduleEventResourceGetActionArgs  extends KalturaRequestArgs {
    scheduleEventId : number;
	scheduleResourceId : number;
}

/** 
* Retrieve a KalturaScheduleEventResource object by ID
**/
export class ScheduleEventResourceGetAction extends KalturaRequest<KalturaScheduleEventResource> {

    scheduleEventId : number;
	scheduleResourceId : number;

    constructor(data : ScheduleEventResourceGetActionArgs)
    {
        super(data, 'o', 'KalturaScheduleEventResource');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'schedule_scheduleeventresource' },
				action : { type : 'c' , default : 'get' },
				scheduleEventId : { type : 'n'  },
				scheduleResourceId : { type : 'n'  }
            }
        );
        return result;
    }
}


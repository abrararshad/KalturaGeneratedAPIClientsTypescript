
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ScheduledTaskProfileGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Retrieve a scheduled task profile by id
**/
export class ScheduledTaskProfileGetAction extends KalturaRequest<KalturaScheduledTaskProfile> {

    id : number;

    constructor(data : ScheduledTaskProfileGetActionArgs)
    {
        super(data, 'o', 'KalturaScheduledTaskProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'scheduledtask_scheduledtaskprofile' },
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


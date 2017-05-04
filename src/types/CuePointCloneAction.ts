
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCuePoint } from './KalturaCuePoint';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CuePointCloneActionArgs  extends KalturaRequestArgs {
    id : string;
	entryId : string;
}

/** 
* Clone cuePoint with id to given entry
**/
export class CuePointCloneAction extends KalturaRequest<KalturaCuePoint> {

    id : string;
	entryId : string;

    constructor(data : CuePointCloneActionArgs)
    {
        super(data, 'o', 'KalturaCuePoint');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'cuepoint_cuepoint' },
				action : { type : 'c' , default : 'clone' },
				id : { type : 's'  },
				entryId : { type : 's'  }
            }
        );
        return result;
    }
}


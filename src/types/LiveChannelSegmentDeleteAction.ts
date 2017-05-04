
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LiveChannelSegmentDeleteActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Delete live channel segment by id
**/
export class LiveChannelSegmentDeleteAction extends KalturaRequest<void> {

    id : number;

    constructor(data : LiveChannelSegmentDeleteActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livechannelsegment' },
				action : { type : 'c' , default : 'delete' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


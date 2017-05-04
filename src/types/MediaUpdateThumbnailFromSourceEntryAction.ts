
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMediaEntry } from './KalturaMediaEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaUpdateThumbnailFromSourceEntryActionArgs  extends KalturaRequestArgs {
    entryId : string;
	sourceEntryId : string;
	timeOffset : number;
	flavorParamsId? : number;
}

/** 
* Update media entry thumbnail from a different entry by a specified time offset
* (In seconds)   If flavor params id not specified, source flavor will be used by
* default
**/
export class MediaUpdateThumbnailFromSourceEntryAction extends KalturaRequest<KalturaMediaEntry> {

    entryId : string;
	sourceEntryId : string;
	timeOffset : number;
	flavorParamsId : number;

    constructor(data : MediaUpdateThumbnailFromSourceEntryActionArgs)
    {
        super(data, 'o', 'KalturaMediaEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'media' },
				action : { type : 'c' , default : 'updateThumbnailFromSourceEntry' },
				entryId : { type : 's'  },
				sourceEntryId : { type : 's'  },
				timeOffset : { type : 'n'  },
				flavorParamsId : { type : 'n'  }
            }
        );
        return result;
    }
}


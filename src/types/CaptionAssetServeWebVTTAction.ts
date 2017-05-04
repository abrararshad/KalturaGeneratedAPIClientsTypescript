
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetServeWebVTTActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
	segmentDuration? : number;
	segmentIndex? : number;
	localTimestamp? : number;
}

/** 
* Serves caption by its id converting it to segmented WebVTT
**/
export class CaptionAssetServeWebVTTAction extends KalturaRequest<string> {

    captionAssetId : string;
	segmentDuration : number;
	segmentIndex : number;
	localTimestamp : number;

    constructor(data : CaptionAssetServeWebVTTActionArgs)
    {
        super(data, 'f', '');
        if (typeof this.segmentDuration === 'undefined') this.segmentDuration = 30;
		if (typeof this.localTimestamp === 'undefined') this.localTimestamp = 10000;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset' },
				action : { type : 'c' , default : 'serveWebVTT' },
				captionAssetId : { type : 's'  },
				segmentDuration : { type : 'n'  },
				segmentIndex : { type : 'n'  },
				localTimestamp : { type : 'n'  }
            }
        );
        return result;
    }
}


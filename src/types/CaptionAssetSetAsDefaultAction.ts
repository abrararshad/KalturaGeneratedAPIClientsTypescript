
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetSetAsDefaultActionArgs  extends KalturaRequestArgs {
    captionAssetId : string;
}

/** 
* Markss the caption as default and removes that mark from all other caption
* assets of the entry.
**/
export class CaptionAssetSetAsDefaultAction extends KalturaRequest<void> {

    captionAssetId : string;

    constructor(data : CaptionAssetSetAsDefaultActionArgs)
    {
        super(data, 'v', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset' },
				action : { type : 'c' , default : 'setAsDefault' },
				captionAssetId : { type : 's'  }
            }
        );
        return result;
    }
}


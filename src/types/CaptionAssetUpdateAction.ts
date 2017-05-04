
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface CaptionAssetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	captionAsset : KalturaCaptionAsset;
}

/** 
* Update caption asset
**/
export class CaptionAssetUpdateAction extends KalturaRequest<KalturaCaptionAsset> {

    id : string;
	captionAsset : KalturaCaptionAsset;

    constructor(data : CaptionAssetUpdateActionArgs)
    {
        super(data, 'o', 'KalturaCaptionAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'caption_captionasset' },
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				captionAsset : { type : 'o'  , subType : 'KalturaCaptionAsset'}
            }
        );
        return result;
    }
}


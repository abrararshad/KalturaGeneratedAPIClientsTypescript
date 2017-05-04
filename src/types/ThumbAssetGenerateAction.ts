
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaThumbAsset } from './KalturaThumbAsset';

import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ThumbAssetGenerateActionArgs  extends KalturaRequestArgs {
    entryId : string;
	thumbParams : KalturaThumbParams;
	sourceAssetId? : string;
}


export class ThumbAssetGenerateAction extends KalturaRequest<KalturaThumbAsset> {

    entryId : string;
	thumbParams : KalturaThumbParams;
	sourceAssetId : string;

    constructor(data : ThumbAssetGenerateActionArgs)
    {
        super(data, 'o', 'KalturaThumbAsset');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'thumbasset' },
				action : { type : 'c' , default : 'generate' },
				entryId : { type : 's'  },
				thumbParams : { type : 'o'  , subType : 'KalturaThumbParams'},
				sourceAssetId : { type : 's'  }
            }
        );
        return result;
    }
}


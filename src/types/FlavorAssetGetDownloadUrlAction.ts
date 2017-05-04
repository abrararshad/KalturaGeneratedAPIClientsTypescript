
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface FlavorAssetGetDownloadUrlActionArgs  extends KalturaRequestArgs {
    id : string;
	useCdn? : boolean;
}

/** 
* Get download URL for the Flavor Asset
**/
export class FlavorAssetGetDownloadUrlAction extends KalturaRequest<string> {

    id : string;
	useCdn : boolean;

    constructor(data : FlavorAssetGetDownloadUrlActionArgs)
    {
        super(data, 's', '');
        if (typeof this.useCdn === 'undefined') this.useCdn = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'flavorasset' },
				action : { type : 'c' , default : 'getDownloadUrl' },
				id : { type : 's'  },
				useCdn : { type : 'b'  }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UverseClickToOrderGetFeedActionArgs  extends KalturaRequestArgs {
    distributionProfileId : number;
	hash : string;
}


export class UverseClickToOrderGetFeedAction extends KalturaRequest<string> {

    distributionProfileId : number;
	hash : string;

    constructor(data : UverseClickToOrderGetFeedActionArgs)
    {
        super(data, 'f', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uverseclicktoorderdistribution_uverseclicktoorder' },
				action : { type : 'c' , default : 'getFeed' },
				distributionProfileId : { type : 'n'  },
				hash : { type : 's'  }
            }
        );
        return result;
    }
}


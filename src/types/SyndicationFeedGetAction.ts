
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseSyndicationFeed } from './KalturaBaseSyndicationFeed';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SyndicationFeedGetActionArgs  extends KalturaRequestArgs {
    id : string;
}

/** 
* Get Syndication Feed by ID
**/
export class SyndicationFeedGetAction extends KalturaRequest<KalturaBaseSyndicationFeed> {

    id : string;

    constructor(data : SyndicationFeedGetActionArgs)
    {
        super(data, 'o', 'KalturaBaseSyndicationFeed');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'syndicationfeed' },
				action : { type : 'c' , default : 'get' },
				id : { type : 's'  }
            }
        );
        return result;
    }
}


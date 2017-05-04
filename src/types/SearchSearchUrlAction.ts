
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchResult } from './KalturaSearchResult';

import { KalturaMediaType } from './KalturaMediaType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SearchSearchUrlActionArgs  extends KalturaRequestArgs {
    mediaType : KalturaMediaType;
	url : string;
}

/** 
* Search for media given a specific URL   Kaltura supports a searchURL action on
* some of the media providers.   This action will return a KalturaSearchResult
* object based on a given URL (assuming the media provider is supported)
**/
export class SearchSearchUrlAction extends KalturaRequest<KalturaSearchResult> {

    mediaType : KalturaMediaType;
	url : string;

    constructor(data : SearchSearchUrlActionArgs)
    {
        super(data, 'o', 'KalturaSearchResult');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'search' },
				action : { type : 'c' , default : 'searchUrl' },
				mediaType : { type : 'en'  , subType : 'KalturaMediaType'},
				url : { type : 's'  }
            }
        );
        return result;
    }
}


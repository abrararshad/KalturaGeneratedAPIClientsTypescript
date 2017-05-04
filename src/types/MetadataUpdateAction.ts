
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadata } from './KalturaMetadata';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	xmlData? : string;
	version? : number;
}

/** 
* Update an existing metadata object with new XML content
**/
export class MetadataUpdateAction extends KalturaRequest<KalturaMetadata> {

    id : number;
	xmlData : string;
	version : number;

    constructor(data : MetadataUpdateActionArgs)
    {
        super(data, 'o', 'KalturaMetadata');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadata' },
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				xmlData : { type : 's'  },
				version : { type : 'n'  }
            }
        );
        return result;
    }
}


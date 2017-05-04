
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaMetadataProfileFieldListResponse } from './KalturaMetadataProfileFieldListResponse';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MetadataProfileListFieldsActionArgs  extends KalturaRequestArgs {
    metadataProfileId : number;
}

/** 
* List metadata profile fields by metadata profile id
**/
export class MetadataProfileListFieldsAction extends KalturaRequest<KalturaMetadataProfileFieldListResponse> {

    metadataProfileId : number;

    constructor(data : MetadataProfileListFieldsActionArgs)
    {
        super(data, 'o', 'KalturaMetadataProfileFieldListResponse');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'metadata_metadataprofile' },
				action : { type : 'c' , default : 'listFields' },
				metadataProfileId : { type : 'n'  }
            }
        );
        return result;
    }
}


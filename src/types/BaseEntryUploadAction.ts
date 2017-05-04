
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface BaseEntryUploadActionArgs  extends KalturaUploadRequestArgs {
    fileData : File;
}

/** 
* Upload a file to Kaltura, that can be used to create an entry.
**/
export class BaseEntryUploadAction extends KalturaUploadRequest<string> {

    fileData : File;

    constructor(data : BaseEntryUploadActionArgs)
    {
        super(data, 's', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'upload' },
				fileData : { type : 'f'  }
            }
        );
        return result;
    }
}


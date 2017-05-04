
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDocumentEntry } from './KalturaDocumentEntry';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsGetActionArgs  extends KalturaRequestArgs {
    entryId : string;
	version? : number;
}

/** 
* Get document entry by ID.
**/
export class DocumentsGetAction extends KalturaRequest<KalturaDocumentEntry> {

    entryId : string;
	version : number;

    constructor(data : DocumentsGetActionArgs)
    {
        super(data, 'o', 'KalturaDocumentEntry');
        if (typeof this.version === 'undefined') this.version = -1;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'document_documents' },
				action : { type : 'c' , default : 'get' },
				entryId : { type : 's'  },
				version : { type : 'n'  }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDropFolder } from './KalturaDropFolder';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DropFolderGetActionArgs  extends KalturaRequestArgs {
    dropFolderId : number;
}

/** 
* Retrieve a KalturaDropFolder object by ID
**/
export class DropFolderGetAction extends KalturaRequest<KalturaDropFolder> {

    dropFolderId : number;

    constructor(data : DropFolderGetActionArgs)
    {
        super(data, 'o', 'KalturaDropFolder');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'dropfolder_dropfolder' },
				action : { type : 'c' , default : 'get' },
				dropFolderId : { type : 'n'  }
            }
        );
        return result;
    }
}


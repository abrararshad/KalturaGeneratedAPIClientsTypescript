
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPermissionItem } from './KalturaPermissionItem';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PermissionItemAddActionArgs  extends KalturaRequestArgs {
    permissionItem : KalturaPermissionItem;
}

/** 
* Adds a new permission item object to the account.   This action is available
* only to Kaltura system administrators.
**/
export class PermissionItemAddAction extends KalturaRequest<KalturaPermissionItem> {

    permissionItem : KalturaPermissionItem;

    constructor(data : PermissionItemAddActionArgs)
    {
        super(data, 'o', 'KalturaPermissionItem');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'permissionitem' },
				action : { type : 'c' , default : 'add' },
				permissionItem : { type : 'o'  , subType : 'KalturaPermissionItem'}
            }
        );
        return result;
    }
}


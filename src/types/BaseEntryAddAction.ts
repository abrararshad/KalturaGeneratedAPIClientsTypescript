
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaBaseEntry } from './KalturaBaseEntry';

import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface BaseEntryAddActionArgs  extends KalturaRequestArgs {
    entry : KalturaBaseEntry;
	type? : KalturaEntryType;
}

/** 
* Generic add entry, should be used when the uploaded entry type is not known.
**/
export class BaseEntryAddAction extends KalturaRequest<KalturaBaseEntry> {

    entry : KalturaBaseEntry;
	type : KalturaEntryType;

    constructor(data : BaseEntryAddActionArgs)
    {
        super(data, 'o', 'KalturaBaseEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'baseentry' },
				action : { type : 'c' , default : 'add' },
				entry : { type : 'o'  , subType : 'KalturaBaseEntry'},
				type : { type : 'es'  , subType : 'KalturaEntryType'}
            }
        );
        return result;
    }
}


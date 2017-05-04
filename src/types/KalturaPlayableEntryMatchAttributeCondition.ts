
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayableEntryMatchAttribute } from './KalturaPlayableEntryMatchAttribute';
import { KalturaSearchMatchAttributeCondition, KalturaSearchMatchAttributeConditionArgs } from './KalturaSearchMatchAttributeCondition';

export interface KalturaPlayableEntryMatchAttributeConditionArgs  extends KalturaSearchMatchAttributeConditionArgs {
    attribute? : KalturaPlayableEntryMatchAttribute;
}

/** 
* Auto-generated class.  Used to search KalturaPlayableEntry attributes. Use
* KalturaPlayableEntryMatchAttribute enum to provide attribute name. /
**/
export class KalturaPlayableEntryMatchAttributeCondition extends KalturaSearchMatchAttributeCondition {

    attribute : KalturaPlayableEntryMatchAttribute;

    constructor(data? : KalturaPlayableEntryMatchAttributeConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaPlayableEntryMatchAttributeCondition' },
				attribute : { type : 'es'  , subType : 'KalturaPlayableEntryMatchAttribute'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayableEntryMatchAttributeCondition',KalturaPlayableEntryMatchAttributeCondition);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaTaggedObjectType } from './KalturaTaggedObjectType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaTagArgs  extends KalturaObjectBaseArgs {
    
}


export class KalturaTag extends KalturaObjectBase {

    readonly id : number;
	readonly tag : string;
	readonly taggedObjectType : KalturaTaggedObjectType;
	readonly partnerId : number;
	readonly instanceCount : number;
	readonly createdAt : number;
	readonly updatedAt : number;

    constructor(data? : KalturaTagArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaTag' },
				id : { type : 'n'  , readOnly : true},
				tag : { type : 's'  , readOnly : true},
				taggedObjectType : { type : 'es'  , readOnly : true, subType : 'KalturaTaggedObjectType'},
				partnerId : { type : 'n'  , readOnly : true},
				instanceCount : { type : 'n'  , readOnly : true},
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaTag',KalturaTag);

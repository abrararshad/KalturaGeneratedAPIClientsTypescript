
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFileSyncObjectType } from './KalturaFileSyncObjectType';
import { KalturaFileSyncStatus } from './KalturaFileSyncStatus';
import { KalturaFileSyncType } from './KalturaFileSyncType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFileSyncArgs  extends KalturaObjectBaseArgs {
    status? : KalturaFileSyncStatus;
	fileRoot? : string;
	filePath? : string;
}


export class KalturaFileSync extends KalturaObjectBase {

    readonly id : number;
	readonly partnerId : number;
	readonly fileObjectType : KalturaFileSyncObjectType;
	readonly objectId : string;
	readonly version : string;
	readonly objectSubType : number;
	readonly dc : string;
	readonly original : number;
	readonly createdAt : number;
	readonly updatedAt : number;
	readonly readyAt : number;
	readonly syncTime : number;
	status : KalturaFileSyncStatus;
	readonly fileType : KalturaFileSyncType;
	readonly linkedId : number;
	readonly linkCount : number;
	fileRoot : string;
	filePath : string;
	readonly fileSize : number;
	readonly fileUrl : string;
	readonly fileContent : string;
	readonly fileDiscSize : number;
	readonly isCurrentDc : boolean;
	readonly isDir : boolean;
	readonly originalId : number;

    constructor(data? : KalturaFileSyncArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaFileSync' },
				id : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  , readOnly : true},
				fileObjectType : { type : 'es'  , readOnly : true, subType : 'KalturaFileSyncObjectType'},
				objectId : { type : 's'  , readOnly : true},
				version : { type : 's'  , readOnly : true},
				objectSubType : { type : 'n'  , readOnly : true},
				dc : { type : 's'  , readOnly : true},
				original : { type : 'n'  , readOnly : true},
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				readyAt : { type : 'n'  , readOnly : true},
				syncTime : { type : 'n'  , readOnly : true},
				status : { type : 'en'  , subType : 'KalturaFileSyncStatus'},
				fileType : { type : 'en'  , readOnly : true, subType : 'KalturaFileSyncType'},
				linkedId : { type : 'n'  , readOnly : true},
				linkCount : { type : 'n'  , readOnly : true},
				fileRoot : { type : 's'  },
				filePath : { type : 's'  },
				fileSize : { type : 'n'  , readOnly : true},
				fileUrl : { type : 's'  , readOnly : true},
				fileContent : { type : 's'  , readOnly : true},
				fileDiscSize : { type : 'n'  , readOnly : true},
				isCurrentDc : { type : 'b'  , readOnly : true},
				isDir : { type : 'b'  , readOnly : true},
				originalId : { type : 'n'  , readOnly : true}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFileSync',KalturaFileSync);

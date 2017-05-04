
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaMetadataProfileStatus } from './KalturaMetadataProfileStatus';
import { KalturaMetadataProfileCreateMode } from './KalturaMetadataProfileCreateMode';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMetadataProfileBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	partnerIdEqual? : number;
	metadataObjectTypeEqual? : KalturaMetadataObjectType;
	metadataObjectTypeIn? : string;
	versionEqual? : number;
	nameEqual? : string;
	systemNameEqual? : string;
	systemNameIn? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	statusEqual? : KalturaMetadataProfileStatus;
	statusIn? : string;
	createModeEqual? : KalturaMetadataProfileCreateMode;
	createModeNotEqual? : KalturaMetadataProfileCreateMode;
	createModeIn? : string;
	createModeNotIn? : string;
}


export class KalturaMetadataProfileBaseFilter extends KalturaFilter {

    idEqual : number;
	partnerIdEqual : number;
	metadataObjectTypeEqual : KalturaMetadataObjectType;
	metadataObjectTypeIn : string;
	versionEqual : number;
	nameEqual : string;
	systemNameEqual : string;
	systemNameIn : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	statusEqual : KalturaMetadataProfileStatus;
	statusIn : string;
	createModeEqual : KalturaMetadataProfileCreateMode;
	createModeNotEqual : KalturaMetadataProfileCreateMode;
	createModeIn : string;
	createModeNotIn : string;

    constructor(data? : KalturaMetadataProfileBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaMetadataProfileBaseFilter' },
				idEqual : { type : 'n'  },
				partnerIdEqual : { type : 'n'  },
				metadataObjectTypeEqual : { type : 'es'  , subType : 'KalturaMetadataObjectType'},
				metadataObjectTypeIn : { type : 's'  },
				versionEqual : { type : 'n'  },
				nameEqual : { type : 's'  },
				systemNameEqual : { type : 's'  },
				systemNameIn : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				statusEqual : { type : 'en'  , subType : 'KalturaMetadataProfileStatus'},
				statusIn : { type : 's'  },
				createModeEqual : { type : 'en'  , subType : 'KalturaMetadataProfileCreateMode'},
				createModeNotEqual : { type : 'en'  , subType : 'KalturaMetadataProfileCreateMode'},
				createModeIn : { type : 's'  },
				createModeNotIn : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataProfileBaseFilter',KalturaMetadataProfileBaseFilter);

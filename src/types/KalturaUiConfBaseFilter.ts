
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaUiConfCreationMode } from './KalturaUiConfCreationMode';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaUiConfBaseFilterArgs  extends KalturaFilterArgs {
    idEqual? : number;
	idIn? : string;
	nameLike? : string;
	partnerIdEqual? : number;
	partnerIdIn? : string;
	objTypeEqual? : KalturaUiConfObjType;
	objTypeIn? : string;
	tagsMultiLikeOr? : string;
	tagsMultiLikeAnd? : string;
	createdAtGreaterThanOrEqual? : number;
	createdAtLessThanOrEqual? : number;
	updatedAtGreaterThanOrEqual? : number;
	updatedAtLessThanOrEqual? : number;
	creationModeEqual? : KalturaUiConfCreationMode;
	creationModeIn? : string;
	versionEqual? : string;
	versionMultiLikeOr? : string;
	versionMultiLikeAnd? : string;
	partnerTagsMultiLikeOr? : string;
	partnerTagsMultiLikeAnd? : string;
}


export class KalturaUiConfBaseFilter extends KalturaFilter {

    idEqual : number;
	idIn : string;
	nameLike : string;
	partnerIdEqual : number;
	partnerIdIn : string;
	objTypeEqual : KalturaUiConfObjType;
	objTypeIn : string;
	tagsMultiLikeOr : string;
	tagsMultiLikeAnd : string;
	createdAtGreaterThanOrEqual : number;
	createdAtLessThanOrEqual : number;
	updatedAtGreaterThanOrEqual : number;
	updatedAtLessThanOrEqual : number;
	creationModeEqual : KalturaUiConfCreationMode;
	creationModeIn : string;
	versionEqual : string;
	versionMultiLikeOr : string;
	versionMultiLikeAnd : string;
	partnerTagsMultiLikeOr : string;
	partnerTagsMultiLikeAnd : string;

    constructor(data? : KalturaUiConfBaseFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaUiConfBaseFilter' },
				idEqual : { type : 'n'  },
				idIn : { type : 's'  },
				nameLike : { type : 's'  },
				partnerIdEqual : { type : 'n'  },
				partnerIdIn : { type : 's'  },
				objTypeEqual : { type : 'en'  , subType : 'KalturaUiConfObjType'},
				objTypeIn : { type : 's'  },
				tagsMultiLikeOr : { type : 's'  },
				tagsMultiLikeAnd : { type : 's'  },
				createdAtGreaterThanOrEqual : { type : 'n'  },
				createdAtLessThanOrEqual : { type : 'n'  },
				updatedAtGreaterThanOrEqual : { type : 'n'  },
				updatedAtLessThanOrEqual : { type : 'n'  },
				creationModeEqual : { type : 'en'  , subType : 'KalturaUiConfCreationMode'},
				creationModeIn : { type : 's'  },
				versionEqual : { type : 's'  },
				versionMultiLikeOr : { type : 's'  },
				versionMultiLikeAnd : { type : 's'  },
				partnerTagsMultiLikeOr : { type : 's'  },
				partnerTagsMultiLikeAnd : { type : 's'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaUiConfBaseFilter',KalturaUiConfBaseFilter);

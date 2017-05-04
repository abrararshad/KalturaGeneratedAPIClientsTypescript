
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaResponseProfileType } from './KalturaResponseProfileType';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaResponseProfileMapping } from './KalturaResponseProfileMapping';
import { KalturaBaseResponseProfile, KalturaBaseResponseProfileArgs } from './KalturaBaseResponseProfile';

export interface KalturaDetachedResponseProfileArgs  extends KalturaBaseResponseProfileArgs {
    name? : string;
	type? : KalturaResponseProfileType;
	fields? : string;
	filter? : KalturaRelatedFilter;
	pager? : KalturaFilterPager;
	relatedProfiles? : KalturaDetachedResponseProfile[];
	mappings? : KalturaResponseProfileMapping[];
}


export class KalturaDetachedResponseProfile extends KalturaBaseResponseProfile {

    name : string;
	type : KalturaResponseProfileType;
	fields : string;
	filter : KalturaRelatedFilter;
	pager : KalturaFilterPager;
	relatedProfiles : KalturaDetachedResponseProfile[];
	mappings : KalturaResponseProfileMapping[];

    constructor(data? : KalturaDetachedResponseProfileArgs)
    {
        super(data);
        if (typeof this.relatedProfiles === 'undefined') this.relatedProfiles = [];
		if (typeof this.mappings === 'undefined') this.mappings = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDetachedResponseProfile' },
				name : { type : 's'  },
				type : { type : 'en'  , subType : 'KalturaResponseProfileType'},
				fields : { type : 's'  },
				filter : { type : 'o'  , subType : 'KalturaRelatedFilter'},
				pager : { type : 'o'  , subType : 'KalturaFilterPager'},
				relatedProfiles : { type : 'a'  , subType : 'KalturaDetachedResponseProfile'},
				mappings : { type : 'a'  , subType : 'KalturaResponseProfileMapping'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDetachedResponseProfile',KalturaDetachedResponseProfile);


import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaDistributionProfileStatus } from './KalturaDistributionProfileStatus';
import { KalturaDistributionProfileActionStatus } from './KalturaDistributionProfileActionStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaAssetDistributionRule } from './KalturaAssetDistributionRule';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionProfileArgs  extends KalturaObjectBaseArgs {
    providerType? : KalturaDistributionProviderType;
	name? : string;
	status? : KalturaDistributionProfileStatus;
	submitEnabled? : KalturaDistributionProfileActionStatus;
	updateEnabled? : KalturaDistributionProfileActionStatus;
	deleteEnabled? : KalturaDistributionProfileActionStatus;
	reportEnabled? : KalturaDistributionProfileActionStatus;
	autoCreateFlavors? : string;
	autoCreateThumb? : string;
	optionalFlavorParamsIds? : string;
	requiredFlavorParamsIds? : string;
	optionalThumbDimensions? : KalturaDistributionThumbDimensions[];
	requiredThumbDimensions? : KalturaDistributionThumbDimensions[];
	optionalAssetDistributionRules? : KalturaAssetDistributionRule[];
	requiredAssetDistributionRules? : KalturaAssetDistributionRule[];
	sunriseDefaultOffset? : number;
	sunsetDefaultOffset? : number;
	recommendedStorageProfileForDownload? : number;
	recommendedDcForDownload? : number;
	recommendedDcForExecute? : number;
}


export class KalturaDistributionProfile extends KalturaObjectBase {

    readonly id : number;
	readonly createdAt : number;
	readonly updatedAt : number;
	readonly partnerId : number;
	providerType : KalturaDistributionProviderType;
	name : string;
	status : KalturaDistributionProfileStatus;
	submitEnabled : KalturaDistributionProfileActionStatus;
	updateEnabled : KalturaDistributionProfileActionStatus;
	deleteEnabled : KalturaDistributionProfileActionStatus;
	reportEnabled : KalturaDistributionProfileActionStatus;
	autoCreateFlavors : string;
	autoCreateThumb : string;
	optionalFlavorParamsIds : string;
	requiredFlavorParamsIds : string;
	optionalThumbDimensions : KalturaDistributionThumbDimensions[];
	requiredThumbDimensions : KalturaDistributionThumbDimensions[];
	optionalAssetDistributionRules : KalturaAssetDistributionRule[];
	requiredAssetDistributionRules : KalturaAssetDistributionRule[];
	sunriseDefaultOffset : number;
	sunsetDefaultOffset : number;
	recommendedStorageProfileForDownload : number;
	recommendedDcForDownload : number;
	recommendedDcForExecute : number;

    constructor(data? : KalturaDistributionProfileArgs)
    {
        super(data);
        if (typeof this.optionalThumbDimensions === 'undefined') this.optionalThumbDimensions = [];
		if (typeof this.requiredThumbDimensions === 'undefined') this.requiredThumbDimensions = [];
		if (typeof this.optionalAssetDistributionRules === 'undefined') this.optionalAssetDistributionRules = [];
		if (typeof this.requiredAssetDistributionRules === 'undefined') this.requiredAssetDistributionRules = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaDistributionProfile' },
				id : { type : 'n'  , readOnly : true},
				createdAt : { type : 'n'  , readOnly : true},
				updatedAt : { type : 'n'  , readOnly : true},
				partnerId : { type : 'n'  , readOnly : true},
				providerType : { type : 'es'  , subType : 'KalturaDistributionProviderType'},
				name : { type : 's'  },
				status : { type : 'en'  , subType : 'KalturaDistributionProfileStatus'},
				submitEnabled : { type : 'en'  , subType : 'KalturaDistributionProfileActionStatus'},
				updateEnabled : { type : 'en'  , subType : 'KalturaDistributionProfileActionStatus'},
				deleteEnabled : { type : 'en'  , subType : 'KalturaDistributionProfileActionStatus'},
				reportEnabled : { type : 'en'  , subType : 'KalturaDistributionProfileActionStatus'},
				autoCreateFlavors : { type : 's'  },
				autoCreateThumb : { type : 's'  },
				optionalFlavorParamsIds : { type : 's'  },
				requiredFlavorParamsIds : { type : 's'  },
				optionalThumbDimensions : { type : 'a'  , subType : 'KalturaDistributionThumbDimensions'},
				requiredThumbDimensions : { type : 'a'  , subType : 'KalturaDistributionThumbDimensions'},
				optionalAssetDistributionRules : { type : 'a'  , subType : 'KalturaAssetDistributionRule'},
				requiredAssetDistributionRules : { type : 'a'  , subType : 'KalturaAssetDistributionRule'},
				sunriseDefaultOffset : { type : 'n'  },
				sunsetDefaultOffset : { type : 'n'  },
				recommendedStorageProfileForDownload : { type : 'n'  },
				recommendedDcForDownload : { type : 'n'  },
				recommendedDcForExecute : { type : 'n'  }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionProfile',KalturaDistributionProfile);

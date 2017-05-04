
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderUpdateActionArgs  extends KalturaRequestArgs {
    id : number;
	genericDistributionProvider : KalturaGenericDistributionProvider;
}

/** 
* Update Generic Distribution Provider by id
**/
export class GenericDistributionProviderUpdateAction extends KalturaRequest<KalturaGenericDistributionProvider> {

    id : number;
	genericDistributionProvider : KalturaGenericDistributionProvider;

    constructor(data : GenericDistributionProviderUpdateActionArgs)
    {
        super(data, 'o', 'KalturaGenericDistributionProvider');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'contentdistribution_genericdistributionprovider' },
				action : { type : 'c' , default : 'update' },
				id : { type : 'n'  },
				genericDistributionProvider : { type : 'o'  , subType : 'KalturaGenericDistributionProvider'}
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProvider } from './KalturaGenericDistributionProvider';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface GenericDistributionProviderGetActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Get Generic Distribution Provider by id
**/
export class GenericDistributionProviderGetAction extends KalturaRequest<KalturaGenericDistributionProvider> {

    id : number;

    constructor(data : GenericDistributionProviderGetActionArgs)
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
				action : { type : 'c' , default : 'get' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


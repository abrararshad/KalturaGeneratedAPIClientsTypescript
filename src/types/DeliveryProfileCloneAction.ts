
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfile } from './KalturaDeliveryProfile';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DeliveryProfileCloneActionArgs  extends KalturaRequestArgs {
    deliveryId : number;
}

/** 
* Add delivery based on existing delivery.  Must provide valid sourceDeliveryId
**/
export class DeliveryProfileCloneAction extends KalturaRequest<KalturaDeliveryProfile> {

    deliveryId : number;

    constructor(data : DeliveryProfileCloneActionArgs)
    {
        super(data, 'o', 'KalturaDeliveryProfile');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'deliveryprofile' },
				action : { type : 'c' , default : 'clone' },
				deliveryId : { type : 'n'  }
            }
        );
        return result;
    }
}


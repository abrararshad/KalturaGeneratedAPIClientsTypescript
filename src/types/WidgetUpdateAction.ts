
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaWidget } from './KalturaWidget';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface WidgetUpdateActionArgs  extends KalturaRequestArgs {
    id : string;
	widget : KalturaWidget;
}

/** 
* Update exisiting widget
**/
export class WidgetUpdateAction extends KalturaRequest<KalturaWidget> {

    id : string;
	widget : KalturaWidget;

    constructor(data : WidgetUpdateActionArgs)
    {
        super(data, 'o', 'KalturaWidget');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'widget' },
				action : { type : 'c' , default : 'update' },
				id : { type : 's'  },
				widget : { type : 'o'  , subType : 'KalturaWidget'}
            }
        );
        return result;
    }
}


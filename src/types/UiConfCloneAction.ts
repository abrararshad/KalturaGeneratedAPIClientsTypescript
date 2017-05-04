
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConf } from './KalturaUiConf';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UiConfCloneActionArgs  extends KalturaRequestArgs {
    id : number;
}

/** 
* Clone an existing UIConf
**/
export class UiConfCloneAction extends KalturaRequest<KalturaUiConf> {

    id : number;

    constructor(data : UiConfCloneActionArgs)
    {
        super(data, 'o', 'KalturaUiConf');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'uiconf' },
				action : { type : 'c' , default : 'clone' },
				id : { type : 'n'  }
            }
        );
        return result;
    }
}


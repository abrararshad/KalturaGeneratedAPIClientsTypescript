
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface ServerNodeDisableActionArgs  extends KalturaRequestArgs {
    serverNodeId : string;
}

/** 
* Disable server node by id
**/
export class ServerNodeDisableAction extends KalturaRequest<KalturaServerNode> {

    serverNodeId : string;

    constructor(data : ServerNodeDisableActionArgs)
    {
        super(data, 'o', 'KalturaServerNode');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'servernode' },
				action : { type : 'c' , default : 'disable' },
				serverNodeId : { type : 's'  }
            }
        );
        return result;
    }
}


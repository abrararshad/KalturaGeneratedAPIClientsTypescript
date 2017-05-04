
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';

import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SessionImpersonateByKsActionArgs  extends KalturaRequestArgs {
    session : string;
	type? : KalturaSessionType;
	expiry? : number;
	privileges? : string;
}

/** 
* Start an impersonated session with Kaltura's server.   The result KS info
* contains the session key that you should pass to all services that requires a
* ticket.   Type, expiry and privileges won't be changed if they're not set
**/
export class SessionImpersonateByKsAction extends KalturaRequest<KalturaSessionInfo> {

    session : string;
	type : KalturaSessionType;
	expiry : number;
	privileges : string;

    constructor(data : SessionImpersonateByKsActionArgs)
    {
        super(data, 'o', 'KalturaSessionInfo');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'session' },
				action : { type : 'c' , default : 'impersonateByKs' },
				session : { type : 's'  },
				type : { type : 'en'  , subType : 'KalturaSessionType'},
				expiry : { type : 'n'  },
				privileges : { type : 's'  }
            }
        );
        return result;
    }
}


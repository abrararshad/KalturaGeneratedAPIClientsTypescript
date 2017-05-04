
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface UserLoginActionArgs  extends KalturaRequestArgs {
    partnerId : number;
	userId : string;
	password : string;
	expiry? : number;
	privileges? : string;
}

/** 
* Logs a user into a partner account with a partner ID, a partner user ID (puser),
* and a user password.
**/
export class UserLoginAction extends KalturaRequest<string> {

    partnerId : number;
	userId : string;
	password : string;
	expiry : number;
	privileges : string;

    constructor(data : UserLoginActionArgs)
    {
        super(data, 's', '');
        if (typeof this.expiry === 'undefined') this.expiry = 86400;
		if (typeof this.privileges === 'undefined') this.privileges = "*";
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'user' },
				action : { type : 'c' , default : 'login' },
				partnerId : { type : 'n'  },
				userId : { type : 's'  },
				password : { type : 's'  },
				expiry : { type : 'n'  },
				privileges : { type : 's'  }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface SharepointExtensionIsVersionSupportedActionArgs  extends KalturaRequestArgs {
    serverMajor : number;
	serverMinor : number;
	serverBuild : number;
}

/** 
* Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of
* $major.$minor.$build (which is required by the extension)
**/
export class SharepointExtensionIsVersionSupportedAction extends KalturaRequest<boolean> {

    serverMajor : number;
	serverMinor : number;
	serverBuild : number;

    constructor(data : SharepointExtensionIsVersionSupportedActionArgs)
    {
        super(data, 'b', '');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'kalturasharepointextension_sharepointextension' },
				action : { type : 'c' , default : 'isVersionSupported' },
				serverMajor : { type : 'n'  },
				serverMinor : { type : 'n'  },
				serverBuild : { type : 'n'  }
            }
        );
        return result;
    }
}


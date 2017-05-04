
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistAddActionArgs  extends KalturaRequestArgs {
    playlist : KalturaPlaylist;
	updateStats? : boolean;
}

/** 
* Add new playlist   Note that all entries used in a playlist will become public
* and may appear in KalturaNetwork
**/
export class PlaylistAddAction extends KalturaRequest<KalturaPlaylist> {

    playlist : KalturaPlaylist;
	updateStats : boolean;

    constructor(data : PlaylistAddActionArgs)
    {
        super(data, 'o', 'KalturaPlaylist');
        if (typeof this.updateStats === 'undefined') this.updateStats = false;
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist' },
				action : { type : 'c' , default : 'add' },
				playlist : { type : 'o'  , subType : 'KalturaPlaylist'},
				updateStats : { type : 'b'  }
            }
        );
        return result;
    }
}


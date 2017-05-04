
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylist } from './KalturaPlaylist';

import { KalturaPlaylistType } from './KalturaPlaylistType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PlaylistGetStatsFromContentActionArgs  extends KalturaRequestArgs {
    playlistType : KalturaPlaylistType;
	playlistContent : string;
}

/** 
* Retrieve playlist statistics
**/
export class PlaylistGetStatsFromContentAction extends KalturaRequest<KalturaPlaylist> {

    playlistType : KalturaPlaylistType;
	playlistContent : string;

    constructor(data : PlaylistGetStatsFromContentActionArgs)
    {
        super(data, 'o', 'KalturaPlaylist');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'playlist' },
				action : { type : 'c' , default : 'getStatsFromContent' },
				playlistType : { type : 'en'  , subType : 'KalturaPlaylistType'},
				playlistContent : { type : 's'  }
            }
        );
        return result;
    }
}


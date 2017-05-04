
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';

import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';

export interface LiveStreamUpdateOfflineThumbnailJpegActionArgs  extends KalturaUploadRequestArgs {
    entryId : string;
	fileData : File;
}

/** 
* Update live stream entry thumbnail using a raw jpeg file
**/
export class LiveStreamUpdateOfflineThumbnailJpegAction extends KalturaUploadRequest<KalturaLiveStreamEntry> {

    entryId : string;
	fileData : File;

    constructor(data : LiveStreamUpdateOfflineThumbnailJpegActionArgs)
    {
        super(data, 'o', 'KalturaLiveStreamEntry');
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c' , default : 'livestream' },
				action : { type : 'c' , default : 'updateOfflineThumbnailJpeg' },
				entryId : { type : 's'  },
				fileData : { type : 'f'  }
            }
        );
        return result;
    }
}



import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface PollResetVotesActionArgs  extends KalturaRequestArgs {
    pollId : string;
}

/** 
* Get resetVotes Action
**/
export class PollResetVotesAction extends KalturaRequest<void> {

    pollId : string;

    constructor(data : PollResetVotesActionArgs)
    {
        super(data, {responseType : 'v', responseSubType : '', responseConstructor : null });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'poll_poll' },
				action : { type : 'c', default : 'resetVotes' },
				pollId : { type : 's' }
            }
        );
        return result;
    }
}

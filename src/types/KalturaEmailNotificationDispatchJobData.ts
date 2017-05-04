
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEmailNotificationRecipientJobData } from './KalturaEmailNotificationRecipientJobData';
import { KalturaEmailNotificationTemplatePriority } from './KalturaEmailNotificationTemplatePriority';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEventNotificationDispatchJobData, KalturaEventNotificationDispatchJobDataArgs } from './KalturaEventNotificationDispatchJobData';

export interface KalturaEmailNotificationDispatchJobDataArgs  extends KalturaEventNotificationDispatchJobDataArgs {
    fromEmail? : string;
	fromName? : string;
	to? : KalturaEmailNotificationRecipientJobData;
	cc? : KalturaEmailNotificationRecipientJobData;
	bcc? : KalturaEmailNotificationRecipientJobData;
	replyTo? : KalturaEmailNotificationRecipientJobData;
	priority? : KalturaEmailNotificationTemplatePriority;
	confirmReadingTo? : string;
	hostname? : string;
	messageID? : string;
	customHeaders? : KalturaKeyValue[];
}


export class KalturaEmailNotificationDispatchJobData extends KalturaEventNotificationDispatchJobData {

    fromEmail : string;
	fromName : string;
	to : KalturaEmailNotificationRecipientJobData;
	cc : KalturaEmailNotificationRecipientJobData;
	bcc : KalturaEmailNotificationRecipientJobData;
	replyTo : KalturaEmailNotificationRecipientJobData;
	priority : KalturaEmailNotificationTemplatePriority;
	confirmReadingTo : string;
	hostname : string;
	messageID : string;
	customHeaders : KalturaKeyValue[];

    constructor(data? : KalturaEmailNotificationDispatchJobDataArgs)
    {
        super(data);
        if (typeof this.customHeaders === 'undefined') this.customHeaders = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEmailNotificationDispatchJobData' },
				fromEmail : { type : 's'  },
				fromName : { type : 's'  },
				to : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientJobData'},
				cc : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientJobData'},
				bcc : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientJobData'},
				replyTo : { type : 'o'  , subType : 'KalturaEmailNotificationRecipientJobData'},
				priority : { type : 'en'  , subType : 'KalturaEmailNotificationTemplatePriority'},
				confirmReadingTo : { type : 's'  },
				hostname : { type : 's'  },
				messageID : { type : 's'  },
				customHeaders : { type : 'a'  , subType : 'KalturaKeyValue'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationDispatchJobData',KalturaEmailNotificationDispatchJobData);

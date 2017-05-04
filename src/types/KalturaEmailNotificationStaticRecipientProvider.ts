
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEmailNotificationRecipient } from './KalturaEmailNotificationRecipient';
import { KalturaEmailNotificationRecipientProvider, KalturaEmailNotificationRecipientProviderArgs } from './KalturaEmailNotificationRecipientProvider';

export interface KalturaEmailNotificationStaticRecipientProviderArgs  extends KalturaEmailNotificationRecipientProviderArgs {
    emailRecipients? : KalturaEmailNotificationRecipient[];
}

/** 
* API class for recipient provider containing a static list of email recipients.
**/
export class KalturaEmailNotificationStaticRecipientProvider extends KalturaEmailNotificationRecipientProvider {

    emailRecipients : KalturaEmailNotificationRecipient[];

    constructor(data? : KalturaEmailNotificationStaticRecipientProviderArgs)
    {
        super(data);
        if (typeof this.emailRecipients === 'undefined') this.emailRecipients = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaEmailNotificationStaticRecipientProvider' },
				emailRecipients : { type : 'a'  , subType : 'KalturaEmailNotificationRecipient'}
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEmailNotificationStaticRecipientProvider',KalturaEmailNotificationStaticRecipientProvider);

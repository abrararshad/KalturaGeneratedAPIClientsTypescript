
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduleResource, KalturaScheduleResourceArgs } from './KalturaScheduleResource';

export interface KalturaLocationScheduleResourceArgs  extends KalturaScheduleResourceArgs {
    
}


export class KalturaLocationScheduleResource extends KalturaScheduleResource {

    

    constructor(data? : KalturaLocationScheduleResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c' , default : 'KalturaLocationScheduleResource' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaLocationScheduleResource',KalturaLocationScheduleResource);

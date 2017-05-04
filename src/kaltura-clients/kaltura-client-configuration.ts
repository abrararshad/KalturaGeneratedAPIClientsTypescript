


export abstract class KalturaClientConfiguration{

    ks : string;
    partnerId : number;
    public clientTag : string;

    prepareRequestParameters(parameters : any) : any
    {
        if (parameters) {
            if (typeof parameters['ks'] === 'undefined') {
                parameters.ks = this.ks;
            }

            if (typeof parameters['partnerId'] === 'undefined') {
                parameters.partnerId = this.partnerId;
            }
        }

        if (this.clientTag) {
            parameters.clientTag = this.clientTag;
        }

        return parameters;
    }
}

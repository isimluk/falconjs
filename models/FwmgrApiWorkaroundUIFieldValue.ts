/* tslint:disable */
/* eslint-disable */
/**
 * CrowdStrike API Specification
 * Use this API specification as a reference for the API endpoints you can use to interact with your Falcon environment. These endpoints support authentication via OAuth2 and interact with detections and network containment. For detailed usage guides and more information about API endpoints that don\'t yet support OAuth2, see our [documentation inside the Falcon console](https://falcon.crowdstrike.com/support/documentation). To use the APIs described below, combine the base URL with the path shown for each API endpoint. For commercial cloud customers, your base URL is `https://api.crowdstrike.com`. Each API endpoint requires authorization via an OAuth2 token. Your first API request should retrieve an OAuth2 token using the `oauth2/token` endpoint, such as `https://api.crowdstrike.com/oauth2/token`. For subsequent requests, include the OAuth2 token in an HTTP authorization header. Tokens expire after 30 minutes, after which you should make a new token request to continue making API requests.
 *
 * The version of the OpenAPI document: rolling
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface FwmgrApiWorkaroundUIFieldValue
 */
export interface FwmgrApiWorkaroundUIFieldValue {
    /**
     * 
     * @type {string}
     * @memberof FwmgrApiWorkaroundUIFieldValue
     */
    finalValue?: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrApiWorkaroundUIFieldValue
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrApiWorkaroundUIFieldValue
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrApiWorkaroundUIFieldValue
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof FwmgrApiWorkaroundUIFieldValue
     */
    value?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof FwmgrApiWorkaroundUIFieldValue
     */
    values?: Array<string>;
}

export function FwmgrApiWorkaroundUIFieldValueFromJSON(json: any): FwmgrApiWorkaroundUIFieldValue {
    return FwmgrApiWorkaroundUIFieldValueFromJSONTyped(json, false);
}

export function FwmgrApiWorkaroundUIFieldValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): FwmgrApiWorkaroundUIFieldValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'finalValue': !exists(json, 'final_value') ? undefined : json['final_value'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'name': json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function FwmgrApiWorkaroundUIFieldValueToJSON(value?: FwmgrApiWorkaroundUIFieldValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'final_value': value.finalValue,
        'label': value.label,
        'name': value.name,
        'type': value.type,
        'value': value.value,
        'values': value.values,
    };
}

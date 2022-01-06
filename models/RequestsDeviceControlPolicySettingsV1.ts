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
import {
    RequestsDeviceControlPolicyClassSettingsV1,
    RequestsDeviceControlPolicyClassSettingsV1FromJSON,
    RequestsDeviceControlPolicyClassSettingsV1FromJSONTyped,
    RequestsDeviceControlPolicyClassSettingsV1ToJSON,
} from './RequestsDeviceControlPolicyClassSettingsV1';

/**
 * A specific setting to update
 * @export
 * @interface RequestsDeviceControlPolicySettingsV1
 */
export interface RequestsDeviceControlPolicySettingsV1 {
    /**
     * Settings that apply to a USB Class
     * @type {Array<RequestsDeviceControlPolicyClassSettingsV1>}
     * @memberof RequestsDeviceControlPolicySettingsV1
     */
    classes: Array<RequestsDeviceControlPolicyClassSettingsV1>;
    /**
     * Does the end user receives a notification when the policy is violated
     * @type {string}
     * @memberof RequestsDeviceControlPolicySettingsV1
     */
    endUserNotification: RequestsDeviceControlPolicySettingsV1EndUserNotificationEnum;
    /**
     * How is this policy enforced
     * @type {string}
     * @memberof RequestsDeviceControlPolicySettingsV1
     */
    enforcementMode: string;
    /**
     * The id of the setting to update
     * @type {string}
     * @memberof RequestsDeviceControlPolicySettingsV1
     */
    id: string;
}

/**
* @export
* @enum {string}
*/
export enum RequestsDeviceControlPolicySettingsV1EndUserNotificationEnum {
    True = 'TRUE',
    False = 'FALSE'
}

export function RequestsDeviceControlPolicySettingsV1FromJSON(json: any): RequestsDeviceControlPolicySettingsV1 {
    return RequestsDeviceControlPolicySettingsV1FromJSONTyped(json, false);
}

export function RequestsDeviceControlPolicySettingsV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsDeviceControlPolicySettingsV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classes': ((json['classes'] as Array<any>).map(RequestsDeviceControlPolicyClassSettingsV1FromJSON)),
        'endUserNotification': json['end_user_notification'],
        'enforcementMode': json['enforcement_mode'],
        'id': json['id'],
    };
}

export function RequestsDeviceControlPolicySettingsV1ToJSON(value?: RequestsDeviceControlPolicySettingsV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'classes': ((value.classes as Array<any>).map(RequestsDeviceControlPolicyClassSettingsV1ToJSON)),
        'end_user_notification': value.endUserNotification,
        'enforcement_mode': value.enforcementMode,
        'id': value.id,
    };
}

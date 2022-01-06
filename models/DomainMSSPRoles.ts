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
 * @interface DomainMSSPRoles
 */
export interface DomainMSSPRoles {
    /**
     * 
     * @type {string}
     * @memberof DomainMSSPRoles
     */
    cidGroupId: string;
    /**
     * 
     * @type {string}
     * @memberof DomainMSSPRoles
     */
    id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DomainMSSPRoles
     */
    roleIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DomainMSSPRoles
     */
    userGroupId: string;
}

export function DomainMSSPRolesFromJSON(json: any): DomainMSSPRoles {
    return DomainMSSPRolesFromJSONTyped(json, false);
}

export function DomainMSSPRolesFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainMSSPRoles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cidGroupId': json['cid_group_id'],
        'id': json['id'],
        'roleIds': json['role_ids'],
        'userGroupId': json['user_group_id'],
    };
}

export function DomainMSSPRolesToJSON(value?: DomainMSSPRoles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cid_group_id': value.cidGroupId,
        'id': value.id,
        'role_ids': value.roleIds,
        'user_group_id': value.userGroupId,
    };
}

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

import { exists, mapValues } from "../runtime";
/**
 * A specific group to be updated
 * @export
 * @interface RequestsUpdateGroupV1
 */
export interface RequestsUpdateGroupV1 {
    /**
     * The new assignment rule of the group. Note: If the group type is static, this field cannot be updated manually
     * @type {string}
     * @memberof RequestsUpdateGroupV1
     */
    assignmentRule?: string;
    /**
     * The new description of the group
     * @type {string}
     * @memberof RequestsUpdateGroupV1
     */
    description?: string;
    /**
     * The id of the group to update
     * @type {string}
     * @memberof RequestsUpdateGroupV1
     */
    id: string;
    /**
     * The new name of the group
     * @type {string}
     * @memberof RequestsUpdateGroupV1
     */
    name?: string;
}

export function RequestsUpdateGroupV1FromJSON(json: any): RequestsUpdateGroupV1 {
    return RequestsUpdateGroupV1FromJSONTyped(json, false);
}

export function RequestsUpdateGroupV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsUpdateGroupV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        assignmentRule: !exists(json, "assignment_rule") ? undefined : json["assignment_rule"],
        description: !exists(json, "description") ? undefined : json["description"],
        id: json["id"],
        name: !exists(json, "name") ? undefined : json["name"],
    };
}

export function RequestsUpdateGroupV1ToJSON(value?: RequestsUpdateGroupV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        assignment_rule: value.assignmentRule,
        description: value.description,
        id: value.id,
        name: value.name,
    };
}

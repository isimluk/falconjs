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
import { ResponsesHostGroupV1, ResponsesHostGroupV1FromJSON, ResponsesHostGroupV1FromJSONTyped, ResponsesHostGroupV1ToJSON } from "./ResponsesHostGroupV1";
import {
    ResponsesSensorUpdateSettingsV2,
    ResponsesSensorUpdateSettingsV2FromJSON,
    ResponsesSensorUpdateSettingsV2FromJSONTyped,
    ResponsesSensorUpdateSettingsV2ToJSON,
} from "./ResponsesSensorUpdateSettingsV2";

/**
 *
 * @export
 * @interface ResponsesSensorUpdatePolicyV2
 */
export interface ResponsesSensorUpdatePolicyV2 {
    /**
     * The email of the user which created the policy
     * @type {string}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    createdBy: string;
    /**
     * The time at which the policy was created
     * @type {Date}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    createdTimestamp: Date;
    /**
     * The description of a policy. Use this field to provide a high level summary of what this policy enforces
     * @type {string}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    description: string;
    /**
     * If a policy is enabled it will be used during the course of policy evaluation
     * @type {boolean}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    enabled: boolean;
    /**
     * The groups that are currently attached to the policy
     * @type {Array<ResponsesHostGroupV1>}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    groups: Array<ResponsesHostGroupV1>;
    /**
     * The unique id of the policy
     * @type {string}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    id: string;
    /**
     * The email of the user which last modified the policy
     * @type {string}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    modifiedBy: string;
    /**
     * The time at which the policy was last modified
     * @type {Date}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    modifiedTimestamp: Date;
    /**
     * The human readable name of the policy
     * @type {string}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    name: string;
    /**
     * The name of the platform
     * @type {string}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    platformName: ResponsesSensorUpdatePolicyV2PlatformNameEnum;
    /**
     *
     * @type {ResponsesSensorUpdateSettingsV2}
     * @memberof ResponsesSensorUpdatePolicyV2
     */
    settings: ResponsesSensorUpdateSettingsV2;
}

/**
 * @export
 * @enum {string}
 */
export enum ResponsesSensorUpdatePolicyV2PlatformNameEnum {
    Windows = "Windows",
    Mac = "Mac",
    Linux = "Linux",
}

export function ResponsesSensorUpdatePolicyV2FromJSON(json: any): ResponsesSensorUpdatePolicyV2 {
    return ResponsesSensorUpdatePolicyV2FromJSONTyped(json, false);
}

export function ResponsesSensorUpdatePolicyV2FromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponsesSensorUpdatePolicyV2 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        createdBy: json["created_by"],
        createdTimestamp: new Date(json["created_timestamp"]),
        description: json["description"],
        enabled: json["enabled"],
        groups: (json["groups"] as Array<any>).map(ResponsesHostGroupV1FromJSON),
        id: json["id"],
        modifiedBy: json["modified_by"],
        modifiedTimestamp: new Date(json["modified_timestamp"]),
        name: json["name"],
        platformName: json["platform_name"],
        settings: ResponsesSensorUpdateSettingsV2FromJSON(json["settings"]),
    };
}

export function ResponsesSensorUpdatePolicyV2ToJSON(value?: ResponsesSensorUpdatePolicyV2 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        created_by: value.createdBy,
        created_timestamp: value.createdTimestamp.toISOString(),
        description: value.description,
        enabled: value.enabled,
        groups: (value.groups as Array<any>).map(ResponsesHostGroupV1ToJSON),
        id: value.id,
        modified_by: value.modifiedBy,
        modified_timestamp: value.modifiedTimestamp.toISOString(),
        name: value.name,
        platform_name: value.platformName,
        settings: ResponsesSensorUpdateSettingsV2ToJSON(value.settings),
    };
}
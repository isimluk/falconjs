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
 *
 * @export
 * @interface RequestsIoaExclusionCreateReqV1
 */
export interface RequestsIoaExclusionCreateReqV1 {
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    clRegex: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    comment?: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    detectionJson: string;
    /**
     *
     * @type {Array<string>}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    groups: Array<string>;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    ifnRegex: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    patternId: string;
    /**
     *
     * @type {string}
     * @memberof RequestsIoaExclusionCreateReqV1
     */
    patternName: string;
}

export function RequestsIoaExclusionCreateReqV1FromJSON(json: any): RequestsIoaExclusionCreateReqV1 {
    return RequestsIoaExclusionCreateReqV1FromJSONTyped(json, false);
}

export function RequestsIoaExclusionCreateReqV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestsIoaExclusionCreateReqV1 {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        clRegex: json["cl_regex"],
        comment: !exists(json, "comment") ? undefined : json["comment"],
        description: json["description"],
        detectionJson: json["detection_json"],
        groups: json["groups"],
        ifnRegex: json["ifn_regex"],
        name: json["name"],
        patternId: json["pattern_id"],
        patternName: json["pattern_name"],
    };
}

export function RequestsIoaExclusionCreateReqV1ToJSON(value?: RequestsIoaExclusionCreateReqV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cl_regex: value.clRegex,
        comment: value.comment,
        description: value.description,
        detection_json: value.detectionJson,
        groups: value.groups,
        ifn_regex: value.ifnRegex,
        name: value.name,
        pattern_id: value.patternId,
        pattern_name: value.patternName,
    };
}

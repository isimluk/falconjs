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
import { DomainQuota, DomainQuotaFromJSON, DomainQuotaFromJSONTyped, DomainQuotaToJSON } from "./DomainQuota";
import {
    DomainSPAPIQueryVulnerabilitiesPaging,
    DomainSPAPIQueryVulnerabilitiesPagingFromJSON,
    DomainSPAPIQueryVulnerabilitiesPagingFromJSONTyped,
    DomainSPAPIQueryVulnerabilitiesPagingToJSON,
} from "./DomainSPAPIQueryVulnerabilitiesPaging";

/**
 *
 * @export
 * @interface DomainSPAPIQueryVulnerabilitiesMeta
 */
export interface DomainSPAPIQueryVulnerabilitiesMeta {
    /**
     *
     * @type {DomainSPAPIQueryVulnerabilitiesPaging}
     * @memberof DomainSPAPIQueryVulnerabilitiesMeta
     */
    pagination?: DomainSPAPIQueryVulnerabilitiesPaging;
    /**
     *
     * @type {string}
     * @memberof DomainSPAPIQueryVulnerabilitiesMeta
     */
    poweredBy?: string;
    /**
     *
     * @type {number}
     * @memberof DomainSPAPIQueryVulnerabilitiesMeta
     */
    queryTime: number;
    /**
     *
     * @type {DomainQuota}
     * @memberof DomainSPAPIQueryVulnerabilitiesMeta
     */
    quota?: DomainQuota;
    /**
     *
     * @type {string}
     * @memberof DomainSPAPIQueryVulnerabilitiesMeta
     */
    traceId: string;
}

export function DomainSPAPIQueryVulnerabilitiesMetaFromJSON(json: any): DomainSPAPIQueryVulnerabilitiesMeta {
    return DomainSPAPIQueryVulnerabilitiesMetaFromJSONTyped(json, false);
}

export function DomainSPAPIQueryVulnerabilitiesMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSPAPIQueryVulnerabilitiesMeta {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        pagination: !exists(json, "pagination") ? undefined : DomainSPAPIQueryVulnerabilitiesPagingFromJSON(json["pagination"]),
        poweredBy: !exists(json, "powered_by") ? undefined : json["powered_by"],
        queryTime: json["query_time"],
        quota: !exists(json, "quota") ? undefined : DomainQuotaFromJSON(json["quota"]),
        traceId: json["trace_id"],
    };
}

export function DomainSPAPIQueryVulnerabilitiesMetaToJSON(value?: DomainSPAPIQueryVulnerabilitiesMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        pagination: DomainSPAPIQueryVulnerabilitiesPagingToJSON(value.pagination),
        powered_by: value.poweredBy,
        query_time: value.queryTime,
        quota: DomainQuotaToJSON(value.quota),
        trace_id: value.traceId,
    };
}

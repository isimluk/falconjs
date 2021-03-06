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
import { DetectionAggregateThreatIntel, DetectionAggregateThreatIntelFromJSON, DetectionAggregateThreatIntelFromJSONTyped, DetectionAggregateThreatIntelToJSON } from "./DetectionAggregateThreatIntel";

/**
 *
 * @export
 * @interface DomainIOAEventAggregate
 */
export interface DomainIOAEventAggregate {
    /**
     *
     * @type {number}
     * @memberof DomainIOAEventAggregate
     */
    cidSeverity?: number;
    /**
     *
     * @type {number}
     * @memberof DomainIOAEventAggregate
     */
    confidence?: number;
    /**
     *
     * @type {number}
     * @memberof DomainIOAEventAggregate
     */
    count?: number;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIOAEventAggregate
     */
    events?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainIOAEventAggregate
     */
    firstTimestamp?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIOAEventAggregate
     */
    joinKeys?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof DomainIOAEventAggregate
     */
    lastTimestamp?: string;
    /**
     *
     * @type {number}
     * @memberof DomainIOAEventAggregate
     */
    score?: number;
    /**
     *
     * @type {DetectionAggregateThreatIntel}
     * @memberof DomainIOAEventAggregate
     */
    threatintel?: DetectionAggregateThreatIntel;
    /**
     *
     * @type {Array<string>}
     * @memberof DomainIOAEventAggregate
     */
    timestamps?: Array<string>;
}

export function DomainIOAEventAggregateFromJSON(json: any): DomainIOAEventAggregate {
    return DomainIOAEventAggregateFromJSONTyped(json, false);
}

export function DomainIOAEventAggregateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainIOAEventAggregate {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cidSeverity: !exists(json, "cid_severity") ? undefined : json["cid_severity"],
        confidence: !exists(json, "confidence") ? undefined : json["confidence"],
        count: !exists(json, "count") ? undefined : json["count"],
        events: !exists(json, "events") ? undefined : json["events"],
        firstTimestamp: !exists(json, "first_timestamp") ? undefined : json["first_timestamp"],
        joinKeys: !exists(json, "join_keys") ? undefined : json["join_keys"],
        lastTimestamp: !exists(json, "last_timestamp") ? undefined : json["last_timestamp"],
        score: !exists(json, "score") ? undefined : json["score"],
        threatintel: !exists(json, "threatintel") ? undefined : DetectionAggregateThreatIntelFromJSON(json["threatintel"]),
        timestamps: !exists(json, "timestamps") ? undefined : json["timestamps"],
    };
}

export function DomainIOAEventAggregateToJSON(value?: DomainIOAEventAggregate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid_severity: value.cidSeverity,
        confidence: value.confidence,
        count: value.count,
        events: value.events,
        first_timestamp: value.firstTimestamp,
        join_keys: value.joinKeys,
        last_timestamp: value.lastTimestamp,
        score: value.score,
        threatintel: DetectionAggregateThreatIntelToJSON(value.threatintel),
        timestamps: value.timestamps,
    };
}

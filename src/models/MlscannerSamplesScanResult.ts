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
import { MlscannerScannedSample, MlscannerScannedSampleFromJSON, MlscannerScannedSampleFromJSONTyped, MlscannerScannedSampleToJSON } from "./MlscannerScannedSample";

/**
 *
 * @export
 * @interface MlscannerSamplesScanResult
 */
export interface MlscannerSamplesScanResult {
    /**
     *
     * @type {string}
     * @memberof MlscannerSamplesScanResult
     */
    cid: string;
    /**
     *
     * @type {string}
     * @memberof MlscannerSamplesScanResult
     */
    createdTimestamp?: string;
    /**
     *
     * @type {string}
     * @memberof MlscannerSamplesScanResult
     */
    id: string;
    /**
     *
     * @type {Array<MlscannerScannedSample>}
     * @memberof MlscannerSamplesScanResult
     */
    samples: Array<MlscannerScannedSample>;
    /**
     *
     * @type {string}
     * @memberof MlscannerSamplesScanResult
     */
    status: string;
}

export function MlscannerSamplesScanResultFromJSON(json: any): MlscannerSamplesScanResult {
    return MlscannerSamplesScanResultFromJSONTyped(json, false);
}

export function MlscannerSamplesScanResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MlscannerSamplesScanResult {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        cid: json["cid"],
        createdTimestamp: !exists(json, "created_timestamp") ? undefined : json["created_timestamp"],
        id: json["id"],
        samples: (json["samples"] as Array<any>).map(MlscannerScannedSampleFromJSON),
        status: json["status"],
    };
}

export function MlscannerSamplesScanResultToJSON(value?: MlscannerSamplesScanResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        cid: value.cid,
        created_timestamp: value.createdTimestamp,
        id: value.id,
        samples: (value.samples as Array<any>).map(MlscannerScannedSampleToJSON),
        status: value.status,
    };
}

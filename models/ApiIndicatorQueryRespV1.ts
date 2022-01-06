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
    ApiIndicatorsQueryMeta,
    ApiIndicatorsQueryMetaFromJSON,
    ApiIndicatorsQueryMetaFromJSONTyped,
    ApiIndicatorsQueryMetaToJSON,
} from './ApiIndicatorsQueryMeta';
import {
    MsaAPIError,
    MsaAPIErrorFromJSON,
    MsaAPIErrorFromJSONTyped,
    MsaAPIErrorToJSON,
} from './MsaAPIError';

/**
 * 
 * @export
 * @interface ApiIndicatorQueryRespV1
 */
export interface ApiIndicatorQueryRespV1 {
    /**
     * 
     * @type {Array<MsaAPIError>}
     * @memberof ApiIndicatorQueryRespV1
     */
    errors: Array<MsaAPIError>;
    /**
     * 
     * @type {ApiIndicatorsQueryMeta}
     * @memberof ApiIndicatorQueryRespV1
     */
    meta: ApiIndicatorsQueryMeta;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApiIndicatorQueryRespV1
     */
    resources: Array<string>;
}

export function ApiIndicatorQueryRespV1FromJSON(json: any): ApiIndicatorQueryRespV1 {
    return ApiIndicatorQueryRespV1FromJSONTyped(json, false);
}

export function ApiIndicatorQueryRespV1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiIndicatorQueryRespV1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(MsaAPIErrorFromJSON)),
        'meta': ApiIndicatorsQueryMetaFromJSON(json['meta']),
        'resources': json['resources'],
    };
}

export function ApiIndicatorQueryRespV1ToJSON(value?: ApiIndicatorQueryRespV1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ((value.errors as Array<any>).map(MsaAPIErrorToJSON)),
        'meta': ApiIndicatorsQueryMetaToJSON(value.meta),
        'resources': value.resources,
    };
}

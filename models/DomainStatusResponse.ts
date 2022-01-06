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
 * @interface DomainStatusResponse
 */
export interface DomainStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof DomainStatusResponse
     */
    baseCommand?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DomainStatusResponse
     */
    complete: boolean;
    /**
     * 
     * @type {number}
     * @memberof DomainStatusResponse
     */
    sequenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof DomainStatusResponse
     */
    sessionId: string;
    /**
     * 
     * @type {string}
     * @memberof DomainStatusResponse
     */
    stderr: string;
    /**
     * 
     * @type {string}
     * @memberof DomainStatusResponse
     */
    stdout: string;
    /**
     * 
     * @type {string}
     * @memberof DomainStatusResponse
     */
    taskId?: string;
}

export function DomainStatusResponseFromJSON(json: any): DomainStatusResponse {
    return DomainStatusResponseFromJSONTyped(json, false);
}

export function DomainStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseCommand': !exists(json, 'base_command') ? undefined : json['base_command'],
        'complete': json['complete'],
        'sequenceId': !exists(json, 'sequence_id') ? undefined : json['sequence_id'],
        'sessionId': json['session_id'],
        'stderr': json['stderr'],
        'stdout': json['stdout'],
        'taskId': !exists(json, 'task_id') ? undefined : json['task_id'],
    };
}

export function DomainStatusResponseToJSON(value?: DomainStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'base_command': value.baseCommand,
        'complete': value.complete,
        'sequence_id': value.sequenceId,
        'session_id': value.sessionId,
        'stderr': value.stderr,
        'stdout': value.stdout,
        'task_id': value.taskId,
    };
}

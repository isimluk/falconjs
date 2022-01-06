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
import { DomainImage, DomainImageFromJSON, DomainImageFromJSONTyped, DomainImageToJSON } from "./DomainImage";

/**
 *
 * @export
 * @interface DomainSimpleActor
 */
export interface DomainSimpleActor {
    /**
     *
     * @type {number}
     * @memberof DomainSimpleActor
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof DomainSimpleActor
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DomainSimpleActor
     */
    slug?: string;
    /**
     *
     * @type {DomainImage}
     * @memberof DomainSimpleActor
     */
    thumbnail?: DomainImage;
    /**
     *
     * @type {string}
     * @memberof DomainSimpleActor
     */
    url?: string;
}

export function DomainSimpleActorFromJSON(json: any): DomainSimpleActor {
    return DomainSimpleActorFromJSONTyped(json, false);
}

export function DomainSimpleActorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainSimpleActor {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: json["id"],
        name: !exists(json, "name") ? undefined : json["name"],
        slug: !exists(json, "slug") ? undefined : json["slug"],
        thumbnail: !exists(json, "thumbnail") ? undefined : DomainImageFromJSON(json["thumbnail"]),
        url: !exists(json, "url") ? undefined : json["url"],
    };
}

export function DomainSimpleActorToJSON(value?: DomainSimpleActor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        name: value.name,
        slug: value.slug,
        thumbnail: DomainImageToJSON(value.thumbnail),
        url: value.url,
    };
}
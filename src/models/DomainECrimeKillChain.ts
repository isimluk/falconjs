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
 * @interface DomainECrimeKillChain
 */
export interface DomainECrimeKillChain {
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    attribution?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    crimes?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    customers?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    marketing?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    monetization?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextAttribution?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextCrimes?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextCustomers?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextMarketing?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextMonetization?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextServicesOffered?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextServicesUsed?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextTechnicalTradecraft?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    richTextVictims?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    servicesOffered?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    servicesUsed?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    technicalTradecraft?: string;
    /**
     *
     * @type {string}
     * @memberof DomainECrimeKillChain
     */
    victims?: string;
}

export function DomainECrimeKillChainFromJSON(json: any): DomainECrimeKillChain {
    return DomainECrimeKillChainFromJSONTyped(json, false);
}

export function DomainECrimeKillChainFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainECrimeKillChain {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        attribution: !exists(json, "attribution") ? undefined : json["attribution"],
        crimes: !exists(json, "crimes") ? undefined : json["crimes"],
        customers: !exists(json, "customers") ? undefined : json["customers"],
        marketing: !exists(json, "marketing") ? undefined : json["marketing"],
        monetization: !exists(json, "monetization") ? undefined : json["monetization"],
        richTextAttribution: !exists(json, "rich_text_attribution") ? undefined : json["rich_text_attribution"],
        richTextCrimes: !exists(json, "rich_text_crimes") ? undefined : json["rich_text_crimes"],
        richTextCustomers: !exists(json, "rich_text_customers") ? undefined : json["rich_text_customers"],
        richTextMarketing: !exists(json, "rich_text_marketing") ? undefined : json["rich_text_marketing"],
        richTextMonetization: !exists(json, "rich_text_monetization") ? undefined : json["rich_text_monetization"],
        richTextServicesOffered: !exists(json, "rich_text_services_offered") ? undefined : json["rich_text_services_offered"],
        richTextServicesUsed: !exists(json, "rich_text_services_used") ? undefined : json["rich_text_services_used"],
        richTextTechnicalTradecraft: !exists(json, "rich_text_technical_tradecraft") ? undefined : json["rich_text_technical_tradecraft"],
        richTextVictims: !exists(json, "rich_text_victims") ? undefined : json["rich_text_victims"],
        servicesOffered: !exists(json, "services_offered") ? undefined : json["services_offered"],
        servicesUsed: !exists(json, "services_used") ? undefined : json["services_used"],
        technicalTradecraft: !exists(json, "technical_tradecraft") ? undefined : json["technical_tradecraft"],
        victims: !exists(json, "victims") ? undefined : json["victims"],
    };
}

export function DomainECrimeKillChainToJSON(value?: DomainECrimeKillChain | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        attribution: value.attribution,
        crimes: value.crimes,
        customers: value.customers,
        marketing: value.marketing,
        monetization: value.monetization,
        rich_text_attribution: value.richTextAttribution,
        rich_text_crimes: value.richTextCrimes,
        rich_text_customers: value.richTextCustomers,
        rich_text_marketing: value.richTextMarketing,
        rich_text_monetization: value.richTextMonetization,
        rich_text_services_offered: value.richTextServicesOffered,
        rich_text_services_used: value.richTextServicesUsed,
        rich_text_technical_tradecraft: value.richTextTechnicalTradecraft,
        rich_text_victims: value.richTextVictims,
        services_offered: value.servicesOffered,
        services_used: value.servicesUsed,
        technical_tradecraft: value.technicalTradecraft,
        victims: value.victims,
    };
}

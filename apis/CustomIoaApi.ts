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


import * as runtime from '../runtime';
import {
    ApiPatternsResponse,
    ApiPatternsResponseFromJSON,
    ApiPatternsResponseToJSON,
    ApiPlatformsResponse,
    ApiPlatformsResponseFromJSON,
    ApiPlatformsResponseToJSON,
    ApiRuleCreateV1,
    ApiRuleCreateV1FromJSON,
    ApiRuleCreateV1ToJSON,
    ApiRuleGroupCreateRequestV1,
    ApiRuleGroupCreateRequestV1FromJSON,
    ApiRuleGroupCreateRequestV1ToJSON,
    ApiRuleGroupModifyRequestV1,
    ApiRuleGroupModifyRequestV1FromJSON,
    ApiRuleGroupModifyRequestV1ToJSON,
    ApiRuleGroupsResponse,
    ApiRuleGroupsResponseFromJSON,
    ApiRuleGroupsResponseToJSON,
    ApiRuleTypesResponse,
    ApiRuleTypesResponseFromJSON,
    ApiRuleTypesResponseToJSON,
    ApiRuleUpdatesRequestV1,
    ApiRuleUpdatesRequestV1FromJSON,
    ApiRuleUpdatesRequestV1ToJSON,
    ApiRulesGetRequestV1,
    ApiRulesGetRequestV1FromJSON,
    ApiRulesGetRequestV1ToJSON,
    ApiRulesResponse,
    ApiRulesResponseFromJSON,
    ApiRulesResponseToJSON,
    ApiValidationRequestV1,
    ApiValidationRequestV1FromJSON,
    ApiValidationRequestV1ToJSON,
    ApiValidationResponseV1,
    ApiValidationResponseV1FromJSON,
    ApiValidationResponseV1ToJSON,
    MsaQueryResponse,
    MsaQueryResponseFromJSON,
    MsaQueryResponseToJSON,
    MsaReplyMetaOnly,
    MsaReplyMetaOnlyFromJSON,
    MsaReplyMetaOnlyToJSON,
} from '../models';

export interface CreateRuleRequest {
    body: ApiRuleCreateV1;
}

export interface CreateRuleGroupMixin0Request {
    body: ApiRuleGroupCreateRequestV1;
}

export interface DeleteRuleGroupsMixin0Request {
    ids: Array<string>;
    comment?: string;
}

export interface DeleteRulesRequest {
    ruleGroupId: string;
    ids: Array<string>;
    comment?: string;
}

export interface GetPatternsRequest {
    ids: Array<string>;
}

export interface GetPlatformsMixin0Request {
    ids: Array<string>;
}

export interface GetRuleGroupsMixin0Request {
    ids: Array<string>;
}

export interface GetRuleTypesRequest {
    ids: Array<string>;
}

export interface GetRulesGetRequest {
    body: ApiRulesGetRequestV1;
}

export interface GetRulesMixin0Request {
    ids: Array<string>;
}

export interface QueryPatternsRequest {
    offset?: string;
    limit?: number;
}

export interface QueryPlatformsMixin0Request {
    offset?: string;
    limit?: number;
}

export interface QueryRuleGroupsFullRequest {
    sort?: QueryRuleGroupsFullSortEnum;
    filter?: string;
    q?: string;
    offset?: string;
    limit?: number;
}

export interface QueryRuleGroupsMixin0Request {
    sort?: QueryRuleGroupsMixin0SortEnum;
    filter?: string;
    q?: string;
    offset?: string;
    limit?: number;
}

export interface QueryRuleTypesRequest {
    offset?: string;
    limit?: number;
}

export interface QueryRulesMixin0Request {
    sort?: QueryRulesMixin0SortEnum;
    filter?: string;
    q?: string;
    offset?: string;
    limit?: number;
}

export interface UpdateRuleGroupMixin0Request {
    body: ApiRuleGroupModifyRequestV1;
}

export interface UpdateRulesRequest {
    body: ApiRuleUpdatesRequestV1;
}

export interface ValidateRequest {
    body: ApiValidationRequestV1;
}

/**
 * 
 */
export class CustomIoaApi extends runtime.BaseAPI {

    /**
     * Create a rule within a rule group. Returns the rule.
     */
    async createRuleRaw(requestParameters: CreateRuleRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRulesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createRule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rules/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiRuleCreateV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRulesResponseFromJSON(jsonValue));
    }

    /**
     * Create a rule within a rule group. Returns the rule.
     */
    async createRule(body: ApiRuleCreateV1, initOverrides?: RequestInit): Promise<ApiRulesResponse> {
        const response = await this.createRuleRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Create a rule group for a platform with a name and an optional description. Returns the rule group.
     */
    async createRuleGroupMixin0Raw(requestParameters: CreateRuleGroupMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRuleGroupsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createRuleGroupMixin0.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rule-groups/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiRuleGroupCreateRequestV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRuleGroupsResponseFromJSON(jsonValue));
    }

    /**
     * Create a rule group for a platform with a name and an optional description. Returns the rule group.
     */
    async createRuleGroupMixin0(body: ApiRuleGroupCreateRequestV1, initOverrides?: RequestInit): Promise<ApiRuleGroupsResponse> {
        const response = await this.createRuleGroupMixin0Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Delete rule groups by ID.
     */
    async deleteRuleGroupsMixin0Raw(requestParameters: DeleteRuleGroupsMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteRuleGroupsMixin0.');
        }

        const queryParameters: any = {};

        if (requestParameters.comment !== undefined) {
            queryParameters['comment'] = requestParameters.comment;
        }

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rule-groups/v1`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Delete rule groups by ID.
     */
    async deleteRuleGroupsMixin0(ids: Array<string>, comment?: string, initOverrides?: RequestInit): Promise<MsaReplyMetaOnly> {
        const response = await this.deleteRuleGroupsMixin0Raw({ ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Delete rules from a rule group by ID.
     */
    async deleteRulesRaw(requestParameters: DeleteRulesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaReplyMetaOnly>> {
        if (requestParameters.ruleGroupId === null || requestParameters.ruleGroupId === undefined) {
            throw new runtime.RequiredError('ruleGroupId','Required parameter requestParameters.ruleGroupId was null or undefined when calling deleteRules.');
        }

        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling deleteRules.');
        }

        const queryParameters: any = {};

        if (requestParameters.ruleGroupId !== undefined) {
            queryParameters['rule_group_id'] = requestParameters.ruleGroupId;
        }

        if (requestParameters.comment !== undefined) {
            queryParameters['comment'] = requestParameters.comment;
        }

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rules/v1`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaReplyMetaOnlyFromJSON(jsonValue));
    }

    /**
     * Delete rules from a rule group by ID.
     */
    async deleteRules(ruleGroupId: string, ids: Array<string>, comment?: string, initOverrides?: RequestInit): Promise<MsaReplyMetaOnly> {
        const response = await this.deleteRulesRaw({ ruleGroupId: ruleGroupId, ids: ids, comment: comment }, initOverrides);
        return await response.value();
    }

    /**
     * Get pattern severities by ID.
     */
    async getPatternsRaw(requestParameters: GetPatternsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiPatternsResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getPatterns.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/pattern-severities/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiPatternsResponseFromJSON(jsonValue));
    }

    /**
     * Get pattern severities by ID.
     */
    async getPatterns(ids: Array<string>, initOverrides?: RequestInit): Promise<ApiPatternsResponse> {
        const response = await this.getPatternsRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get platforms by ID.
     */
    async getPlatformsMixin0Raw(requestParameters: GetPlatformsMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiPlatformsResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getPlatformsMixin0.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/platforms/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiPlatformsResponseFromJSON(jsonValue));
    }

    /**
     * Get platforms by ID.
     */
    async getPlatformsMixin0(ids: Array<string>, initOverrides?: RequestInit): Promise<ApiPlatformsResponse> {
        const response = await this.getPlatformsMixin0Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get rule groups by ID.
     */
    async getRuleGroupsMixin0Raw(requestParameters: GetRuleGroupsMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRuleGroupsResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getRuleGroupsMixin0.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rule-groups/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRuleGroupsResponseFromJSON(jsonValue));
    }

    /**
     * Get rule groups by ID.
     */
    async getRuleGroupsMixin0(ids: Array<string>, initOverrides?: RequestInit): Promise<ApiRuleGroupsResponse> {
        const response = await this.getRuleGroupsMixin0Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get rule types by ID.
     */
    async getRuleTypesRaw(requestParameters: GetRuleTypesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRuleTypesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getRuleTypes.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rule-types/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRuleTypesResponseFromJSON(jsonValue));
    }

    /**
     * Get rule types by ID.
     */
    async getRuleTypes(ids: Array<string>, initOverrides?: RequestInit): Promise<ApiRuleTypesResponse> {
        const response = await this.getRuleTypesRaw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get rules by ID and optionally version in the following format: `ID[:version]`.
     */
    async getRulesGetRaw(requestParameters: GetRulesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRulesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getRulesGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rules/GET/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiRulesGetRequestV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRulesResponseFromJSON(jsonValue));
    }

    /**
     * Get rules by ID and optionally version in the following format: `ID[:version]`.
     */
    async getRulesGet(body: ApiRulesGetRequestV1, initOverrides?: RequestInit): Promise<ApiRulesResponse> {
        const response = await this.getRulesGetRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Get rules by ID and optionally version in the following format: `ID[:version]`. The max number of IDs is constrained by URL size.
     */
    async getRulesMixin0Raw(requestParameters: GetRulesMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRulesResponse>> {
        if (requestParameters.ids === null || requestParameters.ids === undefined) {
            throw new runtime.RequiredError('ids','Required parameter requestParameters.ids was null or undefined when calling getRulesMixin0.');
        }

        const queryParameters: any = {};

        if (requestParameters.ids) {
            queryParameters['ids'] = requestParameters.ids;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rules/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRulesResponseFromJSON(jsonValue));
    }

    /**
     * Get rules by ID and optionally version in the following format: `ID[:version]`. The max number of IDs is constrained by URL size.
     */
    async getRulesMixin0(ids: Array<string>, initOverrides?: RequestInit): Promise<ApiRulesResponse> {
        const response = await this.getRulesMixin0Raw({ ids: ids }, initOverrides);
        return await response.value();
    }

    /**
     * Get all pattern severity IDs.
     */
    async queryPatternsRaw(requestParameters: QueryPatternsRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/queries/pattern-severities/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get all pattern severity IDs.
     */
    async queryPatterns(offset?: string, limit?: number, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryPatternsRaw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Get all platform IDs.
     */
    async queryPlatformsMixin0Raw(requestParameters: QueryPlatformsMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/queries/platforms/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get all platform IDs.
     */
    async queryPlatformsMixin0(offset?: string, limit?: number, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryPlatformsMixin0Raw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Find all rule groups matching the query with optional filter.
     */
    async queryRuleGroupsFullRaw(requestParameters: QueryRuleGroupsFullRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/queries/rule-groups-full/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Find all rule groups matching the query with optional filter.
     */
    async queryRuleGroupsFull(sort?: QueryRuleGroupsFullSortEnum, filter?: string, q?: string, offset?: string, limit?: number, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryRuleGroupsFullRaw({ sort: sort, filter: filter, q: q, offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Finds all rule group IDs matching the query with optional filter.
     */
    async queryRuleGroupsMixin0Raw(requestParameters: QueryRuleGroupsMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/queries/rule-groups/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Finds all rule group IDs matching the query with optional filter.
     */
    async queryRuleGroupsMixin0(sort?: QueryRuleGroupsMixin0SortEnum, filter?: string, q?: string, offset?: string, limit?: number, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryRuleGroupsMixin0Raw({ sort: sort, filter: filter, q: q, offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Get all rule type IDs.
     */
    async queryRuleTypesRaw(requestParameters: QueryRuleTypesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/queries/rule-types/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Get all rule type IDs.
     */
    async queryRuleTypes(offset?: string, limit?: number, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryRuleTypesRaw({ offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Finds all rule IDs matching the query with optional filter.
     */
    async queryRulesMixin0Raw(requestParameters: QueryRulesMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MsaQueryResponse>> {
        const queryParameters: any = {};

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['filter'] = requestParameters.filter;
        }

        if (requestParameters.q !== undefined) {
            queryParameters['q'] = requestParameters.q;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:read"]);
        }

        const response = await this.request({
            path: `/ioarules/queries/rules/v1`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MsaQueryResponseFromJSON(jsonValue));
    }

    /**
     * Finds all rule IDs matching the query with optional filter.
     */
    async queryRulesMixin0(sort?: QueryRulesMixin0SortEnum, filter?: string, q?: string, offset?: string, limit?: number, initOverrides?: RequestInit): Promise<MsaQueryResponse> {
        const response = await this.queryRulesMixin0Raw({ sort: sort, filter: filter, q: q, offset: offset, limit: limit }, initOverrides);
        return await response.value();
    }

    /**
     * Update a rule group. The following properties can be modified: name, description, enabled.
     */
    async updateRuleGroupMixin0Raw(requestParameters: UpdateRuleGroupMixin0Request, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRuleGroupsResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateRuleGroupMixin0.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rule-groups/v1`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ApiRuleGroupModifyRequestV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRuleGroupsResponseFromJSON(jsonValue));
    }

    /**
     * Update a rule group. The following properties can be modified: name, description, enabled.
     */
    async updateRuleGroupMixin0(body: ApiRuleGroupModifyRequestV1, initOverrides?: RequestInit): Promise<ApiRuleGroupsResponse> {
        const response = await this.updateRuleGroupMixin0Raw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Update rules within a rule group. Return the updated rules.
     */
    async updateRulesRaw(requestParameters: UpdateRulesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiRulesResponse>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateRules.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rules/v1`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ApiRuleUpdatesRequestV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiRulesResponseFromJSON(jsonValue));
    }

    /**
     * Update rules within a rule group. Return the updated rules.
     */
    async updateRules(body: ApiRuleUpdatesRequestV1, initOverrides?: RequestInit): Promise<ApiRulesResponse> {
        const response = await this.updateRulesRaw({ body: body }, initOverrides);
        return await response.value();
    }

    /**
     * Validates field values and checks for matches if a test string is provided.
     */
    async validateRaw(requestParameters: ValidateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ApiValidationResponseV1>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling validate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", ["custom-ioa:write"]);
        }

        const response = await this.request({
            path: `/ioarules/entities/rules/validate/v1`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApiValidationRequestV1ToJSON(requestParameters.body),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiValidationResponseV1FromJSON(jsonValue));
    }

    /**
     * Validates field values and checks for matches if a test string is provided.
     */
    async validate(body: ApiValidationRequestV1, initOverrides?: RequestInit): Promise<ApiValidationResponseV1> {
        const response = await this.validateRaw({ body: body }, initOverrides);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum QueryRuleGroupsFullSortEnum {
    CreatedBy = 'created_by',
    CreatedOn = 'created_on',
    Description = 'description',
    Enabled = 'enabled',
    ModifiedBy = 'modified_by',
    ModifiedOn = 'modified_on',
    Name = 'name'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryRuleGroupsMixin0SortEnum {
    CreatedBy = 'created_by',
    CreatedOn = 'created_on',
    Description = 'description',
    Enabled = 'enabled',
    ModifiedBy = 'modified_by',
    ModifiedOn = 'modified_on',
    Name = 'name'
}
/**
    * @export
    * @enum {string}
    */
export enum QueryRulesMixin0SortEnum {
    CreatedBy = 'rules.created_by',
    CreatedOn = 'rules.created_on',
    CurrentVersionActionLabel = 'rules.current_version.action_label',
    CurrentVersionDescription = 'rules.current_version.description',
    CurrentVersionModifiedBy = 'rules.current_version.modified_by',
    CurrentVersionModifiedOn = 'rules.current_version.modified_on',
    CurrentVersionName = 'rules.current_version.name',
    CurrentVersionPatternSeverity = 'rules.current_version.pattern_severity',
    Enabled = 'rules.enabled',
    RuletypeName = 'rules.ruletype_name'
}
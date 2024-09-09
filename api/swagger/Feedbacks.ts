/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { GetFeedbacksFiltersResponse, GetFeedbacksListRequest, GetFeedbacksListResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Feedbacks<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name GetFeedbacksFilters
   * @request POST:/feedbacks/get_feedbacks_filters/
   */
  getFeedbacksFilters = (params: RequestParams = {}) =>
    this.request<GetFeedbacksFiltersResponse, any>({
      path: `/feedbacks/get_feedbacks_filters/`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @name GetFeedbacksList
   * @request POST:/feedbacks/get_feedbacks_list/
   */
  getFeedbacksList = (data: GetFeedbacksListRequest, params: RequestParams = {}) =>
    this.request<GetFeedbacksListResponse, any>({
      path: `/feedbacks/get_feedbacks_list/`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}

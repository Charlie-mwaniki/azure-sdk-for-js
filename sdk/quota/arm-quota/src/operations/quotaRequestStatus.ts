/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { QuotaRequestStatus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureQuotaExtensionAPI } from "../azureQuotaExtensionAPI";
import {
  QuotaRequestDetails,
  QuotaRequestStatusListNextOptionalParams,
  QuotaRequestStatusListOptionalParams,
  QuotaRequestStatusGetOptionalParams,
  QuotaRequestStatusGetResponse,
  QuotaRequestStatusListResponse,
  QuotaRequestStatusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing QuotaRequestStatus operations. */
export class QuotaRequestStatusImpl implements QuotaRequestStatus {
  private readonly client: AzureQuotaExtensionAPI;

  /**
   * Initialize a new instance of the class QuotaRequestStatus class.
   * @param client Reference to the service client
   */
  constructor(client: AzureQuotaExtensionAPI) {
    this.client = client;
  }

  /**
   * For the specified scope, get the current quota requests for a one year period ending at the time is
   * made. Use the **oData** filter to select quota requests.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    options?: QuotaRequestStatusListOptionalParams
  ): PagedAsyncIterableIterator<QuotaRequestDetails> {
    const iter = this.listPagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(scope, options);
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    options?: QuotaRequestStatusListOptionalParams
  ): AsyncIterableIterator<QuotaRequestDetails[]> {
    let result = await this._list(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    scope: string,
    options?: QuotaRequestStatusListOptionalParams
  ): AsyncIterableIterator<QuotaRequestDetails> {
    for await (const page of this.listPagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get the quota request details and status by quota request ID for the resources of the resource
   * provider at a specific location. The quota request ID **id** is returned in the response of the PUT
   * operation.
   * @param id Quota request ID.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  get(
    id: string,
    scope: string,
    options?: QuotaRequestStatusGetOptionalParams
  ): Promise<QuotaRequestStatusGetResponse> {
    return this.client.sendOperationRequest(
      { id, scope, options },
      getOperationSpec
    );
  }

  /**
   * For the specified scope, get the current quota requests for a one year period ending at the time is
   * made. Use the **oData** filter to select quota requests.
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    options?: QuotaRequestStatusListOptionalParams
  ): Promise<QuotaRequestStatusListResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The target Azure resource URI. For example,
   *              `/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/qms-test/providers/Microsoft.Batch/batchAccounts/testAccount/`.
   *              This is the target Azure resource URI for the List GET operation. If a `{resourceName}` is added
   *              after `/quotas`, then it's the target Azure resource URI in the GET operation for the specific
   *              resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    nextLink: string,
    options?: QuotaRequestStatusListNextOptionalParams
  ): Promise<QuotaRequestStatusListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Quota/quotaRequests/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetails
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope, Parameters.id],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Quota/quotaRequests",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetailsList
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skiptoken
  ],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QuotaRequestDetailsList
    },
    default: {
      bodyMapper: Mappers.ExceptionResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skiptoken
  ],
  urlParameters: [Parameters.$host, Parameters.scope, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};

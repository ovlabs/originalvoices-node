// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Create a new audience with title and prompt
   */
  create(body: AudienceCreateParams, options?: RequestOptions): APIPromise<AudienceCreateResponse> {
    return this._client.post('/v1/audiences', { body, ...options });
  }

  /**
   * Update the title of an audience
   */
  update(
    id: string,
    body: AudienceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AudienceUpdateResponse> {
    return this._client.patch(path`/v1/audiences/${id}`, { body, ...options });
  }

  /**
   * List all audiences owned by the authenticated organization
   */
  list(options?: RequestOptions): APIPromise<AudienceListResponse> {
    return this._client.get('/v1/audiences', options);
  }

  /**
   * Delete an audience
   */
  delete(id: string, options?: RequestOptions): APIPromise<AudienceDeleteResponse> {
    return this._client.delete(path`/v1/audiences/${id}`, options);
  }
}

export interface AudienceCreateResponse {
  data: AudienceCreateResponse.Data;

  error: null;

  requestId: string;
}

export namespace AudienceCreateResponse {
  export interface Data {
    id: string;

    title: string;
  }
}

export interface AudienceUpdateResponse {
  data: AudienceUpdateResponse.Data;

  error: null;

  requestId: string;
}

export namespace AudienceUpdateResponse {
  export interface Data {
    id: string;

    title: string;
  }
}

export interface AudienceListResponse {
  data: AudienceListResponse.Data;

  error: null;

  requestId: string;
}

export namespace AudienceListResponse {
  export interface Data {
    audiences: Array<Data.Audience>;
  }

  export namespace Data {
    export interface Audience {
      id: string;

      prompt: string;

      title: string;
    }
  }
}

export interface AudienceDeleteResponse {
  data: AudienceDeleteResponse.Data;

  error: null;

  requestId: string;
}

export namespace AudienceDeleteResponse {
  export interface Data {
    success: boolean;
  }
}

export interface AudienceCreateParams {
  prompt: string;

  title: string;
}

export interface AudienceUpdateParams {
  title: string;
}

export declare namespace Audiences {
  export {
    type AudienceCreateResponse as AudienceCreateResponse,
    type AudienceUpdateResponse as AudienceUpdateResponse,
    type AudienceListResponse as AudienceListResponse,
    type AudienceDeleteResponse as AudienceDeleteResponse,
    type AudienceCreateParams as AudienceCreateParams,
    type AudienceUpdateParams as AudienceUpdateParams,
  };
}

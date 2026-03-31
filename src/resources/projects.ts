// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Projects extends APIResource {
  /**
   * List all audiences owned by the authenticated organization
   */
  list(options?: RequestOptions): APIPromise<ProjectListResponse> {
    return this._client.get('/v1/audiences', options);
  }
}

export interface ProjectListResponse {
  data: ProjectListResponse.Data;

  error: null;

  requestId: string;
}

export namespace ProjectListResponse {
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

export declare namespace Projects {
  export { type ProjectListResponse as ProjectListResponse };
}

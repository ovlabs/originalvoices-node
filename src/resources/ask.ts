// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ask extends APIResource {
  /**
   * Ask a question to a specific audience and get summary and themes
   */
  create(body: AskCreateParams, options?: RequestOptions): APIPromise<AskCreateResponse> {
    return this._client.post('/v1/ask', { body, ...options });
  }
}

export interface AskCreateResponse {
  data: AskCreateResponse.Data;

  error: null;

  requestId: string;
}

export namespace AskCreateResponse {
  export interface Data {
    summary: string;

    themes: Array<Data.Theme>;
  }

  export namespace Data {
    export interface Theme {
      prevalence: number;

      summary: string;

      title: string;
    }
  }
}

export interface AskCreateParams {
  question: string;

  audienceId?: string;

  audiencePrompt?: string;
}

export declare namespace Ask {
  export { type AskCreateResponse as AskCreateResponse, type AskCreateParams as AskCreateParams };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ask extends APIResource {
  /**
   * Ask a choices question to the audience and get summary and themes
   */
  choices(body: AskChoicesParams, options?: RequestOptions): APIPromise<AskChoicesResponse> {
    return this._client.post('/v1/ask/choices', { body, ...options });
  }

  /**
   * Ask an open-ended question to the audience and get raw answers
   */
  open(body: AskOpenParams | null | undefined = {}, options?: RequestOptions): APIPromise<AskOpenResponse> {
    return this._client.post('/v1/ask/open', { body, ...options });
  }
}

export interface AskChoicesResponse {
  data: AskChoicesResponse.Data;

  requestId: string;
}

export namespace AskChoicesResponse {
  export interface Data {
    choices: Array<Data.Choice>;
  }

  export namespace Data {
    export interface Choice {
      choice: string;

      percentage: number;
    }
  }
}

export interface AskOpenResponse {
  data: AskOpenResponse.Data;

  error: null;

  requestId: string;
}

export namespace AskOpenResponse {
  export interface Data {
    answers: Array<Data.Answer>;
  }

  export namespace Data {
    export interface Answer {
      answer: string;
    }
  }
}

export interface AskChoicesParams {
  choices: Array<string>;

  isMultipleChoice: boolean;

  question: string;

  audienceId?: string;

  audiencePrompt?: string;

  sampleSize?: 'low' | 'medium' | 'high';
}

export interface AskOpenParams {
  audienceId?: string;

  audiencePrompt?: string;

  question?: string;

  questions?: Array<string>;

  sampleSize?: 'low' | 'medium' | 'high';
}

export declare namespace Ask {
  export {
    type AskChoicesResponse as AskChoicesResponse,
    type AskOpenResponse as AskOpenResponse,
    type AskChoicesParams as AskChoicesParams,
    type AskOpenParams as AskOpenParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Topic extends APIResource {
  /**
   * Generate topic insights for a specific audience and topic
   */
  generateInsights(
    body: TopicGenerateInsightsParams,
    options?: RequestOptions,
  ): APIPromise<TopicGenerateInsightsResponse> {
    return this._client.post('/v1/topic', { body, ...options });
  }
}

export interface TopicGenerateInsightsResponse {
  data: TopicGenerateInsightsResponse.Data;

  error: null;

  requestId: string;
}

export namespace TopicGenerateInsightsResponse {
  export interface Data {
    questions: Array<Data.Question>;
  }

  export namespace Data {
    export interface Question {
      question: string;

      summary: string;

      themes: Array<Question.Theme>;
    }

    export namespace Question {
      export interface Theme {
        prevalence: number;

        summary: string;

        title: string;
      }
    }
  }
}

export interface TopicGenerateInsightsParams {
  topic: string;

  audienceId?: string;

  audiencePrompt?: string;
}

export declare namespace Topic {
  export {
    type TopicGenerateInsightsResponse as TopicGenerateInsightsResponse,
    type TopicGenerateInsightsParams as TopicGenerateInsightsParams,
  };
}

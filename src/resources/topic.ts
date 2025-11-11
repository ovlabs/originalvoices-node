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

/**
 * Successful response with topic insights
 */
export interface TopicGenerateInsightsResponse {
  questions?: Array<TopicGenerateInsightsResponse.Question>;

  summary?: string;

  twins?: Array<TopicGenerateInsightsResponse.Twin>;
}

export namespace TopicGenerateInsightsResponse {
  export interface Question {
    insights?: Array<Question.Insight>;

    question?: string;

    topic?: string;
  }

  export namespace Question {
    export interface Insight {
      guidance?: string;

      mentionedPercentage?: number;

      selectAnswers?: Array<Insight.SelectAnswer>;

      summary?: string;

      title?: string;
    }

    export namespace Insight {
      export interface SelectAnswer {
        answer?: string;

        twinId?: string;
      }
    }
  }

  export interface Twin {
    id?: string;

    demographics?: Twin.Demographics;
  }

  export namespace Twin {
    export interface Demographics {
      age?: number;

      country?: string;

      gender?: string;
    }
  }
}

export interface TopicGenerateInsightsParams {
  audience: string;

  topic: string;
}

export declare namespace Topic {
  export {
    type TopicGenerateInsightsResponse as TopicGenerateInsightsResponse,
    type TopicGenerateInsightsParams as TopicGenerateInsightsParams,
  };
}

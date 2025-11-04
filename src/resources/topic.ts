// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Topic extends APIResource {
  /**
   * Returns topic insights including summary, questions with insights, and twin
   * demographics
   *
   * @example
   * ```ts
   * const response = await client.topic.generateInsights({
   *   audience: 'UK, 18-32, men interested in sports and padel',
   *   topic: 'New Padel courts in Surrey',
   * });
   * ```
   */
  generateInsights(
    body: TopicGenerateInsightsParams,
    options?: RequestOptions,
  ): APIPromise<TopicGenerateInsightsResponse> {
    return this._client.post('/v1/topic', { body, ...options });
  }
}

export interface TopicGenerateInsightsResponse {
  questions: Array<TopicGenerateInsightsResponse.Question>;

  /**
   * Overall summary of the topic insights
   */
  summary: string;

  twins: Array<TopicGenerateInsightsResponse.Twin>;
}

export namespace TopicGenerateInsightsResponse {
  export interface Question {
    insights: Array<Question.Insight>;

    /**
     * The question that was analyzed
     */
    question: string;

    /**
     * The topic category
     */
    topic: string;
  }

  export namespace Question {
    export interface Insight {
      /**
       * Actionable guidance
       */
      guidance: string;

      /**
       * Percentage of responses mentioning this insight
       */
      mentionedPercentage: number;

      selectAnswers: Array<Insight.SelectAnswer>;

      /**
       * Insight summary
       */
      summary: string;

      /**
       * Insight title
       */
      title: string;
    }

    export namespace Insight {
      export interface SelectAnswer {
        /**
         * Example answer illustrating the insight
         */
        answer: string;

        /**
         * ID of the twin providing the answer
         */
        twinId: string;
      }
    }
  }

  export interface Twin {
    /**
     * Unique identifier for the twin
     */
    id: string;

    demographics: Twin.Demographics;
  }

  export namespace Twin {
    export interface Demographics {
      /**
       * Age of the twin
       */
      age: number;

      /**
       * Country code of the twin
       */
      country: string;

      /**
       * Gender of the twin
       */
      gender: string;
    }
  }
}

export interface TopicGenerateInsightsParams {
  /**
   * The target audience description
   */
  audience: string;

  /**
   * The topic to analyze
   */
  topic: string;
}

export declare namespace Topic {
  export {
    type TopicGenerateInsightsResponse as TopicGenerateInsightsResponse,
    type TopicGenerateInsightsParams as TopicGenerateInsightsParams,
  };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SseAPI from './sse';
import { Sse } from './sse';

export class Mcp extends APIResource {
  sse: SseAPI.Sse = new SseAPI.Sse(this._client);
}

Mcp.Sse = Sse;

export declare namespace Mcp {
  export { Sse as Sse };
}

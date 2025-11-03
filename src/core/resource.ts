// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OriginalVoices } from '../client';

export abstract class APIResource {
  protected _client: OriginalVoices;

  constructor(client: OriginalVoices) {
    this._client = client;
  }
}

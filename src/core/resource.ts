// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Originalvoices } from '../client';

export abstract class APIResource {
  protected _client: Originalvoices;

  constructor(client: Originalvoices) {
    this._client = client;
  }
}

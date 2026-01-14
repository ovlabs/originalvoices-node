// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OriginalVoices from 'originalvoices';

const client = new OriginalVoices({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ask', () => {
  // Prism tests are disabled
  test.skip('choices: only required params', async () => {
    const responsePromise = client.ask.choices({
      choices: ['x', 'x'],
      isMultipleChoice: true,
      question: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('choices: required and optional params', async () => {
    const response = await client.ask.choices({
      choices: ['x', 'x'],
      isMultipleChoice: true,
      question: 'x',
      audienceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      audiencePrompt: 'audiencePrompt',
      sampleSize: 'low',
    });
  });

  // Prism tests are disabled
  test.skip('open', async () => {
    const responsePromise = client.ask.open();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('open: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ask.open(
        {
          audienceId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          audiencePrompt: 'audiencePrompt',
          question: 'x',
          questions: ['x'],
          sampleSize: 'low',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OriginalVoices.NotFoundError);
  });
});

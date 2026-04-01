// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'open',
    endpoint: '/v1/ask/open',
    httpMethod: 'post',
    summary: '',
    description: 'Ask an open-ended question to the audience and get raw answers',
    stainlessPath: '(resource) ask > (method) open',
    qualified: 'client.ask.open',
    params: [
      'audienceId?: string;',
      'audiencePrompt?: string;',
      'question?: string;',
      'questions?: string[];',
      "sampleSize?: 'low' | 'medium' | 'high' | 'very_high';",
    ],
    response:
      '{ data: { answers: { answer: string; confidence: number; }[][]; }; error: null; requestId: string; }',
    markdown:
      "## open\n\n`client.ask.open(audienceId?: string, audiencePrompt?: string, question?: string, questions?: string[], sampleSize?: 'low' | 'medium' | 'high' | 'very_high'): { data: object; error: null; requestId: string; }`\n\n**post** `/v1/ask/open`\n\nAsk an open-ended question to the audience and get raw answers\n\n### Parameters\n\n- `audienceId?: string`\n\n- `audiencePrompt?: string`\n\n- `question?: string`\n\n- `questions?: string[]`\n\n- `sampleSize?: 'low' | 'medium' | 'high' | 'very_high'`\n\n### Returns\n\n- `{ data: { answers: { answer: string; confidence: number; }[][]; }; error: null; requestId: string; }`\n\n  - `data: { answers: { answer: string; confidence: number; }[][]; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst response = await client.ask.open();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/ask/open \\\n    -X POST \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY"',
      },
      typescript: {
        method: 'client.ask.open',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ask.open();\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'choices',
    endpoint: '/v1/ask/choices',
    httpMethod: 'post',
    summary: '',
    description: 'Ask a choices question to the audience and get summary and themes',
    stainlessPath: '(resource) ask > (method) choices',
    qualified: 'client.ask.choices',
    params: [
      'choices: string[];',
      'isMultipleChoice: boolean;',
      'question: string;',
      'audienceId?: string;',
      'audiencePrompt?: string;',
      "sampleSize?: 'low' | 'medium' | 'high' | 'very_high';",
    ],
    response: '{ data: { choices: { choice: string; percentage: number; }[]; }; requestId: string; }',
    markdown:
      "## choices\n\n`client.ask.choices(choices: string[], isMultipleChoice: boolean, question: string, audienceId?: string, audiencePrompt?: string, sampleSize?: 'low' | 'medium' | 'high' | 'very_high'): { data: object; requestId: string; }`\n\n**post** `/v1/ask/choices`\n\nAsk a choices question to the audience and get summary and themes\n\n### Parameters\n\n- `choices: string[]`\n\n- `isMultipleChoice: boolean`\n\n- `question: string`\n\n- `audienceId?: string`\n\n- `audiencePrompt?: string`\n\n- `sampleSize?: 'low' | 'medium' | 'high' | 'very_high'`\n\n### Returns\n\n- `{ data: { choices: { choice: string; percentage: number; }[]; }; requestId: string; }`\n\n  - `data: { choices: { choice: string; percentage: number; }[]; }`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst response = await client.ask.choices({\n  choices: ['x', 'x'],\n  isMultipleChoice: true,\n  question: 'x',\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/ask/choices \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY" \\\n    -d \'{\n          "choices": [\n            "x",\n            "x"\n          ],\n          "isMultipleChoice": true,\n          "question": "x"\n        }\'',
      },
      typescript: {
        method: 'client.ask.choices',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ask.choices({\n  choices: ['x', 'x'],\n  isMultipleChoice: true,\n  question: 'x',\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'project',
    endpoint: '/v1/ask/project/{projectId}',
    httpMethod: 'post',
    summary: '',
    description: "Ask questions to a filtered subset of a project's survey respondents",
    stainlessPath: '(resource) ask > (method) project',
    qualified: 'client.ask.project',
    params: ['projectId: string;', 'questions: string[];', 'filter?: string;'],
    response:
      '{ data: { answers: { answer: string; confidence: number; }[][]; matchedTwins: number; totalTwins: number; }; error: null; requestId: string; }',
    markdown:
      "## project\n\n`client.ask.project(projectId: string, questions: string[], filter?: string): { data: object; error: null; requestId: string; }`\n\n**post** `/v1/ask/project/{projectId}`\n\nAsk questions to a filtered subset of a project's survey respondents\n\n### Parameters\n\n- `projectId: string`\n\n- `questions: string[]`\n\n- `filter?: string`\n\n### Returns\n\n- `{ data: { answers: { answer: string; confidence: number; }[][]; matchedTwins: number; totalTwins: number; }; error: null; requestId: string; }`\n\n  - `data: { answers: { answer: string; confidence: number; }[][]; matchedTwins: number; totalTwins: number; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst response = await client.ask.project('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { questions: ['x'] });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/ask/project/$PROJECT_ID \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY" \\\n    -d \'{\n          "questions": [\n            "x"\n          ]\n        }\'',
      },
      typescript: {
        method: 'client.ask.project',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ask.project('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  questions: ['x'],\n});\n\nconsole.log(response.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/audiences',
    httpMethod: 'get',
    summary: '',
    description: 'List all audiences owned by the authenticated organization',
    stainlessPath: '(resource) projects > (method) list',
    qualified: 'client.projects.list',
    response:
      '{ data: { audiences: { id: string; prompt: string; title: string; }[]; }; error: null; requestId: string; }',
    markdown:
      "## list\n\n`client.projects.list(): { data: object; error: null; requestId: string; }`\n\n**get** `/v1/audiences`\n\nList all audiences owned by the authenticated organization\n\n### Returns\n\n- `{ data: { audiences: { id: string; prompt: string; title: string; }[]; }; error: null; requestId: string; }`\n\n  - `data: { audiences: { id: string; prompt: string; title: string; }[]; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst projects = await client.projects.list();\n\nconsole.log(projects);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/audiences \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY"',
      },
      typescript: {
        method: 'client.projects.list',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst projects = await client.projects.list();\n\nconsole.log(projects.data);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/v1/audiences',
    httpMethod: 'get',
    summary: '',
    description: 'List all audiences owned by the authenticated organization',
    stainlessPath: '(resource) audiences > (method) list',
    qualified: 'client.audiences.list',
    response:
      '{ data: { audiences: { id: string; prompt: string; title: string; }[]; }; error: null; requestId: string; }',
    markdown:
      "## list\n\n`client.audiences.list(): { data: object; error: null; requestId: string; }`\n\n**get** `/v1/audiences`\n\nList all audiences owned by the authenticated organization\n\n### Returns\n\n- `{ data: { audiences: { id: string; prompt: string; title: string; }[]; }; error: null; requestId: string; }`\n\n  - `data: { audiences: { id: string; prompt: string; title: string; }[]; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst audiences = await client.audiences.list();\n\nconsole.log(audiences);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/audiences \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY"',
      },
      typescript: {
        method: 'client.audiences.list',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst audiences = await client.audiences.list();\n\nconsole.log(audiences.data);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/v1/audiences',
    httpMethod: 'post',
    summary: '',
    description: 'Create a new audience with title and prompt',
    stainlessPath: '(resource) audiences > (method) create',
    qualified: 'client.audiences.create',
    params: ['prompt: string;', 'title: string;', 'projectId?: string;'],
    response: '{ data: { id: string; title: string; }; error: null; requestId: string; }',
    markdown:
      "## create\n\n`client.audiences.create(prompt: string, title: string, projectId?: string): { data: object; error: null; requestId: string; }`\n\n**post** `/v1/audiences`\n\nCreate a new audience with title and prompt\n\n### Parameters\n\n- `prompt: string`\n\n- `title: string`\n\n- `projectId?: string`\n\n### Returns\n\n- `{ data: { id: string; title: string; }; error: null; requestId: string; }`\n\n  - `data: { id: string; title: string; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst audience = await client.audiences.create({ prompt: 'x', title: 'x' });\n\nconsole.log(audience);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/audiences \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY" \\\n    -d \'{\n          "prompt": "x",\n          "title": "x"\n        }\'',
      },
      typescript: {
        method: 'client.audiences.create',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst audience = await client.audiences.create({ prompt: 'x', title: 'x' });\n\nconsole.log(audience.data);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/v1/audiences/{id}',
    httpMethod: 'patch',
    summary: '',
    description: 'Update the title of an audience',
    stainlessPath: '(resource) audiences > (method) update',
    qualified: 'client.audiences.update',
    params: ['id: string;', 'title: string;'],
    response: '{ data: { id: string; title: string; }; error: null; requestId: string; }',
    markdown:
      "## update\n\n`client.audiences.update(id: string, title: string): { data: object; error: null; requestId: string; }`\n\n**patch** `/v1/audiences/{id}`\n\nUpdate the title of an audience\n\n### Parameters\n\n- `id: string`\n\n- `title: string`\n\n### Returns\n\n- `{ data: { id: string; title: string; }; error: null; requestId: string; }`\n\n  - `data: { id: string; title: string; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst audience = await client.audiences.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { title: 'x' });\n\nconsole.log(audience);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/audiences/$ID \\\n    -X PATCH \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY" \\\n    -d \'{\n          "title": "x"\n        }\'',
      },
      typescript: {
        method: 'client.audiences.update',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst audience = await client.audiences.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  title: 'x',\n});\n\nconsole.log(audience.data);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/v1/audiences/{id}',
    httpMethod: 'delete',
    summary: '',
    description: 'Delete an audience',
    stainlessPath: '(resource) audiences > (method) delete',
    qualified: 'client.audiences.delete',
    params: ['id: string;'],
    response: '{ data: { success: boolean; }; error: null; requestId: string; }',
    markdown:
      "## delete\n\n`client.audiences.delete(id: string): { data: object; error: null; requestId: string; }`\n\n**delete** `/v1/audiences/{id}`\n\nDelete an audience\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ data: { success: boolean; }; error: null; requestId: string; }`\n\n  - `data: { success: boolean; }`\n  - `error: null`\n  - `requestId: string`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nconst audience = await client.audiences.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(audience);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://api.originalvoices.ai/v1/audiences/$ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $ORIGINALVOICES_API_KEY"',
      },
      typescript: {
        method: 'client.audiences.delete',
        example:
          "import OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst audience = await client.audiences.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(audience.data);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# Original Voices TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/originalvoices.svg?label=npm%20(stable))](https://npmjs.org/package/originalvoices) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/originalvoices)\n\nThis library provides convenient access to the Original Voices REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [docs.originalvoices.ai](https://docs.originalvoices.ai). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Original Voices MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=originalvoices-mcp&config=eyJuYW1lIjoib3JpZ2luYWx2b2ljZXMtbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vb3JpZ2luYWx2b2ljZXMuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1vcmlnaW5hbHZvaWNlcy1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22originalvoices-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foriginalvoices.stlmcp.com%22%2C%22headers%22%3A%7B%22x-originalvoices-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install originalvoices\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.ask.open({\n  audienceId: 'ID_OF_AUDIENCE',\n  audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n  question: 'YOUR_QUESTION',\n});\n\nconsole.log(response.data);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  apiKey: process.env['ORIGINALVOICES_API_KEY'], // This is the default and can be omitted\n});\n\nconst params: OriginalVoices.AskOpenParams = {\n  audienceId: 'ID_OF_AUDIENCE',\n  audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n  question: 'YOUR_QUESTION',\n};\nconst response: OriginalVoices.AskOpenResponse = await client.ask.open(params);\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.ask\n  .open({\n    audienceId: 'ID_OF_AUDIENCE',\n    audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n    question: 'YOUR_QUESTION',\n  })\n  .catch(async (err) => {\n    if (err instanceof OriginalVoices.APIError) {\n      console.log(err.status); // 400\n      console.log(err.name); // BadRequestError\n      console.log(err.headers); // {server: 'nginx', ...}\n    } else {\n      throw err;\n    }\n  });\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new OriginalVoices({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.ask.open({\n  audienceId: 'ID_OF_AUDIENCE',\n  audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n  question: 'YOUR_QUESTION',\n}, {\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new OriginalVoices({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.ask.open({\n  audienceId: 'ID_OF_AUDIENCE',\n  audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n  question: 'YOUR_QUESTION',\n}, {\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new OriginalVoices();\n\nconst response = await client.ask\n  .open({\n    audienceId: 'ID_OF_AUDIENCE',\n    audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n    question: 'YOUR_QUESTION',\n  })\n  .asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.ask\n  .open({\n    audienceId: 'ID_OF_AUDIENCE',\n    audiencePrompt: 'DESCRIPTION_OF_AUDIENCE',\n    question: 'YOUR_QUESTION',\n  })\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response.data);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `ORIGINAL_VOICES_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport OriginalVoices from 'originalvoices';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new OriginalVoices({\n  logger: logger.child({ name: 'OriginalVoices' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.ask.open({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport OriginalVoices from 'originalvoices';\nimport fetch from 'my-fetch';\n\nconst client = new OriginalVoices({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport OriginalVoices from 'originalvoices';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new OriginalVoices({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport OriginalVoices from 'npm:originalvoices';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new OriginalVoices({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/ovlabs/originalvoices-node/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}

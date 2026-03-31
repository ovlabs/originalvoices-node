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
  },
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
  },
  {
    name: 'create',
    endpoint: '/mcp/sse',
    httpMethod: 'post',
    summary: '',
    description: '',
    stainlessPath: '(resource) mcp.sse > (method) create',
    qualified: 'client.mcp.sse.create',
    markdown:
      "## create\n\n`client.mcp.sse.create(): void`\n\n**post** `/mcp/sse`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nawait client.mcp.sse.create()\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/mcp/sse',
    httpMethod: 'get',
    summary: '',
    description: '',
    stainlessPath: '(resource) mcp.sse > (method) retrieve',
    qualified: 'client.mcp.sse.retrieve',
    markdown:
      "## retrieve\n\n`client.mcp.sse.retrieve(): void`\n\n**get** `/mcp/sse`\n\n### Example\n\n```typescript\nimport OriginalVoices from 'originalvoices';\n\nconst client = new OriginalVoices();\n\nawait client.mcp.sse.retrieve()\n```",
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [];

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

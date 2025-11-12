# Topic

Types:

- <code><a href="./src/resources/topic.ts">TopicGenerateInsightsResponse</a></code>

Methods:

- <code title="post /v1/topic">client.topic.<a href="./src/resources/topic.ts">generateInsights</a>({ ...params }) -> TopicGenerateInsightsResponse</code>

# Ask

Types:

- <code><a href="./src/resources/ask.ts">AskCreateResponse</a></code>

Methods:

- <code title="post /v1/ask">client.ask.<a href="./src/resources/ask.ts">create</a>({ ...params }) -> AskCreateResponse</code>

# Audiences

Types:

- <code><a href="./src/resources/audiences.ts">AudienceCreateResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceUpdateResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceListResponse</a></code>
- <code><a href="./src/resources/audiences.ts">AudienceDeleteResponse</a></code>

Methods:

- <code title="post /v1/audiences">client.audiences.<a href="./src/resources/audiences.ts">create</a>({ ...params }) -> AudienceCreateResponse</code>
- <code title="patch /v1/audiences/{id}">client.audiences.<a href="./src/resources/audiences.ts">update</a>(id, { ...params }) -> AudienceUpdateResponse</code>
- <code title="get /v1/audiences">client.audiences.<a href="./src/resources/audiences.ts">list</a>() -> AudienceListResponse</code>
- <code title="delete /v1/audiences/{id}">client.audiences.<a href="./src/resources/audiences.ts">delete</a>(id) -> AudienceDeleteResponse</code>

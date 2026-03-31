# Ask

Types:

- <code><a href="./src/resources/ask.ts">AskChoicesResponse</a></code>
- <code><a href="./src/resources/ask.ts">AskOpenResponse</a></code>
- <code><a href="./src/resources/ask.ts">AskProjectResponse</a></code>

Methods:

- <code title="post /v1/ask/choices">client.ask.<a href="./src/resources/ask.ts">choices</a>({ ...params }) -> AskChoicesResponse</code>
- <code title="post /v1/ask/open">client.ask.<a href="./src/resources/ask.ts">open</a>({ ...params }) -> AskOpenResponse</code>
- <code title="post /v1/ask/project/{projectId}">client.ask.<a href="./src/resources/ask.ts">project</a>(projectID, { ...params }) -> AskProjectResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="get /v1/audiences">client.projects.<a href="./src/resources/projects.ts">list</a>() -> ProjectListResponse</code>

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

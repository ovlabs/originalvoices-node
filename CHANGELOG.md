# Changelog

## 0.12.1 (2026-03-08)

Full Changelog: [v0.12.0...v0.12.1](https://github.com/ovlabs/originalvoices-node/compare/v0.12.0...v0.12.1)

### Bug Fixes

* **client:** preserve URL params already embedded in path ([44dcaa5](https://github.com/ovlabs/originalvoices-node/commit/44dcaa5fbab94f00137df864845720e59b55494e))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([04bcbc8](https://github.com/ovlabs/originalvoices-node/commit/04bcbc83a0323f1c15db6d7c5daca7b867086d2c))
* **internal:** codegen related update ([47c7c06](https://github.com/ovlabs/originalvoices-node/commit/47c7c06098d5341c8b8fd29d8c5ffa2a4a83a1f3))
* **mcp-server:** improve instructions ([a03e6f5](https://github.com/ovlabs/originalvoices-node/commit/a03e6f50d7704517e0f8afbd929e26d3e29db87a))

## 0.12.0 (2026-03-06)

Full Changelog: [v0.11.0...v0.12.0](https://github.com/ovlabs/originalvoices-node/compare/v0.11.0...v0.12.0)

### Features

* **api:** api update ([3212c96](https://github.com/ovlabs/originalvoices-node/commit/3212c9660199cc582ccf71066a96a417fd6a2a3f))
* **mcp:** add an option to disable code tool ([f04c97f](https://github.com/ovlabs/originalvoices-node/commit/f04c97f64056c55fb5fdad159a967b2e9f6e79cf))
* **mcp:** add initial server instructions ([47b2563](https://github.com/ovlabs/originalvoices-node/commit/47b2563413be60d82b3863c4fbca02da0a3e4ecc))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([4313a8b](https://github.com/ovlabs/originalvoices-node/commit/4313a8b115ffb69292c6aa68adb4e5bddfed083f))
* **client:** avoid removing abort listener too early ([4447815](https://github.com/ovlabs/originalvoices-node/commit/4447815c528e5f46f1a803e72f57196297f27659))
* **docs/contributing:** correct pnpm link command ([1b5f6e0](https://github.com/ovlabs/originalvoices-node/commit/1b5f6e07c9d04cfaf4ddb8eaec7fb1d954a51a58))
* **docs:** fix mcp installation instructions for remote servers ([5daaf7d](https://github.com/ovlabs/originalvoices-node/commit/5daaf7da5206db358d09d8a7790e2de929d7de46))
* flag defaults ([2119a06](https://github.com/ovlabs/originalvoices-node/commit/2119a063e442d0eaf70f42ef6ecb8cd228bf674c))
* **mcp:** allow falling back for required env variables ([eaf3623](https://github.com/ovlabs/originalvoices-node/commit/eaf36233779d3d89ef376a8df81559d776d872ee))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([b3f977a](https://github.com/ovlabs/originalvoices-node/commit/b3f977aa6b68bc5b81c175d58c7d0db185012efb))
* **mcp:** update prompt ([1f0ee51](https://github.com/ovlabs/originalvoices-node/commit/1f0ee5136458a1e73f511c8f7b4cf47b970a4b76))


### Chores

* **ci:** upgrade `actions/github-script` ([e912454](https://github.com/ovlabs/originalvoices-node/commit/e912454b2e875ab64d03e3a63c69cc1da582c02b))
* **client:** do not parse responses with empty content-length ([88f4f4f](https://github.com/ovlabs/originalvoices-node/commit/88f4f4f0d9cda72dedf3c059077febe016acc078))
* **client:** restructure abort controller binding ([04046b7](https://github.com/ovlabs/originalvoices-node/commit/04046b76ec7b333e27bc21f6de300067477289b4))
* **internal/client:** fix form-urlencoded requests ([04f746a](https://github.com/ovlabs/originalvoices-node/commit/04f746a954aa0937a11bbb532e9f1be977e2c969))
* **internal:** add health check to MCP server when running in HTTP mode ([17f6e23](https://github.com/ovlabs/originalvoices-node/commit/17f6e23935d8875190548a6ac3465d8820c75092))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([d518e03](https://github.com/ovlabs/originalvoices-node/commit/d518e03f0dd37086dbc41c2ab696f8fad4970fc4))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([bb15742](https://github.com/ovlabs/originalvoices-node/commit/bb157427844fc10a89dd65df8e94a8408659c739))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([501b139](https://github.com/ovlabs/originalvoices-node/commit/501b13972966c4ff641c61dcc573fa0f5b5626de))
* **internal:** avoid type checking errors with ts-reset ([d60e339](https://github.com/ovlabs/originalvoices-node/commit/d60e339dede50c11a172d7aaee209bbd46ce5f86))
* **internal:** cache fetch instruction calls in MCP server ([d5f6e3e](https://github.com/ovlabs/originalvoices-node/commit/d5f6e3e9393717ec9b78c724fac36e624d4ed20a))
* **internal:** codegen related update ([e6eb461](https://github.com/ovlabs/originalvoices-node/commit/e6eb46171ad1f4541adb37c4c304173b7f128588))
* **internal:** codegen related update ([1327184](https://github.com/ovlabs/originalvoices-node/commit/132718476b28091885aebc099d28ee2c56509dd8))
* **internal:** codegen related update ([655bd01](https://github.com/ovlabs/originalvoices-node/commit/655bd01c8c74aa9028c47f4f0440a618d6719e30))
* **internal:** codegen related update ([da312cc](https://github.com/ovlabs/originalvoices-node/commit/da312cc4ac2dcc16535381fba83e88a8fe8626d9))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([c4d217d](https://github.com/ovlabs/originalvoices-node/commit/c4d217d5c55175df67881bb8b358ba726185ab75))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([7d73a72](https://github.com/ovlabs/originalvoices-node/commit/7d73a72a695e87f49e7a55f852fb3416790cca9c))
* **internal:** improve layout of generated MCP server files ([3dac9cd](https://github.com/ovlabs/originalvoices-node/commit/3dac9cd6df75ca9496daac0e92b068c15ceb7faa))
* **internal:** improve reliability of MCP servers when using local code mode execution ([63bd44f](https://github.com/ovlabs/originalvoices-node/commit/63bd44f1ad07eede36d7d597e980dd3a1655040b))
* **internal:** make MCP code execution location configurable via a flag ([0a43f17](https://github.com/ovlabs/originalvoices-node/commit/0a43f177e5783ec93d9eb4261ef7048317d35683))
* **internal:** move stringifyQuery implementation to internal function ([542faf5](https://github.com/ovlabs/originalvoices-node/commit/542faf55a6abdb6f307b1ed593d28f90f6c9cbec))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([cf55291](https://github.com/ovlabs/originalvoices-node/commit/cf552910e5245b5f819e0869df3c6e2e4883fd10))
* **internal:** remove mock server code ([95e270f](https://github.com/ovlabs/originalvoices-node/commit/95e270f0cde1f025573db8a70ad3c23cbd3191b5))
* **internal:** support oauth authorization code flow for MCP servers ([9206950](https://github.com/ovlabs/originalvoices-node/commit/9206950ab268af53529a04c4627b582a98cb6160))
* **internal:** update `actions/checkout` version ([3376da5](https://github.com/ovlabs/originalvoices-node/commit/3376da5100b6011d942b37908db640ee04ba72aa))
* **internal:** update lock file ([50a4036](https://github.com/ovlabs/originalvoices-node/commit/50a4036ca711c4836ab57bfd7c6c9c37093f49f6))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([620f5a9](https://github.com/ovlabs/originalvoices-node/commit/620f5a9ee4aa3775f0f48732afc6839ae534ef8b))
* **internal:** upgrade babel, qs, js-yaml ([44d28df](https://github.com/ovlabs/originalvoices-node/commit/44d28dff60b91a469643b2be02f4a21007aa9a9c))
* **internal:** upgrade brace-expansion and @babel/helpers ([fe2bbb3](https://github.com/ovlabs/originalvoices-node/commit/fe2bbb31698d66acfd25701e93e109b08146bda5))
* **internal:** upgrade pnpm ([badf006](https://github.com/ovlabs/originalvoices-node/commit/badf006a9f44e583e6228e4304a5c2eb635f0279))
* **internal:** upgrade pnpm version ([94a1253](https://github.com/ovlabs/originalvoices-node/commit/94a1253d0ff80728a3ef4187f585188ecf443017))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([b2c1378](https://github.com/ovlabs/originalvoices-node/commit/b2c137854a356f401b9841c47155ba220a5e3752))
* **mcp-server:** return access instructions for 404 without API key ([60d10db](https://github.com/ovlabs/originalvoices-node/commit/60d10dbf80f75fc71ea961c79020351a889bd8df))
* **mcp:** add intent param to execute tool ([fbd365b](https://github.com/ovlabs/originalvoices-node/commit/fbd365bab63ce68fee9561f1d60ae2840c422177))
* **mcp:** correctly update version in sync with sdk ([1242790](https://github.com/ovlabs/originalvoices-node/commit/1242790e419d26b559b054f005982116d705c38b))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([4a645c9](https://github.com/ovlabs/originalvoices-node/commit/4a645c91c3da52ac2ce193477170f38a4c8714db))
* **mcp:** pass intent param to execute handler ([f8620c9](https://github.com/ovlabs/originalvoices-node/commit/f8620c9e24fbc597fc5836eea77774722dfbcd8c))
* **mcp:** up tsconfig lib version to es2022 ([84f6990](https://github.com/ovlabs/originalvoices-node/commit/84f699045a960a3761d0bb771095b0abaa801178))
* **mcp:** upgrade dependencies ([49e9183](https://github.com/ovlabs/originalvoices-node/commit/49e9183ef0cac8a33089801fafb6ebf5a2e7dc5f))
* update mock server docs ([f9ee9e1](https://github.com/ovlabs/originalvoices-node/commit/f9ee9e111724e2c2547c96d5f52d2fe4e10e08a9))

## 0.11.0 (2026-01-14)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/ovlabs/originalvoices-node/compare/v0.10.0...v0.11.0)

### Features

* **api:** api update ([e552123](https://github.com/ovlabs/originalvoices-node/commit/e55212304ebd151fbac1286bfb1a34a8da059123))

## 0.10.0 (2026-01-14)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/ovlabs/originalvoices-node/compare/v0.9.0...v0.10.0)

### Features

* **api:** api update ([2a04d13](https://github.com/ovlabs/originalvoices-node/commit/2a04d13266c390f9078a542ef65f74c459d4991d))
* **api:** api update ([a89eddd](https://github.com/ovlabs/originalvoices-node/commit/a89eddd3a2bbd5d245893d15a5eaec4776c627a4))
* **api:** api update ([6699e70](https://github.com/ovlabs/originalvoices-node/commit/6699e707b69972a8f61df026f6904d67148178b9))


### Bug Fixes

* **mcp:** correct code tool api output types ([21bc2c3](https://github.com/ovlabs/originalvoices-node/commit/21bc2c3a3717fe41cd9725134c0ee2cad139420e))
* **mcp:** fix env parsing ([70f7ca1](https://github.com/ovlabs/originalvoices-node/commit/70f7ca1a8a6d8b587e3a9593b2282897b2225175))
* **mcp:** fix options parsing ([87084b6](https://github.com/ovlabs/originalvoices-node/commit/87084b61e2edafaffd87f09c44b718f107a27b30))
* **mcp:** update code tool prompt ([cece397](https://github.com/ovlabs/originalvoices-node/commit/cece397c1753a0fcbb8eac2f11cadf390dabd176))


### Chores

* break long lines in snippets into multiline ([01e7337](https://github.com/ovlabs/originalvoices-node/commit/01e7337b809740a21361452833edf155e3bdb98e))
* configure new SDK language ([c1bb8a4](https://github.com/ovlabs/originalvoices-node/commit/c1bb8a4713b5297b595fe263254b71b8476056ff))
* **internal:** codegen related update ([ea70002](https://github.com/ovlabs/originalvoices-node/commit/ea70002ab7dfbd4e38cc9da49c458c84193c145d))
* **internal:** codegen related update ([20f0032](https://github.com/ovlabs/originalvoices-node/commit/20f00325efec71fde876b5a935017fc058a6e6d4))
* **internal:** codegen related update ([f295b86](https://github.com/ovlabs/originalvoices-node/commit/f295b860801b086f60320ee8020f5dc4f183fa98))
* **internal:** codegen related update ([dc87e47](https://github.com/ovlabs/originalvoices-node/commit/dc87e47139164eaa8ac5d912a26acc07a0629783))
* **internal:** codegen related update ([4c5edc0](https://github.com/ovlabs/originalvoices-node/commit/4c5edc0aee2b9dfd01ade1b06b256eecefe63b45))
* **internal:** configure MCP Server hosting ([dc0ab12](https://github.com/ovlabs/originalvoices-node/commit/dc0ab12a595941db3880c03c4b89074ca264a219))
* **internal:** fix dockerfile ([e366e38](https://github.com/ovlabs/originalvoices-node/commit/e366e387c0e43f277ae3bbe08b37a90f5c682a86))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([e878ae0](https://github.com/ovlabs/originalvoices-node/commit/e878ae0ec88bee9d08ad9da48830dc108f665397))

## 0.9.0 (2025-12-23)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/ovlabs/originalvoices-node/compare/v0.8.0...v0.9.0)

### Features

* **api:** api update ([8d292d5](https://github.com/ovlabs/originalvoices-node/commit/8d292d5d977e69aefa936ad3e2aefbe931312b4d))
* **api:** manual updates ([57c4d35](https://github.com/ovlabs/originalvoices-node/commit/57c4d3590ed4a3b5dd46131b9408c58e5f23c571))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([af45f37](https://github.com/ovlabs/originalvoices-node/commit/af45f37a824cb12739bca1b9479bd066b3e8eb52))
* **mcp:** return correct lines on typescript errors ([15dc701](https://github.com/ovlabs/originalvoices-node/commit/15dc7012fba27fc04252767379fc279fca469f24))


### Chores

* **client:** fix logger property type ([24b9f97](https://github.com/ovlabs/originalvoices-node/commit/24b9f97b15053734f15728e32f7fd04e2f3c2436))
* **internal:** codegen related update ([ec22829](https://github.com/ovlabs/originalvoices-node/commit/ec22829c1d08e75efc08f5ec6f7ae07c094b99ed))
* **internal:** codegen related update ([fe3566d](https://github.com/ovlabs/originalvoices-node/commit/fe3566d196c8d888f5ef7fdbbec171ba94462b3e))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([55decab](https://github.com/ovlabs/originalvoices-node/commit/55decabb5ddba3d57bed197964068be0acfc2d98))
* **internal:** upgrade eslint ([2db9926](https://github.com/ovlabs/originalvoices-node/commit/2db9926dae93b27a78a67e23f4fb5251e3012f4f))

## 0.8.0 (2025-11-27)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/ovlabs/originalvoices-node/compare/v0.7.0...v0.8.0)

### Features

* **api:** api update ([3ca9b23](https://github.com/ovlabs/originalvoices-node/commit/3ca9b238f2e453ac80bc326887d1320f9f410c7d))

## 0.7.0 (2025-11-26)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/ovlabs/originalvoices-node/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([508eaff](https://github.com/ovlabs/originalvoices-node/commit/508eaffa08f52885b03f63f9959e69656f2926f5))
* **api:** manual updates ([72bba98](https://github.com/ovlabs/originalvoices-node/commit/72bba98214c7c68ca4510286dafdf370cf8d11a7))

## 0.6.0 (2025-11-13)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/ovlabs/originalvoices-node/compare/v0.5.0...v0.6.0)

### Features

* **api:** manual updates ([ec87a31](https://github.com/ovlabs/originalvoices-node/commit/ec87a3113af86dc320db5d2f53562b6e7ae914ec))

## 0.5.0 (2025-11-13)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/ovlabs/originalvoices-node/compare/v0.4.0...v0.5.0)

### Features

* **api:** manual updates ([0082e1b](https://github.com/ovlabs/originalvoices-node/commit/0082e1b516a5e2ee92197d0d44bb221147aa2115))

## 0.4.0 (2025-11-12)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/ovlabs/originalvoices-node/compare/v0.3.0...v0.4.0)

### Features

* **api:** manual updates ([156bac0](https://github.com/ovlabs/originalvoices-node/commit/156bac01d6e188c09d7570b8e06158a53dae523c))

## 0.3.0 (2025-11-12)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/ovlabs/originalvoices-node/compare/v0.2.0...v0.3.0)

### Features

* **api:** api update ([93fd28a](https://github.com/ovlabs/originalvoices-node/commit/93fd28a9cf25df47249c7b713e265e26272e8032))
* **api:** api update ([c727e27](https://github.com/ovlabs/originalvoices-node/commit/c727e27043e59c50ae3328c95c4d905de98b96d3))
* **api:** manual updates ([02ce05e](https://github.com/ovlabs/originalvoices-node/commit/02ce05eb154e1d2dd96d3a3fda2d17495303f713))

## 0.2.0 (2025-11-04)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/ovlabs/originalvoices-node/compare/v0.1.0...v0.2.0)

### Features

* **api:** api update ([fd9a7ed](https://github.com/ovlabs/originalvoices-node/commit/fd9a7edcf2c60ae31f08cd8a6a7b01bbf12a326c))

## 0.1.0 (2025-11-03)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/ovlabs/originalvoices-node/compare/v0.0.1...v0.1.0)

### Features

* **api:** manual updates ([49663ca](https://github.com/ovlabs/originalvoices-node/commit/49663caeac5a6172323353dd9ad4e09e504b7c9d))


### Chores

* update SDK settings ([2f68efa](https://github.com/ovlabs/originalvoices-node/commit/2f68efafaeb7bb3db7fe7f8def6cbecc88a0b517))
* update SDK settings ([b355642](https://github.com/ovlabs/originalvoices-node/commit/b35564292cbf787b9c54ce170ec2d7a84be0afdc))

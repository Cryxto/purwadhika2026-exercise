# Features

Public package and module surface area to be aware of when researching or implementing a solution. Each module entry includes its vendored repo path so it can be located quickly.

## `effect` Package

Package path: `packages/effect`

- `Array` - `node_modules/effect/src/Array.ts` - Immutable array utilities. Use: transform arrays immutably.
- `BigDecimal` - `node_modules/effect/src/BigDecimal.ts` - Arbitrary-precision decimal arithmetic. Use: avoid floating-point errors.
- `BigInt` - `node_modules/effect/src/BigInt.ts` - `bigint` utilities and instances. Use: work with large integers.
- `Boolean` - `node_modules/effect/src/Boolean.ts` - Boolean utilities and instances. Use: compose boolean logic.
- `Brand` - `node_modules/effect/src/Brand.ts` - Branded type helpers. Use: prevent accidental type mixing.
- `Cache` - `node_modules/effect/src/Cache.ts` - Effect cache utilities. Use: memoize effectful lookups.
- `Cause` - `node_modules/effect/src/Cause.ts` - Structured effect failure representation. Use: inspect failures and defects.
- `Channel` - `node_modules/effect/src/Channel.ts` - Bidirectional streaming I/O abstraction. Use: build stream pipelines.
- `ChannelSchema` - `node_modules/effect/src/ChannelSchema.ts` - Schema helpers for channels. Use: type channel protocols.
- `Chunk` - `node_modules/effect/src/Chunk.ts` - Immutable high-performance sequence. Use: efficient functional sequences.
- `Clock` - `node_modules/effect/src/Clock.ts` - Time service and sleep utilities. Use: schedule and measure time.
- `Combiner` - `node_modules/effect/src/Combiner.ts` - Combine two values of one type. Use: merge values consistently.
- `Config` - `node_modules/effect/src/Config.ts` - Schema-driven configuration loading. Use: read typed app config.
- `ConfigProvider` - `node_modules/effect/src/ConfigProvider.ts` - Configuration data source abstraction. Use: load config from env/files.
- `Console` - `node_modules/effect/src/Console.ts` - Effectful console operations. Use: log and debug safely.
- `Context` - `node_modules/effect/src/Context.ts` - Dependency injection context table. Use: provide and access services.
- `Cron` - `node_modules/effect/src/Cron.ts` - Cron scheduling utilities. Use: express recurring schedules.
- `Data` - `node_modules/effect/src/Data.ts` - Immutable data and tagged unions. Use: model domain data and errors.
- `DateTime` - `node_modules/effect/src/DateTime.ts` - Date-time utilities. Use: handle timestamps and calendars.
- `Deferred` - `node_modules/effect/src/Deferred.ts` - Single-assignment async variable. Use: coordinate concurrent fibers.
- `Differ` - `node_modules/effect/src/Differ.ts` - Value diffing utilities. Use: compute incremental updates.
- `Duration` - `node_modules/effect/src/Duration.ts` - Precise time span type. Use: represent delays and intervals.
- `Effect` - `node_modules/effect/src/Effect.ts` - Core effect type and operators. Use: model async and concurrent work.
- `Effectable` - `node_modules/effect/src/Effectable.ts` - Protocols for effect-like values. Use: integrate custom yieldables.
- `Encoding` - `node_modules/effect/src/Encoding.ts` - Base64, Base64Url, and Hex codecs. Use: encode binary/text values.
- `Equal` - `node_modules/effect/src/Equal.ts` - Structural and custom equality. Use: compare immutable values deeply.
- `Equivalence` - `node_modules/effect/src/Equivalence.ts` - Equivalence relation helpers. Use: dedupe or compare with custom rules.
- `ErrorReporter` - `node_modules/effect/src/ErrorReporter.ts` - Pluggable error reporting. Use: forward failures to observability tools.
- `ExecutionPlan` - `node_modules/effect/src/ExecutionPlan.ts` - Execution plan utilities. Use: inspect planned work.
- `Exit` - `node_modules/effect/src/Exit.ts` - Synchronous effect outcome value. Use: inspect success or failure.
- `Fiber` - `node_modules/effect/src/Fiber.ts` - Lightweight concurrency primitive. Use: fork and join work.
- `FiberHandle` - `node_modules/effect/src/FiberHandle.ts` - Managed fiber handle helpers. Use: control child fibers.
- `FiberMap` - `node_modules/effect/src/FiberMap.ts` - Fiber map utilities. Use: track fibers by key.
- `FiberSet` - `node_modules/effect/src/FiberSet.ts` - Fiber set utilities. Use: manage groups of fibers.
- `FileSystem` - `node_modules/effect/src/FileSystem.ts` - Effectful file system abstraction. Use: read and write files safely.
- `Filter` - `node_modules/effect/src/Filter.ts` - Filter result utilities. Use: compose filtering operations.
- `Formatter` - `node_modules/effect/src/Formatter.ts` - Human-readable value formatting. Use: pretty-print data for logs.
- `Function` - `node_modules/effect/src/Function.ts` - Core function helpers. Use: pipe and compose functions.
- `Graph` - `node_modules/effect/src/Graph.ts` - Graph utilities. Use: model dependency graphs.
- `Hash` - `node_modules/effect/src/Hash.ts` - Hashing utilities. Use: hash values for collections.
- `HashMap` - `node_modules/effect/src/HashMap.ts` - Immutable hash map. Use: keyed immutable storage.
- `HashRing` - `node_modules/effect/src/HashRing.ts` - Consistent hashing utilities. Use: distribute keys across nodes.
- `HashSet` - `node_modules/effect/src/HashSet.ts` - Immutable hash set. Use: store unique immutable values.
- `HKT` - `node_modules/effect/src/HKT.ts` - Higher-kinded type utilities. Use: define generic type classes.
- `Inspectable` - `node_modules/effect/src/Inspectable.ts` - Custom inspection helpers. Use: improve debugging output.
- `Iterable` - `node_modules/effect/src/Iterable.ts` - Functional iterable utilities. Use: process lazy iterables.
- `JsonPatch` - `node_modules/effect/src/JsonPatch.ts` - JSON Patch operations. Use: diff and patch JSON documents.
- `JsonPointer` - `node_modules/effect/src/JsonPointer.ts` - JSON Pointer token helpers. Use: escape pointer path segments.
- `JsonSchema` - `node_modules/effect/src/JsonSchema.ts` - JSON Schema dialect conversion. Use: convert schemas between formats.
- `Latch` - `node_modules/effect/src/Latch.ts` - Latch synchronization primitive. Use: gate concurrent progress.
- `Layer` - `node_modules/effect/src/Layer.ts` - Service construction recipes. Use: build and wire dependencies.
- `LayerMap` - `node_modules/effect/src/LayerMap.ts` - Layer registry helpers. Use: share and look up layers.
- `Logger` - `node_modules/effect/src/Logger.ts` - Structured logging system. Use: emit runtime logs.
- `LogLevel` - `node_modules/effect/src/LogLevel.ts` - Log level utilities. Use: filter logs by severity.
- `ManagedRuntime` - `node_modules/effect/src/ManagedRuntime.ts` - Managed runtime helpers. Use: own runtime lifecycle.
- `Match` - `node_modules/effect/src/Match.ts` - Type-safe pattern matching. Use: replace switch-heavy branching.
- `Metric` - `node_modules/effect/src/Metric.ts` - Application metrics system. Use: count, gauge, and histogram events.
- `MutableHashMap` - `node_modules/effect/src/MutableHashMap.ts` - Mutable hash map. Use: high-performance mutable key-value storage.
- `MutableHashSet` - `node_modules/effect/src/MutableHashSet.ts` - Mutable hash set. Use: high-performance mutable uniqueness checks.
- `MutableList` - `node_modules/effect/src/MutableList.ts` - Mutable linked-list-like buffer. Use: efficient append/prepend workloads.
- `MutableRef` - `node_modules/effect/src/MutableRef.ts` - Mutable reference container. Use: hold local mutable state.
- `Newtype` - `node_modules/effect/src/Newtype.ts` - Zero-cost wrapper types. Use: distinguish same-shaped values.
- `NonEmptyIterable` - `node_modules/effect/src/NonEmptyIterable.ts` - Non-empty iterable helpers. Use: require at least one element.
- `Number` - `node_modules/effect/src/Number.ts` - Number utilities and instances. Use: do typed numeric operations.
- `Optic` - `node_modules/effect/src/Optic.ts` - Immutable data accessors and updaters. Use: read or update nested state.
- `Option` - `node_modules/effect/src/Option.ts` - Optional value type. Use: model absence safely.
- `Order` - `node_modules/effect/src/Order.ts` - Total ordering type class. Use: sort and compare values.
- `Ordering` - `node_modules/effect/src/Ordering.ts` - Comparison result helpers. Use: combine sort outcomes.
- `PartitionedSemaphore` - `node_modules/effect/src/PartitionedSemaphore.ts` - Partition-aware semaphore. Use: limit concurrency by key.
- `Path` - `node_modules/effect/src/Path.ts` - Path utilities. Use: work with filesystem-style paths.
- `Pipeable` - `node_modules/effect/src/Pipeable.ts` - Pipeable protocol helpers. Use: support fluent pipelines.
- `PlatformError` - `node_modules/effect/src/PlatformError.ts` - Platform error types. Use: normalize platform-specific failures.
- `Pool` - `node_modules/effect/src/Pool.ts` - Resource pool utilities. Use: reuse scarce resources.
- `Predicate` - `node_modules/effect/src/Predicate.ts` - Predicate and refinement helpers. Use: filter and narrow values.
- `PrimaryKey` - `node_modules/effect/src/PrimaryKey.ts` - Primary key helpers. Use: define stable string identifiers.
- `PubSub` - `node_modules/effect/src/PubSub.ts` - Publish-subscribe hub. Use: broadcast messages to subscribers.
- `Pull` - `node_modules/effect/src/Pull.ts` - Pull protocol helpers. Use: model pull-based streaming.
- `Queue` - `node_modules/effect/src/Queue.ts` - Effect queue utilities. Use: buffer producer-consumer work.
- `Random` - `node_modules/effect/src/Random.ts` - Randomness service. Use: generate testable random values.
- `RcMap` - `node_modules/effect/src/RcMap.ts` - Reference-counted map. Use: share keyed resources.
- `RcRef` - `node_modules/effect/src/RcRef.ts` - Reference-counted ref. Use: share scoped resources.
- `Record` - `node_modules/effect/src/Record.ts` - Record utilities. Use: transform string-keyed objects.
- `Redactable` - `node_modules/effect/src/Redactable.ts` - Context-aware redaction protocol. Use: mask sensitive values.
- `Redacted` - `node_modules/effect/src/Redacted.ts` - Sensitive value wrapper. Use: keep secrets out of logs.
- `Reducer` - `node_modules/effect/src/Reducer.ts` - Fold values into one result. Use: aggregate collections.
- `Ref` - `node_modules/effect/src/Ref.ts` - Atomic mutable reference. Use: manage concurrent state.
- `References` - `node_modules/effect/src/References.ts` - Runtime reference services. Use: tune runtime configuration.
- `RegExp` - `node_modules/effect/src/RegExp.ts` - RegExp utilities. Use: work with regular expressions.
- `Request` - `node_modules/effect/src/Request.ts` - External request description. Use: batch and cache data fetching.
- `RequestResolver` - `node_modules/effect/src/RequestResolver.ts` - Request execution abstraction. Use: resolve batched requests.
- `Resource` - `node_modules/effect/src/Resource.ts` - Resource utilities. Use: acquire and release shared resources.
- `Result` - `node_modules/effect/src/Result.ts` - Synchronous success/failure type. Use: validate without effects.
- `Runtime` - `node_modules/effect/src/Runtime.ts` - Effect runtime helpers. Use: run main programs.
- `Schedule` - `node_modules/effect/src/Schedule.ts` - Retry and repetition schedules. Use: control retry timing.
- `Scheduler` - `node_modules/effect/src/Scheduler.ts` - Scheduler utilities. Use: control task execution.
- `Schema` - `node_modules/effect/src/Schema.ts` - Data schema, validation, and codecs. Use: decode and encode typed data.
- `SchemaAST` - `node_modules/effect/src/SchemaAST.ts` - Runtime schema AST. Use: inspect or transform schemas.
- `SchemaGetter` - `node_modules/effect/src/SchemaGetter.ts` - One-way schema transformations. Use: decode individual fields.
- `SchemaIssue` - `node_modules/effect/src/SchemaIssue.ts` - Structured schema validation errors. Use: inspect parse failures.
- `SchemaParser` - `node_modules/effect/src/SchemaParser.ts` - Schema parsing helpers. Use: build parsing workflows.
- `SchemaRepresentation` - `node_modules/effect/src/SchemaRepresentation.ts` - Serializable schema IR. Use: round-trip schemas through JSON/codegen.
- `SchemaTransformation` - `node_modules/effect/src/SchemaTransformation.ts` - Bidirectional schema transformations. Use: map encoded and decoded forms.
- `SchemaUtils` - `node_modules/effect/src/SchemaUtils.ts` - Schema utility helpers. Use: support schema internals.
- `Scope` - `node_modules/effect/src/Scope.ts` - Resource lifetime scope. Use: ensure cleanup of acquired resources.
- `ScopedCache` - `node_modules/effect/src/ScopedCache.ts` - Scoped cache utilities. Use: cache scoped resources.
- `ScopedRef` - `node_modules/effect/src/ScopedRef.ts` - Scoped mutable reference. Use: swap scoped resources safely.
- `Semaphore` - `node_modules/effect/src/Semaphore.ts` - Concurrency semaphore. Use: limit parallel access.
- `Sink` - `node_modules/effect/src/Sink.ts` - Stream consumer abstraction. Use: fold or write stream inputs.
- `Stdio` - `node_modules/effect/src/Stdio.ts` - Standard I/O utilities. Use: access stdin/stdout/stderr.
- `Stream` - `node_modules/effect/src/Stream.ts` - Functional stream abstraction. Use: process streaming data.
- `String` - `node_modules/effect/src/String.ts` - String utilities and instances. Use: manipulate text functionally.
- `Struct` - `node_modules/effect/src/Struct.ts` - Immutable object utilities. Use: transform plain objects.
- `SubscriptionRef` - `node_modules/effect/src/SubscriptionRef.ts` - Subscribable reference. Use: observe state changes.
- `Symbol` - `node_modules/effect/src/Symbol.ts` - Symbol utilities. Use: work with JavaScript symbols.
- `SynchronizedRef` - `node_modules/effect/src/SynchronizedRef.ts` - Effect-synchronized ref. Use: update state with effects.
- `Take` - `node_modules/effect/src/Take.ts` - Stream take representation. Use: carry chunk, end, or error.
- `Terminal` - `node_modules/effect/src/Terminal.ts` - Terminal interaction utilities. Use: build CLI prompts/output.
- `Tracer` - `node_modules/effect/src/Tracer.ts` - Tracing abstractions. Use: create spans and traces.
- `Trie` - `node_modules/effect/src/Trie.ts` - Prefix tree for strings. Use: do prefix lookups.
- `Tuple` - `node_modules/effect/src/Tuple.ts` - Immutable tuple utilities. Use: transform fixed-length arrays.
- `TxChunk` - `node_modules/effect/src/TxChunk.ts` - Transactional chunk. Use: mutate chunk state in STM.
- `TxDeferred` - `node_modules/effect/src/TxDeferred.ts` - Transactional deferred cell. Use: coordinate STM completion.
- `TxHashMap` - `node_modules/effect/src/TxHashMap.ts` - Transactional hash map. Use: keyed STM state.
- `TxHashSet` - `node_modules/effect/src/TxHashSet.ts` - Transactional hash set. Use: unique STM state.
- `TxPriorityQueue` - `node_modules/effect/src/TxPriorityQueue.ts` - Transactional priority queue. Use: ordered STM queueing.
- `TxPubSub` - `node_modules/effect/src/TxPubSub.ts` - Transactional pub-sub hub. Use: broadcast within STM.
- `TxQueue` - `node_modules/effect/src/TxQueue.ts` - Transactional queue. Use: queue data within STM.
- `TxReentrantLock` - `node_modules/effect/src/TxReentrantLock.ts` - Transactional reentrant RW lock. Use: coordinate STM access.
- `TxRef` - `node_modules/effect/src/TxRef.ts` - Transactional reference. Use: read and write STM state.
- `TxSemaphore` - `node_modules/effect/src/TxSemaphore.ts` - Transactional semaphore. Use: limit STM concurrency.
- `TxSubscriptionRef` - `node_modules/effect/src/TxSubscriptionRef.ts` - Transactional subscribable ref. Use: observe committed STM changes.
- `Types` - `node_modules/effect/src/Types.ts` - Type-level utility aliases. Use: shape complex TypeScript types.
- `UndefinedOr` - `node_modules/effect/src/UndefinedOr.ts` - Helpers for `A | undefined`. Use: model lightweight optional values.
- `Unify` - `node_modules/effect/src/Unify.ts` - Type unification helpers. Use: simplify inferred types.
- `Utils` - `node_modules/effect/src/Utils.ts` - Generator and HKT internals. Use: support yieldable APIs.

### `effect/testing`

- `FastCheck` - `node_modules/effect/src/testing/FastCheck.ts` - Re-export of fast-check for property testing. Use: generate random test cases.
- `TestClock` - `node_modules/effect/src/testing/TestClock.ts` - Controllable clock for tests. Use: advance time deterministically.
- `TestConsole` - `node_modules/effect/src/testing/TestConsole.ts` - Test console implementation. Use: assert console output.
- `TestSchema` - `node_modules/effect/src/testing/TestSchema.ts` - Schema assertion helpers. Use: verify decode/encode behavior.

### `effect/ai`

- `AiError` - `node_modules/effect/src/ai/AiError.ts` - AI-related error types. Use: handle model failures.
- `AnthropicStructuredOutput` - `node_modules/effect/src/ai/AnthropicStructuredOutput.ts` - Anthropic structured-output codec helpers. Use: parse structured model responses.
- `Chat` - `node_modules/effect/src/ai/Chat.ts` - Stateful AI conversation API. Use: manage chat sessions.
- `EmbeddingModel` - `node_modules/effect/src/ai/EmbeddingModel.ts` - Provider-agnostic embedding API. Use: generate text vectors.
- `IdGenerator` - `node_modules/effect/src/ai/IdGenerator.ts` - Pluggable ID generation. Use: issue stable request IDs.
- `LanguageModel` - `node_modules/effect/src/ai/LanguageModel.ts` - AI text generation with tools. Use: call LLMs.
- `McpSchema` - `node_modules/effect/src/ai/McpSchema.ts` - MCP schema helpers. Use: type MCP messages.
- `McpServer` - `node_modules/effect/src/ai/McpServer.ts` - MCP server support. Use: expose model context tools.
- `Model` - `node_modules/effect/src/ai/Model.ts` - Unified AI provider interface. Use: swap AI backends.
- `OpenAiStructuredOutput` - `node_modules/effect/src/ai/OpenAiStructuredOutput.ts` - OpenAI structured-output codecs. Use: decode typed model output.
- `Prompt` - `node_modules/effect/src/ai/Prompt.ts` - Prompt-building data structures. Use: compose prompts.
- `Response` - `node_modules/effect/src/ai/Response.ts` - AI response data structures. Use: inspect completions.
- `ResponseIdTracker` - `node_modules/effect/src/ai/ResponseIdTracker.ts` - Response ID tracking utilities. Use: correlate model replies.
- `Telemetry` - `node_modules/effect/src/ai/Telemetry.ts` - OpenTelemetry integration for AI operations. Use: trace model calls.
- `Tokenizer` - `node_modules/effect/src/ai/Tokenizer.ts` - Tokenization and truncation utilities. Use: enforce token budgets.
- `Tool` - `node_modules/effect/src/ai/Tool.ts` - Tool definition and management. Use: expose callable tools.
- `Toolkit` - `node_modules/effect/src/ai/Toolkit.ts` - Collection of tools. Use: bundle tool implementations.

### `effect/cli`

- `Argument` - `node_modules/effect/src/cli/Argument.ts` - CLI argument definitions. Use: positional arguments.
- `CliError` - `node_modules/effect/src/cli/CliError.ts` - CLI error types. Use: report parse failures.
- `CliOutput` - `node_modules/effect/src/cli/CliOutput.ts` - CLI rendering/output helpers. Use: format command output.
- `Command` - `node_modules/effect/src/cli/Command.ts` - CLI command definitions. Use: build subcommands.
- `Completions` - `node_modules/effect/src/cli/Completions.ts` - Shell completion generation. Use: generate completion scripts.
- `Flag` - `node_modules/effect/src/cli/Flag.ts` - CLI flag definitions. Use: parse options.
- `GlobalFlag` - `node_modules/effect/src/cli/GlobalFlag.ts` - Global CLI flags. Use: shared top-level options.
- `HelpDoc` - `node_modules/effect/src/cli/HelpDoc.ts` - CLI help document model. Use: render usage text.
- `Param` - `node_modules/effect/src/cli/Param.ts` - CLI parameter helpers. Use: define typed params.
- `Primitive` - `node_modules/effect/src/cli/Primitive.ts` - Primitive CLI parsers. Use: parse numbers or strings.
- `Prompt` - `node_modules/effect/src/cli/Prompt.ts` - Interactive CLI prompts. Use: ask users for input.

### `effect/cluster`

- `ClusterCron` - `node_modules/effect/src/cluster/ClusterCron.ts` - Cluster cron scheduling. Use: distributed recurring jobs.
- `ClusterError` - `node_modules/effect/src/cluster/ClusterError.ts` - Cluster error types. Use: classify cluster failures.
- `ClusterMetrics` - `node_modules/effect/src/cluster/ClusterMetrics.ts` - Cluster metrics helpers. Use: observe cluster health.
- `ClusterSchema` - `node_modules/effect/src/cluster/ClusterSchema.ts` - Cluster schema types. Use: encode cluster messages.
- `ClusterWorkflowEngine` - `node_modules/effect/src/cluster/ClusterWorkflowEngine.ts` - Workflow engine for clusters. Use: run distributed workflows.
- `DeliverAt` - `node_modules/effect/src/cluster/DeliverAt.ts` - Deferred delivery scheduling. Use: schedule message delivery.
- `Entity` - `node_modules/effect/src/cluster/Entity.ts` - Cluster entity abstraction. Use: model sharded actors.
- `EntityAddress` - `node_modules/effect/src/cluster/EntityAddress.ts` - Entity addressing types. Use: route entity messages.
- `EntityId` - `node_modules/effect/src/cluster/EntityId.ts` - Typed entity identifiers. Use: identify actor instances.
- `EntityProxy` - `node_modules/effect/src/cluster/EntityProxy.ts` - Client proxy for entities. Use: call remote entities.
- `EntityProxyServer` - `node_modules/effect/src/cluster/EntityProxyServer.ts` - Server for entity proxies. Use: serve entity calls.
- `EntityResource` - `node_modules/effect/src/cluster/EntityResource.ts` - Entity-backed resource helpers. Use: manage entity state.
- `EntityType` - `node_modules/effect/src/cluster/EntityType.ts` - Entity type descriptors. Use: register entity kinds.
- `Envelope` - `node_modules/effect/src/cluster/Envelope.ts` - Message envelope types. Use: wrap cluster messages.
- `HttpRunner` - `node_modules/effect/src/cluster/HttpRunner.ts` - HTTP-based runner. Use: transport cluster traffic over HTTP.
- `K8sHttpClient` - `node_modules/effect/src/cluster/K8sHttpClient.ts` - Kubernetes HTTP client helpers. Use: discover cluster peers.
- `MachineId` - `node_modules/effect/src/cluster/MachineId.ts` - Machine identifier utilities. Use: label cluster nodes.
- `Message` - `node_modules/effect/src/cluster/Message.ts` - Cluster message model. Use: send typed payloads.
- `MessageStorage` - `node_modules/effect/src/cluster/MessageStorage.ts` - Message persistence abstraction. Use: durable message storage.
- `Reply` - `node_modules/effect/src/cluster/Reply.ts` - Reply message helpers. Use: respond to cluster requests.
- `Runner` - `node_modules/effect/src/cluster/Runner.ts` - Cluster runner abstraction. Use: host cluster workloads.
- `RunnerAddress` - `node_modules/effect/src/cluster/RunnerAddress.ts` - Runner addressing types. Use: locate a runner.
- `RunnerHealth` - `node_modules/effect/src/cluster/RunnerHealth.ts` - Runner health reporting. Use: track node readiness.
- `Runners` - `node_modules/effect/src/cluster/Runners.ts` - Runner collection utilities. Use: manage active runners.
- `RunnerServer` - `node_modules/effect/src/cluster/RunnerServer.ts` - Runner server implementation. Use: expose runner endpoints.
- `RunnerStorage` - `node_modules/effect/src/cluster/RunnerStorage.ts` - Runner persistence abstraction. Use: store runner metadata.
- `ShardId` - `node_modules/effect/src/cluster/ShardId.ts` - Shard identifier type. Use: map keys to shards.
- `Sharding` - `node_modules/effect/src/cluster/Sharding.ts` - Sharding utilities. Use: distribute entities.
- `ShardingConfig` - `node_modules/effect/src/cluster/ShardingConfig.ts` - Sharding configuration. Use: tune partitioning behavior.
- `ShardingRegistrationEvent` - `node_modules/effect/src/cluster/ShardingRegistrationEvent.ts` - Sharding registration events. Use: observe topology changes.
- `SingleRunner` - `node_modules/effect/src/cluster/SingleRunner.ts` - Single-process runner. Use: local cluster execution.
- `Singleton` - `node_modules/effect/src/cluster/Singleton.ts` - Cluster singleton abstraction. Use: one active service instance.
- `SingletonAddress` - `node_modules/effect/src/cluster/SingletonAddress.ts` - Singleton addressing types. Use: route singleton calls.
- `Snowflake` - `node_modules/effect/src/cluster/Snowflake.ts` - Snowflake-style ID generation. Use: unique distributed IDs.
- `SocketRunner` - `node_modules/effect/src/cluster/SocketRunner.ts` - Socket-based runner. Use: cluster transport over sockets.
- `SqlMessageStorage` - `node_modules/effect/src/cluster/SqlMessageStorage.ts` - SQL-backed message storage. Use: persist cluster messages.
- `SqlRunnerStorage` - `node_modules/effect/src/cluster/SqlRunnerStorage.ts` - SQL-backed runner storage. Use: persist runner state.
- `TestRunner` - `node_modules/effect/src/cluster/TestRunner.ts` - Test runner utilities. Use: simulate cluster execution.

### `effect/devtools`

- `DevTools` - `node_modules/effect/src/devtools/DevTools.ts` - Devtools integration. Use: inspect runtime behavior.
- `DevToolsClient` - `node_modules/effect/src/devtools/DevToolsClient.ts` - Devtools client API. Use: connect to devtools server.
- `DevToolsSchema` - `node_modules/effect/src/devtools/DevToolsSchema.ts` - Devtools message schemas. Use: type devtools payloads.
- `DevToolsServer` - `node_modules/effect/src/devtools/DevToolsServer.ts` - Devtools server API. Use: expose inspection endpoints.

### `effect/encoding`

- `Msgpack` - `node_modules/effect/src/encoding/Msgpack.ts` - MessagePack encoding helpers. Use: compact binary serialization.
- `Ndjson` - `node_modules/effect/src/encoding/Ndjson.ts` - NDJSON encoding helpers. Use: stream JSON lines.
- `Sse` - `node_modules/effect/src/encoding/Sse.ts` - Server-sent event encoding helpers. Use: emit SSE streams.

### `effect/eventlog`

- `Event` - `node_modules/effect/src/eventlog/Event.ts` - Event model types. Use: represent domain events.
- `EventGroup` - `node_modules/effect/src/eventlog/EventGroup.ts` - Event grouping helpers. Use: batch related events.
- `EventJournal` - `node_modules/effect/src/eventlog/EventJournal.ts` - Event journal abstraction. Use: append and read events.
- `EventLog` - `node_modules/effect/src/eventlog/EventLog.ts` - Event log API. Use: stream recorded events.
- `EventLogEncryption` - `node_modules/effect/src/eventlog/EventLogEncryption.ts` - Event log encryption helpers. Use: protect event payloads.
- `EventLogMessage` - `node_modules/effect/src/eventlog/EventLogMessage.ts` - Event log message types. Use: transport log entries.
- `EventLogRemote` - `node_modules/effect/src/eventlog/EventLogRemote.ts` - Remote event log client/server helpers. Use: access remote logs.
- `EventLogServer` - `node_modules/effect/src/eventlog/EventLogServer.ts` - Event log server support. Use: host event streams.
- `EventLogServerEncrypted` - `node_modules/effect/src/eventlog/EventLogServerEncrypted.ts` - Encrypted event log server. Use: secure event serving.
- `EventLogServerUnencrypted` - `node_modules/effect/src/eventlog/EventLogServerUnencrypted.ts` - Unencrypted event log server. Use: plain local serving.
- `EventLogSessionAuth` - `node_modules/effect/src/eventlog/EventLogSessionAuth.ts` - Event log session auth helpers. Use: authorize event sessions.
- `SqlEventJournal` - `node_modules/effect/src/eventlog/SqlEventJournal.ts` - SQL-backed event journal. Use: persist events in SQL.
- `SqlEventLogServerEncrypted` - `node_modules/effect/src/eventlog/SqlEventLogServerEncrypted.ts` - SQL-backed encrypted event server. Use: secure persisted logs.
- `SqlEventLogServerUnencrypted` - `node_modules/effect/src/eventlog/SqlEventLogServerUnencrypted.ts` - SQL-backed plain event server. Use: simple persisted logs.

### `effect/http`

- `Cookies` - `node_modules/effect/src/http/Cookies.ts` - HTTP cookie helpers. Use: parse and set cookies.
- `Etag` - `node_modules/effect/src/http/Etag.ts` - ETag utilities. Use: cache validation headers.
- `FetchHttpClient` - `node_modules/effect/src/http/FetchHttpClient.ts` - Fetch-based HTTP client. Use: run requests in browsers.
- `FindMyWay` - `node_modules/effect/src/http/FindMyWay.ts` - `find-my-way` router integration. Use: path routing.
- `Headers` - `node_modules/effect/src/http/Headers.ts` - HTTP header utilities. Use: manage request headers.
- `HttpBody` - `node_modules/effect/src/http/HttpBody.ts` - HTTP body representations. Use: send JSON or bytes.
- `HttpClient` - `node_modules/effect/src/http/HttpClient.ts` - Effect HTTP client API. Use: perform outbound requests.
- `HttpClientError` - `node_modules/effect/src/http/HttpClientError.ts` - HTTP client error types. Use: handle request failures.
- `HttpClientRequest` - `node_modules/effect/src/http/HttpClientRequest.ts` - HTTP client request builders. Use: construct requests.
- `HttpClientResponse` - `node_modules/effect/src/http/HttpClientResponse.ts` - HTTP client response utilities. Use: read status and body.
- `HttpEffect` - `node_modules/effect/src/http/HttpEffect.ts` - HTTP-specific effect helpers. Use: compose HTTP workflows.
- `HttpIncomingMessage` - `node_modules/effect/src/http/HttpIncomingMessage.ts` - Incoming message abstraction. Use: read request bodies.
- `HttpMethod` - `node_modules/effect/src/http/HttpMethod.ts` - HTTP method helpers. Use: branch on verbs.
- `HttpMiddleware` - `node_modules/effect/src/http/HttpMiddleware.ts` - HTTP middleware utilities. Use: add auth or logging.
- `HttpPlatform` - `node_modules/effect/src/http/HttpPlatform.ts` - Platform HTTP integration. Use: supply runtime adapters.
- `HttpRouter` - `node_modules/effect/src/http/HttpRouter.ts` - HTTP routing abstraction. Use: define endpoints.
- `HttpServer` - `node_modules/effect/src/http/HttpServer.ts` - HTTP server API. Use: serve requests.
- `HttpServerError` - `node_modules/effect/src/http/HttpServerError.ts` - HTTP server error types. Use: render server failures.
- `HttpServerRequest` - `node_modules/effect/src/http/HttpServerRequest.ts` - Server request utilities. Use: inspect inbound requests.
- `HttpServerRespondable` - `node_modules/effect/src/http/HttpServerRespondable.ts` - Response conversion protocol. Use: return custom response types.
- `HttpServerResponse` - `node_modules/effect/src/http/HttpServerResponse.ts` - Server response builders. Use: send JSON or text.
- `HttpStaticServer` - `node_modules/effect/src/http/HttpStaticServer.ts` - Static file serving helpers. Use: serve assets.
- `HttpTraceContext` - `node_modules/effect/src/http/HttpTraceContext.ts` - HTTP trace-context propagation. Use: carry tracing headers.
- `Multipart` - `node_modules/effect/src/http/Multipart.ts` - Multipart form-data helpers. Use: file uploads.
- `Multipasta` - `node_modules/effect/src/http/Multipasta.ts` - Multipasta integration. Use: parse multipart streams.
- `Template` - `node_modules/effect/src/http/Template.ts` - HTTP templating helpers. Use: generate responses from templates.
- `Url` - `node_modules/effect/src/http/Url.ts` - URL utilities. Use: parse and build URLs.
- `UrlParams` - `node_modules/effect/src/http/UrlParams.ts` - URL parameter helpers. Use: encode query strings.

### `effect/http-api`

- `HttpApi` - `node_modules/effect/src/http-api/HttpApi.ts` - Typed HTTP API description. Use: define an API contract.
- `HttpApiBuilder` - `node_modules/effect/src/http-api/HttpApiBuilder.ts` - Build servers from `HttpApi`. Use: implement typed endpoints.
- `HttpApiClient` - `node_modules/effect/src/http-api/HttpApiClient.ts` - Client generation for `HttpApi`. Use: call typed APIs.
- `HttpApiEndpoint` - `node_modules/effect/src/http-api/HttpApiEndpoint.ts` - Endpoint descriptors. Use: define route inputs/outputs.
- `HttpApiError` - `node_modules/effect/src/http-api/HttpApiError.ts` - HTTP API error types. Use: model typed API failures.
- `HttpApiGroup` - `node_modules/effect/src/http-api/HttpApiGroup.ts` - Group API endpoints. Use: organize related routes.
- `HttpApiMiddleware` - `node_modules/effect/src/http-api/HttpApiMiddleware.ts` - API middleware helpers. Use: add auth policies.
- `HttpApiScalar` - `node_modules/effect/src/http-api/HttpApiScalar.ts` - Scalar UI/integration helpers. Use: expose API docs tooling.
- `HttpApiSchema` - `node_modules/effect/src/http-api/HttpApiSchema.ts` - Schema annotations for HTTP metadata. Use: tag schema fields for APIs.
- `HttpApiSecurity` - `node_modules/effect/src/http-api/HttpApiSecurity.ts` - Security scheme helpers. Use: define auth requirements.
- `HttpApiSwagger` - `node_modules/effect/src/http-api/HttpApiSwagger.ts` - Swagger/OpenAPI integration. Use: serve interactive docs.
- `HttpApiTest` - `node_modules/effect/src/http-api/HttpApiTest.ts` - HttpApi test helpers. Use: test typed endpoints.
- `OpenApi` - `node_modules/effect/src/http-api/OpenApi.ts` - OpenAPI generation helpers. Use: export API specs.

### `effect/observability`

- `Otlp` - `node_modules/effect/src/observability/Otlp.ts` - OTLP integration entrypoint. Use: configure OTLP telemetry.
- `OtlpExporter` - `node_modules/effect/src/observability/OtlpExporter.ts` - OTLP exporter utilities. Use: send telemetry externally.
- `OtlpLogger` - `node_modules/effect/src/observability/OtlpLogger.ts` - OTLP log export support. Use: ship structured logs.
- `OtlpMetrics` - `node_modules/effect/src/observability/OtlpMetrics.ts` - OTLP metrics export support. Use: export counters and histograms.
- `OtlpResource` - `node_modules/effect/src/observability/OtlpResource.ts` - OTLP resource metadata helpers. Use: tag service identity.
- `OtlpSerialization` - `node_modules/effect/src/observability/OtlpSerialization.ts` - OTLP serialization helpers. Use: encode telemetry payloads.
- `OtlpTracer` - `node_modules/effect/src/observability/OtlpTracer.ts` - OTLP tracing export support. Use: export spans.
- `PrometheusMetrics` - `node_modules/effect/src/observability/PrometheusMetrics.ts` - Prometheus metrics exporter. Use: expose scrape endpoint.

### `effect/persistence`

- `KeyValueStore` - `node_modules/effect/src/persistence/KeyValueStore.ts` - Key-value storage abstraction. Use: persist simple state.
- `Persistable` - `node_modules/effect/src/persistence/Persistable.ts` - Persistable type helpers. Use: encode stored values.
- `PersistedCache` - `node_modules/effect/src/persistence/PersistedCache.ts` - Durable cache. Use: cache across restarts.
- `PersistedQueue` - `node_modules/effect/src/persistence/PersistedQueue.ts` - Durable queue. Use: persist work items.
- `Persistence` - `node_modules/effect/src/persistence/Persistence.ts` - Persistence service APIs. Use: back durable components.
- `RateLimiter` - `node_modules/effect/src/persistence/RateLimiter.ts` - Persistent rate limiter. Use: enforce cross-process limits.
- `Redis` - `node_modules/effect/src/persistence/Redis.ts` - Redis-backed persistence helpers. Use: store state in Redis.

### `effect/process`

- `ChildProcess` - `node_modules/effect/src/process/ChildProcess.ts` - Child process abstractions. Use: manage spawned commands.
- `ChildProcessSpawner` - `node_modules/effect/src/process/ChildProcessSpawner.ts` - Generic child-process spawning service. Use: launch subprocesses.

### `effect/reactivity`

- `AsyncResult` - `node_modules/effect/src/reactivity/AsyncResult.ts` - Reactive async result type. Use: represent loading/error/data.
- `Atom` - `node_modules/effect/src/reactivity/Atom.ts` - Reactive atom state primitive. Use: local reactive state.
- `AtomHttpApi` - `node_modules/effect/src/reactivity/AtomHttpApi.ts` - HttpApi integration for atoms. Use: sync state over HTTP.
- `AtomRef` - `node_modules/effect/src/reactivity/AtomRef.ts` - Ref-backed atom helpers. Use: bridge refs to reactivity.
- `AtomRegistry` - `node_modules/effect/src/reactivity/AtomRegistry.ts` - Atom registry utilities. Use: track application atoms.
- `AtomRpc` - `node_modules/effect/src/reactivity/AtomRpc.ts` - RPC integration for atoms. Use: sync state over RPC.
- `Hydration` - `node_modules/effect/src/reactivity/Hydration.ts` - Hydration helpers. Use: restore reactive state.
- `Reactivity` - `node_modules/effect/src/reactivity/Reactivity.ts` - Core reactivity utilities. Use: compose reactive computations.

### `effect/rpc`

- `Rpc` - `node_modules/effect/src/rpc/Rpc.ts` - Typed RPC description. Use: define RPC contracts.
- `RpcClient` - `node_modules/effect/src/rpc/RpcClient.ts` - RPC client API. Use: call remote procedures.
- `RpcClientError` - `node_modules/effect/src/rpc/RpcClientError.ts` - RPC client error types. Use: handle transport failures.
- `RpcGroup` - `node_modules/effect/src/rpc/RpcGroup.ts` - Group RPC endpoints. Use: organize procedures.
- `RpcMessage` - `node_modules/effect/src/rpc/RpcMessage.ts` - RPC message model. Use: encode request/response payloads.
- `RpcMiddleware` - `node_modules/effect/src/rpc/RpcMiddleware.ts` - RPC middleware helpers. Use: add auth or tracing.
- `RpcSchema` - `node_modules/effect/src/rpc/RpcSchema.ts` - Schema helpers for RPC. Use: type RPC payloads.
- `RpcSerialization` - `node_modules/effect/src/rpc/RpcSerialization.ts` - RPC serialization helpers. Use: encode wire formats.
- `RpcServer` - `node_modules/effect/src/rpc/RpcServer.ts` - RPC server API. Use: expose procedures.
- `RpcTest` - `node_modules/effect/src/rpc/RpcTest.ts` - RPC testing helpers. Use: test RPC handlers.
- `RpcWorker` - `node_modules/effect/src/rpc/RpcWorker.ts` - Worker integration for RPC. Use: run RPC over workers.
- `Utils` - `node_modules/effect/src/rpc/Utils.ts` - Shared RPC utilities. Use: support custom RPC plumbing.

### `effect/schema`

- `Model` - `node_modules/effect/src/schema/Model.ts` - Unstable schema model helpers. Use: define schema-backed models.
- `VariantSchema` - `node_modules/effect/src/schema/VariantSchema.ts` - Variant/discriminated schema helpers. Use: model tagged unions.

### `effect/socket`

- `Socket` - `node_modules/effect/src/socket/Socket.ts` - Socket abstractions. Use: connect stream transports.
- `SocketServer` - `node_modules/effect/src/socket/SocketServer.ts` - Socket server helpers. Use: accept socket clients.

### `effect/sql`

- `Migrator` - `node_modules/effect/src/sql/Migrator.ts` - SQL migration helpers. Use: run schema migrations.
- `SqlClient` - `node_modules/effect/src/sql/SqlClient.ts` - SQL client API. Use: execute queries.
- `SqlConnection` - `node_modules/effect/src/sql/SqlConnection.ts` - SQL connection abstraction. Use: manage DB sessions.
- `SqlError` - `node_modules/effect/src/sql/SqlError.ts` - SQL error types. Use: classify database failures.
- `SqlModel` - `node_modules/effect/src/sql/SqlModel.ts` - SQL-backed model helpers. Use: map tables to models.
- `SqlResolver` - `node_modules/effect/src/sql/SqlResolver.ts` - SQL request resolution helpers. Use: batch DB-backed requests.
- `SqlSchema` - `node_modules/effect/src/sql/SqlSchema.ts` - Schema helpers for SQL. Use: type query values.
- `SqlStream` - `node_modules/effect/src/sql/SqlStream.ts` - Streaming SQL query helpers. Use: consume large result sets.
- `Statement` - `node_modules/effect/src/sql/Statement.ts` - SQL statement builders/types. Use: prepare typed statements.

### `effect/workers`

- `Transferable` - `node_modules/effect/src/workers/Transferable.ts` - Transferable value helpers. Use: send data between workers.
- `Worker` - `node_modules/effect/src/workers/Worker.ts` - Worker abstractions. Use: run isolated tasks.
- `WorkerError` - `node_modules/effect/src/workers/WorkerError.ts` - Worker error types. Use: handle worker failures.
- `WorkerRunner` - `node_modules/effect/src/workers/WorkerRunner.ts` - Worker runner utilities. Use: host jobs in workers.

### `effect/workflow`

- `Activity` - `node_modules/effect/src/workflow/Activity.ts` - Workflow activity helpers. Use: define durable steps.
- `DurableClock` - `node_modules/effect/src/workflow/DurableClock.ts` - Durable clock API. Use: schedule workflow time.
- `DurableDeferred` - `node_modules/effect/src/workflow/DurableDeferred.ts` - Durable deferred primitive. Use: await external completion.
- `DurableQueue` - `node_modules/effect/src/workflow/DurableQueue.ts` - Durable queue primitive. Use: persist workflow worklists.
- `Workflow` - `node_modules/effect/src/workflow/Workflow.ts` - Workflow definition API. Use: declare durable workflows.
- `WorkflowEngine` - `node_modules/effect/src/workflow/WorkflowEngine.ts` - Workflow engine runtime. Use: execute workflows.
- `WorkflowProxy` - `node_modules/effect/src/workflow/WorkflowProxy.ts` - Workflow client proxy. Use: call workflow instances.
- `WorkflowProxyServer` - `node_modules/effect/src/workflow/WorkflowProxyServer.ts` - Workflow proxy server. Use: expose workflow endpoints.

## `@effect/opentelemetry` Package

Package path: `packages/opentelemetry`

- `Logger` - `packages/opentelemetry/src/Logger.ts` - OpenTelemetry logging integration. Use: export structured logs.
- `Metrics` - `packages/opentelemetry/src/Metrics.ts` - OpenTelemetry metrics integration. Use: publish application metrics.
- `NodeSdk` - `packages/opentelemetry/src/NodeSdk.ts` - Node OpenTelemetry SDK wiring. Use: bootstrap telemetry in Node.
- `Resource` - `packages/opentelemetry/src/Resource.ts` - OpenTelemetry resource helpers. Use: describe service metadata.
- `Tracer` - `packages/opentelemetry/src/Tracer.ts` - OpenTelemetry tracing integration. Use: create and export spans.
- `WebSdk` - `packages/opentelemetry/src/WebSdk.ts` - Web OpenTelemetry SDK wiring. Use: bootstrap telemetry in browsers.

## `@effect/platform-browser` Package

Package path: `packages/platform-browser`

- `BrowserHttpClient` - `packages/platform-browser/src/BrowserHttpClient.ts` - Browser HTTP client implementation. Use: make fetch-based requests.
- `BrowserKeyValueStore` - `packages/platform-browser/src/BrowserKeyValueStore.ts` - Browser key-value storage adapter. Use: persist small client values.
- `BrowserPersistence` - `packages/platform-browser/src/BrowserPersistence.ts` - Browser persistence services. Use: store app state locally.
- `BrowserRuntime` - `packages/platform-browser/src/BrowserRuntime.ts` - Browser runtime entrypoints. Use: run Effect apps in browsers.
- `BrowserSocket` - `packages/platform-browser/src/BrowserSocket.ts` - Browser socket implementation. Use: open WebSocket-style connections.
- `BrowserStream` - `packages/platform-browser/src/BrowserStream.ts` - Browser stream adapters. Use: bridge web streams.
- `BrowserWorker` - `packages/platform-browser/src/BrowserWorker.ts` - Browser worker integration. Use: communicate with web workers.
- `BrowserWorkerRunner` - `packages/platform-browser/src/BrowserWorkerRunner.ts` - Worker-side runtime helpers. Use: run Effect code inside workers.
- `Clipboard` - `packages/platform-browser/src/Clipboard.ts` - Clipboard API wrappers. Use: read or write clipboard data.
- `Geolocation` - `packages/platform-browser/src/Geolocation.ts` - Geolocation API wrappers. Use: access device location.
- `IndexedDb` - `packages/platform-browser/src/IndexedDb.ts` - IndexedDB integration. Use: build browser databases.
- `IndexedDbDatabase` - `packages/platform-browser/src/IndexedDbDatabase.ts` - IndexedDB database helpers. Use: define database handles.
- `IndexedDbQueryBuilder` - `packages/platform-browser/src/IndexedDbQueryBuilder.ts` - IndexedDB query builder. Use: compose indexed queries.
- `IndexedDbTable` - `packages/platform-browser/src/IndexedDbTable.ts` - IndexedDB table helpers. Use: work with object stores.
- `IndexedDbVersion` - `packages/platform-browser/src/IndexedDbVersion.ts` - IndexedDB versioning helpers. Use: manage schema upgrades.
- `Permissions` - `packages/platform-browser/src/Permissions.ts` - Permissions API wrappers. Use: query browser permissions.

## `@effect/platform-bun` Package

Package path: `packages/platform-bun`

- `BunChildProcessSpawner` - `packages/platform-bun/src/BunChildProcessSpawner.ts` - Bun child-process spawner. Use: launch subprocesses.
- `BunClusterHttp` - `packages/platform-bun/src/BunClusterHttp.ts` - Bun clustered HTTP helpers. Use: scale HTTP servers.
- `BunClusterSocket` - `packages/platform-bun/src/BunClusterSocket.ts` - Bun clustered socket helpers. Use: scale socket servers.
- `BunFileSystem` - `packages/platform-bun/src/BunFileSystem.ts` - Bun file system implementation. Use: do Bun-based file I/O.
- `BunHttpClient` - `packages/platform-bun/src/BunHttpClient.ts` - Bun HTTP client implementation. Use: make outbound HTTP requests.
- `BunHttpPlatform` - `packages/platform-bun/src/BunHttpPlatform.ts` - Bun HTTP platform services. Use: provide HTTP runtime pieces.
- `BunHttpServer` - `packages/platform-bun/src/BunHttpServer.ts` - Bun HTTP server implementation. Use: serve HTTP endpoints.
- `BunHttpServerRequest` - `packages/platform-bun/src/BunHttpServerRequest.ts` - Bun request adapters. Use: read incoming HTTP requests.
- `BunMultipart` - `packages/platform-bun/src/BunMultipart.ts` - Bun multipart parsing. Use: handle form uploads.
- `BunPath` - `packages/platform-bun/src/BunPath.ts` - Bun path service. Use: resolve filesystem paths.
- `BunRedis` - `packages/platform-bun/src/BunRedis.ts` - Bun Redis integration. Use: talk to Redis.
- `BunRuntime` - `packages/platform-bun/src/BunRuntime.ts` - Bun runtime entrypoints. Use: run Effect apps on Bun.
- `BunServices` - `packages/platform-bun/src/BunServices.ts` - Bun service bundle. Use: provide common Bun services.
- `BunSink` - `packages/platform-bun/src/BunSink.ts` - Bun sink adapters. Use: write streamed output.
- `BunSocket` - `packages/platform-bun/src/BunSocket.ts` - Bun socket implementation. Use: manage socket connections.
- `BunSocketServer` - `packages/platform-bun/src/BunSocketServer.ts` - Bun socket server implementation. Use: accept socket clients.
- `BunStdio` - `packages/platform-bun/src/BunStdio.ts` - Bun stdio integration. Use: access stdin/stdout/stderr.
- `BunStream` - `packages/platform-bun/src/BunStream.ts` - Bun stream adapters. Use: bridge Bun streams.
- `BunTerminal` - `packages/platform-bun/src/BunTerminal.ts` - Bun terminal integration. Use: build CLI terminal interactions.
- `BunWorker` - `packages/platform-bun/src/BunWorker.ts` - Bun worker integration. Use: communicate with workers.
- `BunWorkerRunner` - `packages/platform-bun/src/BunWorkerRunner.ts` - Bun worker runtime helpers. Use: run Effect code in workers.

## `@effect/platform-node` Package

Package path: `packages/platform-node`

- `Mime` - `packages/platform-node/src/Mime.ts` - MIME type helpers. Use: detect or assign content types.
- `NodeChildProcessSpawner` - `packages/platform-node/src/NodeChildProcessSpawner.ts` - Node child-process spawner. Use: launch subprocesses.
- `NodeClusterHttp` - `packages/platform-node/src/NodeClusterHttp.ts` - Node clustered HTTP helpers. Use: scale HTTP servers.
- `NodeClusterSocket` - `packages/platform-node/src/NodeClusterSocket.ts` - Node clustered socket helpers. Use: scale socket servers.
- `NodeFileSystem` - `packages/platform-node/src/NodeFileSystem.ts` - Node file system implementation. Use: do Node-based file I/O.
- `NodeHttpClient` - `packages/platform-node/src/NodeHttpClient.ts` - Node HTTP client implementation. Use: make outbound HTTP requests.
- `NodeHttpIncomingMessage` - `packages/platform-node/src/NodeHttpIncomingMessage.ts` - Node incoming message adapters. Use: read raw Node HTTP messages.
- `NodeHttpPlatform` - `packages/platform-node/src/NodeHttpPlatform.ts` - Node HTTP platform services. Use: provide HTTP runtime pieces.
- `NodeHttpServer` - `packages/platform-node/src/NodeHttpServer.ts` - Node HTTP server implementation. Use: serve HTTP endpoints.
- `NodeHttpServerRequest` - `packages/platform-node/src/NodeHttpServerRequest.ts` - Node request adapters. Use: read incoming HTTP requests.
- `NodeMultipart` - `packages/platform-node/src/NodeMultipart.ts` - Node multipart parsing. Use: handle form uploads.
- `NodePath` - `packages/platform-node/src/NodePath.ts` - Node path service. Use: resolve filesystem paths.
- `NodeRedis` - `packages/platform-node/src/NodeRedis.ts` - Node Redis integration. Use: talk to Redis.
- `NodeRuntime` - `packages/platform-node/src/NodeRuntime.ts` - Node runtime entrypoints. Use: run Effect apps on Node.
- `NodeServices` - `packages/platform-node/src/NodeServices.ts` - Node service bundle. Use: provide common Node services.
- `NodeSink` - `packages/platform-node/src/NodeSink.ts` - Node sink adapters. Use: write streamed output.
- `NodeSocket` - `packages/platform-node/src/NodeSocket.ts` - Node socket implementation. Use: manage socket connections.
- `NodeSocketServer` - `packages/platform-node/src/NodeSocketServer.ts` - Node socket server implementation. Use: accept socket clients.
- `NodeStdio` - `packages/platform-node/src/NodeStdio.ts` - Node stdio integration. Use: access stdin/stdout/stderr.
- `NodeStream` - `packages/platform-node/src/NodeStream.ts` - Node stream adapters. Use: bridge Node streams.
- `NodeTerminal` - `packages/platform-node/src/NodeTerminal.ts` - Node terminal integration. Use: build CLI terminal interactions.
- `NodeWorker` - `packages/platform-node/src/NodeWorker.ts` - Node worker integration. Use: communicate with worker threads.
- `NodeWorkerRunner` - `packages/platform-node/src/NodeWorkerRunner.ts` - Node worker runtime helpers. Use: run Effect code in workers.
- `Undici` - `packages/platform-node/src/Undici.ts` - Undici integration helpers. Use: use Undici-based HTTP features.

## `@effect/platform-node-shared` Package

Package path: `packages/platform-node-shared`

- No public `src/index.ts` barrel is present in this vendored repo, so there are no barrel exports to inventory here.

## `@effect/vitest` Package

Package path: `packages/vitest`

- `vitest` - `packages/vitest/src/index.ts` - Re-export of `vitest` APIs. Use: use standard Vitest APIs.
- `API` - `packages/vitest/src/index.ts` - Test API type alias. Use: type custom test helpers.
- `Vitest` - `packages/vitest/src/index.ts` - Effect-aware Vitest namespace types. Use: type Effect-based tests.
- `addEqualityTesters` - `packages/vitest/src/index.ts` - Installs equality testers. Use: compare Effect values in assertions.
- `effect` - `packages/vitest/src/index.ts` - Effect-aware `it` variant. Use: write scoped Effect tests.
- `live` - `packages/vitest/src/index.ts` - Live-service test variant. Use: run tests with live services.
- `layer` - `packages/vitest/src/index.ts` - Share a `Layer` across tests. Use: provide services to test groups.
- `flakyTest` - `packages/vitest/src/index.ts` - Flaky-test wrapper. Use: stabilize eventually consistent checks.
- `prop` - `packages/vitest/src/index.ts` - Property-test helper. Use: generate property-based cases.
- `it` - `packages/vitest/src/index.ts` - Extended Vitest `it`. Use: mix regular and Effect tests.
- `makeMethods` - `packages/vitest/src/index.ts` - Build extended test methods. Use: wrap a custom test API.
- `describeWrapped` - `packages/vitest/src/index.ts` - `describe` helper with Effect methods. Use: define grouped Effect test suites.
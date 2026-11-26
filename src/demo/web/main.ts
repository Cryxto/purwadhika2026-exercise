import { Effect } from "effect";
import { FetchHttpClient, HttpClient, HttpClientResponse } from "effect/http";
import { Greeting } from "../shared.ts";

const output = document.querySelector("#output");

const render = (text: string) =>
  Effect.sync(() => {
    if (output) output.textContent = text;
  });

const program = Effect.gen(function* () {
  const client = (yield* HttpClient.HttpClient).pipe(HttpClient.filterStatusOk);
  const response = yield* client.get("/api/hello");
  const greeting = yield* HttpClientResponse.schemaBodyJson(Greeting)(response);
  yield* render(greeting.message);
}).pipe(
  Effect.catch((error) =>
    Effect.andThen(
      Effect.logError(error),
      render("Could not reach the API. Is `pnpm dev:api` running?"),
    ),
  ),
);

program.pipe(Effect.provide(FetchHttpClient.layer), Effect.runFork);

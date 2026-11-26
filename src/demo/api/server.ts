import * as NodeHttpServer from "@effect/platform-node/NodeHttpServer";
import * as NodeRuntime from "@effect/platform-node/NodeRuntime";
import { Layer } from "effect";
import { HttpRouter, HttpServerResponse } from "effect/http";
import { createServer } from "node:http";
import { Greeting } from "../shared.ts";

const HelloRoute = HttpRouter.add(
  "GET",
  "/api/hello",
  HttpServerResponse.schemaJson(Greeting)({ message: "Hello from the Effect API" }),
);

HttpRouter.serve(HelloRoute).pipe(
  Layer.provide(NodeHttpServer.layer(createServer, { port: 3000, host: "127.0.0.1" })),
  Layer.launch,
  NodeRuntime.runMain,
);

import { Schema } from "effect";

// Shared by the server and the web page, so both agree on the payload shape.
export const Greeting = Schema.Struct({ message: Schema.String });

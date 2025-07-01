/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as friendCodes from "../friendCodes.js";
import type * as http from "../http.js";
import type * as messages from "../messages.js";
import type * as profiles from "../profiles.js";
import type * as router from "../router.js";
import type * as stats from "../stats.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  friendCodes: typeof friendCodes;
  http: typeof http;
  messages: typeof messages;
  profiles: typeof profiles;
  router: typeof router;
  stats: typeof stats;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

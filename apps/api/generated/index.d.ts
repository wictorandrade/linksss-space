
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model Link
 * 
 */
export type Link = $Result.DefaultSelection<Prisma.$LinkPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model ContentPurchase
 * 
 */
export type ContentPurchase = $Result.DefaultSelection<Prisma.$ContentPurchasePayload>
/**
 * Model PageAnalytics
 * 
 */
export type PageAnalytics = $Result.DefaultSelection<Prisma.$PageAnalyticsPayload>
/**
 * Model LinkClick
 * 
 */
export type LinkClick = $Result.DefaultSelection<Prisma.$LinkClickPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Coupon
 * 
 */
export type Coupon = $Result.DefaultSelection<Prisma.$CouponPayload>
/**
 * Model UserGrant
 * 
 */
export type UserGrant = $Result.DefaultSelection<Prisma.$UserGrantPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model PlatformSettings
 * 
 */
export type PlatformSettings = $Result.DefaultSelection<Prisma.$PlatformSettingsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LinkType: {
  URL: 'URL',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  WHATSAPP: 'WHATSAPP',
  INSTAGRAM: 'INSTAGRAM',
  YOUTUBE: 'YOUTUBE',
  TIKTOK: 'TIKTOK',
  TWITTER: 'TWITTER',
  LINKEDIN: 'LINKEDIN',
  FACEBOOK: 'FACEBOOK',
  SPOTIFY: 'SPOTIFY',
  APPLE_MUSIC: 'APPLE_MUSIC',
  TWITCH: 'TWITCH',
  DISCORD: 'DISCORD',
  TELEGRAM: 'TELEGRAM',
  BEHANCE: 'BEHANCE',
  DRIBBBLE: 'DRIBBBLE',
  GITHUB: 'GITHUB',
  MEDIUM: 'MEDIUM',
  SUBSTACK: 'SUBSTACK',
  CUSTOM: 'CUSTOM',
  PAID_CONTENT: 'PAID_CONTENT'
};

export type LinkType = (typeof LinkType)[keyof typeof LinkType]


export const ContentType: {
  FILE: 'FILE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  TEXT: 'TEXT',
  LINK: 'LINK',
  COURSE: 'COURSE',
  DOWNLOAD: 'DOWNLOAD'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const SubStatus: {
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
  INCOMPLETE: 'INCOMPLETE',
  TRIALING: 'TRIALING',
  UNPAID: 'UNPAID'
};

export type SubStatus = (typeof SubStatus)[keyof typeof SubStatus]

}

export type LinkType = $Enums.LinkType

export const LinkType: typeof $Enums.LinkType

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type SubStatus = $Enums.SubStatus

export const SubStatus: typeof $Enums.SubStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.link`: Exposes CRUD operations for the **Link** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.link.findMany()
    * ```
    */
  get link(): Prisma.LinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contentPurchase`: Exposes CRUD operations for the **ContentPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentPurchases
    * const contentPurchases = await prisma.contentPurchase.findMany()
    * ```
    */
  get contentPurchase(): Prisma.ContentPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageAnalytics`: Exposes CRUD operations for the **PageAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageAnalytics
    * const pageAnalytics = await prisma.pageAnalytics.findMany()
    * ```
    */
  get pageAnalytics(): Prisma.PageAnalyticsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkClick`: Exposes CRUD operations for the **LinkClick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkClicks
    * const linkClicks = await prisma.linkClick.findMany()
    * ```
    */
  get linkClick(): Prisma.LinkClickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coupons
    * const coupons = await prisma.coupon.findMany()
    * ```
    */
  get coupon(): Prisma.CouponDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGrant`: Exposes CRUD operations for the **UserGrant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGrants
    * const userGrants = await prisma.userGrant.findMany()
    * ```
    */
  get userGrant(): Prisma.UserGrantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platformSettings`: Exposes CRUD operations for the **PlatformSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlatformSettings
    * const platformSettings = await prisma.platformSettings.findMany()
    * ```
    */
  get platformSettings(): Prisma.PlatformSettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Page: 'Page',
    Link: 'Link',
    Content: 'Content',
    ContentPurchase: 'ContentPurchase',
    PageAnalytics: 'PageAnalytics',
    LinkClick: 'LinkClick',
    Plan: 'Plan',
    Subscription: 'Subscription',
    Coupon: 'Coupon',
    UserGrant: 'UserGrant',
    Template: 'Template',
    PlatformSettings: 'PlatformSettings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "page" | "link" | "content" | "contentPurchase" | "pageAnalytics" | "linkClick" | "plan" | "subscription" | "coupon" | "userGrant" | "template" | "platformSettings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      Link: {
        payload: Prisma.$LinkPayload<ExtArgs>
        fields: Prisma.LinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findFirst: {
            args: Prisma.LinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          findMany: {
            args: Prisma.LinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          create: {
            args: Prisma.LinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          createMany: {
            args: Prisma.LinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          delete: {
            args: Prisma.LinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          update: {
            args: Prisma.LinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          deleteMany: {
            args: Prisma.LinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>[]
          }
          upsert: {
            args: Prisma.LinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkPayload>
          }
          aggregate: {
            args: Prisma.LinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLink>
          }
          groupBy: {
            args: Prisma.LinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkCountArgs<ExtArgs>
            result: $Utils.Optional<LinkCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      ContentPurchase: {
        payload: Prisma.$ContentPurchasePayload<ExtArgs>
        fields: Prisma.ContentPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>
          }
          findFirst: {
            args: Prisma.ContentPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>
          }
          findMany: {
            args: Prisma.ContentPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>[]
          }
          create: {
            args: Prisma.ContentPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>
          }
          createMany: {
            args: Prisma.ContentPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>[]
          }
          delete: {
            args: Prisma.ContentPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>
          }
          update: {
            args: Prisma.ContentPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>
          }
          deleteMany: {
            args: Prisma.ContentPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>[]
          }
          upsert: {
            args: Prisma.ContentPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPurchasePayload>
          }
          aggregate: {
            args: Prisma.ContentPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentPurchase>
          }
          groupBy: {
            args: Prisma.ContentPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<ContentPurchaseCountAggregateOutputType> | number
          }
        }
      }
      PageAnalytics: {
        payload: Prisma.$PageAnalyticsPayload<ExtArgs>
        fields: Prisma.PageAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.PageAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>
          }
          findMany: {
            args: Prisma.PageAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>[]
          }
          create: {
            args: Prisma.PageAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>
          }
          createMany: {
            args: Prisma.PageAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.PageAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>
          }
          update: {
            args: Prisma.PageAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.PageAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.PageAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.PageAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageAnalytics>
          }
          groupBy: {
            args: Prisma.PageAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<PageAnalyticsCountAggregateOutputType> | number
          }
        }
      }
      LinkClick: {
        payload: Prisma.$LinkClickPayload<ExtArgs>
        fields: Prisma.LinkClickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkClickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkClickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          findFirst: {
            args: Prisma.LinkClickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkClickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          findMany: {
            args: Prisma.LinkClickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>[]
          }
          create: {
            args: Prisma.LinkClickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          createMany: {
            args: Prisma.LinkClickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkClickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>[]
          }
          delete: {
            args: Prisma.LinkClickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          update: {
            args: Prisma.LinkClickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          deleteMany: {
            args: Prisma.LinkClickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkClickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkClickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>[]
          }
          upsert: {
            args: Prisma.LinkClickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkClickPayload>
          }
          aggregate: {
            args: Prisma.LinkClickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkClick>
          }
          groupBy: {
            args: Prisma.LinkClickGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkClickGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkClickCountArgs<ExtArgs>
            result: $Utils.Optional<LinkClickCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Coupon: {
        payload: Prisma.$CouponPayload<ExtArgs>
        fields: Prisma.CouponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CouponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CouponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findFirst: {
            args: Prisma.CouponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CouponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          findMany: {
            args: Prisma.CouponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          create: {
            args: Prisma.CouponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          createMany: {
            args: Prisma.CouponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CouponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          delete: {
            args: Prisma.CouponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          update: {
            args: Prisma.CouponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          deleteMany: {
            args: Prisma.CouponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CouponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CouponUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>[]
          }
          upsert: {
            args: Prisma.CouponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CouponPayload>
          }
          aggregate: {
            args: Prisma.CouponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoupon>
          }
          groupBy: {
            args: Prisma.CouponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CouponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CouponCountArgs<ExtArgs>
            result: $Utils.Optional<CouponCountAggregateOutputType> | number
          }
        }
      }
      UserGrant: {
        payload: Prisma.$UserGrantPayload<ExtArgs>
        fields: Prisma.UserGrantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGrantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGrantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>
          }
          findFirst: {
            args: Prisma.UserGrantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGrantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>
          }
          findMany: {
            args: Prisma.UserGrantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>[]
          }
          create: {
            args: Prisma.UserGrantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>
          }
          createMany: {
            args: Prisma.UserGrantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGrantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>[]
          }
          delete: {
            args: Prisma.UserGrantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>
          }
          update: {
            args: Prisma.UserGrantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>
          }
          deleteMany: {
            args: Prisma.UserGrantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGrantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGrantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>[]
          }
          upsert: {
            args: Prisma.UserGrantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGrantPayload>
          }
          aggregate: {
            args: Prisma.UserGrantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGrant>
          }
          groupBy: {
            args: Prisma.UserGrantGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGrantGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGrantCountArgs<ExtArgs>
            result: $Utils.Optional<UserGrantCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      PlatformSettings: {
        payload: Prisma.$PlatformSettingsPayload<ExtArgs>
        fields: Prisma.PlatformSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>
          }
          findFirst: {
            args: Prisma.PlatformSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>
          }
          findMany: {
            args: Prisma.PlatformSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>[]
          }
          create: {
            args: Prisma.PlatformSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>
          }
          createMany: {
            args: Prisma.PlatformSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>[]
          }
          delete: {
            args: Prisma.PlatformSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>
          }
          update: {
            args: Prisma.PlatformSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>
          }
          deleteMany: {
            args: Prisma.PlatformSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>[]
          }
          upsert: {
            args: Prisma.PlatformSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformSettingsPayload>
          }
          aggregate: {
            args: Prisma.PlatformSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatformSettings>
          }
          groupBy: {
            args: Prisma.PlatformSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformSettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    page?: PageOmit
    link?: LinkOmit
    content?: ContentOmit
    contentPurchase?: ContentPurchaseOmit
    pageAnalytics?: PageAnalyticsOmit
    linkClick?: LinkClickOmit
    plan?: PlanOmit
    subscription?: SubscriptionOmit
    coupon?: CouponOmit
    userGrant?: UserGrantOmit
    template?: TemplateOmit
    platformSettings?: PlatformSettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pages: number
    grants: number
    purchases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | UserCountOutputTypeCountPagesArgs
    grants?: boolean | UserCountOutputTypeCountGrantsArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGrantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentPurchaseWhereInput
  }


  /**
   * Count Type PageCountOutputType
   */

  export type PageCountOutputType = {
    links: number
    analytics: number
    contents: number
  }

  export type PageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    links?: boolean | PageCountOutputTypeCountLinksArgs
    analytics?: boolean | PageCountOutputTypeCountAnalyticsArgs
    contents?: boolean | PageCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageCountOutputType
     */
    select?: PageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageAnalyticsWhereInput
  }

  /**
   * PageCountOutputType without action
   */
  export type PageCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }


  /**
   * Count Type LinkCountOutputType
   */

  export type LinkCountOutputType = {
    clicks: number
  }

  export type LinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clicks?: boolean | LinkCountOutputTypeCountClicksArgs
  }

  // Custom InputTypes
  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkCountOutputType
     */
    select?: LinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LinkCountOutputType without action
   */
  export type LinkCountOutputTypeCountClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkClickWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    purchases: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | ContentCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentPurchaseWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
    grants: number
    coupons: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
    grants?: boolean | PlanCountOutputTypeCountGrantsArgs
    coupons?: boolean | PlanCountOutputTypeCountCouponsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountGrantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrantWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountCouponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    ssoId: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    ssoId: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    ssoId: number
    email: number
    name: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    ssoId?: true
    email?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    ssoId?: true
    email?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    ssoId?: true
    email?: true
    name?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    ssoId: string
    email: string
    name: string
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ssoId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pages?: boolean | User$pagesArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    grants?: boolean | User$grantsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ssoId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ssoId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    ssoId?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ssoId" | "email" | "name" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pages?: boolean | User$pagesArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    grants?: boolean | User$grantsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      pages: Prisma.$PagePayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      grants: Prisma.$UserGrantPayload<ExtArgs>[]
      purchases: Prisma.$ContentPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ssoId: string
      email: string
      name: string
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pages<T extends User$pagesArgs<ExtArgs> = {}>(args?: Subset<T, User$pagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    grants<T extends User$grantsArgs<ExtArgs> = {}>(args?: Subset<T, User$grantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly ssoId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.pages
   */
  export type User$pagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    cursor?: PageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.grants
   */
  export type User$grantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    where?: UserGrantWhereInput
    orderBy?: UserGrantOrderByWithRelationInput | UserGrantOrderByWithRelationInput[]
    cursor?: UserGrantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGrantScalarFieldEnum | UserGrantScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    where?: ContentPurchaseWhereInput
    orderBy?: ContentPurchaseOrderByWithRelationInput | ContentPurchaseOrderByWithRelationInput[]
    cursor?: ContentPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentPurchaseScalarFieldEnum | ContentPurchaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    userId: string | null
    slug: string | null
    title: string | null
    description: string | null
    bio: string | null
    avatarUrl: string | null
    backgroundImageUrl: string | null
    isActive: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    slug: string | null
    title: string | null
    description: string | null
    bio: string | null
    avatarUrl: string | null
    backgroundImageUrl: string | null
    isActive: boolean | null
    isFeatured: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    userId: number
    slug: number
    title: number
    description: number
    bio: number
    avatarUrl: number
    backgroundImageUrl: number
    theme: number
    isActive: number
    isFeatured: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    userId?: true
    slug?: true
    title?: true
    description?: true
    bio?: true
    avatarUrl?: true
    backgroundImageUrl?: true
    isActive?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    userId?: true
    slug?: true
    title?: true
    description?: true
    bio?: true
    avatarUrl?: true
    backgroundImageUrl?: true
    isActive?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    userId?: true
    slug?: true
    title?: true
    description?: true
    bio?: true
    avatarUrl?: true
    backgroundImageUrl?: true
    theme?: true
    isActive?: true
    isFeatured?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    userId: string
    slug: string
    title: string
    description: string | null
    bio: string | null
    avatarUrl: string | null
    backgroundImageUrl: string | null
    theme: JsonValue
    isActive: boolean
    isFeatured: boolean
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    bio?: boolean
    avatarUrl?: boolean
    backgroundImageUrl?: boolean
    theme?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    links?: boolean | Page$linksArgs<ExtArgs>
    analytics?: boolean | Page$analyticsArgs<ExtArgs>
    contents?: boolean | Page$contentsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    bio?: boolean
    avatarUrl?: boolean
    backgroundImageUrl?: boolean
    theme?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    bio?: boolean
    avatarUrl?: boolean
    backgroundImageUrl?: boolean
    theme?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    userId?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    bio?: boolean
    avatarUrl?: boolean
    backgroundImageUrl?: boolean
    theme?: boolean
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "slug" | "title" | "description" | "bio" | "avatarUrl" | "backgroundImageUrl" | "theme" | "isActive" | "isFeatured" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    links?: boolean | Page$linksArgs<ExtArgs>
    analytics?: boolean | Page$analyticsArgs<ExtArgs>
    contents?: boolean | Page$contentsArgs<ExtArgs>
    _count?: boolean | PageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      links: Prisma.$LinkPayload<ExtArgs>[]
      analytics: Prisma.$PageAnalyticsPayload<ExtArgs>[]
      contents: Prisma.$ContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      slug: string
      title: string
      description: string | null
      bio: string | null
      avatarUrl: string | null
      backgroundImageUrl: string | null
      theme: Prisma.JsonValue
      isActive: boolean
      isFeatured: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    links<T extends Page$linksArgs<ExtArgs> = {}>(args?: Subset<T, Page$linksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends Page$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, Page$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contents<T extends Page$contentsArgs<ExtArgs> = {}>(args?: Subset<T, Page$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly userId: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly description: FieldRef<"Page", 'String'>
    readonly bio: FieldRef<"Page", 'String'>
    readonly avatarUrl: FieldRef<"Page", 'String'>
    readonly backgroundImageUrl: FieldRef<"Page", 'String'>
    readonly theme: FieldRef<"Page", 'Json'>
    readonly isActive: FieldRef<"Page", 'Boolean'>
    readonly isFeatured: FieldRef<"Page", 'Boolean'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.links
   */
  export type Page$linksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    cursor?: LinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Page.analytics
   */
  export type Page$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    where?: PageAnalyticsWhereInput
    orderBy?: PageAnalyticsOrderByWithRelationInput | PageAnalyticsOrderByWithRelationInput[]
    cursor?: PageAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PageAnalyticsScalarFieldEnum | PageAnalyticsScalarFieldEnum[]
  }

  /**
   * Page.contents
   */
  export type Page$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model Link
   */

  export type AggregateLink = {
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  export type LinkAvgAggregateOutputType = {
    position: number | null
    price: Decimal | null
  }

  export type LinkSumAggregateOutputType = {
    position: number | null
    price: Decimal | null
  }

  export type LinkMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    type: $Enums.LinkType | null
    title: string | null
    url: string | null
    icon: string | null
    imageUrl: string | null
    position: number | null
    isActive: boolean | null
    isPaid: boolean | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    type: $Enums.LinkType | null
    title: string | null
    url: string | null
    icon: string | null
    imageUrl: string | null
    position: number | null
    isActive: boolean | null
    isPaid: boolean | null
    price: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LinkCountAggregateOutputType = {
    id: number
    pageId: number
    type: number
    title: number
    url: number
    icon: number
    imageUrl: number
    style: number
    position: number
    isActive: number
    isPaid: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LinkAvgAggregateInputType = {
    position?: true
    price?: true
  }

  export type LinkSumAggregateInputType = {
    position?: true
    price?: true
  }

  export type LinkMinAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    title?: true
    url?: true
    icon?: true
    imageUrl?: true
    position?: true
    isActive?: true
    isPaid?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkMaxAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    title?: true
    url?: true
    icon?: true
    imageUrl?: true
    position?: true
    isActive?: true
    isPaid?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LinkCountAggregateInputType = {
    id?: true
    pageId?: true
    type?: true
    title?: true
    url?: true
    icon?: true
    imageUrl?: true
    style?: true
    position?: true
    isActive?: true
    isPaid?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Link to aggregate.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkMaxAggregateInputType
  }

  export type GetLinkAggregateType<T extends LinkAggregateArgs> = {
        [P in keyof T & keyof AggregateLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLink[P]>
      : GetScalarType<T[P], AggregateLink[P]>
  }




  export type LinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkWhereInput
    orderBy?: LinkOrderByWithAggregationInput | LinkOrderByWithAggregationInput[]
    by: LinkScalarFieldEnum[] | LinkScalarFieldEnum
    having?: LinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkCountAggregateInputType | true
    _avg?: LinkAvgAggregateInputType
    _sum?: LinkSumAggregateInputType
    _min?: LinkMinAggregateInputType
    _max?: LinkMaxAggregateInputType
  }

  export type LinkGroupByOutputType = {
    id: string
    pageId: string
    type: $Enums.LinkType
    title: string
    url: string
    icon: string | null
    imageUrl: string | null
    style: JsonValue
    position: number
    isActive: boolean
    isPaid: boolean
    price: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: LinkCountAggregateOutputType | null
    _avg: LinkAvgAggregateOutputType | null
    _sum: LinkSumAggregateOutputType | null
    _min: LinkMinAggregateOutputType | null
    _max: LinkMaxAggregateOutputType | null
  }

  type GetLinkGroupByPayload<T extends LinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkGroupByOutputType[P]>
            : GetScalarType<T[P], LinkGroupByOutputType[P]>
        }
      >
    >


  export type LinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    imageUrl?: boolean
    style?: boolean
    position?: boolean
    isActive?: boolean
    isPaid?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
    clicks?: boolean | Link$clicksArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    imageUrl?: boolean
    style?: boolean
    position?: boolean
    isActive?: boolean
    isPaid?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    imageUrl?: boolean
    style?: boolean
    position?: boolean
    isActive?: boolean
    isPaid?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["link"]>

  export type LinkSelectScalar = {
    id?: boolean
    pageId?: boolean
    type?: boolean
    title?: boolean
    url?: boolean
    icon?: boolean
    imageUrl?: boolean
    style?: boolean
    position?: boolean
    isActive?: boolean
    isPaid?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "type" | "title" | "url" | "icon" | "imageUrl" | "style" | "position" | "isActive" | "isPaid" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["link"]>
  export type LinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
    clicks?: boolean | Link$clicksArgs<ExtArgs>
    _count?: boolean | LinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type LinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $LinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Link"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
      clicks: Prisma.$LinkClickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      type: $Enums.LinkType
      title: string
      url: string
      icon: string | null
      imageUrl: string | null
      style: Prisma.JsonValue
      position: number
      isActive: boolean
      isPaid: boolean
      price: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["link"]>
    composites: {}
  }

  type LinkGetPayload<S extends boolean | null | undefined | LinkDefaultArgs> = $Result.GetResult<Prisma.$LinkPayload, S>

  type LinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkCountAggregateInputType | true
    }

  export interface LinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Link'], meta: { name: 'Link' } }
    /**
     * Find zero or one Link that matches the filter.
     * @param {LinkFindUniqueArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkFindUniqueArgs>(args: SelectSubset<T, LinkFindUniqueArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Link that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkFindUniqueOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkFindFirstArgs>(args?: SelectSubset<T, LinkFindFirstArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Link that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindFirstOrThrowArgs} args - Arguments to find a Link
     * @example
     * // Get one Link
     * const link = await prisma.link.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.link.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.link.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkWithIdOnly = await prisma.link.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkFindManyArgs>(args?: SelectSubset<T, LinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Link.
     * @param {LinkCreateArgs} args - Arguments to create a Link.
     * @example
     * // Create one Link
     * const Link = await prisma.link.create({
     *   data: {
     *     // ... data to create a Link
     *   }
     * })
     * 
     */
    create<T extends LinkCreateArgs>(args: SelectSubset<T, LinkCreateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinkCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkCreateManyArgs>(args?: SelectSubset<T, LinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinkCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const link = await prisma.link.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Link.
     * @param {LinkDeleteArgs} args - Arguments to delete one Link.
     * @example
     * // Delete one Link
     * const Link = await prisma.link.delete({
     *   where: {
     *     // ... filter to delete one Link
     *   }
     * })
     * 
     */
    delete<T extends LinkDeleteArgs>(args: SelectSubset<T, LinkDeleteArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Link.
     * @param {LinkUpdateArgs} args - Arguments to update one Link.
     * @example
     * // Update one Link
     * const link = await prisma.link.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkUpdateArgs>(args: SelectSubset<T, LinkUpdateArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinkDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.link.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkDeleteManyArgs>(args?: SelectSubset<T, LinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkUpdateManyArgs>(args: SelectSubset<T, LinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinkUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const link = await prisma.link.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linkWithIdOnly = await prisma.link.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Link.
     * @param {LinkUpsertArgs} args - Arguments to update or create a Link.
     * @example
     * // Update or create a Link
     * const link = await prisma.link.upsert({
     *   create: {
     *     // ... data to create a Link
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Link we want to update
     *   }
     * })
     */
    upsert<T extends LinkUpsertArgs>(args: SelectSubset<T, LinkUpsertArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.link.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinkCountArgs>(
      args?: Subset<T, LinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkAggregateArgs>(args: Subset<T, LinkAggregateArgs>): Prisma.PrismaPromise<GetLinkAggregateType<T>>

    /**
     * Group by Link.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkGroupByArgs['orderBy'] }
        : { orderBy?: LinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Link model
   */
  readonly fields: LinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Link.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clicks<T extends Link$clicksArgs<ExtArgs> = {}>(args?: Subset<T, Link$clicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Link model
   */
  interface LinkFieldRefs {
    readonly id: FieldRef<"Link", 'String'>
    readonly pageId: FieldRef<"Link", 'String'>
    readonly type: FieldRef<"Link", 'LinkType'>
    readonly title: FieldRef<"Link", 'String'>
    readonly url: FieldRef<"Link", 'String'>
    readonly icon: FieldRef<"Link", 'String'>
    readonly imageUrl: FieldRef<"Link", 'String'>
    readonly style: FieldRef<"Link", 'Json'>
    readonly position: FieldRef<"Link", 'Int'>
    readonly isActive: FieldRef<"Link", 'Boolean'>
    readonly isPaid: FieldRef<"Link", 'Boolean'>
    readonly price: FieldRef<"Link", 'Decimal'>
    readonly createdAt: FieldRef<"Link", 'DateTime'>
    readonly updatedAt: FieldRef<"Link", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Link findUnique
   */
  export type LinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findUniqueOrThrow
   */
  export type LinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link findFirst
   */
  export type LinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findFirstOrThrow
   */
  export type LinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Link to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link findMany
   */
  export type LinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinkOrderByWithRelationInput | LinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinkScalarFieldEnum | LinkScalarFieldEnum[]
  }

  /**
   * Link create
   */
  export type LinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to create a Link.
     */
    data: XOR<LinkCreateInput, LinkUncheckedCreateInput>
  }

  /**
   * Link createMany
   */
  export type LinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Link createManyAndReturn
   */
  export type LinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinkCreateManyInput | LinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link update
   */
  export type LinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The data needed to update a Link.
     */
    data: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
    /**
     * Choose, which Link to update.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link updateMany
   */
  export type LinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Link updateManyAndReturn
   */
  export type LinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Link upsert
   */
  export type LinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * The filter to search for the Link to update in case it exists.
     */
    where: LinkWhereUniqueInput
    /**
     * In case the Link found by the `where` argument doesn't exist, create a new Link with this data.
     */
    create: XOR<LinkCreateInput, LinkUncheckedCreateInput>
    /**
     * In case the Link was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkUpdateInput, LinkUncheckedUpdateInput>
  }

  /**
   * Link delete
   */
  export type LinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
    /**
     * Filter which Link to delete.
     */
    where: LinkWhereUniqueInput
  }

  /**
   * Link deleteMany
   */
  export type LinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinkWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Link.clicks
   */
  export type Link$clicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    where?: LinkClickWhereInput
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    cursor?: LinkClickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * Link without action
   */
  export type LinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Link
     */
    select?: LinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Link
     */
    omit?: LinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ContentSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    title: string | null
    description: string | null
    type: $Enums.ContentType | null
    contentUrl: string | null
    fileUrl: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    title: string | null
    description: string | null
    type: $Enums.ContentType | null
    contentUrl: string | null
    fileUrl: string | null
    price: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    pageId: number
    title: number
    description: number
    type: number
    contentUrl: number
    fileUrl: number
    price: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    price?: true
  }

  export type ContentSumAggregateInputType = {
    price?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    pageId?: true
    title?: true
    description?: true
    type?: true
    contentUrl?: true
    fileUrl?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    pageId?: true
    title?: true
    description?: true
    type?: true
    contentUrl?: true
    fileUrl?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    pageId?: true
    title?: true
    description?: true
    type?: true
    contentUrl?: true
    fileUrl?: true
    price?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    pageId: string
    title: string
    description: string | null
    type: $Enums.ContentType
    contentUrl: string | null
    fileUrl: string | null
    price: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contentUrl?: boolean
    fileUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
    purchases?: boolean | Content$purchasesArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contentUrl?: boolean
    fileUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contentUrl?: boolean
    fileUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    pageId?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    contentUrl?: boolean
    fileUrl?: boolean
    price?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "title" | "description" | "type" | "contentUrl" | "fileUrl" | "price" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
    purchases?: boolean | Content$purchasesArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
      purchases: Prisma.$ContentPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      title: string
      description: string | null
      type: $Enums.ContentType
      contentUrl: string | null
      fileUrl: string | null
      price: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends Content$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Content$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly pageId: FieldRef<"Content", 'String'>
    readonly title: FieldRef<"Content", 'String'>
    readonly description: FieldRef<"Content", 'String'>
    readonly type: FieldRef<"Content", 'ContentType'>
    readonly contentUrl: FieldRef<"Content", 'String'>
    readonly fileUrl: FieldRef<"Content", 'String'>
    readonly price: FieldRef<"Content", 'Decimal'>
    readonly isActive: FieldRef<"Content", 'Boolean'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.purchases
   */
  export type Content$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    where?: ContentPurchaseWhereInput
    orderBy?: ContentPurchaseOrderByWithRelationInput | ContentPurchaseOrderByWithRelationInput[]
    cursor?: ContentPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentPurchaseScalarFieldEnum | ContentPurchaseScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model ContentPurchase
   */

  export type AggregateContentPurchase = {
    _count: ContentPurchaseCountAggregateOutputType | null
    _avg: ContentPurchaseAvgAggregateOutputType | null
    _sum: ContentPurchaseSumAggregateOutputType | null
    _min: ContentPurchaseMinAggregateOutputType | null
    _max: ContentPurchaseMaxAggregateOutputType | null
  }

  export type ContentPurchaseAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ContentPurchaseSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ContentPurchaseMinAggregateOutputType = {
    id: string | null
    contentId: string | null
    userId: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ContentPurchaseMaxAggregateOutputType = {
    id: string | null
    contentId: string | null
    userId: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type ContentPurchaseCountAggregateOutputType = {
    id: number
    contentId: number
    userId: number
    price: number
    createdAt: number
    _all: number
  }


  export type ContentPurchaseAvgAggregateInputType = {
    price?: true
  }

  export type ContentPurchaseSumAggregateInputType = {
    price?: true
  }

  export type ContentPurchaseMinAggregateInputType = {
    id?: true
    contentId?: true
    userId?: true
    price?: true
    createdAt?: true
  }

  export type ContentPurchaseMaxAggregateInputType = {
    id?: true
    contentId?: true
    userId?: true
    price?: true
    createdAt?: true
  }

  export type ContentPurchaseCountAggregateInputType = {
    id?: true
    contentId?: true
    userId?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type ContentPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentPurchase to aggregate.
     */
    where?: ContentPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPurchases to fetch.
     */
    orderBy?: ContentPurchaseOrderByWithRelationInput | ContentPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentPurchases
    **/
    _count?: true | ContentPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentPurchaseMaxAggregateInputType
  }

  export type GetContentPurchaseAggregateType<T extends ContentPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateContentPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentPurchase[P]>
      : GetScalarType<T[P], AggregateContentPurchase[P]>
  }




  export type ContentPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentPurchaseWhereInput
    orderBy?: ContentPurchaseOrderByWithAggregationInput | ContentPurchaseOrderByWithAggregationInput[]
    by: ContentPurchaseScalarFieldEnum[] | ContentPurchaseScalarFieldEnum
    having?: ContentPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentPurchaseCountAggregateInputType | true
    _avg?: ContentPurchaseAvgAggregateInputType
    _sum?: ContentPurchaseSumAggregateInputType
    _min?: ContentPurchaseMinAggregateInputType
    _max?: ContentPurchaseMaxAggregateInputType
  }

  export type ContentPurchaseGroupByOutputType = {
    id: string
    contentId: string
    userId: string
    price: Decimal
    createdAt: Date
    _count: ContentPurchaseCountAggregateOutputType | null
    _avg: ContentPurchaseAvgAggregateOutputType | null
    _sum: ContentPurchaseSumAggregateOutputType | null
    _min: ContentPurchaseMinAggregateOutputType | null
    _max: ContentPurchaseMaxAggregateOutputType | null
  }

  type GetContentPurchaseGroupByPayload<T extends ContentPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], ContentPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type ContentPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentPurchase"]>

  export type ContentPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentPurchase"]>

  export type ContentPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentPurchase"]>

  export type ContentPurchaseSelectScalar = {
    id?: boolean
    contentId?: boolean
    userId?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type ContentPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentId" | "userId" | "price" | "createdAt", ExtArgs["result"]["contentPurchase"]>
  export type ContentPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentPurchase"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentId: string
      userId: string
      price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["contentPurchase"]>
    composites: {}
  }

  type ContentPurchaseGetPayload<S extends boolean | null | undefined | ContentPurchaseDefaultArgs> = $Result.GetResult<Prisma.$ContentPurchasePayload, S>

  type ContentPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentPurchaseCountAggregateInputType | true
    }

  export interface ContentPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentPurchase'], meta: { name: 'ContentPurchase' } }
    /**
     * Find zero or one ContentPurchase that matches the filter.
     * @param {ContentPurchaseFindUniqueArgs} args - Arguments to find a ContentPurchase
     * @example
     * // Get one ContentPurchase
     * const contentPurchase = await prisma.contentPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentPurchaseFindUniqueArgs>(args: SelectSubset<T, ContentPurchaseFindUniqueArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentPurchaseFindUniqueOrThrowArgs} args - Arguments to find a ContentPurchase
     * @example
     * // Get one ContentPurchase
     * const contentPurchase = await prisma.contentPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseFindFirstArgs} args - Arguments to find a ContentPurchase
     * @example
     * // Get one ContentPurchase
     * const contentPurchase = await prisma.contentPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentPurchaseFindFirstArgs>(args?: SelectSubset<T, ContentPurchaseFindFirstArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseFindFirstOrThrowArgs} args - Arguments to find a ContentPurchase
     * @example
     * // Get one ContentPurchase
     * const contentPurchase = await prisma.contentPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentPurchases
     * const contentPurchases = await prisma.contentPurchase.findMany()
     * 
     * // Get first 10 ContentPurchases
     * const contentPurchases = await prisma.contentPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentPurchaseWithIdOnly = await prisma.contentPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentPurchaseFindManyArgs>(args?: SelectSubset<T, ContentPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentPurchase.
     * @param {ContentPurchaseCreateArgs} args - Arguments to create a ContentPurchase.
     * @example
     * // Create one ContentPurchase
     * const ContentPurchase = await prisma.contentPurchase.create({
     *   data: {
     *     // ... data to create a ContentPurchase
     *   }
     * })
     * 
     */
    create<T extends ContentPurchaseCreateArgs>(args: SelectSubset<T, ContentPurchaseCreateArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentPurchases.
     * @param {ContentPurchaseCreateManyArgs} args - Arguments to create many ContentPurchases.
     * @example
     * // Create many ContentPurchases
     * const contentPurchase = await prisma.contentPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentPurchaseCreateManyArgs>(args?: SelectSubset<T, ContentPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentPurchases and returns the data saved in the database.
     * @param {ContentPurchaseCreateManyAndReturnArgs} args - Arguments to create many ContentPurchases.
     * @example
     * // Create many ContentPurchases
     * const contentPurchase = await prisma.contentPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentPurchases and only return the `id`
     * const contentPurchaseWithIdOnly = await prisma.contentPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentPurchase.
     * @param {ContentPurchaseDeleteArgs} args - Arguments to delete one ContentPurchase.
     * @example
     * // Delete one ContentPurchase
     * const ContentPurchase = await prisma.contentPurchase.delete({
     *   where: {
     *     // ... filter to delete one ContentPurchase
     *   }
     * })
     * 
     */
    delete<T extends ContentPurchaseDeleteArgs>(args: SelectSubset<T, ContentPurchaseDeleteArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentPurchase.
     * @param {ContentPurchaseUpdateArgs} args - Arguments to update one ContentPurchase.
     * @example
     * // Update one ContentPurchase
     * const contentPurchase = await prisma.contentPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentPurchaseUpdateArgs>(args: SelectSubset<T, ContentPurchaseUpdateArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentPurchases.
     * @param {ContentPurchaseDeleteManyArgs} args - Arguments to filter ContentPurchases to delete.
     * @example
     * // Delete a few ContentPurchases
     * const { count } = await prisma.contentPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentPurchaseDeleteManyArgs>(args?: SelectSubset<T, ContentPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentPurchases
     * const contentPurchase = await prisma.contentPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentPurchaseUpdateManyArgs>(args: SelectSubset<T, ContentPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentPurchases and returns the data updated in the database.
     * @param {ContentPurchaseUpdateManyAndReturnArgs} args - Arguments to update many ContentPurchases.
     * @example
     * // Update many ContentPurchases
     * const contentPurchase = await prisma.contentPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentPurchases and only return the `id`
     * const contentPurchaseWithIdOnly = await prisma.contentPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentPurchase.
     * @param {ContentPurchaseUpsertArgs} args - Arguments to update or create a ContentPurchase.
     * @example
     * // Update or create a ContentPurchase
     * const contentPurchase = await prisma.contentPurchase.upsert({
     *   create: {
     *     // ... data to create a ContentPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentPurchase we want to update
     *   }
     * })
     */
    upsert<T extends ContentPurchaseUpsertArgs>(args: SelectSubset<T, ContentPurchaseUpsertArgs<ExtArgs>>): Prisma__ContentPurchaseClient<$Result.GetResult<Prisma.$ContentPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseCountArgs} args - Arguments to filter ContentPurchases to count.
     * @example
     * // Count the number of ContentPurchases
     * const count = await prisma.contentPurchase.count({
     *   where: {
     *     // ... the filter for the ContentPurchases we want to count
     *   }
     * })
    **/
    count<T extends ContentPurchaseCountArgs>(
      args?: Subset<T, ContentPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentPurchaseAggregateArgs>(args: Subset<T, ContentPurchaseAggregateArgs>): Prisma.PrismaPromise<GetContentPurchaseAggregateType<T>>

    /**
     * Group by ContentPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentPurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: ContentPurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentPurchase model
   */
  readonly fields: ContentPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContentPurchase model
   */
  interface ContentPurchaseFieldRefs {
    readonly id: FieldRef<"ContentPurchase", 'String'>
    readonly contentId: FieldRef<"ContentPurchase", 'String'>
    readonly userId: FieldRef<"ContentPurchase", 'String'>
    readonly price: FieldRef<"ContentPurchase", 'Decimal'>
    readonly createdAt: FieldRef<"ContentPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContentPurchase findUnique
   */
  export type ContentPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ContentPurchase to fetch.
     */
    where: ContentPurchaseWhereUniqueInput
  }

  /**
   * ContentPurchase findUniqueOrThrow
   */
  export type ContentPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ContentPurchase to fetch.
     */
    where: ContentPurchaseWhereUniqueInput
  }

  /**
   * ContentPurchase findFirst
   */
  export type ContentPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ContentPurchase to fetch.
     */
    where?: ContentPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPurchases to fetch.
     */
    orderBy?: ContentPurchaseOrderByWithRelationInput | ContentPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentPurchases.
     */
    cursor?: ContentPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentPurchases.
     */
    distinct?: ContentPurchaseScalarFieldEnum | ContentPurchaseScalarFieldEnum[]
  }

  /**
   * ContentPurchase findFirstOrThrow
   */
  export type ContentPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ContentPurchase to fetch.
     */
    where?: ContentPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPurchases to fetch.
     */
    orderBy?: ContentPurchaseOrderByWithRelationInput | ContentPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentPurchases.
     */
    cursor?: ContentPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentPurchases.
     */
    distinct?: ContentPurchaseScalarFieldEnum | ContentPurchaseScalarFieldEnum[]
  }

  /**
   * ContentPurchase findMany
   */
  export type ContentPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which ContentPurchases to fetch.
     */
    where?: ContentPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentPurchases to fetch.
     */
    orderBy?: ContentPurchaseOrderByWithRelationInput | ContentPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentPurchases.
     */
    cursor?: ContentPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentPurchases.
     */
    skip?: number
    distinct?: ContentPurchaseScalarFieldEnum | ContentPurchaseScalarFieldEnum[]
  }

  /**
   * ContentPurchase create
   */
  export type ContentPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentPurchase.
     */
    data: XOR<ContentPurchaseCreateInput, ContentPurchaseUncheckedCreateInput>
  }

  /**
   * ContentPurchase createMany
   */
  export type ContentPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentPurchases.
     */
    data: ContentPurchaseCreateManyInput | ContentPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentPurchase createManyAndReturn
   */
  export type ContentPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many ContentPurchases.
     */
    data: ContentPurchaseCreateManyInput | ContentPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentPurchase update
   */
  export type ContentPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentPurchase.
     */
    data: XOR<ContentPurchaseUpdateInput, ContentPurchaseUncheckedUpdateInput>
    /**
     * Choose, which ContentPurchase to update.
     */
    where: ContentPurchaseWhereUniqueInput
  }

  /**
   * ContentPurchase updateMany
   */
  export type ContentPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentPurchases.
     */
    data: XOR<ContentPurchaseUpdateManyMutationInput, ContentPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ContentPurchases to update
     */
    where?: ContentPurchaseWhereInput
    /**
     * Limit how many ContentPurchases to update.
     */
    limit?: number
  }

  /**
   * ContentPurchase updateManyAndReturn
   */
  export type ContentPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update ContentPurchases.
     */
    data: XOR<ContentPurchaseUpdateManyMutationInput, ContentPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which ContentPurchases to update
     */
    where?: ContentPurchaseWhereInput
    /**
     * Limit how many ContentPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentPurchase upsert
   */
  export type ContentPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentPurchase to update in case it exists.
     */
    where: ContentPurchaseWhereUniqueInput
    /**
     * In case the ContentPurchase found by the `where` argument doesn't exist, create a new ContentPurchase with this data.
     */
    create: XOR<ContentPurchaseCreateInput, ContentPurchaseUncheckedCreateInput>
    /**
     * In case the ContentPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentPurchaseUpdateInput, ContentPurchaseUncheckedUpdateInput>
  }

  /**
   * ContentPurchase delete
   */
  export type ContentPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
    /**
     * Filter which ContentPurchase to delete.
     */
    where: ContentPurchaseWhereUniqueInput
  }

  /**
   * ContentPurchase deleteMany
   */
  export type ContentPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentPurchases to delete
     */
    where?: ContentPurchaseWhereInput
    /**
     * Limit how many ContentPurchases to delete.
     */
    limit?: number
  }

  /**
   * ContentPurchase without action
   */
  export type ContentPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentPurchase
     */
    select?: ContentPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentPurchase
     */
    omit?: ContentPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model PageAnalytics
   */

  export type AggregatePageAnalytics = {
    _count: PageAnalyticsCountAggregateOutputType | null
    _avg: PageAnalyticsAvgAggregateOutputType | null
    _sum: PageAnalyticsSumAggregateOutputType | null
    _min: PageAnalyticsMinAggregateOutputType | null
    _max: PageAnalyticsMaxAggregateOutputType | null
  }

  export type PageAnalyticsAvgAggregateOutputType = {
    views: number | null
    uniqueVisitors: number | null
    avgTimeOnPage: number | null
    bounceRate: number | null
  }

  export type PageAnalyticsSumAggregateOutputType = {
    views: number | null
    uniqueVisitors: number | null
    avgTimeOnPage: number | null
    bounceRate: number | null
  }

  export type PageAnalyticsMinAggregateOutputType = {
    id: string | null
    pageId: string | null
    date: Date | null
    views: number | null
    uniqueVisitors: number | null
    avgTimeOnPage: number | null
    bounceRate: number | null
  }

  export type PageAnalyticsMaxAggregateOutputType = {
    id: string | null
    pageId: string | null
    date: Date | null
    views: number | null
    uniqueVisitors: number | null
    avgTimeOnPage: number | null
    bounceRate: number | null
  }

  export type PageAnalyticsCountAggregateOutputType = {
    id: number
    pageId: number
    date: number
    views: number
    uniqueVisitors: number
    avgTimeOnPage: number
    bounceRate: number
    topReferrers: number
    topCountries: number
    topDevices: number
    _all: number
  }


  export type PageAnalyticsAvgAggregateInputType = {
    views?: true
    uniqueVisitors?: true
    avgTimeOnPage?: true
    bounceRate?: true
  }

  export type PageAnalyticsSumAggregateInputType = {
    views?: true
    uniqueVisitors?: true
    avgTimeOnPage?: true
    bounceRate?: true
  }

  export type PageAnalyticsMinAggregateInputType = {
    id?: true
    pageId?: true
    date?: true
    views?: true
    uniqueVisitors?: true
    avgTimeOnPage?: true
    bounceRate?: true
  }

  export type PageAnalyticsMaxAggregateInputType = {
    id?: true
    pageId?: true
    date?: true
    views?: true
    uniqueVisitors?: true
    avgTimeOnPage?: true
    bounceRate?: true
  }

  export type PageAnalyticsCountAggregateInputType = {
    id?: true
    pageId?: true
    date?: true
    views?: true
    uniqueVisitors?: true
    avgTimeOnPage?: true
    bounceRate?: true
    topReferrers?: true
    topCountries?: true
    topDevices?: true
    _all?: true
  }

  export type PageAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageAnalytics to aggregate.
     */
    where?: PageAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageAnalytics to fetch.
     */
    orderBy?: PageAnalyticsOrderByWithRelationInput | PageAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageAnalytics
    **/
    _count?: true | PageAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageAnalyticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageAnalyticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageAnalyticsMaxAggregateInputType
  }

  export type GetPageAnalyticsAggregateType<T extends PageAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregatePageAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageAnalytics[P]>
      : GetScalarType<T[P], AggregatePageAnalytics[P]>
  }




  export type PageAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageAnalyticsWhereInput
    orderBy?: PageAnalyticsOrderByWithAggregationInput | PageAnalyticsOrderByWithAggregationInput[]
    by: PageAnalyticsScalarFieldEnum[] | PageAnalyticsScalarFieldEnum
    having?: PageAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageAnalyticsCountAggregateInputType | true
    _avg?: PageAnalyticsAvgAggregateInputType
    _sum?: PageAnalyticsSumAggregateInputType
    _min?: PageAnalyticsMinAggregateInputType
    _max?: PageAnalyticsMaxAggregateInputType
  }

  export type PageAnalyticsGroupByOutputType = {
    id: string
    pageId: string
    date: Date
    views: number
    uniqueVisitors: number
    avgTimeOnPage: number | null
    bounceRate: number | null
    topReferrers: JsonValue | null
    topCountries: JsonValue | null
    topDevices: JsonValue | null
    _count: PageAnalyticsCountAggregateOutputType | null
    _avg: PageAnalyticsAvgAggregateOutputType | null
    _sum: PageAnalyticsSumAggregateOutputType | null
    _min: PageAnalyticsMinAggregateOutputType | null
    _max: PageAnalyticsMaxAggregateOutputType | null
  }

  type GetPageAnalyticsGroupByPayload<T extends PageAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], PageAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type PageAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    date?: boolean
    views?: boolean
    uniqueVisitors?: boolean
    avgTimeOnPage?: boolean
    bounceRate?: boolean
    topReferrers?: boolean
    topCountries?: boolean
    topDevices?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageAnalytics"]>

  export type PageAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    date?: boolean
    views?: boolean
    uniqueVisitors?: boolean
    avgTimeOnPage?: boolean
    bounceRate?: boolean
    topReferrers?: boolean
    topCountries?: boolean
    topDevices?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageAnalytics"]>

  export type PageAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pageId?: boolean
    date?: boolean
    views?: boolean
    uniqueVisitors?: boolean
    avgTimeOnPage?: boolean
    bounceRate?: boolean
    topReferrers?: boolean
    topCountries?: boolean
    topDevices?: boolean
    page?: boolean | PageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pageAnalytics"]>

  export type PageAnalyticsSelectScalar = {
    id?: boolean
    pageId?: boolean
    date?: boolean
    views?: boolean
    uniqueVisitors?: boolean
    avgTimeOnPage?: boolean
    bounceRate?: boolean
    topReferrers?: boolean
    topCountries?: boolean
    topDevices?: boolean
  }

  export type PageAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pageId" | "date" | "views" | "uniqueVisitors" | "avgTimeOnPage" | "bounceRate" | "topReferrers" | "topCountries" | "topDevices", ExtArgs["result"]["pageAnalytics"]>
  export type PageAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }
  export type PageAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | PageDefaultArgs<ExtArgs>
  }

  export type $PageAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageAnalytics"
    objects: {
      page: Prisma.$PagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pageId: string
      date: Date
      views: number
      uniqueVisitors: number
      avgTimeOnPage: number | null
      bounceRate: number | null
      topReferrers: Prisma.JsonValue | null
      topCountries: Prisma.JsonValue | null
      topDevices: Prisma.JsonValue | null
    }, ExtArgs["result"]["pageAnalytics"]>
    composites: {}
  }

  type PageAnalyticsGetPayload<S extends boolean | null | undefined | PageAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$PageAnalyticsPayload, S>

  type PageAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageAnalyticsCountAggregateInputType | true
    }

  export interface PageAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageAnalytics'], meta: { name: 'PageAnalytics' } }
    /**
     * Find zero or one PageAnalytics that matches the filter.
     * @param {PageAnalyticsFindUniqueArgs} args - Arguments to find a PageAnalytics
     * @example
     * // Get one PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageAnalyticsFindUniqueArgs>(args: SelectSubset<T, PageAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a PageAnalytics
     * @example
     * // Get one PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, PageAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsFindFirstArgs} args - Arguments to find a PageAnalytics
     * @example
     * // Get one PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageAnalyticsFindFirstArgs>(args?: SelectSubset<T, PageAnalyticsFindFirstArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsFindFirstOrThrowArgs} args - Arguments to find a PageAnalytics
     * @example
     * // Get one PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, PageAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.findMany()
     * 
     * // Get first 10 PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageAnalyticsWithIdOnly = await prisma.pageAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageAnalyticsFindManyArgs>(args?: SelectSubset<T, PageAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageAnalytics.
     * @param {PageAnalyticsCreateArgs} args - Arguments to create a PageAnalytics.
     * @example
     * // Create one PageAnalytics
     * const PageAnalytics = await prisma.pageAnalytics.create({
     *   data: {
     *     // ... data to create a PageAnalytics
     *   }
     * })
     * 
     */
    create<T extends PageAnalyticsCreateArgs>(args: SelectSubset<T, PageAnalyticsCreateArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageAnalytics.
     * @param {PageAnalyticsCreateManyArgs} args - Arguments to create many PageAnalytics.
     * @example
     * // Create many PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageAnalyticsCreateManyArgs>(args?: SelectSubset<T, PageAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageAnalytics and returns the data saved in the database.
     * @param {PageAnalyticsCreateManyAndReturnArgs} args - Arguments to create many PageAnalytics.
     * @example
     * // Create many PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageAnalytics and only return the `id`
     * const pageAnalyticsWithIdOnly = await prisma.pageAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, PageAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageAnalytics.
     * @param {PageAnalyticsDeleteArgs} args - Arguments to delete one PageAnalytics.
     * @example
     * // Delete one PageAnalytics
     * const PageAnalytics = await prisma.pageAnalytics.delete({
     *   where: {
     *     // ... filter to delete one PageAnalytics
     *   }
     * })
     * 
     */
    delete<T extends PageAnalyticsDeleteArgs>(args: SelectSubset<T, PageAnalyticsDeleteArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageAnalytics.
     * @param {PageAnalyticsUpdateArgs} args - Arguments to update one PageAnalytics.
     * @example
     * // Update one PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageAnalyticsUpdateArgs>(args: SelectSubset<T, PageAnalyticsUpdateArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageAnalytics.
     * @param {PageAnalyticsDeleteManyArgs} args - Arguments to filter PageAnalytics to delete.
     * @example
     * // Delete a few PageAnalytics
     * const { count } = await prisma.pageAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageAnalyticsDeleteManyArgs>(args?: SelectSubset<T, PageAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageAnalyticsUpdateManyArgs>(args: SelectSubset<T, PageAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageAnalytics and returns the data updated in the database.
     * @param {PageAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many PageAnalytics.
     * @example
     * // Update many PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageAnalytics and only return the `id`
     * const pageAnalyticsWithIdOnly = await prisma.pageAnalytics.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, PageAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageAnalytics.
     * @param {PageAnalyticsUpsertArgs} args - Arguments to update or create a PageAnalytics.
     * @example
     * // Update or create a PageAnalytics
     * const pageAnalytics = await prisma.pageAnalytics.upsert({
     *   create: {
     *     // ... data to create a PageAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends PageAnalyticsUpsertArgs>(args: SelectSubset<T, PageAnalyticsUpsertArgs<ExtArgs>>): Prisma__PageAnalyticsClient<$Result.GetResult<Prisma.$PageAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsCountArgs} args - Arguments to filter PageAnalytics to count.
     * @example
     * // Count the number of PageAnalytics
     * const count = await prisma.pageAnalytics.count({
     *   where: {
     *     // ... the filter for the PageAnalytics we want to count
     *   }
     * })
    **/
    count<T extends PageAnalyticsCountArgs>(
      args?: Subset<T, PageAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAnalyticsAggregateArgs>(args: Subset<T, PageAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetPageAnalyticsAggregateType<T>>

    /**
     * Group by PageAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAnalyticsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: PageAnalyticsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageAnalytics model
   */
  readonly fields: PageAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends PageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PageDefaultArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageAnalytics model
   */
  interface PageAnalyticsFieldRefs {
    readonly id: FieldRef<"PageAnalytics", 'String'>
    readonly pageId: FieldRef<"PageAnalytics", 'String'>
    readonly date: FieldRef<"PageAnalytics", 'DateTime'>
    readonly views: FieldRef<"PageAnalytics", 'Int'>
    readonly uniqueVisitors: FieldRef<"PageAnalytics", 'Int'>
    readonly avgTimeOnPage: FieldRef<"PageAnalytics", 'Float'>
    readonly bounceRate: FieldRef<"PageAnalytics", 'Float'>
    readonly topReferrers: FieldRef<"PageAnalytics", 'Json'>
    readonly topCountries: FieldRef<"PageAnalytics", 'Json'>
    readonly topDevices: FieldRef<"PageAnalytics", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * PageAnalytics findUnique
   */
  export type PageAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which PageAnalytics to fetch.
     */
    where: PageAnalyticsWhereUniqueInput
  }

  /**
   * PageAnalytics findUniqueOrThrow
   */
  export type PageAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which PageAnalytics to fetch.
     */
    where: PageAnalyticsWhereUniqueInput
  }

  /**
   * PageAnalytics findFirst
   */
  export type PageAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which PageAnalytics to fetch.
     */
    where?: PageAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageAnalytics to fetch.
     */
    orderBy?: PageAnalyticsOrderByWithRelationInput | PageAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageAnalytics.
     */
    cursor?: PageAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageAnalytics.
     */
    distinct?: PageAnalyticsScalarFieldEnum | PageAnalyticsScalarFieldEnum[]
  }

  /**
   * PageAnalytics findFirstOrThrow
   */
  export type PageAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which PageAnalytics to fetch.
     */
    where?: PageAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageAnalytics to fetch.
     */
    orderBy?: PageAnalyticsOrderByWithRelationInput | PageAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageAnalytics.
     */
    cursor?: PageAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageAnalytics.
     */
    distinct?: PageAnalyticsScalarFieldEnum | PageAnalyticsScalarFieldEnum[]
  }

  /**
   * PageAnalytics findMany
   */
  export type PageAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which PageAnalytics to fetch.
     */
    where?: PageAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageAnalytics to fetch.
     */
    orderBy?: PageAnalyticsOrderByWithRelationInput | PageAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageAnalytics.
     */
    cursor?: PageAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageAnalytics.
     */
    skip?: number
    distinct?: PageAnalyticsScalarFieldEnum | PageAnalyticsScalarFieldEnum[]
  }

  /**
   * PageAnalytics create
   */
  export type PageAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a PageAnalytics.
     */
    data: XOR<PageAnalyticsCreateInput, PageAnalyticsUncheckedCreateInput>
  }

  /**
   * PageAnalytics createMany
   */
  export type PageAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageAnalytics.
     */
    data: PageAnalyticsCreateManyInput | PageAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageAnalytics createManyAndReturn
   */
  export type PageAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many PageAnalytics.
     */
    data: PageAnalyticsCreateManyInput | PageAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageAnalytics update
   */
  export type PageAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a PageAnalytics.
     */
    data: XOR<PageAnalyticsUpdateInput, PageAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which PageAnalytics to update.
     */
    where: PageAnalyticsWhereUniqueInput
  }

  /**
   * PageAnalytics updateMany
   */
  export type PageAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageAnalytics.
     */
    data: XOR<PageAnalyticsUpdateManyMutationInput, PageAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which PageAnalytics to update
     */
    where?: PageAnalyticsWhereInput
    /**
     * Limit how many PageAnalytics to update.
     */
    limit?: number
  }

  /**
   * PageAnalytics updateManyAndReturn
   */
  export type PageAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update PageAnalytics.
     */
    data: XOR<PageAnalyticsUpdateManyMutationInput, PageAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which PageAnalytics to update
     */
    where?: PageAnalyticsWhereInput
    /**
     * Limit how many PageAnalytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PageAnalytics upsert
   */
  export type PageAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the PageAnalytics to update in case it exists.
     */
    where: PageAnalyticsWhereUniqueInput
    /**
     * In case the PageAnalytics found by the `where` argument doesn't exist, create a new PageAnalytics with this data.
     */
    create: XOR<PageAnalyticsCreateInput, PageAnalyticsUncheckedCreateInput>
    /**
     * In case the PageAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageAnalyticsUpdateInput, PageAnalyticsUncheckedUpdateInput>
  }

  /**
   * PageAnalytics delete
   */
  export type PageAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which PageAnalytics to delete.
     */
    where: PageAnalyticsWhereUniqueInput
  }

  /**
   * PageAnalytics deleteMany
   */
  export type PageAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageAnalytics to delete
     */
    where?: PageAnalyticsWhereInput
    /**
     * Limit how many PageAnalytics to delete.
     */
    limit?: number
  }

  /**
   * PageAnalytics without action
   */
  export type PageAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageAnalytics
     */
    select?: PageAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageAnalytics
     */
    omit?: PageAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageAnalyticsInclude<ExtArgs> | null
  }


  /**
   * Model LinkClick
   */

  export type AggregateLinkClick = {
    _count: LinkClickCountAggregateOutputType | null
    _min: LinkClickMinAggregateOutputType | null
    _max: LinkClickMaxAggregateOutputType | null
  }

  export type LinkClickMinAggregateOutputType = {
    id: string | null
    linkId: string | null
    clickedAt: Date | null
    referrer: string | null
    device: string | null
    country: string | null
    city: string | null
    browser: string | null
    os: string | null
  }

  export type LinkClickMaxAggregateOutputType = {
    id: string | null
    linkId: string | null
    clickedAt: Date | null
    referrer: string | null
    device: string | null
    country: string | null
    city: string | null
    browser: string | null
    os: string | null
  }

  export type LinkClickCountAggregateOutputType = {
    id: number
    linkId: number
    clickedAt: number
    referrer: number
    device: number
    country: number
    city: number
    browser: number
    os: number
    _all: number
  }


  export type LinkClickMinAggregateInputType = {
    id?: true
    linkId?: true
    clickedAt?: true
    referrer?: true
    device?: true
    country?: true
    city?: true
    browser?: true
    os?: true
  }

  export type LinkClickMaxAggregateInputType = {
    id?: true
    linkId?: true
    clickedAt?: true
    referrer?: true
    device?: true
    country?: true
    city?: true
    browser?: true
    os?: true
  }

  export type LinkClickCountAggregateInputType = {
    id?: true
    linkId?: true
    clickedAt?: true
    referrer?: true
    device?: true
    country?: true
    city?: true
    browser?: true
    os?: true
    _all?: true
  }

  export type LinkClickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkClick to aggregate.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkClicks
    **/
    _count?: true | LinkClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkClickMaxAggregateInputType
  }

  export type GetLinkClickAggregateType<T extends LinkClickAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkClick[P]>
      : GetScalarType<T[P], AggregateLinkClick[P]>
  }




  export type LinkClickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkClickWhereInput
    orderBy?: LinkClickOrderByWithAggregationInput | LinkClickOrderByWithAggregationInput[]
    by: LinkClickScalarFieldEnum[] | LinkClickScalarFieldEnum
    having?: LinkClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkClickCountAggregateInputType | true
    _min?: LinkClickMinAggregateInputType
    _max?: LinkClickMaxAggregateInputType
  }

  export type LinkClickGroupByOutputType = {
    id: string
    linkId: string
    clickedAt: Date
    referrer: string | null
    device: string | null
    country: string | null
    city: string | null
    browser: string | null
    os: string | null
    _count: LinkClickCountAggregateOutputType | null
    _min: LinkClickMinAggregateOutputType | null
    _max: LinkClickMaxAggregateOutputType | null
  }

  type GetLinkClickGroupByPayload<T extends LinkClickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkClickGroupByOutputType[P]>
            : GetScalarType<T[P], LinkClickGroupByOutputType[P]>
        }
      >
    >


  export type LinkClickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkId?: boolean
    clickedAt?: boolean
    referrer?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    browser?: boolean
    os?: boolean
    link?: boolean | LinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkClick"]>

  export type LinkClickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkId?: boolean
    clickedAt?: boolean
    referrer?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    browser?: boolean
    os?: boolean
    link?: boolean | LinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkClick"]>

  export type LinkClickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    linkId?: boolean
    clickedAt?: boolean
    referrer?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    browser?: boolean
    os?: boolean
    link?: boolean | LinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkClick"]>

  export type LinkClickSelectScalar = {
    id?: boolean
    linkId?: boolean
    clickedAt?: boolean
    referrer?: boolean
    device?: boolean
    country?: boolean
    city?: boolean
    browser?: boolean
    os?: boolean
  }

  export type LinkClickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "linkId" | "clickedAt" | "referrer" | "device" | "country" | "city" | "browser" | "os", ExtArgs["result"]["linkClick"]>
  export type LinkClickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | LinkDefaultArgs<ExtArgs>
  }
  export type LinkClickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | LinkDefaultArgs<ExtArgs>
  }
  export type LinkClickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    link?: boolean | LinkDefaultArgs<ExtArgs>
  }

  export type $LinkClickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkClick"
    objects: {
      link: Prisma.$LinkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      linkId: string
      clickedAt: Date
      referrer: string | null
      device: string | null
      country: string | null
      city: string | null
      browser: string | null
      os: string | null
    }, ExtArgs["result"]["linkClick"]>
    composites: {}
  }

  type LinkClickGetPayload<S extends boolean | null | undefined | LinkClickDefaultArgs> = $Result.GetResult<Prisma.$LinkClickPayload, S>

  type LinkClickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkClickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkClickCountAggregateInputType | true
    }

  export interface LinkClickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkClick'], meta: { name: 'LinkClick' } }
    /**
     * Find zero or one LinkClick that matches the filter.
     * @param {LinkClickFindUniqueArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkClickFindUniqueArgs>(args: SelectSubset<T, LinkClickFindUniqueArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkClick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkClickFindUniqueOrThrowArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkClickFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkClickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkClick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickFindFirstArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkClickFindFirstArgs>(args?: SelectSubset<T, LinkClickFindFirstArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkClick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickFindFirstOrThrowArgs} args - Arguments to find a LinkClick
     * @example
     * // Get one LinkClick
     * const linkClick = await prisma.linkClick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkClickFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkClickFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkClicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkClicks
     * const linkClicks = await prisma.linkClick.findMany()
     * 
     * // Get first 10 LinkClicks
     * const linkClicks = await prisma.linkClick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linkClickWithIdOnly = await prisma.linkClick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinkClickFindManyArgs>(args?: SelectSubset<T, LinkClickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkClick.
     * @param {LinkClickCreateArgs} args - Arguments to create a LinkClick.
     * @example
     * // Create one LinkClick
     * const LinkClick = await prisma.linkClick.create({
     *   data: {
     *     // ... data to create a LinkClick
     *   }
     * })
     * 
     */
    create<T extends LinkClickCreateArgs>(args: SelectSubset<T, LinkClickCreateArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkClicks.
     * @param {LinkClickCreateManyArgs} args - Arguments to create many LinkClicks.
     * @example
     * // Create many LinkClicks
     * const linkClick = await prisma.linkClick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkClickCreateManyArgs>(args?: SelectSubset<T, LinkClickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkClicks and returns the data saved in the database.
     * @param {LinkClickCreateManyAndReturnArgs} args - Arguments to create many LinkClicks.
     * @example
     * // Create many LinkClicks
     * const linkClick = await prisma.linkClick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkClicks and only return the `id`
     * const linkClickWithIdOnly = await prisma.linkClick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkClickCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkClickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkClick.
     * @param {LinkClickDeleteArgs} args - Arguments to delete one LinkClick.
     * @example
     * // Delete one LinkClick
     * const LinkClick = await prisma.linkClick.delete({
     *   where: {
     *     // ... filter to delete one LinkClick
     *   }
     * })
     * 
     */
    delete<T extends LinkClickDeleteArgs>(args: SelectSubset<T, LinkClickDeleteArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkClick.
     * @param {LinkClickUpdateArgs} args - Arguments to update one LinkClick.
     * @example
     * // Update one LinkClick
     * const linkClick = await prisma.linkClick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkClickUpdateArgs>(args: SelectSubset<T, LinkClickUpdateArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkClicks.
     * @param {LinkClickDeleteManyArgs} args - Arguments to filter LinkClicks to delete.
     * @example
     * // Delete a few LinkClicks
     * const { count } = await prisma.linkClick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkClickDeleteManyArgs>(args?: SelectSubset<T, LinkClickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkClicks
     * const linkClick = await prisma.linkClick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkClickUpdateManyArgs>(args: SelectSubset<T, LinkClickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkClicks and returns the data updated in the database.
     * @param {LinkClickUpdateManyAndReturnArgs} args - Arguments to update many LinkClicks.
     * @example
     * // Update many LinkClicks
     * const linkClick = await prisma.linkClick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkClicks and only return the `id`
     * const linkClickWithIdOnly = await prisma.linkClick.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinkClickUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkClickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkClick.
     * @param {LinkClickUpsertArgs} args - Arguments to update or create a LinkClick.
     * @example
     * // Update or create a LinkClick
     * const linkClick = await prisma.linkClick.upsert({
     *   create: {
     *     // ... data to create a LinkClick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkClick we want to update
     *   }
     * })
     */
    upsert<T extends LinkClickUpsertArgs>(args: SelectSubset<T, LinkClickUpsertArgs<ExtArgs>>): Prisma__LinkClickClient<$Result.GetResult<Prisma.$LinkClickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickCountArgs} args - Arguments to filter LinkClicks to count.
     * @example
     * // Count the number of LinkClicks
     * const count = await prisma.linkClick.count({
     *   where: {
     *     // ... the filter for the LinkClicks we want to count
     *   }
     * })
    **/
    count<T extends LinkClickCountArgs>(
      args?: Subset<T, LinkClickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinkClickAggregateArgs>(args: Subset<T, LinkClickAggregateArgs>): Prisma.PrismaPromise<GetLinkClickAggregateType<T>>

    /**
     * Group by LinkClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkClickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinkClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkClickGroupByArgs['orderBy'] }
        : { orderBy?: LinkClickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkClick model
   */
  readonly fields: LinkClickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkClick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkClickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    link<T extends LinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LinkDefaultArgs<ExtArgs>>): Prisma__LinkClient<$Result.GetResult<Prisma.$LinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkClick model
   */
  interface LinkClickFieldRefs {
    readonly id: FieldRef<"LinkClick", 'String'>
    readonly linkId: FieldRef<"LinkClick", 'String'>
    readonly clickedAt: FieldRef<"LinkClick", 'DateTime'>
    readonly referrer: FieldRef<"LinkClick", 'String'>
    readonly device: FieldRef<"LinkClick", 'String'>
    readonly country: FieldRef<"LinkClick", 'String'>
    readonly city: FieldRef<"LinkClick", 'String'>
    readonly browser: FieldRef<"LinkClick", 'String'>
    readonly os: FieldRef<"LinkClick", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkClick findUnique
   */
  export type LinkClickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick findUniqueOrThrow
   */
  export type LinkClickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick findFirst
   */
  export type LinkClickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkClicks.
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkClicks.
     */
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * LinkClick findFirstOrThrow
   */
  export type LinkClickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClick to fetch.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkClicks.
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkClicks.
     */
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * LinkClick findMany
   */
  export type LinkClickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter, which LinkClicks to fetch.
     */
    where?: LinkClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkClicks to fetch.
     */
    orderBy?: LinkClickOrderByWithRelationInput | LinkClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkClicks.
     */
    cursor?: LinkClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkClicks.
     */
    skip?: number
    distinct?: LinkClickScalarFieldEnum | LinkClickScalarFieldEnum[]
  }

  /**
   * LinkClick create
   */
  export type LinkClickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkClick.
     */
    data: XOR<LinkClickCreateInput, LinkClickUncheckedCreateInput>
  }

  /**
   * LinkClick createMany
   */
  export type LinkClickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkClicks.
     */
    data: LinkClickCreateManyInput | LinkClickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkClick createManyAndReturn
   */
  export type LinkClickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * The data used to create many LinkClicks.
     */
    data: LinkClickCreateManyInput | LinkClickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkClick update
   */
  export type LinkClickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkClick.
     */
    data: XOR<LinkClickUpdateInput, LinkClickUncheckedUpdateInput>
    /**
     * Choose, which LinkClick to update.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick updateMany
   */
  export type LinkClickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkClicks.
     */
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyInput>
    /**
     * Filter which LinkClicks to update
     */
    where?: LinkClickWhereInput
    /**
     * Limit how many LinkClicks to update.
     */
    limit?: number
  }

  /**
   * LinkClick updateManyAndReturn
   */
  export type LinkClickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * The data used to update LinkClicks.
     */
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyInput>
    /**
     * Filter which LinkClicks to update
     */
    where?: LinkClickWhereInput
    /**
     * Limit how many LinkClicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkClick upsert
   */
  export type LinkClickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkClick to update in case it exists.
     */
    where: LinkClickWhereUniqueInput
    /**
     * In case the LinkClick found by the `where` argument doesn't exist, create a new LinkClick with this data.
     */
    create: XOR<LinkClickCreateInput, LinkClickUncheckedCreateInput>
    /**
     * In case the LinkClick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkClickUpdateInput, LinkClickUncheckedUpdateInput>
  }

  /**
   * LinkClick delete
   */
  export type LinkClickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
    /**
     * Filter which LinkClick to delete.
     */
    where: LinkClickWhereUniqueInput
  }

  /**
   * LinkClick deleteMany
   */
  export type LinkClickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkClicks to delete
     */
    where?: LinkClickWhereInput
    /**
     * Limit how many LinkClicks to delete.
     */
    limit?: number
  }

  /**
   * LinkClick without action
   */
  export type LinkClickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkClick
     */
    select?: LinkClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkClick
     */
    omit?: LinkClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkClickInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    maxLinks: number | null
    maxPages: number | null
    maxAnalytics: number | null
    price: Decimal | null
  }

  export type PlanSumAggregateOutputType = {
    maxLinks: number | null
    maxPages: number | null
    maxAnalytics: number | null
    price: Decimal | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    stripePriceId: string | null
    maxLinks: number | null
    maxPages: number | null
    maxAnalytics: number | null
    customThemes: boolean | null
    paidContent: boolean | null
    customDomain: boolean | null
    removeWatermark: boolean | null
    prioritySupport: boolean | null
    price: Decimal | null
    isPublic: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stripePriceId: string | null
    maxLinks: number | null
    maxPages: number | null
    maxAnalytics: number | null
    customThemes: boolean | null
    paidContent: boolean | null
    customDomain: boolean | null
    removeWatermark: boolean | null
    prioritySupport: boolean | null
    price: Decimal | null
    isPublic: boolean | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    stripePriceId: number
    maxLinks: number
    maxPages: number
    maxAnalytics: number
    customThemes: number
    paidContent: number
    customDomain: number
    removeWatermark: number
    prioritySupport: number
    price: number
    isPublic: number
    description: number
    features: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    maxLinks?: true
    maxPages?: true
    maxAnalytics?: true
    price?: true
  }

  export type PlanSumAggregateInputType = {
    maxLinks?: true
    maxPages?: true
    maxAnalytics?: true
    price?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    stripePriceId?: true
    maxLinks?: true
    maxPages?: true
    maxAnalytics?: true
    customThemes?: true
    paidContent?: true
    customDomain?: true
    removeWatermark?: true
    prioritySupport?: true
    price?: true
    isPublic?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    stripePriceId?: true
    maxLinks?: true
    maxPages?: true
    maxAnalytics?: true
    customThemes?: true
    paidContent?: true
    customDomain?: true
    removeWatermark?: true
    prioritySupport?: true
    price?: true
    isPublic?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    stripePriceId?: true
    maxLinks?: true
    maxPages?: true
    maxAnalytics?: true
    customThemes?: true
    paidContent?: true
    customDomain?: true
    removeWatermark?: true
    prioritySupport?: true
    price?: true
    isPublic?: true
    description?: true
    features?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    stripePriceId: string | null
    maxLinks: number
    maxPages: number
    maxAnalytics: number
    customThemes: boolean
    paidContent: boolean
    customDomain: boolean
    removeWatermark: boolean
    prioritySupport: boolean
    price: Decimal
    isPublic: boolean
    description: string | null
    features: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripePriceId?: boolean
    maxLinks?: boolean
    maxPages?: boolean
    maxAnalytics?: boolean
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price?: boolean
    isPublic?: boolean
    description?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    grants?: boolean | Plan$grantsArgs<ExtArgs>
    coupons?: boolean | Plan$couponsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripePriceId?: boolean
    maxLinks?: boolean
    maxPages?: boolean
    maxAnalytics?: boolean
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price?: boolean
    isPublic?: boolean
    description?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stripePriceId?: boolean
    maxLinks?: boolean
    maxPages?: boolean
    maxAnalytics?: boolean
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price?: boolean
    isPublic?: boolean
    description?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    stripePriceId?: boolean
    maxLinks?: boolean
    maxPages?: boolean
    maxAnalytics?: boolean
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price?: boolean
    isPublic?: boolean
    description?: boolean
    features?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stripePriceId" | "maxLinks" | "maxPages" | "maxAnalytics" | "customThemes" | "paidContent" | "customDomain" | "removeWatermark" | "prioritySupport" | "price" | "isPublic" | "description" | "features" | "createdAt" | "updatedAt", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    grants?: boolean | Plan$grantsArgs<ExtArgs>
    coupons?: boolean | Plan$couponsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      grants: Prisma.$UserGrantPayload<ExtArgs>[]
      coupons: Prisma.$CouponPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stripePriceId: string | null
      maxLinks: number
      maxPages: number
      maxAnalytics: number
      customThemes: boolean
      paidContent: boolean
      customDomain: boolean
      removeWatermark: boolean
      prioritySupport: boolean
      price: Prisma.Decimal
      isPublic: boolean
      description: string | null
      features: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grants<T extends Plan$grantsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$grantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coupons<T extends Plan$couponsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$couponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly stripePriceId: FieldRef<"Plan", 'String'>
    readonly maxLinks: FieldRef<"Plan", 'Int'>
    readonly maxPages: FieldRef<"Plan", 'Int'>
    readonly maxAnalytics: FieldRef<"Plan", 'Int'>
    readonly customThemes: FieldRef<"Plan", 'Boolean'>
    readonly paidContent: FieldRef<"Plan", 'Boolean'>
    readonly customDomain: FieldRef<"Plan", 'Boolean'>
    readonly removeWatermark: FieldRef<"Plan", 'Boolean'>
    readonly prioritySupport: FieldRef<"Plan", 'Boolean'>
    readonly price: FieldRef<"Plan", 'Decimal'>
    readonly isPublic: FieldRef<"Plan", 'Boolean'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly features: FieldRef<"Plan", 'Json'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan.grants
   */
  export type Plan$grantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    where?: UserGrantWhereInput
    orderBy?: UserGrantOrderByWithRelationInput | UserGrantOrderByWithRelationInput[]
    cursor?: UserGrantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGrantScalarFieldEnum | UserGrantScalarFieldEnum[]
  }

  /**
   * Plan.coupons
   */
  export type Plan$couponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    cursor?: CouponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    stripeSubId: string | null
    stripeCustomerId: string | null
    status: $Enums.SubStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    stripeSubId: string | null
    stripeCustomerId: string | null
    status: $Enums.SubStatus | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    stripeSubId: number
    stripeCustomerId: number
    status: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    stripeSubId?: true
    stripeCustomerId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    stripeSubId?: true
    stripeCustomerId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    stripeSubId?: true
    stripeCustomerId?: true
    status?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    planId: string
    stripeSubId: string | null
    stripeCustomerId: string | null
    status: $Enums.SubStatus
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    stripeSubId?: boolean
    stripeCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    stripeSubId?: boolean
    stripeCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    stripeSubId?: boolean
    stripeCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    stripeSubId?: boolean
    stripeCustomerId?: boolean
    status?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "stripeSubId" | "stripeCustomerId" | "status" | "currentPeriodStart" | "currentPeriodEnd" | "cancelAtPeriodEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      stripeSubId: string | null
      stripeCustomerId: string | null
      status: $Enums.SubStatus
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      cancelAtPeriodEnd: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly stripeSubId: FieldRef<"Subscription", 'String'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubStatus'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Coupon
   */

  export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  export type CouponAvgAggregateOutputType = {
    discountPct: number | null
    discountAmt: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type CouponSumAggregateOutputType = {
    discountPct: number | null
    discountAmt: Decimal | null
    maxUses: number | null
    usedCount: number | null
  }

  export type CouponMinAggregateOutputType = {
    id: string | null
    code: string | null
    discountPct: number | null
    discountAmt: Decimal | null
    planId: string | null
    maxUses: number | null
    usedCount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponMaxAggregateOutputType = {
    id: string | null
    code: string | null
    discountPct: number | null
    discountAmt: Decimal | null
    planId: string | null
    maxUses: number | null
    usedCount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CouponCountAggregateOutputType = {
    id: number
    code: number
    discountPct: number
    discountAmt: number
    planId: number
    maxUses: number
    usedCount: number
    expiresAt: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CouponAvgAggregateInputType = {
    discountPct?: true
    discountAmt?: true
    maxUses?: true
    usedCount?: true
  }

  export type CouponSumAggregateInputType = {
    discountPct?: true
    discountAmt?: true
    maxUses?: true
    usedCount?: true
  }

  export type CouponMinAggregateInputType = {
    id?: true
    code?: true
    discountPct?: true
    discountAmt?: true
    planId?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponMaxAggregateInputType = {
    id?: true
    code?: true
    discountPct?: true
    discountAmt?: true
    planId?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CouponCountAggregateInputType = {
    id?: true
    code?: true
    discountPct?: true
    discountAmt?: true
    planId?: true
    maxUses?: true
    usedCount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CouponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupon to aggregate.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coupons
    **/
    _count?: true | CouponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CouponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CouponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CouponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CouponMaxAggregateInputType
  }

  export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
        [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoupon[P]>
      : GetScalarType<T[P], AggregateCoupon[P]>
  }




  export type CouponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CouponWhereInput
    orderBy?: CouponOrderByWithAggregationInput | CouponOrderByWithAggregationInput[]
    by: CouponScalarFieldEnum[] | CouponScalarFieldEnum
    having?: CouponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CouponCountAggregateInputType | true
    _avg?: CouponAvgAggregateInputType
    _sum?: CouponSumAggregateInputType
    _min?: CouponMinAggregateInputType
    _max?: CouponMaxAggregateInputType
  }

  export type CouponGroupByOutputType = {
    id: string
    code: string
    discountPct: number | null
    discountAmt: Decimal | null
    planId: string | null
    maxUses: number | null
    usedCount: number
    expiresAt: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CouponCountAggregateOutputType | null
    _avg: CouponAvgAggregateOutputType | null
    _sum: CouponSumAggregateOutputType | null
    _min: CouponMinAggregateOutputType | null
    _max: CouponMaxAggregateOutputType | null
  }

  type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CouponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CouponGroupByOutputType[P]>
            : GetScalarType<T[P], CouponGroupByOutputType[P]>
        }
      >
    >


  export type CouponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountPct?: boolean
    discountAmt?: boolean
    planId?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | Coupon$planArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountPct?: boolean
    discountAmt?: boolean
    planId?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | Coupon$planArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountPct?: boolean
    discountAmt?: boolean
    planId?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | Coupon$planArgs<ExtArgs>
  }, ExtArgs["result"]["coupon"]>

  export type CouponSelectScalar = {
    id?: boolean
    code?: boolean
    discountPct?: boolean
    discountAmt?: boolean
    planId?: boolean
    maxUses?: boolean
    usedCount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CouponOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discountPct" | "discountAmt" | "planId" | "maxUses" | "usedCount" | "expiresAt" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["coupon"]>
  export type CouponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | Coupon$planArgs<ExtArgs>
  }
  export type CouponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | Coupon$planArgs<ExtArgs>
  }
  export type CouponIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | Coupon$planArgs<ExtArgs>
  }

  export type $CouponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coupon"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      discountPct: number | null
      discountAmt: Prisma.Decimal | null
      planId: string | null
      maxUses: number | null
      usedCount: number
      expiresAt: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coupon"]>
    composites: {}
  }

  type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = $Result.GetResult<Prisma.$CouponPayload, S>

  type CouponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CouponCountAggregateInputType | true
    }

  export interface CouponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coupon'], meta: { name: 'Coupon' } }
    /**
     * Find zero or one Coupon that matches the filter.
     * @param {CouponFindUniqueArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CouponFindUniqueArgs>(args: SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coupon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CouponFindUniqueOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CouponFindFirstArgs>(args?: SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindFirstOrThrowArgs} args - Arguments to find a Coupon
     * @example
     * // Get one Coupon
     * const coupon = await prisma.coupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coupons
     * const coupons = await prisma.coupon.findMany()
     * 
     * // Get first 10 Coupons
     * const coupons = await prisma.coupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const couponWithIdOnly = await prisma.coupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CouponFindManyArgs>(args?: SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coupon.
     * @param {CouponCreateArgs} args - Arguments to create a Coupon.
     * @example
     * // Create one Coupon
     * const Coupon = await prisma.coupon.create({
     *   data: {
     *     // ... data to create a Coupon
     *   }
     * })
     * 
     */
    create<T extends CouponCreateArgs>(args: SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coupons.
     * @param {CouponCreateManyArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CouponCreateManyArgs>(args?: SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coupons and returns the data saved in the database.
     * @param {CouponCreateManyAndReturnArgs} args - Arguments to create many Coupons.
     * @example
     * // Create many Coupons
     * const coupon = await prisma.coupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coupon.
     * @param {CouponDeleteArgs} args - Arguments to delete one Coupon.
     * @example
     * // Delete one Coupon
     * const Coupon = await prisma.coupon.delete({
     *   where: {
     *     // ... filter to delete one Coupon
     *   }
     * })
     * 
     */
    delete<T extends CouponDeleteArgs>(args: SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coupon.
     * @param {CouponUpdateArgs} args - Arguments to update one Coupon.
     * @example
     * // Update one Coupon
     * const coupon = await prisma.coupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CouponUpdateArgs>(args: SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coupons.
     * @param {CouponDeleteManyArgs} args - Arguments to filter Coupons to delete.
     * @example
     * // Delete a few Coupons
     * const { count } = await prisma.coupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CouponDeleteManyArgs>(args?: SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CouponUpdateManyArgs>(args: SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coupons and returns the data updated in the database.
     * @param {CouponUpdateManyAndReturnArgs} args - Arguments to update many Coupons.
     * @example
     * // Update many Coupons
     * const coupon = await prisma.coupon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coupons and only return the `id`
     * const couponWithIdOnly = await prisma.coupon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CouponUpdateManyAndReturnArgs>(args: SelectSubset<T, CouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coupon.
     * @param {CouponUpsertArgs} args - Arguments to update or create a Coupon.
     * @example
     * // Update or create a Coupon
     * const coupon = await prisma.coupon.upsert({
     *   create: {
     *     // ... data to create a Coupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coupon we want to update
     *   }
     * })
     */
    upsert<T extends CouponUpsertArgs>(args: SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma__CouponClient<$Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponCountArgs} args - Arguments to filter Coupons to count.
     * @example
     * // Count the number of Coupons
     * const count = await prisma.coupon.count({
     *   where: {
     *     // ... the filter for the Coupons we want to count
     *   }
     * })
    **/
    count<T extends CouponCountArgs>(
      args?: Subset<T, CouponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CouponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CouponAggregateArgs>(args: Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>

    /**
     * Group by Coupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CouponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CouponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CouponGroupByArgs['orderBy'] }
        : { orderBy?: CouponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coupon model
   */
  readonly fields: CouponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CouponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends Coupon$planArgs<ExtArgs> = {}>(args?: Subset<T, Coupon$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coupon model
   */
  interface CouponFieldRefs {
    readonly id: FieldRef<"Coupon", 'String'>
    readonly code: FieldRef<"Coupon", 'String'>
    readonly discountPct: FieldRef<"Coupon", 'Int'>
    readonly discountAmt: FieldRef<"Coupon", 'Decimal'>
    readonly planId: FieldRef<"Coupon", 'String'>
    readonly maxUses: FieldRef<"Coupon", 'Int'>
    readonly usedCount: FieldRef<"Coupon", 'Int'>
    readonly expiresAt: FieldRef<"Coupon", 'DateTime'>
    readonly isActive: FieldRef<"Coupon", 'Boolean'>
    readonly createdAt: FieldRef<"Coupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Coupon", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coupon findUnique
   */
  export type CouponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findUniqueOrThrow
   */
  export type CouponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon findFirst
   */
  export type CouponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findFirstOrThrow
   */
  export type CouponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupon to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coupons.
     */
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon findMany
   */
  export type CouponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter, which Coupons to fetch.
     */
    where?: CouponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coupons to fetch.
     */
    orderBy?: CouponOrderByWithRelationInput | CouponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coupons.
     */
    cursor?: CouponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coupons.
     */
    skip?: number
    distinct?: CouponScalarFieldEnum | CouponScalarFieldEnum[]
  }

  /**
   * Coupon create
   */
  export type CouponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to create a Coupon.
     */
    data: XOR<CouponCreateInput, CouponUncheckedCreateInput>
  }

  /**
   * Coupon createMany
   */
  export type CouponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coupon createManyAndReturn
   */
  export type CouponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to create many Coupons.
     */
    data: CouponCreateManyInput | CouponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coupon update
   */
  export type CouponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The data needed to update a Coupon.
     */
    data: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
    /**
     * Choose, which Coupon to update.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon updateMany
   */
  export type CouponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
  }

  /**
   * Coupon updateManyAndReturn
   */
  export type CouponUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * The data used to update Coupons.
     */
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyInput>
    /**
     * Filter which Coupons to update
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Coupon upsert
   */
  export type CouponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * The filter to search for the Coupon to update in case it exists.
     */
    where: CouponWhereUniqueInput
    /**
     * In case the Coupon found by the `where` argument doesn't exist, create a new Coupon with this data.
     */
    create: XOR<CouponCreateInput, CouponUncheckedCreateInput>
    /**
     * In case the Coupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CouponUpdateInput, CouponUncheckedUpdateInput>
  }

  /**
   * Coupon delete
   */
  export type CouponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
    /**
     * Filter which Coupon to delete.
     */
    where: CouponWhereUniqueInput
  }

  /**
   * Coupon deleteMany
   */
  export type CouponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coupons to delete
     */
    where?: CouponWhereInput
    /**
     * Limit how many Coupons to delete.
     */
    limit?: number
  }

  /**
   * Coupon.plan
   */
  export type Coupon$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }

  /**
   * Coupon without action
   */
  export type CouponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coupon
     */
    select?: CouponSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coupon
     */
    omit?: CouponOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CouponInclude<ExtArgs> | null
  }


  /**
   * Model UserGrant
   */

  export type AggregateUserGrant = {
    _count: UserGrantCountAggregateOutputType | null
    _min: UserGrantMinAggregateOutputType | null
    _max: UserGrantMaxAggregateOutputType | null
  }

  export type UserGrantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    reason: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserGrantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    reason: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserGrantCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    reason: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type UserGrantMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    reason?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserGrantMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    reason?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserGrantCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    reason?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserGrantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGrant to aggregate.
     */
    where?: UserGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrants to fetch.
     */
    orderBy?: UserGrantOrderByWithRelationInput | UserGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGrants
    **/
    _count?: true | UserGrantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGrantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGrantMaxAggregateInputType
  }

  export type GetUserGrantAggregateType<T extends UserGrantAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGrant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGrant[P]>
      : GetScalarType<T[P], AggregateUserGrant[P]>
  }




  export type UserGrantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGrantWhereInput
    orderBy?: UserGrantOrderByWithAggregationInput | UserGrantOrderByWithAggregationInput[]
    by: UserGrantScalarFieldEnum[] | UserGrantScalarFieldEnum
    having?: UserGrantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGrantCountAggregateInputType | true
    _min?: UserGrantMinAggregateInputType
    _max?: UserGrantMaxAggregateInputType
  }

  export type UserGrantGroupByOutputType = {
    id: string
    userId: string
    planId: string
    reason: string | null
    expiresAt: Date | null
    createdAt: Date
    _count: UserGrantCountAggregateOutputType | null
    _min: UserGrantMinAggregateOutputType | null
    _max: UserGrantMaxAggregateOutputType | null
  }

  type GetUserGrantGroupByPayload<T extends UserGrantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGrantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGrantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGrantGroupByOutputType[P]>
            : GetScalarType<T[P], UserGrantGroupByOutputType[P]>
        }
      >
    >


  export type UserGrantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrant"]>

  export type UserGrantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrant"]>

  export type UserGrantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGrant"]>

  export type UserGrantSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    reason?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type UserGrantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "reason" | "expiresAt" | "createdAt", ExtArgs["result"]["userGrant"]>
  export type UserGrantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type UserGrantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type UserGrantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $UserGrantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGrant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      reason: string | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userGrant"]>
    composites: {}
  }

  type UserGrantGetPayload<S extends boolean | null | undefined | UserGrantDefaultArgs> = $Result.GetResult<Prisma.$UserGrantPayload, S>

  type UserGrantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGrantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGrantCountAggregateInputType | true
    }

  export interface UserGrantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGrant'], meta: { name: 'UserGrant' } }
    /**
     * Find zero or one UserGrant that matches the filter.
     * @param {UserGrantFindUniqueArgs} args - Arguments to find a UserGrant
     * @example
     * // Get one UserGrant
     * const userGrant = await prisma.userGrant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGrantFindUniqueArgs>(args: SelectSubset<T, UserGrantFindUniqueArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGrant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGrantFindUniqueOrThrowArgs} args - Arguments to find a UserGrant
     * @example
     * // Get one UserGrant
     * const userGrant = await prisma.userGrant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGrantFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGrantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGrant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantFindFirstArgs} args - Arguments to find a UserGrant
     * @example
     * // Get one UserGrant
     * const userGrant = await prisma.userGrant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGrantFindFirstArgs>(args?: SelectSubset<T, UserGrantFindFirstArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGrant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantFindFirstOrThrowArgs} args - Arguments to find a UserGrant
     * @example
     * // Get one UserGrant
     * const userGrant = await prisma.userGrant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGrantFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGrantFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGrants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGrants
     * const userGrants = await prisma.userGrant.findMany()
     * 
     * // Get first 10 UserGrants
     * const userGrants = await prisma.userGrant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGrantWithIdOnly = await prisma.userGrant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGrantFindManyArgs>(args?: SelectSubset<T, UserGrantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGrant.
     * @param {UserGrantCreateArgs} args - Arguments to create a UserGrant.
     * @example
     * // Create one UserGrant
     * const UserGrant = await prisma.userGrant.create({
     *   data: {
     *     // ... data to create a UserGrant
     *   }
     * })
     * 
     */
    create<T extends UserGrantCreateArgs>(args: SelectSubset<T, UserGrantCreateArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGrants.
     * @param {UserGrantCreateManyArgs} args - Arguments to create many UserGrants.
     * @example
     * // Create many UserGrants
     * const userGrant = await prisma.userGrant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGrantCreateManyArgs>(args?: SelectSubset<T, UserGrantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGrants and returns the data saved in the database.
     * @param {UserGrantCreateManyAndReturnArgs} args - Arguments to create many UserGrants.
     * @example
     * // Create many UserGrants
     * const userGrant = await prisma.userGrant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGrants and only return the `id`
     * const userGrantWithIdOnly = await prisma.userGrant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGrantCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGrantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGrant.
     * @param {UserGrantDeleteArgs} args - Arguments to delete one UserGrant.
     * @example
     * // Delete one UserGrant
     * const UserGrant = await prisma.userGrant.delete({
     *   where: {
     *     // ... filter to delete one UserGrant
     *   }
     * })
     * 
     */
    delete<T extends UserGrantDeleteArgs>(args: SelectSubset<T, UserGrantDeleteArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGrant.
     * @param {UserGrantUpdateArgs} args - Arguments to update one UserGrant.
     * @example
     * // Update one UserGrant
     * const userGrant = await prisma.userGrant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGrantUpdateArgs>(args: SelectSubset<T, UserGrantUpdateArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGrants.
     * @param {UserGrantDeleteManyArgs} args - Arguments to filter UserGrants to delete.
     * @example
     * // Delete a few UserGrants
     * const { count } = await prisma.userGrant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGrantDeleteManyArgs>(args?: SelectSubset<T, UserGrantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGrants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGrants
     * const userGrant = await prisma.userGrant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGrantUpdateManyArgs>(args: SelectSubset<T, UserGrantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGrants and returns the data updated in the database.
     * @param {UserGrantUpdateManyAndReturnArgs} args - Arguments to update many UserGrants.
     * @example
     * // Update many UserGrants
     * const userGrant = await prisma.userGrant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGrants and only return the `id`
     * const userGrantWithIdOnly = await prisma.userGrant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserGrantUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGrantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGrant.
     * @param {UserGrantUpsertArgs} args - Arguments to update or create a UserGrant.
     * @example
     * // Update or create a UserGrant
     * const userGrant = await prisma.userGrant.upsert({
     *   create: {
     *     // ... data to create a UserGrant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGrant we want to update
     *   }
     * })
     */
    upsert<T extends UserGrantUpsertArgs>(args: SelectSubset<T, UserGrantUpsertArgs<ExtArgs>>): Prisma__UserGrantClient<$Result.GetResult<Prisma.$UserGrantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGrants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantCountArgs} args - Arguments to filter UserGrants to count.
     * @example
     * // Count the number of UserGrants
     * const count = await prisma.userGrant.count({
     *   where: {
     *     // ... the filter for the UserGrants we want to count
     *   }
     * })
    **/
    count<T extends UserGrantCountArgs>(
      args?: Subset<T, UserGrantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGrantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGrant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserGrantAggregateArgs>(args: Subset<T, UserGrantAggregateArgs>): Prisma.PrismaPromise<GetUserGrantAggregateType<T>>

    /**
     * Group by UserGrant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGrantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGrantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGrantGroupByArgs['orderBy'] }
        : { orderBy?: UserGrantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGrantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGrantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGrant model
   */
  readonly fields: UserGrantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGrant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGrantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserGrant model
   */
  interface UserGrantFieldRefs {
    readonly id: FieldRef<"UserGrant", 'String'>
    readonly userId: FieldRef<"UserGrant", 'String'>
    readonly planId: FieldRef<"UserGrant", 'String'>
    readonly reason: FieldRef<"UserGrant", 'String'>
    readonly expiresAt: FieldRef<"UserGrant", 'DateTime'>
    readonly createdAt: FieldRef<"UserGrant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGrant findUnique
   */
  export type UserGrantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * Filter, which UserGrant to fetch.
     */
    where: UserGrantWhereUniqueInput
  }

  /**
   * UserGrant findUniqueOrThrow
   */
  export type UserGrantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * Filter, which UserGrant to fetch.
     */
    where: UserGrantWhereUniqueInput
  }

  /**
   * UserGrant findFirst
   */
  export type UserGrantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * Filter, which UserGrant to fetch.
     */
    where?: UserGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrants to fetch.
     */
    orderBy?: UserGrantOrderByWithRelationInput | UserGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGrants.
     */
    cursor?: UserGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGrants.
     */
    distinct?: UserGrantScalarFieldEnum | UserGrantScalarFieldEnum[]
  }

  /**
   * UserGrant findFirstOrThrow
   */
  export type UserGrantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * Filter, which UserGrant to fetch.
     */
    where?: UserGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrants to fetch.
     */
    orderBy?: UserGrantOrderByWithRelationInput | UserGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGrants.
     */
    cursor?: UserGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGrants.
     */
    distinct?: UserGrantScalarFieldEnum | UserGrantScalarFieldEnum[]
  }

  /**
   * UserGrant findMany
   */
  export type UserGrantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * Filter, which UserGrants to fetch.
     */
    where?: UserGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGrants to fetch.
     */
    orderBy?: UserGrantOrderByWithRelationInput | UserGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGrants.
     */
    cursor?: UserGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGrants.
     */
    skip?: number
    distinct?: UserGrantScalarFieldEnum | UserGrantScalarFieldEnum[]
  }

  /**
   * UserGrant create
   */
  export type UserGrantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGrant.
     */
    data: XOR<UserGrantCreateInput, UserGrantUncheckedCreateInput>
  }

  /**
   * UserGrant createMany
   */
  export type UserGrantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGrants.
     */
    data: UserGrantCreateManyInput | UserGrantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGrant createManyAndReturn
   */
  export type UserGrantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * The data used to create many UserGrants.
     */
    data: UserGrantCreateManyInput | UserGrantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGrant update
   */
  export type UserGrantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGrant.
     */
    data: XOR<UserGrantUpdateInput, UserGrantUncheckedUpdateInput>
    /**
     * Choose, which UserGrant to update.
     */
    where: UserGrantWhereUniqueInput
  }

  /**
   * UserGrant updateMany
   */
  export type UserGrantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGrants.
     */
    data: XOR<UserGrantUpdateManyMutationInput, UserGrantUncheckedUpdateManyInput>
    /**
     * Filter which UserGrants to update
     */
    where?: UserGrantWhereInput
    /**
     * Limit how many UserGrants to update.
     */
    limit?: number
  }

  /**
   * UserGrant updateManyAndReturn
   */
  export type UserGrantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * The data used to update UserGrants.
     */
    data: XOR<UserGrantUpdateManyMutationInput, UserGrantUncheckedUpdateManyInput>
    /**
     * Filter which UserGrants to update
     */
    where?: UserGrantWhereInput
    /**
     * Limit how many UserGrants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGrant upsert
   */
  export type UserGrantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGrant to update in case it exists.
     */
    where: UserGrantWhereUniqueInput
    /**
     * In case the UserGrant found by the `where` argument doesn't exist, create a new UserGrant with this data.
     */
    create: XOR<UserGrantCreateInput, UserGrantUncheckedCreateInput>
    /**
     * In case the UserGrant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGrantUpdateInput, UserGrantUncheckedUpdateInput>
  }

  /**
   * UserGrant delete
   */
  export type UserGrantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
    /**
     * Filter which UserGrant to delete.
     */
    where: UserGrantWhereUniqueInput
  }

  /**
   * UserGrant deleteMany
   */
  export type UserGrantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGrants to delete
     */
    where?: UserGrantWhereInput
    /**
     * Limit how many UserGrants to delete.
     */
    limit?: number
  }

  /**
   * UserGrant without action
   */
  export type UserGrantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGrant
     */
    select?: UserGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGrant
     */
    omit?: UserGrantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGrantInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    order: number | null
  }

  export type TemplateSumAggregateOutputType = {
    order: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    previewUrl: string | null
    isPublic: boolean | null
    isFeatured: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    category: string | null
    previewUrl: string | null
    isPublic: boolean | null
    isFeatured: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    category: number
    theme: number
    previewUrl: number
    isPublic: number
    isFeatured: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    order?: true
  }

  export type TemplateSumAggregateInputType = {
    order?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    previewUrl?: true
    isPublic?: true
    isFeatured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    previewUrl?: true
    isPublic?: true
    isFeatured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    category?: true
    theme?: true
    previewUrl?: true
    isPublic?: true
    isFeatured?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    category: string
    theme: JsonValue
    previewUrl: string | null
    isPublic: boolean
    isFeatured: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    theme?: boolean
    previewUrl?: boolean
    isPublic?: boolean
    isFeatured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    theme?: boolean
    previewUrl?: boolean
    isPublic?: boolean
    isFeatured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    theme?: boolean
    previewUrl?: boolean
    isPublic?: boolean
    isFeatured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    category?: boolean
    theme?: boolean
    previewUrl?: boolean
    isPublic?: boolean
    isFeatured?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "category" | "theme" | "previewUrl" | "isPublic" | "isFeatured" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["template"]>

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      category: string
      theme: Prisma.JsonValue
      previewUrl: string | null
      isPublic: boolean
      isFeatured: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly name: FieldRef<"Template", 'String'>
    readonly slug: FieldRef<"Template", 'String'>
    readonly description: FieldRef<"Template", 'String'>
    readonly category: FieldRef<"Template", 'String'>
    readonly theme: FieldRef<"Template", 'Json'>
    readonly previewUrl: FieldRef<"Template", 'String'>
    readonly isPublic: FieldRef<"Template", 'Boolean'>
    readonly isFeatured: FieldRef<"Template", 'Boolean'>
    readonly order: FieldRef<"Template", 'Int'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly updatedAt: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
  }


  /**
   * Model PlatformSettings
   */

  export type AggregatePlatformSettings = {
    _count: PlatformSettingsCountAggregateOutputType | null
    _min: PlatformSettingsMinAggregateOutputType | null
    _max: PlatformSettingsMaxAggregateOutputType | null
  }

  export type PlatformSettingsMinAggregateOutputType = {
    id: string | null
    siteName: string | null
    siteDescription: string | null
    logoUrl: string | null
    faviconUrl: string | null
    primaryColor: string | null
    allowFreePlan: boolean | null
    requireEmailVerify: boolean | null
    maintenanceMode: boolean | null
    termsUrl: string | null
    privacyUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformSettingsMaxAggregateOutputType = {
    id: string | null
    siteName: string | null
    siteDescription: string | null
    logoUrl: string | null
    faviconUrl: string | null
    primaryColor: string | null
    allowFreePlan: boolean | null
    requireEmailVerify: boolean | null
    maintenanceMode: boolean | null
    termsUrl: string | null
    privacyUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformSettingsCountAggregateOutputType = {
    id: number
    siteName: number
    siteDescription: number
    logoUrl: number
    faviconUrl: number
    primaryColor: number
    allowFreePlan: number
    requireEmailVerify: number
    maintenanceMode: number
    termsUrl: number
    privacyUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlatformSettingsMinAggregateInputType = {
    id?: true
    siteName?: true
    siteDescription?: true
    logoUrl?: true
    faviconUrl?: true
    primaryColor?: true
    allowFreePlan?: true
    requireEmailVerify?: true
    maintenanceMode?: true
    termsUrl?: true
    privacyUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformSettingsMaxAggregateInputType = {
    id?: true
    siteName?: true
    siteDescription?: true
    logoUrl?: true
    faviconUrl?: true
    primaryColor?: true
    allowFreePlan?: true
    requireEmailVerify?: true
    maintenanceMode?: true
    termsUrl?: true
    privacyUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformSettingsCountAggregateInputType = {
    id?: true
    siteName?: true
    siteDescription?: true
    logoUrl?: true
    faviconUrl?: true
    primaryColor?: true
    allowFreePlan?: true
    requireEmailVerify?: true
    maintenanceMode?: true
    termsUrl?: true
    privacyUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformSettings to aggregate.
     */
    where?: PlatformSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingsOrderByWithRelationInput | PlatformSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlatformSettings
    **/
    _count?: true | PlatformSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformSettingsMaxAggregateInputType
  }

  export type GetPlatformSettingsAggregateType<T extends PlatformSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatformSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatformSettings[P]>
      : GetScalarType<T[P], AggregatePlatformSettings[P]>
  }




  export type PlatformSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformSettingsWhereInput
    orderBy?: PlatformSettingsOrderByWithAggregationInput | PlatformSettingsOrderByWithAggregationInput[]
    by: PlatformSettingsScalarFieldEnum[] | PlatformSettingsScalarFieldEnum
    having?: PlatformSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformSettingsCountAggregateInputType | true
    _min?: PlatformSettingsMinAggregateInputType
    _max?: PlatformSettingsMaxAggregateInputType
  }

  export type PlatformSettingsGroupByOutputType = {
    id: string
    siteName: string
    siteDescription: string | null
    logoUrl: string | null
    faviconUrl: string | null
    primaryColor: string
    allowFreePlan: boolean
    requireEmailVerify: boolean
    maintenanceMode: boolean
    termsUrl: string | null
    privacyUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlatformSettingsCountAggregateOutputType | null
    _min: PlatformSettingsMinAggregateOutputType | null
    _max: PlatformSettingsMaxAggregateOutputType | null
  }

  type GetPlatformSettingsGroupByPayload<T extends PlatformSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformSettingsGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteName?: boolean
    siteDescription?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    primaryColor?: boolean
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformSettings"]>

  export type PlatformSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteName?: boolean
    siteDescription?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    primaryColor?: boolean
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformSettings"]>

  export type PlatformSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteName?: boolean
    siteDescription?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    primaryColor?: boolean
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platformSettings"]>

  export type PlatformSettingsSelectScalar = {
    id?: boolean
    siteName?: boolean
    siteDescription?: boolean
    logoUrl?: boolean
    faviconUrl?: boolean
    primaryColor?: boolean
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlatformSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteName" | "siteDescription" | "logoUrl" | "faviconUrl" | "primaryColor" | "allowFreePlan" | "requireEmailVerify" | "maintenanceMode" | "termsUrl" | "privacyUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["platformSettings"]>

  export type $PlatformSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlatformSettings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteName: string
      siteDescription: string | null
      logoUrl: string | null
      faviconUrl: string | null
      primaryColor: string
      allowFreePlan: boolean
      requireEmailVerify: boolean
      maintenanceMode: boolean
      termsUrl: string | null
      privacyUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["platformSettings"]>
    composites: {}
  }

  type PlatformSettingsGetPayload<S extends boolean | null | undefined | PlatformSettingsDefaultArgs> = $Result.GetResult<Prisma.$PlatformSettingsPayload, S>

  type PlatformSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformSettingsCountAggregateInputType | true
    }

  export interface PlatformSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlatformSettings'], meta: { name: 'PlatformSettings' } }
    /**
     * Find zero or one PlatformSettings that matches the filter.
     * @param {PlatformSettingsFindUniqueArgs} args - Arguments to find a PlatformSettings
     * @example
     * // Get one PlatformSettings
     * const platformSettings = await prisma.platformSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformSettingsFindUniqueArgs>(args: SelectSubset<T, PlatformSettingsFindUniqueArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlatformSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformSettingsFindUniqueOrThrowArgs} args - Arguments to find a PlatformSettings
     * @example
     * // Get one PlatformSettings
     * const platformSettings = await prisma.platformSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsFindFirstArgs} args - Arguments to find a PlatformSettings
     * @example
     * // Get one PlatformSettings
     * const platformSettings = await prisma.platformSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformSettingsFindFirstArgs>(args?: SelectSubset<T, PlatformSettingsFindFirstArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlatformSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsFindFirstOrThrowArgs} args - Arguments to find a PlatformSettings
     * @example
     * // Get one PlatformSettings
     * const platformSettings = await prisma.platformSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlatformSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlatformSettings
     * const platformSettings = await prisma.platformSettings.findMany()
     * 
     * // Get first 10 PlatformSettings
     * const platformSettings = await prisma.platformSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformSettingsWithIdOnly = await prisma.platformSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformSettingsFindManyArgs>(args?: SelectSubset<T, PlatformSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlatformSettings.
     * @param {PlatformSettingsCreateArgs} args - Arguments to create a PlatformSettings.
     * @example
     * // Create one PlatformSettings
     * const PlatformSettings = await prisma.platformSettings.create({
     *   data: {
     *     // ... data to create a PlatformSettings
     *   }
     * })
     * 
     */
    create<T extends PlatformSettingsCreateArgs>(args: SelectSubset<T, PlatformSettingsCreateArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlatformSettings.
     * @param {PlatformSettingsCreateManyArgs} args - Arguments to create many PlatformSettings.
     * @example
     * // Create many PlatformSettings
     * const platformSettings = await prisma.platformSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformSettingsCreateManyArgs>(args?: SelectSubset<T, PlatformSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlatformSettings and returns the data saved in the database.
     * @param {PlatformSettingsCreateManyAndReturnArgs} args - Arguments to create many PlatformSettings.
     * @example
     * // Create many PlatformSettings
     * const platformSettings = await prisma.platformSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlatformSettings and only return the `id`
     * const platformSettingsWithIdOnly = await prisma.platformSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlatformSettings.
     * @param {PlatformSettingsDeleteArgs} args - Arguments to delete one PlatformSettings.
     * @example
     * // Delete one PlatformSettings
     * const PlatformSettings = await prisma.platformSettings.delete({
     *   where: {
     *     // ... filter to delete one PlatformSettings
     *   }
     * })
     * 
     */
    delete<T extends PlatformSettingsDeleteArgs>(args: SelectSubset<T, PlatformSettingsDeleteArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlatformSettings.
     * @param {PlatformSettingsUpdateArgs} args - Arguments to update one PlatformSettings.
     * @example
     * // Update one PlatformSettings
     * const platformSettings = await prisma.platformSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformSettingsUpdateArgs>(args: SelectSubset<T, PlatformSettingsUpdateArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlatformSettings.
     * @param {PlatformSettingsDeleteManyArgs} args - Arguments to filter PlatformSettings to delete.
     * @example
     * // Delete a few PlatformSettings
     * const { count } = await prisma.platformSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformSettingsDeleteManyArgs>(args?: SelectSubset<T, PlatformSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlatformSettings
     * const platformSettings = await prisma.platformSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformSettingsUpdateManyArgs>(args: SelectSubset<T, PlatformSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlatformSettings and returns the data updated in the database.
     * @param {PlatformSettingsUpdateManyAndReturnArgs} args - Arguments to update many PlatformSettings.
     * @example
     * // Update many PlatformSettings
     * const platformSettings = await prisma.platformSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlatformSettings and only return the `id`
     * const platformSettingsWithIdOnly = await prisma.platformSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlatformSettings.
     * @param {PlatformSettingsUpsertArgs} args - Arguments to update or create a PlatformSettings.
     * @example
     * // Update or create a PlatformSettings
     * const platformSettings = await prisma.platformSettings.upsert({
     *   create: {
     *     // ... data to create a PlatformSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlatformSettings we want to update
     *   }
     * })
     */
    upsert<T extends PlatformSettingsUpsertArgs>(args: SelectSubset<T, PlatformSettingsUpsertArgs<ExtArgs>>): Prisma__PlatformSettingsClient<$Result.GetResult<Prisma.$PlatformSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlatformSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsCountArgs} args - Arguments to filter PlatformSettings to count.
     * @example
     * // Count the number of PlatformSettings
     * const count = await prisma.platformSettings.count({
     *   where: {
     *     // ... the filter for the PlatformSettings we want to count
     *   }
     * })
    **/
    count<T extends PlatformSettingsCountArgs>(
      args?: Subset<T, PlatformSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlatformSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlatformSettingsAggregateArgs>(args: Subset<T, PlatformSettingsAggregateArgs>): Prisma.PrismaPromise<GetPlatformSettingsAggregateType<T>>

    /**
     * Group by PlatformSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlatformSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformSettingsGroupByArgs['orderBy'] }
        : { orderBy?: PlatformSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlatformSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlatformSettings model
   */
  readonly fields: PlatformSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlatformSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlatformSettings model
   */
  interface PlatformSettingsFieldRefs {
    readonly id: FieldRef<"PlatformSettings", 'String'>
    readonly siteName: FieldRef<"PlatformSettings", 'String'>
    readonly siteDescription: FieldRef<"PlatformSettings", 'String'>
    readonly logoUrl: FieldRef<"PlatformSettings", 'String'>
    readonly faviconUrl: FieldRef<"PlatformSettings", 'String'>
    readonly primaryColor: FieldRef<"PlatformSettings", 'String'>
    readonly allowFreePlan: FieldRef<"PlatformSettings", 'Boolean'>
    readonly requireEmailVerify: FieldRef<"PlatformSettings", 'Boolean'>
    readonly maintenanceMode: FieldRef<"PlatformSettings", 'Boolean'>
    readonly termsUrl: FieldRef<"PlatformSettings", 'String'>
    readonly privacyUrl: FieldRef<"PlatformSettings", 'String'>
    readonly createdAt: FieldRef<"PlatformSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"PlatformSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlatformSettings findUnique
   */
  export type PlatformSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformSettings to fetch.
     */
    where: PlatformSettingsWhereUniqueInput
  }

  /**
   * PlatformSettings findUniqueOrThrow
   */
  export type PlatformSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformSettings to fetch.
     */
    where: PlatformSettingsWhereUniqueInput
  }

  /**
   * PlatformSettings findFirst
   */
  export type PlatformSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformSettings to fetch.
     */
    where?: PlatformSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingsOrderByWithRelationInput | PlatformSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformSettings.
     */
    cursor?: PlatformSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformSettings.
     */
    distinct?: PlatformSettingsScalarFieldEnum | PlatformSettingsScalarFieldEnum[]
  }

  /**
   * PlatformSettings findFirstOrThrow
   */
  export type PlatformSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformSettings to fetch.
     */
    where?: PlatformSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingsOrderByWithRelationInput | PlatformSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlatformSettings.
     */
    cursor?: PlatformSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlatformSettings.
     */
    distinct?: PlatformSettingsScalarFieldEnum | PlatformSettingsScalarFieldEnum[]
  }

  /**
   * PlatformSettings findMany
   */
  export type PlatformSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * Filter, which PlatformSettings to fetch.
     */
    where?: PlatformSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlatformSettings to fetch.
     */
    orderBy?: PlatformSettingsOrderByWithRelationInput | PlatformSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlatformSettings.
     */
    cursor?: PlatformSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlatformSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlatformSettings.
     */
    skip?: number
    distinct?: PlatformSettingsScalarFieldEnum | PlatformSettingsScalarFieldEnum[]
  }

  /**
   * PlatformSettings create
   */
  export type PlatformSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a PlatformSettings.
     */
    data: XOR<PlatformSettingsCreateInput, PlatformSettingsUncheckedCreateInput>
  }

  /**
   * PlatformSettings createMany
   */
  export type PlatformSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlatformSettings.
     */
    data: PlatformSettingsCreateManyInput | PlatformSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformSettings createManyAndReturn
   */
  export type PlatformSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many PlatformSettings.
     */
    data: PlatformSettingsCreateManyInput | PlatformSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlatformSettings update
   */
  export type PlatformSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a PlatformSettings.
     */
    data: XOR<PlatformSettingsUpdateInput, PlatformSettingsUncheckedUpdateInput>
    /**
     * Choose, which PlatformSettings to update.
     */
    where: PlatformSettingsWhereUniqueInput
  }

  /**
   * PlatformSettings updateMany
   */
  export type PlatformSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlatformSettings.
     */
    data: XOR<PlatformSettingsUpdateManyMutationInput, PlatformSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PlatformSettings to update
     */
    where?: PlatformSettingsWhereInput
    /**
     * Limit how many PlatformSettings to update.
     */
    limit?: number
  }

  /**
   * PlatformSettings updateManyAndReturn
   */
  export type PlatformSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * The data used to update PlatformSettings.
     */
    data: XOR<PlatformSettingsUpdateManyMutationInput, PlatformSettingsUncheckedUpdateManyInput>
    /**
     * Filter which PlatformSettings to update
     */
    where?: PlatformSettingsWhereInput
    /**
     * Limit how many PlatformSettings to update.
     */
    limit?: number
  }

  /**
   * PlatformSettings upsert
   */
  export type PlatformSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the PlatformSettings to update in case it exists.
     */
    where: PlatformSettingsWhereUniqueInput
    /**
     * In case the PlatformSettings found by the `where` argument doesn't exist, create a new PlatformSettings with this data.
     */
    create: XOR<PlatformSettingsCreateInput, PlatformSettingsUncheckedCreateInput>
    /**
     * In case the PlatformSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformSettingsUpdateInput, PlatformSettingsUncheckedUpdateInput>
  }

  /**
   * PlatformSettings delete
   */
  export type PlatformSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
    /**
     * Filter which PlatformSettings to delete.
     */
    where: PlatformSettingsWhereUniqueInput
  }

  /**
   * PlatformSettings deleteMany
   */
  export type PlatformSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlatformSettings to delete
     */
    where?: PlatformSettingsWhereInput
    /**
     * Limit how many PlatformSettings to delete.
     */
    limit?: number
  }

  /**
   * PlatformSettings without action
   */
  export type PlatformSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatformSettings
     */
    select?: PlatformSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlatformSettings
     */
    omit?: PlatformSettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    ssoId: 'ssoId',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    slug: 'slug',
    title: 'title',
    description: 'description',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    backgroundImageUrl: 'backgroundImageUrl',
    theme: 'theme',
    isActive: 'isActive',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const LinkScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    type: 'type',
    title: 'title',
    url: 'url',
    icon: 'icon',
    imageUrl: 'imageUrl',
    style: 'style',
    position: 'position',
    isActive: 'isActive',
    isPaid: 'isPaid',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LinkScalarFieldEnum = (typeof LinkScalarFieldEnum)[keyof typeof LinkScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    title: 'title',
    description: 'description',
    type: 'type',
    contentUrl: 'contentUrl',
    fileUrl: 'fileUrl',
    price: 'price',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const ContentPurchaseScalarFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    userId: 'userId',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type ContentPurchaseScalarFieldEnum = (typeof ContentPurchaseScalarFieldEnum)[keyof typeof ContentPurchaseScalarFieldEnum]


  export const PageAnalyticsScalarFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    date: 'date',
    views: 'views',
    uniqueVisitors: 'uniqueVisitors',
    avgTimeOnPage: 'avgTimeOnPage',
    bounceRate: 'bounceRate',
    topReferrers: 'topReferrers',
    topCountries: 'topCountries',
    topDevices: 'topDevices'
  };

  export type PageAnalyticsScalarFieldEnum = (typeof PageAnalyticsScalarFieldEnum)[keyof typeof PageAnalyticsScalarFieldEnum]


  export const LinkClickScalarFieldEnum: {
    id: 'id',
    linkId: 'linkId',
    clickedAt: 'clickedAt',
    referrer: 'referrer',
    device: 'device',
    country: 'country',
    city: 'city',
    browser: 'browser',
    os: 'os'
  };

  export type LinkClickScalarFieldEnum = (typeof LinkClickScalarFieldEnum)[keyof typeof LinkClickScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stripePriceId: 'stripePriceId',
    maxLinks: 'maxLinks',
    maxPages: 'maxPages',
    maxAnalytics: 'maxAnalytics',
    customThemes: 'customThemes',
    paidContent: 'paidContent',
    customDomain: 'customDomain',
    removeWatermark: 'removeWatermark',
    prioritySupport: 'prioritySupport',
    price: 'price',
    isPublic: 'isPublic',
    description: 'description',
    features: 'features',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    stripeSubId: 'stripeSubId',
    stripeCustomerId: 'stripeCustomerId',
    status: 'status',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const CouponScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discountPct: 'discountPct',
    discountAmt: 'discountAmt',
    planId: 'planId',
    maxUses: 'maxUses',
    usedCount: 'usedCount',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum]


  export const UserGrantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    reason: 'reason',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type UserGrantScalarFieldEnum = (typeof UserGrantScalarFieldEnum)[keyof typeof UserGrantScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    theme: 'theme',
    previewUrl: 'previewUrl',
    isPublic: 'isPublic',
    isFeatured: 'isFeatured',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const PlatformSettingsScalarFieldEnum: {
    id: 'id',
    siteName: 'siteName',
    siteDescription: 'siteDescription',
    logoUrl: 'logoUrl',
    faviconUrl: 'faviconUrl',
    primaryColor: 'primaryColor',
    allowFreePlan: 'allowFreePlan',
    requireEmailVerify: 'requireEmailVerify',
    maintenanceMode: 'maintenanceMode',
    termsUrl: 'termsUrl',
    privacyUrl: 'privacyUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlatformSettingsScalarFieldEnum = (typeof PlatformSettingsScalarFieldEnum)[keyof typeof PlatformSettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    ssoId: 'ssoId',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const PageOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    slug: 'slug',
    title: 'title',
    description: 'description',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    backgroundImageUrl: 'backgroundImageUrl'
  };

  export type PageOrderByRelevanceFieldEnum = (typeof PageOrderByRelevanceFieldEnum)[keyof typeof PageOrderByRelevanceFieldEnum]


  export const LinkOrderByRelevanceFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    title: 'title',
    url: 'url',
    icon: 'icon',
    imageUrl: 'imageUrl'
  };

  export type LinkOrderByRelevanceFieldEnum = (typeof LinkOrderByRelevanceFieldEnum)[keyof typeof LinkOrderByRelevanceFieldEnum]


  export const ContentOrderByRelevanceFieldEnum: {
    id: 'id',
    pageId: 'pageId',
    title: 'title',
    description: 'description',
    contentUrl: 'contentUrl',
    fileUrl: 'fileUrl'
  };

  export type ContentOrderByRelevanceFieldEnum = (typeof ContentOrderByRelevanceFieldEnum)[keyof typeof ContentOrderByRelevanceFieldEnum]


  export const ContentPurchaseOrderByRelevanceFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    userId: 'userId'
  };

  export type ContentPurchaseOrderByRelevanceFieldEnum = (typeof ContentPurchaseOrderByRelevanceFieldEnum)[keyof typeof ContentPurchaseOrderByRelevanceFieldEnum]


  export const PageAnalyticsOrderByRelevanceFieldEnum: {
    id: 'id',
    pageId: 'pageId'
  };

  export type PageAnalyticsOrderByRelevanceFieldEnum = (typeof PageAnalyticsOrderByRelevanceFieldEnum)[keyof typeof PageAnalyticsOrderByRelevanceFieldEnum]


  export const LinkClickOrderByRelevanceFieldEnum: {
    id: 'id',
    linkId: 'linkId',
    referrer: 'referrer',
    device: 'device',
    country: 'country',
    city: 'city',
    browser: 'browser',
    os: 'os'
  };

  export type LinkClickOrderByRelevanceFieldEnum = (typeof LinkClickOrderByRelevanceFieldEnum)[keyof typeof LinkClickOrderByRelevanceFieldEnum]


  export const PlanOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    stripePriceId: 'stripePriceId',
    description: 'description'
  };

  export type PlanOrderByRelevanceFieldEnum = (typeof PlanOrderByRelevanceFieldEnum)[keyof typeof PlanOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    stripeSubId: 'stripeSubId',
    stripeCustomerId: 'stripeCustomerId'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const CouponOrderByRelevanceFieldEnum: {
    id: 'id',
    code: 'code',
    planId: 'planId'
  };

  export type CouponOrderByRelevanceFieldEnum = (typeof CouponOrderByRelevanceFieldEnum)[keyof typeof CouponOrderByRelevanceFieldEnum]


  export const UserGrantOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    reason: 'reason'
  };

  export type UserGrantOrderByRelevanceFieldEnum = (typeof UserGrantOrderByRelevanceFieldEnum)[keyof typeof UserGrantOrderByRelevanceFieldEnum]


  export const TemplateOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    category: 'category',
    previewUrl: 'previewUrl'
  };

  export type TemplateOrderByRelevanceFieldEnum = (typeof TemplateOrderByRelevanceFieldEnum)[keyof typeof TemplateOrderByRelevanceFieldEnum]


  export const PlatformSettingsOrderByRelevanceFieldEnum: {
    id: 'id',
    siteName: 'siteName',
    siteDescription: 'siteDescription',
    logoUrl: 'logoUrl',
    faviconUrl: 'faviconUrl',
    primaryColor: 'primaryColor',
    termsUrl: 'termsUrl',
    privacyUrl: 'privacyUrl'
  };

  export type PlatformSettingsOrderByRelevanceFieldEnum = (typeof PlatformSettingsOrderByRelevanceFieldEnum)[keyof typeof PlatformSettingsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LinkType'
   */
  export type EnumLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkType'>
    


  /**
   * Reference to a field of type 'LinkType[]'
   */
  export type ListEnumLinkTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LinkType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SubStatus'
   */
  export type EnumSubStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubStatus'>
    


  /**
   * Reference to a field of type 'SubStatus[]'
   */
  export type ListEnumSubStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    ssoId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pages?: PageListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    grants?: UserGrantListRelationFilter
    purchases?: ContentPurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    ssoId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pages?: PageOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    grants?: UserGrantOrderByRelationAggregateInput
    purchases?: ContentPurchaseOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ssoId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    pages?: PageListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    grants?: UserGrantListRelationFilter
    purchases?: ContentPurchaseListRelationFilter
  }, "id" | "ssoId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    ssoId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    ssoId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    userId?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    description?: StringNullableFilter<"Page"> | string | null
    bio?: StringNullableFilter<"Page"> | string | null
    avatarUrl?: StringNullableFilter<"Page"> | string | null
    backgroundImageUrl?: StringNullableFilter<"Page"> | string | null
    theme?: JsonFilter<"Page">
    isActive?: BoolFilter<"Page"> | boolean
    isFeatured?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    links?: LinkListRelationFilter
    analytics?: PageAnalyticsListRelationFilter
    contents?: ContentListRelationFilter
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    backgroundImageUrl?: SortOrderInput | SortOrder
    theme?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    links?: LinkOrderByRelationAggregateInput
    analytics?: PageAnalyticsOrderByRelationAggregateInput
    contents?: ContentOrderByRelationAggregateInput
    _relevance?: PageOrderByRelevanceInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    userId?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    description?: StringNullableFilter<"Page"> | string | null
    bio?: StringNullableFilter<"Page"> | string | null
    avatarUrl?: StringNullableFilter<"Page"> | string | null
    backgroundImageUrl?: StringNullableFilter<"Page"> | string | null
    theme?: JsonFilter<"Page">
    isActive?: BoolFilter<"Page"> | boolean
    isFeatured?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    links?: LinkListRelationFilter
    analytics?: PageAnalyticsListRelationFilter
    contents?: ContentListRelationFilter
  }, "id" | "slug">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    backgroundImageUrl?: SortOrderInput | SortOrder
    theme?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    userId?: StringWithAggregatesFilter<"Page"> | string
    slug?: StringWithAggregatesFilter<"Page"> | string
    title?: StringWithAggregatesFilter<"Page"> | string
    description?: StringNullableWithAggregatesFilter<"Page"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Page"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Page"> | string | null
    backgroundImageUrl?: StringNullableWithAggregatesFilter<"Page"> | string | null
    theme?: JsonWithAggregatesFilter<"Page">
    isActive?: BoolWithAggregatesFilter<"Page"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Page"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type LinkWhereInput = {
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    id?: StringFilter<"Link"> | string
    pageId?: StringFilter<"Link"> | string
    type?: EnumLinkTypeFilter<"Link"> | $Enums.LinkType
    title?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    icon?: StringNullableFilter<"Link"> | string | null
    imageUrl?: StringNullableFilter<"Link"> | string | null
    style?: JsonFilter<"Link">
    position?: IntFilter<"Link"> | number
    isActive?: BoolFilter<"Link"> | boolean
    isPaid?: BoolFilter<"Link"> | boolean
    price?: DecimalNullableFilter<"Link"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
    clicks?: LinkClickListRelationFilter
  }

  export type LinkOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    style?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    isPaid?: SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
    clicks?: LinkClickOrderByRelationAggregateInput
    _relevance?: LinkOrderByRelevanceInput
  }

  export type LinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkWhereInput | LinkWhereInput[]
    OR?: LinkWhereInput[]
    NOT?: LinkWhereInput | LinkWhereInput[]
    pageId?: StringFilter<"Link"> | string
    type?: EnumLinkTypeFilter<"Link"> | $Enums.LinkType
    title?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    icon?: StringNullableFilter<"Link"> | string | null
    imageUrl?: StringNullableFilter<"Link"> | string | null
    style?: JsonFilter<"Link">
    position?: IntFilter<"Link"> | number
    isActive?: BoolFilter<"Link"> | boolean
    isPaid?: BoolFilter<"Link"> | boolean
    price?: DecimalNullableFilter<"Link"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
    clicks?: LinkClickListRelationFilter
  }, "id">

  export type LinkOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    style?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    isPaid?: SortOrder
    price?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LinkCountOrderByAggregateInput
    _avg?: LinkAvgOrderByAggregateInput
    _max?: LinkMaxOrderByAggregateInput
    _min?: LinkMinOrderByAggregateInput
    _sum?: LinkSumOrderByAggregateInput
  }

  export type LinkScalarWhereWithAggregatesInput = {
    AND?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    OR?: LinkScalarWhereWithAggregatesInput[]
    NOT?: LinkScalarWhereWithAggregatesInput | LinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Link"> | string
    pageId?: StringWithAggregatesFilter<"Link"> | string
    type?: EnumLinkTypeWithAggregatesFilter<"Link"> | $Enums.LinkType
    title?: StringWithAggregatesFilter<"Link"> | string
    url?: StringWithAggregatesFilter<"Link"> | string
    icon?: StringNullableWithAggregatesFilter<"Link"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Link"> | string | null
    style?: JsonWithAggregatesFilter<"Link">
    position?: IntWithAggregatesFilter<"Link"> | number
    isActive?: BoolWithAggregatesFilter<"Link"> | boolean
    isPaid?: BoolWithAggregatesFilter<"Link"> | boolean
    price?: DecimalNullableWithAggregatesFilter<"Link"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Link"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    pageId?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    contentUrl?: StringNullableFilter<"Content"> | string | null
    fileUrl?: StringNullableFilter<"Content"> | string | null
    price?: DecimalFilter<"Content"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Content"> | boolean
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
    purchases?: ContentPurchaseListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    contentUrl?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    page?: PageOrderByWithRelationInput
    purchases?: ContentPurchaseOrderByRelationAggregateInput
    _relevance?: ContentOrderByRelevanceInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    pageId?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    contentUrl?: StringNullableFilter<"Content"> | string | null
    fileUrl?: StringNullableFilter<"Content"> | string | null
    price?: DecimalFilter<"Content"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Content"> | boolean
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
    purchases?: ContentPurchaseListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    contentUrl?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    pageId?: StringWithAggregatesFilter<"Content"> | string
    title?: StringWithAggregatesFilter<"Content"> | string
    description?: StringNullableWithAggregatesFilter<"Content"> | string | null
    type?: EnumContentTypeWithAggregatesFilter<"Content"> | $Enums.ContentType
    contentUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    price?: DecimalWithAggregatesFilter<"Content"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Content"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type ContentPurchaseWhereInput = {
    AND?: ContentPurchaseWhereInput | ContentPurchaseWhereInput[]
    OR?: ContentPurchaseWhereInput[]
    NOT?: ContentPurchaseWhereInput | ContentPurchaseWhereInput[]
    id?: StringFilter<"ContentPurchase"> | string
    contentId?: StringFilter<"ContentPurchase"> | string
    userId?: StringFilter<"ContentPurchase"> | string
    price?: DecimalFilter<"ContentPurchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ContentPurchase"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContentPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    contentId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ContentPurchaseOrderByRelevanceInput
  }

  export type ContentPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentId_userId?: ContentPurchaseContentIdUserIdCompoundUniqueInput
    AND?: ContentPurchaseWhereInput | ContentPurchaseWhereInput[]
    OR?: ContentPurchaseWhereInput[]
    NOT?: ContentPurchaseWhereInput | ContentPurchaseWhereInput[]
    contentId?: StringFilter<"ContentPurchase"> | string
    userId?: StringFilter<"ContentPurchase"> | string
    price?: DecimalFilter<"ContentPurchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ContentPurchase"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "contentId_userId">

  export type ContentPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    contentId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: ContentPurchaseCountOrderByAggregateInput
    _avg?: ContentPurchaseAvgOrderByAggregateInput
    _max?: ContentPurchaseMaxOrderByAggregateInput
    _min?: ContentPurchaseMinOrderByAggregateInput
    _sum?: ContentPurchaseSumOrderByAggregateInput
  }

  export type ContentPurchaseScalarWhereWithAggregatesInput = {
    AND?: ContentPurchaseScalarWhereWithAggregatesInput | ContentPurchaseScalarWhereWithAggregatesInput[]
    OR?: ContentPurchaseScalarWhereWithAggregatesInput[]
    NOT?: ContentPurchaseScalarWhereWithAggregatesInput | ContentPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContentPurchase"> | string
    contentId?: StringWithAggregatesFilter<"ContentPurchase"> | string
    userId?: StringWithAggregatesFilter<"ContentPurchase"> | string
    price?: DecimalWithAggregatesFilter<"ContentPurchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"ContentPurchase"> | Date | string
  }

  export type PageAnalyticsWhereInput = {
    AND?: PageAnalyticsWhereInput | PageAnalyticsWhereInput[]
    OR?: PageAnalyticsWhereInput[]
    NOT?: PageAnalyticsWhereInput | PageAnalyticsWhereInput[]
    id?: StringFilter<"PageAnalytics"> | string
    pageId?: StringFilter<"PageAnalytics"> | string
    date?: DateTimeFilter<"PageAnalytics"> | Date | string
    views?: IntFilter<"PageAnalytics"> | number
    uniqueVisitors?: IntFilter<"PageAnalytics"> | number
    avgTimeOnPage?: FloatNullableFilter<"PageAnalytics"> | number | null
    bounceRate?: FloatNullableFilter<"PageAnalytics"> | number | null
    topReferrers?: JsonNullableFilter<"PageAnalytics">
    topCountries?: JsonNullableFilter<"PageAnalytics">
    topDevices?: JsonNullableFilter<"PageAnalytics">
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }

  export type PageAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    pageId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrderInput | SortOrder
    bounceRate?: SortOrderInput | SortOrder
    topReferrers?: SortOrderInput | SortOrder
    topCountries?: SortOrderInput | SortOrder
    topDevices?: SortOrderInput | SortOrder
    page?: PageOrderByWithRelationInput
    _relevance?: PageAnalyticsOrderByRelevanceInput
  }

  export type PageAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pageId_date?: PageAnalyticsPageIdDateCompoundUniqueInput
    AND?: PageAnalyticsWhereInput | PageAnalyticsWhereInput[]
    OR?: PageAnalyticsWhereInput[]
    NOT?: PageAnalyticsWhereInput | PageAnalyticsWhereInput[]
    pageId?: StringFilter<"PageAnalytics"> | string
    date?: DateTimeFilter<"PageAnalytics"> | Date | string
    views?: IntFilter<"PageAnalytics"> | number
    uniqueVisitors?: IntFilter<"PageAnalytics"> | number
    avgTimeOnPage?: FloatNullableFilter<"PageAnalytics"> | number | null
    bounceRate?: FloatNullableFilter<"PageAnalytics"> | number | null
    topReferrers?: JsonNullableFilter<"PageAnalytics">
    topCountries?: JsonNullableFilter<"PageAnalytics">
    topDevices?: JsonNullableFilter<"PageAnalytics">
    page?: XOR<PageScalarRelationFilter, PageWhereInput>
  }, "id" | "pageId_date">

  export type PageAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    pageId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrderInput | SortOrder
    bounceRate?: SortOrderInput | SortOrder
    topReferrers?: SortOrderInput | SortOrder
    topCountries?: SortOrderInput | SortOrder
    topDevices?: SortOrderInput | SortOrder
    _count?: PageAnalyticsCountOrderByAggregateInput
    _avg?: PageAnalyticsAvgOrderByAggregateInput
    _max?: PageAnalyticsMaxOrderByAggregateInput
    _min?: PageAnalyticsMinOrderByAggregateInput
    _sum?: PageAnalyticsSumOrderByAggregateInput
  }

  export type PageAnalyticsScalarWhereWithAggregatesInput = {
    AND?: PageAnalyticsScalarWhereWithAggregatesInput | PageAnalyticsScalarWhereWithAggregatesInput[]
    OR?: PageAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: PageAnalyticsScalarWhereWithAggregatesInput | PageAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageAnalytics"> | string
    pageId?: StringWithAggregatesFilter<"PageAnalytics"> | string
    date?: DateTimeWithAggregatesFilter<"PageAnalytics"> | Date | string
    views?: IntWithAggregatesFilter<"PageAnalytics"> | number
    uniqueVisitors?: IntWithAggregatesFilter<"PageAnalytics"> | number
    avgTimeOnPage?: FloatNullableWithAggregatesFilter<"PageAnalytics"> | number | null
    bounceRate?: FloatNullableWithAggregatesFilter<"PageAnalytics"> | number | null
    topReferrers?: JsonNullableWithAggregatesFilter<"PageAnalytics">
    topCountries?: JsonNullableWithAggregatesFilter<"PageAnalytics">
    topDevices?: JsonNullableWithAggregatesFilter<"PageAnalytics">
  }

  export type LinkClickWhereInput = {
    AND?: LinkClickWhereInput | LinkClickWhereInput[]
    OR?: LinkClickWhereInput[]
    NOT?: LinkClickWhereInput | LinkClickWhereInput[]
    id?: StringFilter<"LinkClick"> | string
    linkId?: StringFilter<"LinkClick"> | string
    clickedAt?: DateTimeFilter<"LinkClick"> | Date | string
    referrer?: StringNullableFilter<"LinkClick"> | string | null
    device?: StringNullableFilter<"LinkClick"> | string | null
    country?: StringNullableFilter<"LinkClick"> | string | null
    city?: StringNullableFilter<"LinkClick"> | string | null
    browser?: StringNullableFilter<"LinkClick"> | string | null
    os?: StringNullableFilter<"LinkClick"> | string | null
    link?: XOR<LinkScalarRelationFilter, LinkWhereInput>
  }

  export type LinkClickOrderByWithRelationInput = {
    id?: SortOrder
    linkId?: SortOrder
    clickedAt?: SortOrder
    referrer?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    link?: LinkOrderByWithRelationInput
    _relevance?: LinkClickOrderByRelevanceInput
  }

  export type LinkClickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinkClickWhereInput | LinkClickWhereInput[]
    OR?: LinkClickWhereInput[]
    NOT?: LinkClickWhereInput | LinkClickWhereInput[]
    linkId?: StringFilter<"LinkClick"> | string
    clickedAt?: DateTimeFilter<"LinkClick"> | Date | string
    referrer?: StringNullableFilter<"LinkClick"> | string | null
    device?: StringNullableFilter<"LinkClick"> | string | null
    country?: StringNullableFilter<"LinkClick"> | string | null
    city?: StringNullableFilter<"LinkClick"> | string | null
    browser?: StringNullableFilter<"LinkClick"> | string | null
    os?: StringNullableFilter<"LinkClick"> | string | null
    link?: XOR<LinkScalarRelationFilter, LinkWhereInput>
  }, "id">

  export type LinkClickOrderByWithAggregationInput = {
    id?: SortOrder
    linkId?: SortOrder
    clickedAt?: SortOrder
    referrer?: SortOrderInput | SortOrder
    device?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    browser?: SortOrderInput | SortOrder
    os?: SortOrderInput | SortOrder
    _count?: LinkClickCountOrderByAggregateInput
    _max?: LinkClickMaxOrderByAggregateInput
    _min?: LinkClickMinOrderByAggregateInput
  }

  export type LinkClickScalarWhereWithAggregatesInput = {
    AND?: LinkClickScalarWhereWithAggregatesInput | LinkClickScalarWhereWithAggregatesInput[]
    OR?: LinkClickScalarWhereWithAggregatesInput[]
    NOT?: LinkClickScalarWhereWithAggregatesInput | LinkClickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LinkClick"> | string
    linkId?: StringWithAggregatesFilter<"LinkClick"> | string
    clickedAt?: DateTimeWithAggregatesFilter<"LinkClick"> | Date | string
    referrer?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
    device?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
    country?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
    city?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
    browser?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
    os?: StringNullableWithAggregatesFilter<"LinkClick"> | string | null
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    stripePriceId?: StringNullableFilter<"Plan"> | string | null
    maxLinks?: IntFilter<"Plan"> | number
    maxPages?: IntFilter<"Plan"> | number
    maxAnalytics?: IntFilter<"Plan"> | number
    customThemes?: BoolFilter<"Plan"> | boolean
    paidContent?: BoolFilter<"Plan"> | boolean
    customDomain?: BoolFilter<"Plan"> | boolean
    removeWatermark?: BoolFilter<"Plan"> | boolean
    prioritySupport?: BoolFilter<"Plan"> | boolean
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFilter<"Plan"> | boolean
    description?: StringNullableFilter<"Plan"> | string | null
    features?: JsonNullableFilter<"Plan">
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    grants?: UserGrantListRelationFilter
    coupons?: CouponListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    customThemes?: SortOrder
    paidContent?: SortOrder
    customDomain?: SortOrder
    removeWatermark?: SortOrder
    prioritySupport?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    grants?: UserGrantOrderByRelationAggregateInput
    coupons?: CouponOrderByRelationAggregateInput
    _relevance?: PlanOrderByRelevanceInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    stripePriceId?: StringNullableFilter<"Plan"> | string | null
    maxLinks?: IntFilter<"Plan"> | number
    maxPages?: IntFilter<"Plan"> | number
    maxAnalytics?: IntFilter<"Plan"> | number
    customThemes?: BoolFilter<"Plan"> | boolean
    paidContent?: BoolFilter<"Plan"> | boolean
    customDomain?: BoolFilter<"Plan"> | boolean
    removeWatermark?: BoolFilter<"Plan"> | boolean
    prioritySupport?: BoolFilter<"Plan"> | boolean
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFilter<"Plan"> | boolean
    description?: StringNullableFilter<"Plan"> | string | null
    features?: JsonNullableFilter<"Plan">
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
    grants?: UserGrantListRelationFilter
    coupons?: CouponListRelationFilter
  }, "id" | "name">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    customThemes?: SortOrder
    paidContent?: SortOrder
    customDomain?: SortOrder
    removeWatermark?: SortOrder
    prioritySupport?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    stripePriceId?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    maxLinks?: IntWithAggregatesFilter<"Plan"> | number
    maxPages?: IntWithAggregatesFilter<"Plan"> | number
    maxAnalytics?: IntWithAggregatesFilter<"Plan"> | number
    customThemes?: BoolWithAggregatesFilter<"Plan"> | boolean
    paidContent?: BoolWithAggregatesFilter<"Plan"> | boolean
    customDomain?: BoolWithAggregatesFilter<"Plan"> | boolean
    removeWatermark?: BoolWithAggregatesFilter<"Plan"> | boolean
    prioritySupport?: BoolWithAggregatesFilter<"Plan"> | boolean
    price?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    isPublic?: BoolWithAggregatesFilter<"Plan"> | boolean
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    features?: JsonNullableWithAggregatesFilter<"Plan">
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    stripeSubId?: StringNullableFilter<"Subscription"> | string | null
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubStatusFilter<"Subscription"> | $Enums.SubStatus
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    stripeSubId?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    stripeSubId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    planId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubStatusFilter<"Subscription"> | $Enums.SubStatus
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }, "id" | "stripeSubId" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    stripeSubId?: SortOrderInput | SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: EnumSubStatusWithAggregatesFilter<"Subscription"> | $Enums.SubStatus
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type CouponWhereInput = {
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    discountPct?: IntNullableFilter<"Coupon"> | number | null
    discountAmt?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    planId?: StringNullableFilter<"Coupon"> | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    usedCount?: IntFilter<"Coupon"> | number
    expiresAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    isActive?: BoolFilter<"Coupon"> | boolean
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    plan?: XOR<PlanNullableScalarRelationFilter, PlanWhereInput> | null
  }

  export type CouponOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discountPct?: SortOrderInput | SortOrder
    discountAmt?: SortOrderInput | SortOrder
    planId?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    _relevance?: CouponOrderByRelevanceInput
  }

  export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CouponWhereInput | CouponWhereInput[]
    OR?: CouponWhereInput[]
    NOT?: CouponWhereInput | CouponWhereInput[]
    discountPct?: IntNullableFilter<"Coupon"> | number | null
    discountAmt?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    planId?: StringNullableFilter<"Coupon"> | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    usedCount?: IntFilter<"Coupon"> | number
    expiresAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    isActive?: BoolFilter<"Coupon"> | boolean
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
    plan?: XOR<PlanNullableScalarRelationFilter, PlanWhereInput> | null
  }, "id" | "code">

  export type CouponOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discountPct?: SortOrderInput | SortOrder
    discountAmt?: SortOrderInput | SortOrder
    planId?: SortOrderInput | SortOrder
    maxUses?: SortOrderInput | SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CouponCountOrderByAggregateInput
    _avg?: CouponAvgOrderByAggregateInput
    _max?: CouponMaxOrderByAggregateInput
    _min?: CouponMinOrderByAggregateInput
    _sum?: CouponSumOrderByAggregateInput
  }

  export type CouponScalarWhereWithAggregatesInput = {
    AND?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    OR?: CouponScalarWhereWithAggregatesInput[]
    NOT?: CouponScalarWhereWithAggregatesInput | CouponScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coupon"> | string
    code?: StringWithAggregatesFilter<"Coupon"> | string
    discountPct?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    discountAmt?: DecimalNullableWithAggregatesFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    planId?: StringNullableWithAggregatesFilter<"Coupon"> | string | null
    maxUses?: IntNullableWithAggregatesFilter<"Coupon"> | number | null
    usedCount?: IntWithAggregatesFilter<"Coupon"> | number
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Coupon"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Coupon"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coupon"> | Date | string
  }

  export type UserGrantWhereInput = {
    AND?: UserGrantWhereInput | UserGrantWhereInput[]
    OR?: UserGrantWhereInput[]
    NOT?: UserGrantWhereInput | UserGrantWhereInput[]
    id?: StringFilter<"UserGrant"> | string
    userId?: StringFilter<"UserGrant"> | string
    planId?: StringFilter<"UserGrant"> | string
    reason?: StringNullableFilter<"UserGrant"> | string | null
    expiresAt?: DateTimeNullableFilter<"UserGrant"> | Date | string | null
    createdAt?: DateTimeFilter<"UserGrant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }

  export type UserGrantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    reason?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    _relevance?: UserGrantOrderByRelevanceInput
  }

  export type UserGrantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_planId?: UserGrantUserIdPlanIdCompoundUniqueInput
    AND?: UserGrantWhereInput | UserGrantWhereInput[]
    OR?: UserGrantWhereInput[]
    NOT?: UserGrantWhereInput | UserGrantWhereInput[]
    userId?: StringFilter<"UserGrant"> | string
    planId?: StringFilter<"UserGrant"> | string
    reason?: StringNullableFilter<"UserGrant"> | string | null
    expiresAt?: DateTimeNullableFilter<"UserGrant"> | Date | string | null
    createdAt?: DateTimeFilter<"UserGrant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
  }, "id" | "userId_planId">

  export type UserGrantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    reason?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserGrantCountOrderByAggregateInput
    _max?: UserGrantMaxOrderByAggregateInput
    _min?: UserGrantMinOrderByAggregateInput
  }

  export type UserGrantScalarWhereWithAggregatesInput = {
    AND?: UserGrantScalarWhereWithAggregatesInput | UserGrantScalarWhereWithAggregatesInput[]
    OR?: UserGrantScalarWhereWithAggregatesInput[]
    NOT?: UserGrantScalarWhereWithAggregatesInput | UserGrantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserGrant"> | string
    userId?: StringWithAggregatesFilter<"UserGrant"> | string
    planId?: StringWithAggregatesFilter<"UserGrant"> | string
    reason?: StringNullableWithAggregatesFilter<"UserGrant"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"UserGrant"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserGrant"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    name?: StringFilter<"Template"> | string
    slug?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    category?: StringFilter<"Template"> | string
    theme?: JsonFilter<"Template">
    previewUrl?: StringNullableFilter<"Template"> | string | null
    isPublic?: BoolFilter<"Template"> | boolean
    isFeatured?: BoolFilter<"Template"> | boolean
    order?: IntFilter<"Template"> | number
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    theme?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: TemplateOrderByRelevanceInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    description?: StringNullableFilter<"Template"> | string | null
    category?: StringFilter<"Template"> | string
    theme?: JsonFilter<"Template">
    previewUrl?: StringNullableFilter<"Template"> | string | null
    isPublic?: BoolFilter<"Template"> | boolean
    isFeatured?: BoolFilter<"Template"> | boolean
    order?: IntFilter<"Template"> | number
    createdAt?: DateTimeFilter<"Template"> | Date | string
    updatedAt?: DateTimeFilter<"Template"> | Date | string
  }, "id" | "slug">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    theme?: SortOrder
    previewUrl?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    name?: StringWithAggregatesFilter<"Template"> | string
    slug?: StringWithAggregatesFilter<"Template"> | string
    description?: StringNullableWithAggregatesFilter<"Template"> | string | null
    category?: StringWithAggregatesFilter<"Template"> | string
    theme?: JsonWithAggregatesFilter<"Template">
    previewUrl?: StringNullableWithAggregatesFilter<"Template"> | string | null
    isPublic?: BoolWithAggregatesFilter<"Template"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Template"> | boolean
    order?: IntWithAggregatesFilter<"Template"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type PlatformSettingsWhereInput = {
    AND?: PlatformSettingsWhereInput | PlatformSettingsWhereInput[]
    OR?: PlatformSettingsWhereInput[]
    NOT?: PlatformSettingsWhereInput | PlatformSettingsWhereInput[]
    id?: StringFilter<"PlatformSettings"> | string
    siteName?: StringFilter<"PlatformSettings"> | string
    siteDescription?: StringNullableFilter<"PlatformSettings"> | string | null
    logoUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    faviconUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    primaryColor?: StringFilter<"PlatformSettings"> | string
    allowFreePlan?: BoolFilter<"PlatformSettings"> | boolean
    requireEmailVerify?: BoolFilter<"PlatformSettings"> | boolean
    maintenanceMode?: BoolFilter<"PlatformSettings"> | boolean
    termsUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    privacyUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    createdAt?: DateTimeFilter<"PlatformSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformSettings"> | Date | string
  }

  export type PlatformSettingsOrderByWithRelationInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteDescription?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    faviconUrl?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    allowFreePlan?: SortOrder
    requireEmailVerify?: SortOrder
    maintenanceMode?: SortOrder
    termsUrl?: SortOrderInput | SortOrder
    privacyUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: PlatformSettingsOrderByRelevanceInput
  }

  export type PlatformSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlatformSettingsWhereInput | PlatformSettingsWhereInput[]
    OR?: PlatformSettingsWhereInput[]
    NOT?: PlatformSettingsWhereInput | PlatformSettingsWhereInput[]
    siteName?: StringFilter<"PlatformSettings"> | string
    siteDescription?: StringNullableFilter<"PlatformSettings"> | string | null
    logoUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    faviconUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    primaryColor?: StringFilter<"PlatformSettings"> | string
    allowFreePlan?: BoolFilter<"PlatformSettings"> | boolean
    requireEmailVerify?: BoolFilter<"PlatformSettings"> | boolean
    maintenanceMode?: BoolFilter<"PlatformSettings"> | boolean
    termsUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    privacyUrl?: StringNullableFilter<"PlatformSettings"> | string | null
    createdAt?: DateTimeFilter<"PlatformSettings"> | Date | string
    updatedAt?: DateTimeFilter<"PlatformSettings"> | Date | string
  }, "id">

  export type PlatformSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteDescription?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    faviconUrl?: SortOrderInput | SortOrder
    primaryColor?: SortOrder
    allowFreePlan?: SortOrder
    requireEmailVerify?: SortOrder
    maintenanceMode?: SortOrder
    termsUrl?: SortOrderInput | SortOrder
    privacyUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformSettingsCountOrderByAggregateInput
    _max?: PlatformSettingsMaxOrderByAggregateInput
    _min?: PlatformSettingsMinOrderByAggregateInput
  }

  export type PlatformSettingsScalarWhereWithAggregatesInput = {
    AND?: PlatformSettingsScalarWhereWithAggregatesInput | PlatformSettingsScalarWhereWithAggregatesInput[]
    OR?: PlatformSettingsScalarWhereWithAggregatesInput[]
    NOT?: PlatformSettingsScalarWhereWithAggregatesInput | PlatformSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlatformSettings"> | string
    siteName?: StringWithAggregatesFilter<"PlatformSettings"> | string
    siteDescription?: StringNullableWithAggregatesFilter<"PlatformSettings"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"PlatformSettings"> | string | null
    faviconUrl?: StringNullableWithAggregatesFilter<"PlatformSettings"> | string | null
    primaryColor?: StringWithAggregatesFilter<"PlatformSettings"> | string
    allowFreePlan?: BoolWithAggregatesFilter<"PlatformSettings"> | boolean
    requireEmailVerify?: BoolWithAggregatesFilter<"PlatformSettings"> | boolean
    maintenanceMode?: BoolWithAggregatesFilter<"PlatformSettings"> | boolean
    termsUrl?: StringNullableWithAggregatesFilter<"PlatformSettings"> | string | null
    privacyUrl?: StringNullableWithAggregatesFilter<"PlatformSettings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PlatformSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlatformSettings"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    grants?: UserGrantCreateNestedManyWithoutUserInput
    purchases?: ContentPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    grants?: UserGrantUncheckedCreateNestedManyWithoutUserInput
    purchases?: ContentPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    grants?: UserGrantUpdateManyWithoutUserNestedInput
    purchases?: ContentPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    grants?: UserGrantUncheckedUpdateManyWithoutUserNestedInput
    purchases?: ContentPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPagesInput
    links?: LinkCreateNestedManyWithoutPageInput
    analytics?: PageAnalyticsCreateNestedManyWithoutPageInput
    contents?: ContentCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    userId: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutPageInput
    analytics?: PageAnalyticsUncheckedCreateNestedManyWithoutPageInput
    contents?: ContentUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPagesNestedInput
    links?: LinkUpdateManyWithoutPageNestedInput
    analytics?: PageAnalyticsUpdateManyWithoutPageNestedInput
    contents?: ContentUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutPageNestedInput
    analytics?: PageAnalyticsUncheckedUpdateManyWithoutPageNestedInput
    contents?: ContentUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageCreateManyInput = {
    id?: string
    userId: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateInput = {
    id?: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutLinksInput
    clicks?: LinkClickCreateNestedManyWithoutLinkInput
  }

  export type LinkUncheckedCreateInput = {
    id?: string
    pageId: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clicks?: LinkClickUncheckedCreateNestedManyWithoutLinkInput
  }

  export type LinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutLinksNestedInput
    clicks?: LinkClickUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: LinkClickUncheckedUpdateManyWithoutLinkNestedInput
  }

  export type LinkCreateManyInput = {
    id?: string
    pageId: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutContentsInput
    purchases?: ContentPurchaseCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    pageId: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: ContentPurchaseUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutContentsNestedInput
    purchases?: ContentPurchaseUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: ContentPurchaseUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    pageId: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPurchaseCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutPurchasesInput
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type ContentPurchaseUncheckedCreateInput = {
    id?: string
    contentId: string
    userId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ContentPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutPurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type ContentPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPurchaseCreateManyInput = {
    id?: string
    contentId: string
    userId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ContentPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageAnalyticsCreateInput = {
    id?: string
    date?: Date | string
    views?: number
    uniqueVisitors?: number
    avgTimeOnPage?: number | null
    bounceRate?: number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
    page: PageCreateNestedOneWithoutAnalyticsInput
  }

  export type PageAnalyticsUncheckedCreateInput = {
    id?: string
    pageId: string
    date?: Date | string
    views?: number
    uniqueVisitors?: number
    avgTimeOnPage?: number | null
    bounceRate?: number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
    page?: PageUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type PageAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsCreateManyInput = {
    id?: string
    pageId: string
    date?: Date | string
    views?: number
    uniqueVisitors?: number
    avgTimeOnPage?: number | null
    bounceRate?: number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LinkClickCreateInput = {
    id?: string
    clickedAt?: Date | string
    referrer?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    browser?: string | null
    os?: string | null
    link: LinkCreateNestedOneWithoutClicksInput
  }

  export type LinkClickUncheckedCreateInput = {
    id?: string
    linkId: string
    clickedAt?: Date | string
    referrer?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    browser?: string | null
    os?: string | null
  }

  export type LinkClickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
    link?: LinkUpdateOneRequiredWithoutClicksNestedInput
  }

  export type LinkClickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    linkId?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkClickCreateManyInput = {
    id?: string
    linkId: string
    clickedAt?: Date | string
    referrer?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    browser?: string | null
    os?: string | null
  }

  export type LinkClickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkClickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    linkId?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
    grants?: UserGrantCreateNestedManyWithoutPlanInput
    coupons?: CouponCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
    grants?: UserGrantUncheckedCreateNestedManyWithoutPlanInput
    coupons?: CouponUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
    grants?: UserGrantUpdateManyWithoutPlanNestedInput
    coupons?: CouponUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
    grants?: UserGrantUncheckedUpdateManyWithoutPlanNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    planId: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateInput = {
    id?: string
    code: string
    discountPct?: number | null
    discountAmt?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutCouponsInput
  }

  export type CouponUncheckedCreateInput = {
    id?: string
    code: string
    discountPct?: number | null
    discountAmt?: Decimal | DecimalJsLike | number | string | null
    planId?: string | null
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutCouponsNestedInput
  }

  export type CouponUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponCreateManyInput = {
    id?: string
    code: string
    discountPct?: number | null
    discountAmt?: Decimal | DecimalJsLike | number | string | null
    planId?: string | null
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantCreateInput = {
    id?: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGrantsInput
    plan: PlanCreateNestedOneWithoutGrantsInput
  }

  export type UserGrantUncheckedCreateInput = {
    id?: string
    userId: string
    planId: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserGrantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGrantsNestedInput
    plan?: PlanUpdateOneRequiredWithoutGrantsNestedInput
  }

  export type UserGrantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantCreateManyInput = {
    id?: string
    userId: string
    planId: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserGrantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string
    theme: JsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    isPublic?: boolean
    isFeatured?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string
    theme: JsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    isPublic?: boolean
    isFeatured?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    category?: string
    theme: JsonNullValueInput | InputJsonValue
    previewUrl?: string | null
    isPublic?: boolean
    isFeatured?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    theme?: JsonNullValueInput | InputJsonValue
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingsCreateInput = {
    id?: string
    siteName?: string
    siteDescription?: string | null
    logoUrl?: string | null
    faviconUrl?: string | null
    primaryColor?: string
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: string | null
    privacyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformSettingsUncheckedCreateInput = {
    id?: string
    siteName?: string
    siteDescription?: string | null
    logoUrl?: string | null
    faviconUrl?: string | null
    primaryColor?: string
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: string | null
    privacyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteName?: StringFieldUpdateOperationsInput | string
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    allowFreePlan?: BoolFieldUpdateOperationsInput | boolean
    requireEmailVerify?: BoolFieldUpdateOperationsInput | boolean
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteName?: StringFieldUpdateOperationsInput | string
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    allowFreePlan?: BoolFieldUpdateOperationsInput | boolean
    requireEmailVerify?: BoolFieldUpdateOperationsInput | boolean
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingsCreateManyInput = {
    id?: string
    siteName?: string
    siteDescription?: string | null
    logoUrl?: string | null
    faviconUrl?: string | null
    primaryColor?: string
    allowFreePlan?: boolean
    requireEmailVerify?: boolean
    maintenanceMode?: boolean
    termsUrl?: string | null
    privacyUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteName?: StringFieldUpdateOperationsInput | string
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    allowFreePlan?: BoolFieldUpdateOperationsInput | boolean
    requireEmailVerify?: BoolFieldUpdateOperationsInput | boolean
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteName?: StringFieldUpdateOperationsInput | string
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    faviconUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: StringFieldUpdateOperationsInput | string
    allowFreePlan?: BoolFieldUpdateOperationsInput | boolean
    requireEmailVerify?: BoolFieldUpdateOperationsInput | boolean
    maintenanceMode?: BoolFieldUpdateOperationsInput | boolean
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PageListRelationFilter = {
    every?: PageWhereInput
    some?: PageWhereInput
    none?: PageWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type UserGrantListRelationFilter = {
    every?: UserGrantWhereInput
    some?: UserGrantWhereInput
    none?: UserGrantWhereInput
  }

  export type ContentPurchaseListRelationFilter = {
    every?: ContentPurchaseWhereInput
    some?: ContentPurchaseWhereInput
    none?: ContentPurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGrantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    ssoId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    ssoId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    ssoId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LinkListRelationFilter = {
    every?: LinkWhereInput
    some?: LinkWhereInput
    none?: LinkWhereInput
  }

  export type PageAnalyticsListRelationFilter = {
    every?: PageAnalyticsWhereInput
    some?: PageAnalyticsWhereInput
    none?: PageAnalyticsWhereInput
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type LinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PageOrderByRelevanceInput = {
    fields: PageOrderByRelevanceFieldEnum | PageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    backgroundImageUrl?: SortOrder
    theme?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    backgroundImageUrl?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    backgroundImageUrl?: SortOrder
    isActive?: SortOrder
    isFeatured?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeFilter<$PrismaModel> | $Enums.LinkType
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type PageScalarRelationFilter = {
    is?: PageWhereInput
    isNot?: PageWhereInput
  }

  export type LinkClickListRelationFilter = {
    every?: LinkClickWhereInput
    some?: LinkClickWhereInput
    none?: LinkClickWhereInput
  }

  export type LinkClickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkOrderByRelevanceInput = {
    fields: LinkOrderByRelevanceFieldEnum | LinkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LinkCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    imageUrl?: SortOrder
    style?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkAvgOrderByAggregateInput = {
    position?: SortOrder
    price?: SortOrder
  }

  export type LinkMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    imageUrl?: SortOrder
    position?: SortOrder
    isActive?: SortOrder
    isPaid?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LinkSumOrderByAggregateInput = {
    position?: SortOrder
    price?: SortOrder
  }

  export type EnumLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.LinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumLinkTypeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ContentOrderByRelevanceInput = {
    fields: ContentOrderByRelevanceFieldEnum | ContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contentUrl?: SortOrder
    fileUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contentUrl?: SortOrder
    fileUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    contentUrl?: SortOrder
    fileUrl?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type ContentPurchaseOrderByRelevanceInput = {
    fields: ContentPurchaseOrderByRelevanceFieldEnum | ContentPurchaseOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ContentPurchaseContentIdUserIdCompoundUniqueInput = {
    contentId: string
    userId: string
  }

  export type ContentPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ContentPurchaseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ContentPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ContentPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    userId?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type ContentPurchaseSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PageAnalyticsOrderByRelevanceInput = {
    fields: PageAnalyticsOrderByRelevanceFieldEnum | PageAnalyticsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PageAnalyticsPageIdDateCompoundUniqueInput = {
    pageId: string
    date: Date | string
  }

  export type PageAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrder
    bounceRate?: SortOrder
    topReferrers?: SortOrder
    topCountries?: SortOrder
    topDevices?: SortOrder
  }

  export type PageAnalyticsAvgOrderByAggregateInput = {
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrder
    bounceRate?: SortOrder
  }

  export type PageAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrder
    bounceRate?: SortOrder
  }

  export type PageAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    pageId?: SortOrder
    date?: SortOrder
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrder
    bounceRate?: SortOrder
  }

  export type PageAnalyticsSumOrderByAggregateInput = {
    views?: SortOrder
    uniqueVisitors?: SortOrder
    avgTimeOnPage?: SortOrder
    bounceRate?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LinkScalarRelationFilter = {
    is?: LinkWhereInput
    isNot?: LinkWhereInput
  }

  export type LinkClickOrderByRelevanceInput = {
    fields: LinkClickOrderByRelevanceFieldEnum | LinkClickOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LinkClickCountOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    clickedAt?: SortOrder
    referrer?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    browser?: SortOrder
    os?: SortOrder
  }

  export type LinkClickMaxOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    clickedAt?: SortOrder
    referrer?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    browser?: SortOrder
    os?: SortOrder
  }

  export type LinkClickMinOrderByAggregateInput = {
    id?: SortOrder
    linkId?: SortOrder
    clickedAt?: SortOrder
    referrer?: SortOrder
    device?: SortOrder
    country?: SortOrder
    city?: SortOrder
    browser?: SortOrder
    os?: SortOrder
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type CouponListRelationFilter = {
    every?: CouponWhereInput
    some?: CouponWhereInput
    none?: CouponWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CouponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelevanceInput = {
    fields: PlanOrderByRelevanceFieldEnum | PlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripePriceId?: SortOrder
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    customThemes?: SortOrder
    paidContent?: SortOrder
    customDomain?: SortOrder
    removeWatermark?: SortOrder
    prioritySupport?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    description?: SortOrder
    features?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    price?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripePriceId?: SortOrder
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    customThemes?: SortOrder
    paidContent?: SortOrder
    customDomain?: SortOrder
    removeWatermark?: SortOrder
    prioritySupport?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stripePriceId?: SortOrder
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    customThemes?: SortOrder
    paidContent?: SortOrder
    customDomain?: SortOrder
    removeWatermark?: SortOrder
    prioritySupport?: SortOrder
    price?: SortOrder
    isPublic?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    maxLinks?: SortOrder
    maxPages?: SortOrder
    maxAnalytics?: SortOrder
    price?: SortOrder
  }

  export type EnumSubStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubStatusFilter<$PrismaModel> | $Enums.SubStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    stripeSubId?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    stripeSubId?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    stripeSubId?: SortOrder
    stripeCustomerId?: SortOrder
    status?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubStatusFilter<$PrismaModel>
    _max?: NestedEnumSubStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlanNullableScalarRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type CouponOrderByRelevanceInput = {
    fields: CouponOrderByRelevanceFieldEnum | CouponOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CouponCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountPct?: SortOrder
    discountAmt?: SortOrder
    planId?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponAvgOrderByAggregateInput = {
    discountPct?: SortOrder
    discountAmt?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type CouponMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountPct?: SortOrder
    discountAmt?: SortOrder
    planId?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountPct?: SortOrder
    discountAmt?: SortOrder
    planId?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CouponSumOrderByAggregateInput = {
    discountPct?: SortOrder
    discountAmt?: SortOrder
    maxUses?: SortOrder
    usedCount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UserGrantOrderByRelevanceInput = {
    fields: UserGrantOrderByRelevanceFieldEnum | UserGrantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserGrantUserIdPlanIdCompoundUniqueInput = {
    userId: string
    planId: string
  }

  export type UserGrantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGrantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserGrantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    reason?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TemplateOrderByRelevanceInput = {
    fields: TemplateOrderByRelevanceFieldEnum | TemplateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    theme?: SortOrder
    previewUrl?: SortOrder
    isPublic?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    previewUrl?: SortOrder
    isPublic?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    category?: SortOrder
    previewUrl?: SortOrder
    isPublic?: SortOrder
    isFeatured?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PlatformSettingsOrderByRelevanceInput = {
    fields: PlatformSettingsOrderByRelevanceFieldEnum | PlatformSettingsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PlatformSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteDescription?: SortOrder
    logoUrl?: SortOrder
    faviconUrl?: SortOrder
    primaryColor?: SortOrder
    allowFreePlan?: SortOrder
    requireEmailVerify?: SortOrder
    maintenanceMode?: SortOrder
    termsUrl?: SortOrder
    privacyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteDescription?: SortOrder
    logoUrl?: SortOrder
    faviconUrl?: SortOrder
    primaryColor?: SortOrder
    allowFreePlan?: SortOrder
    requireEmailVerify?: SortOrder
    maintenanceMode?: SortOrder
    termsUrl?: SortOrder
    privacyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    siteName?: SortOrder
    siteDescription?: SortOrder
    logoUrl?: SortOrder
    faviconUrl?: SortOrder
    primaryColor?: SortOrder
    allowFreePlan?: SortOrder
    requireEmailVerify?: SortOrder
    maintenanceMode?: SortOrder
    termsUrl?: SortOrder
    privacyUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageCreateNestedManyWithoutUserInput = {
    create?: XOR<PageCreateWithoutUserInput, PageUncheckedCreateWithoutUserInput> | PageCreateWithoutUserInput[] | PageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageCreateOrConnectWithoutUserInput | PageCreateOrConnectWithoutUserInput[]
    createMany?: PageCreateManyUserInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserGrantCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGrantCreateWithoutUserInput, UserGrantUncheckedCreateWithoutUserInput> | UserGrantCreateWithoutUserInput[] | UserGrantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutUserInput | UserGrantCreateOrConnectWithoutUserInput[]
    createMany?: UserGrantCreateManyUserInputEnvelope
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
  }

  export type ContentPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentPurchaseCreateWithoutUserInput, ContentPurchaseUncheckedCreateWithoutUserInput> | ContentPurchaseCreateWithoutUserInput[] | ContentPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutUserInput | ContentPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: ContentPurchaseCreateManyUserInputEnvelope
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
  }

  export type PageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PageCreateWithoutUserInput, PageUncheckedCreateWithoutUserInput> | PageCreateWithoutUserInput[] | PageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageCreateOrConnectWithoutUserInput | PageCreateOrConnectWithoutUserInput[]
    createMany?: PageCreateManyUserInputEnvelope
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserGrantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGrantCreateWithoutUserInput, UserGrantUncheckedCreateWithoutUserInput> | UserGrantCreateWithoutUserInput[] | UserGrantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutUserInput | UserGrantCreateOrConnectWithoutUserInput[]
    createMany?: UserGrantCreateManyUserInputEnvelope
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
  }

  export type ContentPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContentPurchaseCreateWithoutUserInput, ContentPurchaseUncheckedCreateWithoutUserInput> | ContentPurchaseCreateWithoutUserInput[] | ContentPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutUserInput | ContentPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: ContentPurchaseCreateManyUserInputEnvelope
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PageUpdateManyWithoutUserNestedInput = {
    create?: XOR<PageCreateWithoutUserInput, PageUncheckedCreateWithoutUserInput> | PageCreateWithoutUserInput[] | PageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageCreateOrConnectWithoutUserInput | PageCreateOrConnectWithoutUserInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutUserInput | PageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PageCreateManyUserInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutUserInput | PageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PageUpdateManyWithWhereWithoutUserInput | PageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserGrantUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGrantCreateWithoutUserInput, UserGrantUncheckedCreateWithoutUserInput> | UserGrantCreateWithoutUserInput[] | UserGrantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutUserInput | UserGrantCreateOrConnectWithoutUserInput[]
    upsert?: UserGrantUpsertWithWhereUniqueWithoutUserInput | UserGrantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGrantCreateManyUserInputEnvelope
    set?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    disconnect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    delete?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    update?: UserGrantUpdateWithWhereUniqueWithoutUserInput | UserGrantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGrantUpdateManyWithWhereWithoutUserInput | UserGrantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGrantScalarWhereInput | UserGrantScalarWhereInput[]
  }

  export type ContentPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentPurchaseCreateWithoutUserInput, ContentPurchaseUncheckedCreateWithoutUserInput> | ContentPurchaseCreateWithoutUserInput[] | ContentPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutUserInput | ContentPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: ContentPurchaseUpsertWithWhereUniqueWithoutUserInput | ContentPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentPurchaseCreateManyUserInputEnvelope
    set?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    disconnect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    delete?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    update?: ContentPurchaseUpdateWithWhereUniqueWithoutUserInput | ContentPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentPurchaseUpdateManyWithWhereWithoutUserInput | ContentPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentPurchaseScalarWhereInput | ContentPurchaseScalarWhereInput[]
  }

  export type PageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PageCreateWithoutUserInput, PageUncheckedCreateWithoutUserInput> | PageCreateWithoutUserInput[] | PageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PageCreateOrConnectWithoutUserInput | PageCreateOrConnectWithoutUserInput[]
    upsert?: PageUpsertWithWhereUniqueWithoutUserInput | PageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PageCreateManyUserInputEnvelope
    set?: PageWhereUniqueInput | PageWhereUniqueInput[]
    disconnect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    delete?: PageWhereUniqueInput | PageWhereUniqueInput[]
    connect?: PageWhereUniqueInput | PageWhereUniqueInput[]
    update?: PageUpdateWithWhereUniqueWithoutUserInput | PageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PageUpdateManyWithWhereWithoutUserInput | PageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PageScalarWhereInput | PageScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserGrantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGrantCreateWithoutUserInput, UserGrantUncheckedCreateWithoutUserInput> | UserGrantCreateWithoutUserInput[] | UserGrantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutUserInput | UserGrantCreateOrConnectWithoutUserInput[]
    upsert?: UserGrantUpsertWithWhereUniqueWithoutUserInput | UserGrantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGrantCreateManyUserInputEnvelope
    set?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    disconnect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    delete?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    update?: UserGrantUpdateWithWhereUniqueWithoutUserInput | UserGrantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGrantUpdateManyWithWhereWithoutUserInput | UserGrantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGrantScalarWhereInput | UserGrantScalarWhereInput[]
  }

  export type ContentPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContentPurchaseCreateWithoutUserInput, ContentPurchaseUncheckedCreateWithoutUserInput> | ContentPurchaseCreateWithoutUserInput[] | ContentPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutUserInput | ContentPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: ContentPurchaseUpsertWithWhereUniqueWithoutUserInput | ContentPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContentPurchaseCreateManyUserInputEnvelope
    set?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    disconnect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    delete?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    update?: ContentPurchaseUpdateWithWhereUniqueWithoutUserInput | ContentPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContentPurchaseUpdateManyWithWhereWithoutUserInput | ContentPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContentPurchaseScalarWhereInput | ContentPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPagesInput = {
    create?: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput
    connect?: UserWhereUniqueInput
  }

  export type LinkCreateNestedManyWithoutPageInput = {
    create?: XOR<LinkCreateWithoutPageInput, LinkUncheckedCreateWithoutPageInput> | LinkCreateWithoutPageInput[] | LinkUncheckedCreateWithoutPageInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutPageInput | LinkCreateOrConnectWithoutPageInput[]
    createMany?: LinkCreateManyPageInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PageAnalyticsCreateNestedManyWithoutPageInput = {
    create?: XOR<PageAnalyticsCreateWithoutPageInput, PageAnalyticsUncheckedCreateWithoutPageInput> | PageAnalyticsCreateWithoutPageInput[] | PageAnalyticsUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageAnalyticsCreateOrConnectWithoutPageInput | PageAnalyticsCreateOrConnectWithoutPageInput[]
    createMany?: PageAnalyticsCreateManyPageInputEnvelope
    connect?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
  }

  export type ContentCreateNestedManyWithoutPageInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type LinkUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<LinkCreateWithoutPageInput, LinkUncheckedCreateWithoutPageInput> | LinkCreateWithoutPageInput[] | LinkUncheckedCreateWithoutPageInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutPageInput | LinkCreateOrConnectWithoutPageInput[]
    createMany?: LinkCreateManyPageInputEnvelope
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
  }

  export type PageAnalyticsUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<PageAnalyticsCreateWithoutPageInput, PageAnalyticsUncheckedCreateWithoutPageInput> | PageAnalyticsCreateWithoutPageInput[] | PageAnalyticsUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageAnalyticsCreateOrConnectWithoutPageInput | PageAnalyticsCreateOrConnectWithoutPageInput[]
    createMany?: PageAnalyticsCreateManyPageInputEnvelope
    connect?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutPageInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPagesNestedInput = {
    create?: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPagesInput
    upsert?: UserUpsertWithoutPagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPagesInput, UserUpdateWithoutPagesInput>, UserUncheckedUpdateWithoutPagesInput>
  }

  export type LinkUpdateManyWithoutPageNestedInput = {
    create?: XOR<LinkCreateWithoutPageInput, LinkUncheckedCreateWithoutPageInput> | LinkCreateWithoutPageInput[] | LinkUncheckedCreateWithoutPageInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutPageInput | LinkCreateOrConnectWithoutPageInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutPageInput | LinkUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: LinkCreateManyPageInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutPageInput | LinkUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutPageInput | LinkUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PageAnalyticsUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageAnalyticsCreateWithoutPageInput, PageAnalyticsUncheckedCreateWithoutPageInput> | PageAnalyticsCreateWithoutPageInput[] | PageAnalyticsUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageAnalyticsCreateOrConnectWithoutPageInput | PageAnalyticsCreateOrConnectWithoutPageInput[]
    upsert?: PageAnalyticsUpsertWithWhereUniqueWithoutPageInput | PageAnalyticsUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageAnalyticsCreateManyPageInputEnvelope
    set?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    disconnect?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    delete?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    connect?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    update?: PageAnalyticsUpdateWithWhereUniqueWithoutPageInput | PageAnalyticsUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageAnalyticsUpdateManyWithWhereWithoutPageInput | PageAnalyticsUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageAnalyticsScalarWhereInput | PageAnalyticsScalarWhereInput[]
  }

  export type ContentUpdateManyWithoutPageNestedInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutPageInput | ContentUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutPageInput | ContentUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutPageInput | ContentUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type LinkUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<LinkCreateWithoutPageInput, LinkUncheckedCreateWithoutPageInput> | LinkCreateWithoutPageInput[] | LinkUncheckedCreateWithoutPageInput[]
    connectOrCreate?: LinkCreateOrConnectWithoutPageInput | LinkCreateOrConnectWithoutPageInput[]
    upsert?: LinkUpsertWithWhereUniqueWithoutPageInput | LinkUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: LinkCreateManyPageInputEnvelope
    set?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    disconnect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    delete?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    connect?: LinkWhereUniqueInput | LinkWhereUniqueInput[]
    update?: LinkUpdateWithWhereUniqueWithoutPageInput | LinkUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: LinkUpdateManyWithWhereWithoutPageInput | LinkUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: LinkScalarWhereInput | LinkScalarWhereInput[]
  }

  export type PageAnalyticsUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<PageAnalyticsCreateWithoutPageInput, PageAnalyticsUncheckedCreateWithoutPageInput> | PageAnalyticsCreateWithoutPageInput[] | PageAnalyticsUncheckedCreateWithoutPageInput[]
    connectOrCreate?: PageAnalyticsCreateOrConnectWithoutPageInput | PageAnalyticsCreateOrConnectWithoutPageInput[]
    upsert?: PageAnalyticsUpsertWithWhereUniqueWithoutPageInput | PageAnalyticsUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: PageAnalyticsCreateManyPageInputEnvelope
    set?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    disconnect?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    delete?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    connect?: PageAnalyticsWhereUniqueInput | PageAnalyticsWhereUniqueInput[]
    update?: PageAnalyticsUpdateWithWhereUniqueWithoutPageInput | PageAnalyticsUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: PageAnalyticsUpdateManyWithWhereWithoutPageInput | PageAnalyticsUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: PageAnalyticsScalarWhereInput | PageAnalyticsScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutPageNestedInput = {
    create?: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput> | ContentCreateWithoutPageInput[] | ContentUncheckedCreateWithoutPageInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutPageInput | ContentCreateOrConnectWithoutPageInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutPageInput | ContentUpsertWithWhereUniqueWithoutPageInput[]
    createMany?: ContentCreateManyPageInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutPageInput | ContentUpdateWithWhereUniqueWithoutPageInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutPageInput | ContentUpdateManyWithWhereWithoutPageInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutLinksInput = {
    create?: XOR<PageCreateWithoutLinksInput, PageUncheckedCreateWithoutLinksInput>
    connectOrCreate?: PageCreateOrConnectWithoutLinksInput
    connect?: PageWhereUniqueInput
  }

  export type LinkClickCreateNestedManyWithoutLinkInput = {
    create?: XOR<LinkClickCreateWithoutLinkInput, LinkClickUncheckedCreateWithoutLinkInput> | LinkClickCreateWithoutLinkInput[] | LinkClickUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutLinkInput | LinkClickCreateOrConnectWithoutLinkInput[]
    createMany?: LinkClickCreateManyLinkInputEnvelope
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
  }

  export type LinkClickUncheckedCreateNestedManyWithoutLinkInput = {
    create?: XOR<LinkClickCreateWithoutLinkInput, LinkClickUncheckedCreateWithoutLinkInput> | LinkClickCreateWithoutLinkInput[] | LinkClickUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutLinkInput | LinkClickCreateOrConnectWithoutLinkInput[]
    createMany?: LinkClickCreateManyLinkInputEnvelope
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
  }

  export type EnumLinkTypeFieldUpdateOperationsInput = {
    set?: $Enums.LinkType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PageUpdateOneRequiredWithoutLinksNestedInput = {
    create?: XOR<PageCreateWithoutLinksInput, PageUncheckedCreateWithoutLinksInput>
    connectOrCreate?: PageCreateOrConnectWithoutLinksInput
    upsert?: PageUpsertWithoutLinksInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutLinksInput, PageUpdateWithoutLinksInput>, PageUncheckedUpdateWithoutLinksInput>
  }

  export type LinkClickUpdateManyWithoutLinkNestedInput = {
    create?: XOR<LinkClickCreateWithoutLinkInput, LinkClickUncheckedCreateWithoutLinkInput> | LinkClickCreateWithoutLinkInput[] | LinkClickUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutLinkInput | LinkClickCreateOrConnectWithoutLinkInput[]
    upsert?: LinkClickUpsertWithWhereUniqueWithoutLinkInput | LinkClickUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: LinkClickCreateManyLinkInputEnvelope
    set?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    disconnect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    delete?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    update?: LinkClickUpdateWithWhereUniqueWithoutLinkInput | LinkClickUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: LinkClickUpdateManyWithWhereWithoutLinkInput | LinkClickUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
  }

  export type LinkClickUncheckedUpdateManyWithoutLinkNestedInput = {
    create?: XOR<LinkClickCreateWithoutLinkInput, LinkClickUncheckedCreateWithoutLinkInput> | LinkClickCreateWithoutLinkInput[] | LinkClickUncheckedCreateWithoutLinkInput[]
    connectOrCreate?: LinkClickCreateOrConnectWithoutLinkInput | LinkClickCreateOrConnectWithoutLinkInput[]
    upsert?: LinkClickUpsertWithWhereUniqueWithoutLinkInput | LinkClickUpsertWithWhereUniqueWithoutLinkInput[]
    createMany?: LinkClickCreateManyLinkInputEnvelope
    set?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    disconnect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    delete?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    connect?: LinkClickWhereUniqueInput | LinkClickWhereUniqueInput[]
    update?: LinkClickUpdateWithWhereUniqueWithoutLinkInput | LinkClickUpdateWithWhereUniqueWithoutLinkInput[]
    updateMany?: LinkClickUpdateManyWithWhereWithoutLinkInput | LinkClickUpdateManyWithWhereWithoutLinkInput[]
    deleteMany?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
  }

  export type PageCreateNestedOneWithoutContentsInput = {
    create?: XOR<PageCreateWithoutContentsInput, PageUncheckedCreateWithoutContentsInput>
    connectOrCreate?: PageCreateOrConnectWithoutContentsInput
    connect?: PageWhereUniqueInput
  }

  export type ContentPurchaseCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentPurchaseCreateWithoutContentInput, ContentPurchaseUncheckedCreateWithoutContentInput> | ContentPurchaseCreateWithoutContentInput[] | ContentPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutContentInput | ContentPurchaseCreateOrConnectWithoutContentInput[]
    createMany?: ContentPurchaseCreateManyContentInputEnvelope
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
  }

  export type ContentPurchaseUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ContentPurchaseCreateWithoutContentInput, ContentPurchaseUncheckedCreateWithoutContentInput> | ContentPurchaseCreateWithoutContentInput[] | ContentPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutContentInput | ContentPurchaseCreateOrConnectWithoutContentInput[]
    createMany?: ContentPurchaseCreateManyContentInputEnvelope
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PageUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<PageCreateWithoutContentsInput, PageUncheckedCreateWithoutContentsInput>
    connectOrCreate?: PageCreateOrConnectWithoutContentsInput
    upsert?: PageUpsertWithoutContentsInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutContentsInput, PageUpdateWithoutContentsInput>, PageUncheckedUpdateWithoutContentsInput>
  }

  export type ContentPurchaseUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentPurchaseCreateWithoutContentInput, ContentPurchaseUncheckedCreateWithoutContentInput> | ContentPurchaseCreateWithoutContentInput[] | ContentPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutContentInput | ContentPurchaseCreateOrConnectWithoutContentInput[]
    upsert?: ContentPurchaseUpsertWithWhereUniqueWithoutContentInput | ContentPurchaseUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentPurchaseCreateManyContentInputEnvelope
    set?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    disconnect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    delete?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    update?: ContentPurchaseUpdateWithWhereUniqueWithoutContentInput | ContentPurchaseUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentPurchaseUpdateManyWithWhereWithoutContentInput | ContentPurchaseUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentPurchaseScalarWhereInput | ContentPurchaseScalarWhereInput[]
  }

  export type ContentPurchaseUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ContentPurchaseCreateWithoutContentInput, ContentPurchaseUncheckedCreateWithoutContentInput> | ContentPurchaseCreateWithoutContentInput[] | ContentPurchaseUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ContentPurchaseCreateOrConnectWithoutContentInput | ContentPurchaseCreateOrConnectWithoutContentInput[]
    upsert?: ContentPurchaseUpsertWithWhereUniqueWithoutContentInput | ContentPurchaseUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ContentPurchaseCreateManyContentInputEnvelope
    set?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    disconnect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    delete?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    connect?: ContentPurchaseWhereUniqueInput | ContentPurchaseWhereUniqueInput[]
    update?: ContentPurchaseUpdateWithWhereUniqueWithoutContentInput | ContentPurchaseUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ContentPurchaseUpdateManyWithWhereWithoutContentInput | ContentPurchaseUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ContentPurchaseScalarWhereInput | ContentPurchaseScalarWhereInput[]
  }

  export type ContentCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<ContentCreateWithoutPurchasesInput, ContentUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPurchasesInput
    connect?: ContentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type ContentUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<ContentCreateWithoutPurchasesInput, ContentUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPurchasesInput
    upsert?: ContentUpsertWithoutPurchasesInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutPurchasesInput, ContentUpdateWithoutPurchasesInput>, ContentUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type PageCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<PageCreateWithoutAnalyticsInput, PageUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: PageCreateOrConnectWithoutAnalyticsInput
    connect?: PageWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PageUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<PageCreateWithoutAnalyticsInput, PageUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: PageCreateOrConnectWithoutAnalyticsInput
    upsert?: PageUpsertWithoutAnalyticsInput
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutAnalyticsInput, PageUpdateWithoutAnalyticsInput>, PageUncheckedUpdateWithoutAnalyticsInput>
  }

  export type LinkCreateNestedOneWithoutClicksInput = {
    create?: XOR<LinkCreateWithoutClicksInput, LinkUncheckedCreateWithoutClicksInput>
    connectOrCreate?: LinkCreateOrConnectWithoutClicksInput
    connect?: LinkWhereUniqueInput
  }

  export type LinkUpdateOneRequiredWithoutClicksNestedInput = {
    create?: XOR<LinkCreateWithoutClicksInput, LinkUncheckedCreateWithoutClicksInput>
    connectOrCreate?: LinkCreateOrConnectWithoutClicksInput
    upsert?: LinkUpsertWithoutClicksInput
    connect?: LinkWhereUniqueInput
    update?: XOR<XOR<LinkUpdateToOneWithWhereWithoutClicksInput, LinkUpdateWithoutClicksInput>, LinkUncheckedUpdateWithoutClicksInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserGrantCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserGrantCreateWithoutPlanInput, UserGrantUncheckedCreateWithoutPlanInput> | UserGrantCreateWithoutPlanInput[] | UserGrantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutPlanInput | UserGrantCreateOrConnectWithoutPlanInput[]
    createMany?: UserGrantCreateManyPlanInputEnvelope
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
  }

  export type CouponCreateNestedManyWithoutPlanInput = {
    create?: XOR<CouponCreateWithoutPlanInput, CouponUncheckedCreateWithoutPlanInput> | CouponCreateWithoutPlanInput[] | CouponUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutPlanInput | CouponCreateOrConnectWithoutPlanInput[]
    createMany?: CouponCreateManyPlanInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserGrantUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<UserGrantCreateWithoutPlanInput, UserGrantUncheckedCreateWithoutPlanInput> | UserGrantCreateWithoutPlanInput[] | UserGrantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutPlanInput | UserGrantCreateOrConnectWithoutPlanInput[]
    createMany?: UserGrantCreateManyPlanInputEnvelope
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
  }

  export type CouponUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<CouponCreateWithoutPlanInput, CouponUncheckedCreateWithoutPlanInput> | CouponCreateWithoutPlanInput[] | CouponUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutPlanInput | CouponCreateOrConnectWithoutPlanInput[]
    createMany?: CouponCreateManyPlanInputEnvelope
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserGrantUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserGrantCreateWithoutPlanInput, UserGrantUncheckedCreateWithoutPlanInput> | UserGrantCreateWithoutPlanInput[] | UserGrantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutPlanInput | UserGrantCreateOrConnectWithoutPlanInput[]
    upsert?: UserGrantUpsertWithWhereUniqueWithoutPlanInput | UserGrantUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserGrantCreateManyPlanInputEnvelope
    set?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    disconnect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    delete?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    update?: UserGrantUpdateWithWhereUniqueWithoutPlanInput | UserGrantUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserGrantUpdateManyWithWhereWithoutPlanInput | UserGrantUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserGrantScalarWhereInput | UserGrantScalarWhereInput[]
  }

  export type CouponUpdateManyWithoutPlanNestedInput = {
    create?: XOR<CouponCreateWithoutPlanInput, CouponUncheckedCreateWithoutPlanInput> | CouponCreateWithoutPlanInput[] | CouponUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutPlanInput | CouponCreateOrConnectWithoutPlanInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutPlanInput | CouponUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: CouponCreateManyPlanInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutPlanInput | CouponUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutPlanInput | CouponUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserGrantUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<UserGrantCreateWithoutPlanInput, UserGrantUncheckedCreateWithoutPlanInput> | UserGrantCreateWithoutPlanInput[] | UserGrantUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: UserGrantCreateOrConnectWithoutPlanInput | UserGrantCreateOrConnectWithoutPlanInput[]
    upsert?: UserGrantUpsertWithWhereUniqueWithoutPlanInput | UserGrantUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: UserGrantCreateManyPlanInputEnvelope
    set?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    disconnect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    delete?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    connect?: UserGrantWhereUniqueInput | UserGrantWhereUniqueInput[]
    update?: UserGrantUpdateWithWhereUniqueWithoutPlanInput | UserGrantUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: UserGrantUpdateManyWithWhereWithoutPlanInput | UserGrantUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: UserGrantScalarWhereInput | UserGrantScalarWhereInput[]
  }

  export type CouponUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<CouponCreateWithoutPlanInput, CouponUncheckedCreateWithoutPlanInput> | CouponCreateWithoutPlanInput[] | CouponUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: CouponCreateOrConnectWithoutPlanInput | CouponCreateOrConnectWithoutPlanInput[]
    upsert?: CouponUpsertWithWhereUniqueWithoutPlanInput | CouponUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: CouponCreateManyPlanInputEnvelope
    set?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    disconnect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    delete?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    connect?: CouponWhereUniqueInput | CouponWhereUniqueInput[]
    update?: CouponUpdateWithWhereUniqueWithoutPlanInput | CouponUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: CouponUpdateManyWithWhereWithoutPlanInput | CouponUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: CouponScalarWhereInput | CouponScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type EnumSubStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanCreateNestedOneWithoutCouponsInput = {
    create?: XOR<PlanCreateWithoutCouponsInput, PlanUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutCouponsInput
    connect?: PlanWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanUpdateOneWithoutCouponsNestedInput = {
    create?: XOR<PlanCreateWithoutCouponsInput, PlanUncheckedCreateWithoutCouponsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutCouponsInput
    upsert?: PlanUpsertWithoutCouponsInput
    disconnect?: PlanWhereInput | boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutCouponsInput, PlanUpdateWithoutCouponsInput>, PlanUncheckedUpdateWithoutCouponsInput>
  }

  export type UserCreateNestedOneWithoutGrantsInput = {
    create?: XOR<UserCreateWithoutGrantsInput, UserUncheckedCreateWithoutGrantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGrantsInput
    connect?: UserWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutGrantsInput = {
    create?: XOR<PlanCreateWithoutGrantsInput, PlanUncheckedCreateWithoutGrantsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutGrantsInput
    connect?: PlanWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGrantsNestedInput = {
    create?: XOR<UserCreateWithoutGrantsInput, UserUncheckedCreateWithoutGrantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGrantsInput
    upsert?: UserUpsertWithoutGrantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGrantsInput, UserUpdateWithoutGrantsInput>, UserUncheckedUpdateWithoutGrantsInput>
  }

  export type PlanUpdateOneRequiredWithoutGrantsNestedInput = {
    create?: XOR<PlanCreateWithoutGrantsInput, PlanUncheckedCreateWithoutGrantsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutGrantsInput
    upsert?: PlanUpsertWithoutGrantsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutGrantsInput, PlanUpdateWithoutGrantsInput>, PlanUncheckedUpdateWithoutGrantsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumLinkTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeFilter<$PrismaModel> | $Enums.LinkType
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LinkType | EnumLinkTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LinkType[] | ListEnumLinkTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLinkTypeWithAggregatesFilter<$PrismaModel> | $Enums.LinkType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLinkTypeFilter<$PrismaModel>
    _max?: NestedEnumLinkTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumSubStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubStatusFilter<$PrismaModel> | $Enums.SubStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSubStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubStatus | EnumSubStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubStatus[] | ListEnumSubStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubStatusFilter<$PrismaModel>
    _max?: NestedEnumSubStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PageCreateWithoutUserInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkCreateNestedManyWithoutPageInput
    analytics?: PageAnalyticsCreateNestedManyWithoutPageInput
    contents?: ContentCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutUserInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutPageInput
    analytics?: PageAnalyticsUncheckedCreateNestedManyWithoutPageInput
    contents?: ContentUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutUserInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutUserInput, PageUncheckedCreateWithoutUserInput>
  }

  export type PageCreateManyUserInputEnvelope = {
    data: PageCreateManyUserInput | PageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserGrantCreateWithoutUserInput = {
    id?: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    plan: PlanCreateNestedOneWithoutGrantsInput
  }

  export type UserGrantUncheckedCreateWithoutUserInput = {
    id?: string
    planId: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserGrantCreateOrConnectWithoutUserInput = {
    where: UserGrantWhereUniqueInput
    create: XOR<UserGrantCreateWithoutUserInput, UserGrantUncheckedCreateWithoutUserInput>
  }

  export type UserGrantCreateManyUserInputEnvelope = {
    data: UserGrantCreateManyUserInput | UserGrantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentPurchaseCreateWithoutUserInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutPurchasesInput
  }

  export type ContentPurchaseUncheckedCreateWithoutUserInput = {
    id?: string
    contentId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ContentPurchaseCreateOrConnectWithoutUserInput = {
    where: ContentPurchaseWhereUniqueInput
    create: XOR<ContentPurchaseCreateWithoutUserInput, ContentPurchaseUncheckedCreateWithoutUserInput>
  }

  export type ContentPurchaseCreateManyUserInputEnvelope = {
    data: ContentPurchaseCreateManyUserInput | ContentPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PageUpsertWithWhereUniqueWithoutUserInput = {
    where: PageWhereUniqueInput
    update: XOR<PageUpdateWithoutUserInput, PageUncheckedUpdateWithoutUserInput>
    create: XOR<PageCreateWithoutUserInput, PageUncheckedCreateWithoutUserInput>
  }

  export type PageUpdateWithWhereUniqueWithoutUserInput = {
    where: PageWhereUniqueInput
    data: XOR<PageUpdateWithoutUserInput, PageUncheckedUpdateWithoutUserInput>
  }

  export type PageUpdateManyWithWhereWithoutUserInput = {
    where: PageScalarWhereInput
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyWithoutUserInput>
  }

  export type PageScalarWhereInput = {
    AND?: PageScalarWhereInput | PageScalarWhereInput[]
    OR?: PageScalarWhereInput[]
    NOT?: PageScalarWhereInput | PageScalarWhereInput[]
    id?: StringFilter<"Page"> | string
    userId?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    description?: StringNullableFilter<"Page"> | string | null
    bio?: StringNullableFilter<"Page"> | string | null
    avatarUrl?: StringNullableFilter<"Page"> | string | null
    backgroundImageUrl?: StringNullableFilter<"Page"> | string | null
    theme?: JsonFilter<"Page">
    isActive?: BoolFilter<"Page"> | boolean
    isFeatured?: BoolFilter<"Page"> | boolean
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGrantWhereUniqueInput
    update: XOR<UserGrantUpdateWithoutUserInput, UserGrantUncheckedUpdateWithoutUserInput>
    create: XOR<UserGrantCreateWithoutUserInput, UserGrantUncheckedCreateWithoutUserInput>
  }

  export type UserGrantUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGrantWhereUniqueInput
    data: XOR<UserGrantUpdateWithoutUserInput, UserGrantUncheckedUpdateWithoutUserInput>
  }

  export type UserGrantUpdateManyWithWhereWithoutUserInput = {
    where: UserGrantScalarWhereInput
    data: XOR<UserGrantUpdateManyMutationInput, UserGrantUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGrantScalarWhereInput = {
    AND?: UserGrantScalarWhereInput | UserGrantScalarWhereInput[]
    OR?: UserGrantScalarWhereInput[]
    NOT?: UserGrantScalarWhereInput | UserGrantScalarWhereInput[]
    id?: StringFilter<"UserGrant"> | string
    userId?: StringFilter<"UserGrant"> | string
    planId?: StringFilter<"UserGrant"> | string
    reason?: StringNullableFilter<"UserGrant"> | string | null
    expiresAt?: DateTimeNullableFilter<"UserGrant"> | Date | string | null
    createdAt?: DateTimeFilter<"UserGrant"> | Date | string
  }

  export type ContentPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: ContentPurchaseWhereUniqueInput
    update: XOR<ContentPurchaseUpdateWithoutUserInput, ContentPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<ContentPurchaseCreateWithoutUserInput, ContentPurchaseUncheckedCreateWithoutUserInput>
  }

  export type ContentPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: ContentPurchaseWhereUniqueInput
    data: XOR<ContentPurchaseUpdateWithoutUserInput, ContentPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type ContentPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: ContentPurchaseScalarWhereInput
    data: XOR<ContentPurchaseUpdateManyMutationInput, ContentPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type ContentPurchaseScalarWhereInput = {
    AND?: ContentPurchaseScalarWhereInput | ContentPurchaseScalarWhereInput[]
    OR?: ContentPurchaseScalarWhereInput[]
    NOT?: ContentPurchaseScalarWhereInput | ContentPurchaseScalarWhereInput[]
    id?: StringFilter<"ContentPurchase"> | string
    contentId?: StringFilter<"ContentPurchase"> | string
    userId?: StringFilter<"ContentPurchase"> | string
    price?: DecimalFilter<"ContentPurchase"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"ContentPurchase"> | Date | string
  }

  export type UserCreateWithoutPagesInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    grants?: UserGrantCreateNestedManyWithoutUserInput
    purchases?: ContentPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPagesInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    grants?: UserGrantUncheckedCreateNestedManyWithoutUserInput
    purchases?: ContentPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
  }

  export type LinkCreateWithoutPageInput = {
    id?: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clicks?: LinkClickCreateNestedManyWithoutLinkInput
  }

  export type LinkUncheckedCreateWithoutPageInput = {
    id?: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clicks?: LinkClickUncheckedCreateNestedManyWithoutLinkInput
  }

  export type LinkCreateOrConnectWithoutPageInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutPageInput, LinkUncheckedCreateWithoutPageInput>
  }

  export type LinkCreateManyPageInputEnvelope = {
    data: LinkCreateManyPageInput | LinkCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type PageAnalyticsCreateWithoutPageInput = {
    id?: string
    date?: Date | string
    views?: number
    uniqueVisitors?: number
    avgTimeOnPage?: number | null
    bounceRate?: number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsUncheckedCreateWithoutPageInput = {
    id?: string
    date?: Date | string
    views?: number
    uniqueVisitors?: number
    avgTimeOnPage?: number | null
    bounceRate?: number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsCreateOrConnectWithoutPageInput = {
    where: PageAnalyticsWhereUniqueInput
    create: XOR<PageAnalyticsCreateWithoutPageInput, PageAnalyticsUncheckedCreateWithoutPageInput>
  }

  export type PageAnalyticsCreateManyPageInputEnvelope = {
    data: PageAnalyticsCreateManyPageInput | PageAnalyticsCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type ContentCreateWithoutPageInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: ContentPurchaseCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutPageInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    purchases?: ContentPurchaseUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutPageInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput>
  }

  export type ContentCreateManyPageInputEnvelope = {
    data: ContentCreateManyPageInput | ContentCreateManyPageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPagesInput = {
    update: XOR<UserUpdateWithoutPagesInput, UserUncheckedUpdateWithoutPagesInput>
    create: XOR<UserCreateWithoutPagesInput, UserUncheckedCreateWithoutPagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPagesInput, UserUncheckedUpdateWithoutPagesInput>
  }

  export type UserUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    grants?: UserGrantUpdateManyWithoutUserNestedInput
    purchases?: ContentPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    grants?: UserGrantUncheckedUpdateManyWithoutUserNestedInput
    purchases?: ContentPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LinkUpsertWithWhereUniqueWithoutPageInput = {
    where: LinkWhereUniqueInput
    update: XOR<LinkUpdateWithoutPageInput, LinkUncheckedUpdateWithoutPageInput>
    create: XOR<LinkCreateWithoutPageInput, LinkUncheckedCreateWithoutPageInput>
  }

  export type LinkUpdateWithWhereUniqueWithoutPageInput = {
    where: LinkWhereUniqueInput
    data: XOR<LinkUpdateWithoutPageInput, LinkUncheckedUpdateWithoutPageInput>
  }

  export type LinkUpdateManyWithWhereWithoutPageInput = {
    where: LinkScalarWhereInput
    data: XOR<LinkUpdateManyMutationInput, LinkUncheckedUpdateManyWithoutPageInput>
  }

  export type LinkScalarWhereInput = {
    AND?: LinkScalarWhereInput | LinkScalarWhereInput[]
    OR?: LinkScalarWhereInput[]
    NOT?: LinkScalarWhereInput | LinkScalarWhereInput[]
    id?: StringFilter<"Link"> | string
    pageId?: StringFilter<"Link"> | string
    type?: EnumLinkTypeFilter<"Link"> | $Enums.LinkType
    title?: StringFilter<"Link"> | string
    url?: StringFilter<"Link"> | string
    icon?: StringNullableFilter<"Link"> | string | null
    imageUrl?: StringNullableFilter<"Link"> | string | null
    style?: JsonFilter<"Link">
    position?: IntFilter<"Link"> | number
    isActive?: BoolFilter<"Link"> | boolean
    isPaid?: BoolFilter<"Link"> | boolean
    price?: DecimalNullableFilter<"Link"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Link"> | Date | string
    updatedAt?: DateTimeFilter<"Link"> | Date | string
  }

  export type PageAnalyticsUpsertWithWhereUniqueWithoutPageInput = {
    where: PageAnalyticsWhereUniqueInput
    update: XOR<PageAnalyticsUpdateWithoutPageInput, PageAnalyticsUncheckedUpdateWithoutPageInput>
    create: XOR<PageAnalyticsCreateWithoutPageInput, PageAnalyticsUncheckedCreateWithoutPageInput>
  }

  export type PageAnalyticsUpdateWithWhereUniqueWithoutPageInput = {
    where: PageAnalyticsWhereUniqueInput
    data: XOR<PageAnalyticsUpdateWithoutPageInput, PageAnalyticsUncheckedUpdateWithoutPageInput>
  }

  export type PageAnalyticsUpdateManyWithWhereWithoutPageInput = {
    where: PageAnalyticsScalarWhereInput
    data: XOR<PageAnalyticsUpdateManyMutationInput, PageAnalyticsUncheckedUpdateManyWithoutPageInput>
  }

  export type PageAnalyticsScalarWhereInput = {
    AND?: PageAnalyticsScalarWhereInput | PageAnalyticsScalarWhereInput[]
    OR?: PageAnalyticsScalarWhereInput[]
    NOT?: PageAnalyticsScalarWhereInput | PageAnalyticsScalarWhereInput[]
    id?: StringFilter<"PageAnalytics"> | string
    pageId?: StringFilter<"PageAnalytics"> | string
    date?: DateTimeFilter<"PageAnalytics"> | Date | string
    views?: IntFilter<"PageAnalytics"> | number
    uniqueVisitors?: IntFilter<"PageAnalytics"> | number
    avgTimeOnPage?: FloatNullableFilter<"PageAnalytics"> | number | null
    bounceRate?: FloatNullableFilter<"PageAnalytics"> | number | null
    topReferrers?: JsonNullableFilter<"PageAnalytics">
    topCountries?: JsonNullableFilter<"PageAnalytics">
    topDevices?: JsonNullableFilter<"PageAnalytics">
  }

  export type ContentUpsertWithWhereUniqueWithoutPageInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutPageInput, ContentUncheckedUpdateWithoutPageInput>
    create: XOR<ContentCreateWithoutPageInput, ContentUncheckedCreateWithoutPageInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutPageInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutPageInput, ContentUncheckedUpdateWithoutPageInput>
  }

  export type ContentUpdateManyWithWhereWithoutPageInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutPageInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    pageId?: StringFilter<"Content"> | string
    title?: StringFilter<"Content"> | string
    description?: StringNullableFilter<"Content"> | string | null
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    contentUrl?: StringNullableFilter<"Content"> | string | null
    fileUrl?: StringNullableFilter<"Content"> | string | null
    price?: DecimalFilter<"Content"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Content"> | boolean
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }

  export type PageCreateWithoutLinksInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPagesInput
    analytics?: PageAnalyticsCreateNestedManyWithoutPageInput
    contents?: ContentCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutLinksInput = {
    id?: string
    userId: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: PageAnalyticsUncheckedCreateNestedManyWithoutPageInput
    contents?: ContentUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutLinksInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutLinksInput, PageUncheckedCreateWithoutLinksInput>
  }

  export type LinkClickCreateWithoutLinkInput = {
    id?: string
    clickedAt?: Date | string
    referrer?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    browser?: string | null
    os?: string | null
  }

  export type LinkClickUncheckedCreateWithoutLinkInput = {
    id?: string
    clickedAt?: Date | string
    referrer?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    browser?: string | null
    os?: string | null
  }

  export type LinkClickCreateOrConnectWithoutLinkInput = {
    where: LinkClickWhereUniqueInput
    create: XOR<LinkClickCreateWithoutLinkInput, LinkClickUncheckedCreateWithoutLinkInput>
  }

  export type LinkClickCreateManyLinkInputEnvelope = {
    data: LinkClickCreateManyLinkInput | LinkClickCreateManyLinkInput[]
    skipDuplicates?: boolean
  }

  export type PageUpsertWithoutLinksInput = {
    update: XOR<PageUpdateWithoutLinksInput, PageUncheckedUpdateWithoutLinksInput>
    create: XOR<PageCreateWithoutLinksInput, PageUncheckedCreateWithoutLinksInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutLinksInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutLinksInput, PageUncheckedUpdateWithoutLinksInput>
  }

  export type PageUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPagesNestedInput
    analytics?: PageAnalyticsUpdateManyWithoutPageNestedInput
    contents?: ContentUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: PageAnalyticsUncheckedUpdateManyWithoutPageNestedInput
    contents?: ContentUncheckedUpdateManyWithoutPageNestedInput
  }

  export type LinkClickUpsertWithWhereUniqueWithoutLinkInput = {
    where: LinkClickWhereUniqueInput
    update: XOR<LinkClickUpdateWithoutLinkInput, LinkClickUncheckedUpdateWithoutLinkInput>
    create: XOR<LinkClickCreateWithoutLinkInput, LinkClickUncheckedCreateWithoutLinkInput>
  }

  export type LinkClickUpdateWithWhereUniqueWithoutLinkInput = {
    where: LinkClickWhereUniqueInput
    data: XOR<LinkClickUpdateWithoutLinkInput, LinkClickUncheckedUpdateWithoutLinkInput>
  }

  export type LinkClickUpdateManyWithWhereWithoutLinkInput = {
    where: LinkClickScalarWhereInput
    data: XOR<LinkClickUpdateManyMutationInput, LinkClickUncheckedUpdateManyWithoutLinkInput>
  }

  export type LinkClickScalarWhereInput = {
    AND?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
    OR?: LinkClickScalarWhereInput[]
    NOT?: LinkClickScalarWhereInput | LinkClickScalarWhereInput[]
    id?: StringFilter<"LinkClick"> | string
    linkId?: StringFilter<"LinkClick"> | string
    clickedAt?: DateTimeFilter<"LinkClick"> | Date | string
    referrer?: StringNullableFilter<"LinkClick"> | string | null
    device?: StringNullableFilter<"LinkClick"> | string | null
    country?: StringNullableFilter<"LinkClick"> | string | null
    city?: StringNullableFilter<"LinkClick"> | string | null
    browser?: StringNullableFilter<"LinkClick"> | string | null
    os?: StringNullableFilter<"LinkClick"> | string | null
  }

  export type PageCreateWithoutContentsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPagesInput
    links?: LinkCreateNestedManyWithoutPageInput
    analytics?: PageAnalyticsCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutContentsInput = {
    id?: string
    userId: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutPageInput
    analytics?: PageAnalyticsUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutContentsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutContentsInput, PageUncheckedCreateWithoutContentsInput>
  }

  export type ContentPurchaseCreateWithoutContentInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type ContentPurchaseUncheckedCreateWithoutContentInput = {
    id?: string
    userId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ContentPurchaseCreateOrConnectWithoutContentInput = {
    where: ContentPurchaseWhereUniqueInput
    create: XOR<ContentPurchaseCreateWithoutContentInput, ContentPurchaseUncheckedCreateWithoutContentInput>
  }

  export type ContentPurchaseCreateManyContentInputEnvelope = {
    data: ContentPurchaseCreateManyContentInput | ContentPurchaseCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type PageUpsertWithoutContentsInput = {
    update: XOR<PageUpdateWithoutContentsInput, PageUncheckedUpdateWithoutContentsInput>
    create: XOR<PageCreateWithoutContentsInput, PageUncheckedCreateWithoutContentsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutContentsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutContentsInput, PageUncheckedUpdateWithoutContentsInput>
  }

  export type PageUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPagesNestedInput
    links?: LinkUpdateManyWithoutPageNestedInput
    analytics?: PageAnalyticsUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutPageNestedInput
    analytics?: PageAnalyticsUncheckedUpdateManyWithoutPageNestedInput
  }

  export type ContentPurchaseUpsertWithWhereUniqueWithoutContentInput = {
    where: ContentPurchaseWhereUniqueInput
    update: XOR<ContentPurchaseUpdateWithoutContentInput, ContentPurchaseUncheckedUpdateWithoutContentInput>
    create: XOR<ContentPurchaseCreateWithoutContentInput, ContentPurchaseUncheckedCreateWithoutContentInput>
  }

  export type ContentPurchaseUpdateWithWhereUniqueWithoutContentInput = {
    where: ContentPurchaseWhereUniqueInput
    data: XOR<ContentPurchaseUpdateWithoutContentInput, ContentPurchaseUncheckedUpdateWithoutContentInput>
  }

  export type ContentPurchaseUpdateManyWithWhereWithoutContentInput = {
    where: ContentPurchaseScalarWhereInput
    data: XOR<ContentPurchaseUpdateManyMutationInput, ContentPurchaseUncheckedUpdateManyWithoutContentInput>
  }

  export type ContentCreateWithoutPurchasesInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutContentsInput
  }

  export type ContentUncheckedCreateWithoutPurchasesInput = {
    id?: string
    pageId: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentCreateOrConnectWithoutPurchasesInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutPurchasesInput, ContentUncheckedCreateWithoutPurchasesInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    grants?: UserGrantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    grants?: UserGrantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type ContentUpsertWithoutPurchasesInput = {
    update: XOR<ContentUpdateWithoutPurchasesInput, ContentUncheckedUpdateWithoutPurchasesInput>
    create: XOR<ContentCreateWithoutPurchasesInput, ContentUncheckedCreateWithoutPurchasesInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutPurchasesInput, ContentUncheckedUpdateWithoutPurchasesInput>
  }

  export type ContentUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutContentsNestedInput
  }

  export type ContentUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    grants?: UserGrantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    grants?: UserGrantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PageCreateWithoutAnalyticsInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPagesInput
    links?: LinkCreateNestedManyWithoutPageInput
    contents?: ContentCreateNestedManyWithoutPageInput
  }

  export type PageUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    userId: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: LinkUncheckedCreateNestedManyWithoutPageInput
    contents?: ContentUncheckedCreateNestedManyWithoutPageInput
  }

  export type PageCreateOrConnectWithoutAnalyticsInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutAnalyticsInput, PageUncheckedCreateWithoutAnalyticsInput>
  }

  export type PageUpsertWithoutAnalyticsInput = {
    update: XOR<PageUpdateWithoutAnalyticsInput, PageUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<PageCreateWithoutAnalyticsInput, PageUncheckedCreateWithoutAnalyticsInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutAnalyticsInput, PageUncheckedUpdateWithoutAnalyticsInput>
  }

  export type PageUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPagesNestedInput
    links?: LinkUpdateManyWithoutPageNestedInput
    contents?: ContentUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutPageNestedInput
    contents?: ContentUncheckedUpdateManyWithoutPageNestedInput
  }

  export type LinkCreateWithoutClicksInput = {
    id?: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    page: PageCreateNestedOneWithoutLinksInput
  }

  export type LinkUncheckedCreateWithoutClicksInput = {
    id?: string
    pageId: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkCreateOrConnectWithoutClicksInput = {
    where: LinkWhereUniqueInput
    create: XOR<LinkCreateWithoutClicksInput, LinkUncheckedCreateWithoutClicksInput>
  }

  export type LinkUpsertWithoutClicksInput = {
    update: XOR<LinkUpdateWithoutClicksInput, LinkUncheckedUpdateWithoutClicksInput>
    create: XOR<LinkCreateWithoutClicksInput, LinkUncheckedCreateWithoutClicksInput>
    where?: LinkWhereInput
  }

  export type LinkUpdateToOneWithWhereWithoutClicksInput = {
    where?: LinkWhereInput
    data: XOR<LinkUpdateWithoutClicksInput, LinkUncheckedUpdateWithoutClicksInput>
  }

  export type LinkUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    page?: PageUpdateOneRequiredWithoutLinksNestedInput
  }

  export type LinkUncheckedUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserGrantCreateWithoutPlanInput = {
    id?: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutGrantsInput
  }

  export type UserGrantUncheckedCreateWithoutPlanInput = {
    id?: string
    userId: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserGrantCreateOrConnectWithoutPlanInput = {
    where: UserGrantWhereUniqueInput
    create: XOR<UserGrantCreateWithoutPlanInput, UserGrantUncheckedCreateWithoutPlanInput>
  }

  export type UserGrantCreateManyPlanInputEnvelope = {
    data: UserGrantCreateManyPlanInput | UserGrantCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type CouponCreateWithoutPlanInput = {
    id?: string
    code: string
    discountPct?: number | null
    discountAmt?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponUncheckedCreateWithoutPlanInput = {
    id?: string
    code: string
    discountPct?: number | null
    discountAmt?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CouponCreateOrConnectWithoutPlanInput = {
    where: CouponWhereUniqueInput
    create: XOR<CouponCreateWithoutPlanInput, CouponUncheckedCreateWithoutPlanInput>
  }

  export type CouponCreateManyPlanInputEnvelope = {
    data: CouponCreateManyPlanInput | CouponCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    stripeSubId?: StringNullableFilter<"Subscription"> | string | null
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubStatusFilter<"Subscription"> | $Enums.SubStatus
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type UserGrantUpsertWithWhereUniqueWithoutPlanInput = {
    where: UserGrantWhereUniqueInput
    update: XOR<UserGrantUpdateWithoutPlanInput, UserGrantUncheckedUpdateWithoutPlanInput>
    create: XOR<UserGrantCreateWithoutPlanInput, UserGrantUncheckedCreateWithoutPlanInput>
  }

  export type UserGrantUpdateWithWhereUniqueWithoutPlanInput = {
    where: UserGrantWhereUniqueInput
    data: XOR<UserGrantUpdateWithoutPlanInput, UserGrantUncheckedUpdateWithoutPlanInput>
  }

  export type UserGrantUpdateManyWithWhereWithoutPlanInput = {
    where: UserGrantScalarWhereInput
    data: XOR<UserGrantUpdateManyMutationInput, UserGrantUncheckedUpdateManyWithoutPlanInput>
  }

  export type CouponUpsertWithWhereUniqueWithoutPlanInput = {
    where: CouponWhereUniqueInput
    update: XOR<CouponUpdateWithoutPlanInput, CouponUncheckedUpdateWithoutPlanInput>
    create: XOR<CouponCreateWithoutPlanInput, CouponUncheckedCreateWithoutPlanInput>
  }

  export type CouponUpdateWithWhereUniqueWithoutPlanInput = {
    where: CouponWhereUniqueInput
    data: XOR<CouponUpdateWithoutPlanInput, CouponUncheckedUpdateWithoutPlanInput>
  }

  export type CouponUpdateManyWithWhereWithoutPlanInput = {
    where: CouponScalarWhereInput
    data: XOR<CouponUpdateManyMutationInput, CouponUncheckedUpdateManyWithoutPlanInput>
  }

  export type CouponScalarWhereInput = {
    AND?: CouponScalarWhereInput | CouponScalarWhereInput[]
    OR?: CouponScalarWhereInput[]
    NOT?: CouponScalarWhereInput | CouponScalarWhereInput[]
    id?: StringFilter<"Coupon"> | string
    code?: StringFilter<"Coupon"> | string
    discountPct?: IntNullableFilter<"Coupon"> | number | null
    discountAmt?: DecimalNullableFilter<"Coupon"> | Decimal | DecimalJsLike | number | string | null
    planId?: StringNullableFilter<"Coupon"> | string | null
    maxUses?: IntNullableFilter<"Coupon"> | number | null
    usedCount?: IntFilter<"Coupon"> | number
    expiresAt?: DateTimeNullableFilter<"Coupon"> | Date | string | null
    isActive?: BoolFilter<"Coupon"> | boolean
    createdAt?: DateTimeFilter<"Coupon"> | Date | string
    updatedAt?: DateTimeFilter<"Coupon"> | Date | string
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutUserInput
    grants?: UserGrantCreateNestedManyWithoutUserInput
    purchases?: ContentPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutUserInput
    grants?: UserGrantUncheckedCreateNestedManyWithoutUserInput
    purchases?: ContentPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    grants?: UserGrantCreateNestedManyWithoutPlanInput
    coupons?: CouponCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    grants?: UserGrantUncheckedCreateNestedManyWithoutPlanInput
    coupons?: CouponUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutUserNestedInput
    grants?: UserGrantUpdateManyWithoutUserNestedInput
    purchases?: ContentPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutUserNestedInput
    grants?: UserGrantUncheckedUpdateManyWithoutUserNestedInput
    purchases?: ContentPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grants?: UserGrantUpdateManyWithoutPlanNestedInput
    coupons?: CouponUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grants?: UserGrantUncheckedUpdateManyWithoutPlanNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateWithoutCouponsInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
    grants?: UserGrantCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutCouponsInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
    grants?: UserGrantUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutCouponsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutCouponsInput, PlanUncheckedCreateWithoutCouponsInput>
  }

  export type PlanUpsertWithoutCouponsInput = {
    update: XOR<PlanUpdateWithoutCouponsInput, PlanUncheckedUpdateWithoutCouponsInput>
    create: XOR<PlanCreateWithoutCouponsInput, PlanUncheckedCreateWithoutCouponsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutCouponsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutCouponsInput, PlanUncheckedUpdateWithoutCouponsInput>
  }

  export type PlanUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
    grants?: UserGrantUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutCouponsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
    grants?: UserGrantUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type UserCreateWithoutGrantsInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    purchases?: ContentPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGrantsInput = {
    id?: string
    ssoId: string
    email: string
    name: string
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pages?: PageUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    purchases?: ContentPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGrantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGrantsInput, UserUncheckedCreateWithoutGrantsInput>
  }

  export type PlanCreateWithoutGrantsInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
    coupons?: CouponCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutGrantsInput = {
    id?: string
    name: string
    stripePriceId?: string | null
    maxLinks?: number
    maxPages?: number
    maxAnalytics?: number
    customThemes?: boolean
    paidContent?: boolean
    customDomain?: boolean
    removeWatermark?: boolean
    prioritySupport?: boolean
    price: Decimal | DecimalJsLike | number | string
    isPublic?: boolean
    description?: string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
    coupons?: CouponUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutGrantsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutGrantsInput, PlanUncheckedCreateWithoutGrantsInput>
  }

  export type UserUpsertWithoutGrantsInput = {
    update: XOR<UserUpdateWithoutGrantsInput, UserUncheckedUpdateWithoutGrantsInput>
    create: XOR<UserCreateWithoutGrantsInput, UserUncheckedCreateWithoutGrantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGrantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGrantsInput, UserUncheckedUpdateWithoutGrantsInput>
  }

  export type UserUpdateWithoutGrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    purchases?: ContentPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ssoId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: PageUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    purchases?: ContentPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlanUpsertWithoutGrantsInput = {
    update: XOR<PlanUpdateWithoutGrantsInput, PlanUncheckedUpdateWithoutGrantsInput>
    create: XOR<PlanCreateWithoutGrantsInput, PlanUncheckedCreateWithoutGrantsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutGrantsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutGrantsInput, PlanUncheckedUpdateWithoutGrantsInput>
  }

  export type PlanUpdateWithoutGrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
    coupons?: CouponUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutGrantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    maxLinks?: IntFieldUpdateOperationsInput | number
    maxPages?: IntFieldUpdateOperationsInput | number
    maxAnalytics?: IntFieldUpdateOperationsInput | number
    customThemes?: BoolFieldUpdateOperationsInput | boolean
    paidContent?: BoolFieldUpdateOperationsInput | boolean
    customDomain?: BoolFieldUpdateOperationsInput | boolean
    removeWatermark?: BoolFieldUpdateOperationsInput | boolean
    prioritySupport?: BoolFieldUpdateOperationsInput | boolean
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
    coupons?: CouponUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PageCreateManyUserInput = {
    id?: string
    slug: string
    title: string
    description?: string | null
    bio?: string | null
    avatarUrl?: string | null
    backgroundImageUrl?: string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    isFeatured?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGrantCreateManyUserInput = {
    id?: string
    planId: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ContentPurchaseCreateManyUserInput = {
    id?: string
    contentId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUpdateManyWithoutPageNestedInput
    analytics?: PageAnalyticsUpdateManyWithoutPageNestedInput
    contents?: ContentUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: LinkUncheckedUpdateManyWithoutPageNestedInput
    analytics?: PageAnalyticsUncheckedUpdateManyWithoutPageNestedInput
    contents?: ContentUncheckedUpdateManyWithoutPageNestedInput
  }

  export type PageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    theme?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutGrantsNestedInput
  }

  export type UserGrantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPurchaseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type ContentPurchaseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkCreateManyPageInput = {
    id?: string
    type?: $Enums.LinkType
    title: string
    url: string
    icon?: string | null
    imageUrl?: string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: number
    isActive?: boolean
    isPaid?: boolean
    price?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageAnalyticsCreateManyPageInput = {
    id?: string
    date?: Date | string
    views?: number
    uniqueVisitors?: number
    avgTimeOnPage?: number | null
    bounceRate?: number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ContentCreateManyPageInput = {
    id?: string
    title: string
    description?: string | null
    type?: $Enums.ContentType
    contentUrl?: string | null
    fileUrl?: string | null
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LinkUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: LinkClickUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clicks?: LinkClickUncheckedUpdateManyWithoutLinkNestedInput
  }

  export type LinkUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLinkTypeFieldUpdateOperationsInput | $Enums.LinkType
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    style?: JsonNullValueInput | InputJsonValue
    position?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageAnalyticsUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PageAnalyticsUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: IntFieldUpdateOperationsInput | number
    uniqueVisitors?: IntFieldUpdateOperationsInput | number
    avgTimeOnPage?: NullableFloatFieldUpdateOperationsInput | number | null
    bounceRate?: NullableFloatFieldUpdateOperationsInput | number | null
    topReferrers?: NullableJsonNullValueInput | InputJsonValue
    topCountries?: NullableJsonNullValueInput | InputJsonValue
    topDevices?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ContentUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: ContentPurchaseUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: ContentPurchaseUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    contentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkClickCreateManyLinkInput = {
    id?: string
    clickedAt?: Date | string
    referrer?: string | null
    device?: string | null
    country?: string | null
    city?: string | null
    browser?: string | null
    os?: string | null
  }

  export type LinkClickUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkClickUncheckedUpdateWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LinkClickUncheckedUpdateManyWithoutLinkInput = {
    id?: StringFieldUpdateOperationsInput | string
    clickedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    device?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    browser?: NullableStringFieldUpdateOperationsInput | string | null
    os?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentPurchaseCreateManyContentInput = {
    id?: string
    userId: string
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type ContentPurchaseUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type ContentPurchaseUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentPurchaseUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    userId: string
    stripeSubId?: string | null
    stripeCustomerId?: string | null
    status?: $Enums.SubStatus
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGrantCreateManyPlanInput = {
    id?: string
    userId: string
    reason?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CouponCreateManyPlanInput = {
    id?: string
    code: string
    discountPct?: number | null
    discountAmt?: Decimal | DecimalJsLike | number | string | null
    maxUses?: number | null
    usedCount?: number
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubStatusFieldUpdateOperationsInput | $Enums.SubStatus
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGrantsNestedInput
  }

  export type UserGrantUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGrantUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CouponUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPct?: NullableIntFieldUpdateOperationsInput | number | null
    discountAmt?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    maxUses?: NullableIntFieldUpdateOperationsInput | number | null
    usedCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model ServiceRoute
 * 
 */
export type ServiceRoute = $Result.DefaultSelection<Prisma.$ServiceRoutePayload>
/**
 * Model VehiclePackage
 * 
 */
export type VehiclePackage = $Result.DefaultSelection<Prisma.$VehiclePackagePayload>
/**
 * Model RouteGallery
 * 
 */
export type RouteGallery = $Result.DefaultSelection<Prisma.$RouteGalleryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRoute`: Exposes CRUD operations for the **ServiceRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRoutes
    * const serviceRoutes = await prisma.serviceRoute.findMany()
    * ```
    */
  get serviceRoute(): Prisma.ServiceRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiclePackage`: Exposes CRUD operations for the **VehiclePackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehiclePackages
    * const vehiclePackages = await prisma.vehiclePackage.findMany()
    * ```
    */
  get vehiclePackage(): Prisma.VehiclePackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeGallery`: Exposes CRUD operations for the **RouteGallery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteGalleries
    * const routeGalleries = await prisma.routeGallery.findMany()
    * ```
    */
  get routeGallery(): Prisma.RouteGalleryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Admin: 'Admin',
    ServiceRoute: 'ServiceRoute',
    VehiclePackage: 'VehiclePackage',
    RouteGallery: 'RouteGallery'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "serviceRoute" | "vehiclePackage" | "routeGallery"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      ServiceRoute: {
        payload: Prisma.$ServiceRoutePayload<ExtArgs>
        fields: Prisma.ServiceRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>
          }
          findFirst: {
            args: Prisma.ServiceRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>
          }
          findMany: {
            args: Prisma.ServiceRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>[]
          }
          create: {
            args: Prisma.ServiceRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>
          }
          createMany: {
            args: Prisma.ServiceRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceRouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>[]
          }
          delete: {
            args: Prisma.ServiceRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>
          }
          update: {
            args: Prisma.ServiceRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>
          }
          deleteMany: {
            args: Prisma.ServiceRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceRouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>[]
          }
          upsert: {
            args: Prisma.ServiceRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRoutePayload>
          }
          aggregate: {
            args: Prisma.ServiceRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRoute>
          }
          groupBy: {
            args: Prisma.ServiceRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRouteCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRouteCountAggregateOutputType> | number
          }
        }
      }
      VehiclePackage: {
        payload: Prisma.$VehiclePackagePayload<ExtArgs>
        fields: Prisma.VehiclePackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiclePackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiclePackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>
          }
          findFirst: {
            args: Prisma.VehiclePackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiclePackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>
          }
          findMany: {
            args: Prisma.VehiclePackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>[]
          }
          create: {
            args: Prisma.VehiclePackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>
          }
          createMany: {
            args: Prisma.VehiclePackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiclePackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>[]
          }
          delete: {
            args: Prisma.VehiclePackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>
          }
          update: {
            args: Prisma.VehiclePackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>
          }
          deleteMany: {
            args: Prisma.VehiclePackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiclePackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiclePackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>[]
          }
          upsert: {
            args: Prisma.VehiclePackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePackagePayload>
          }
          aggregate: {
            args: Prisma.VehiclePackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiclePackage>
          }
          groupBy: {
            args: Prisma.VehiclePackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiclePackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiclePackageCountArgs<ExtArgs>
            result: $Utils.Optional<VehiclePackageCountAggregateOutputType> | number
          }
        }
      }
      RouteGallery: {
        payload: Prisma.$RouteGalleryPayload<ExtArgs>
        fields: Prisma.RouteGalleryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteGalleryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteGalleryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>
          }
          findFirst: {
            args: Prisma.RouteGalleryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteGalleryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>
          }
          findMany: {
            args: Prisma.RouteGalleryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>[]
          }
          create: {
            args: Prisma.RouteGalleryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>
          }
          createMany: {
            args: Prisma.RouteGalleryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteGalleryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>[]
          }
          delete: {
            args: Prisma.RouteGalleryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>
          }
          update: {
            args: Prisma.RouteGalleryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>
          }
          deleteMany: {
            args: Prisma.RouteGalleryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteGalleryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteGalleryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>[]
          }
          upsert: {
            args: Prisma.RouteGalleryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteGalleryPayload>
          }
          aggregate: {
            args: Prisma.RouteGalleryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteGallery>
          }
          groupBy: {
            args: Prisma.RouteGalleryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGalleryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteGalleryCountArgs<ExtArgs>
            result: $Utils.Optional<RouteGalleryCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    serviceRoute?: ServiceRouteOmit
    vehiclePackage?: VehiclePackageOmit
    routeGallery?: RouteGalleryOmit
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
   * Count Type ServiceRouteCountOutputType
   */

  export type ServiceRouteCountOutputType = {
    gallery: number
    packages: number
  }

  export type ServiceRouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | ServiceRouteCountOutputTypeCountGalleryArgs
    packages?: boolean | ServiceRouteCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * ServiceRouteCountOutputType without action
   */
  export type ServiceRouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRouteCountOutputType
     */
    select?: ServiceRouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceRouteCountOutputType without action
   */
  export type ServiceRouteCountOutputTypeCountGalleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteGalleryWhereInput
  }

  /**
   * ServiceRouteCountOutputType without action
   */
  export type ServiceRouteCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiclePackageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model ServiceRoute
   */

  export type AggregateServiceRoute = {
    _count: ServiceRouteCountAggregateOutputType | null
    _avg: ServiceRouteAvgAggregateOutputType | null
    _sum: ServiceRouteSumAggregateOutputType | null
    _min: ServiceRouteMinAggregateOutputType | null
    _max: ServiceRouteMaxAggregateOutputType | null
  }

  export type ServiceRouteAvgAggregateOutputType = {
    id: number | null
    basePrice: number | null
  }

  export type ServiceRouteSumAggregateOutputType = {
    id: number | null
    basePrice: number | null
  }

  export type ServiceRouteMinAggregateOutputType = {
    id: number | null
    slug: string | null
    isActive: boolean | null
    title: string | null
    tagline: string | null
    heroImage: string | null
    distance: string | null
    duration: string | null
    basePrice: number | null
    description: string | null
    metaTitle: string | null
    metaDescription: string | null
    canonicalUrl: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceRouteMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    isActive: boolean | null
    title: string | null
    tagline: string | null
    heroImage: string | null
    distance: string | null
    duration: string | null
    basePrice: number | null
    description: string | null
    metaTitle: string | null
    metaDescription: string | null
    canonicalUrl: string | null
    keywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceRouteCountAggregateOutputType = {
    id: number
    slug: number
    isActive: number
    title: number
    tagline: number
    heroImage: number
    distance: number
    duration: number
    basePrice: number
    description: number
    highlights: number
    metaTitle: number
    metaDescription: number
    canonicalUrl: number
    keywords: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceRouteAvgAggregateInputType = {
    id?: true
    basePrice?: true
  }

  export type ServiceRouteSumAggregateInputType = {
    id?: true
    basePrice?: true
  }

  export type ServiceRouteMinAggregateInputType = {
    id?: true
    slug?: true
    isActive?: true
    title?: true
    tagline?: true
    heroImage?: true
    distance?: true
    duration?: true
    basePrice?: true
    description?: true
    metaTitle?: true
    metaDescription?: true
    canonicalUrl?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceRouteMaxAggregateInputType = {
    id?: true
    slug?: true
    isActive?: true
    title?: true
    tagline?: true
    heroImage?: true
    distance?: true
    duration?: true
    basePrice?: true
    description?: true
    metaTitle?: true
    metaDescription?: true
    canonicalUrl?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceRouteCountAggregateInputType = {
    id?: true
    slug?: true
    isActive?: true
    title?: true
    tagline?: true
    heroImage?: true
    distance?: true
    duration?: true
    basePrice?: true
    description?: true
    highlights?: true
    metaTitle?: true
    metaDescription?: true
    canonicalUrl?: true
    keywords?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRoute to aggregate.
     */
    where?: ServiceRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRoutes to fetch.
     */
    orderBy?: ServiceRouteOrderByWithRelationInput | ServiceRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRoutes
    **/
    _count?: true | ServiceRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRouteMaxAggregateInputType
  }

  export type GetServiceRouteAggregateType<T extends ServiceRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRoute[P]>
      : GetScalarType<T[P], AggregateServiceRoute[P]>
  }




  export type ServiceRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRouteWhereInput
    orderBy?: ServiceRouteOrderByWithAggregationInput | ServiceRouteOrderByWithAggregationInput[]
    by: ServiceRouteScalarFieldEnum[] | ServiceRouteScalarFieldEnum
    having?: ServiceRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRouteCountAggregateInputType | true
    _avg?: ServiceRouteAvgAggregateInputType
    _sum?: ServiceRouteSumAggregateInputType
    _min?: ServiceRouteMinAggregateInputType
    _max?: ServiceRouteMaxAggregateInputType
  }

  export type ServiceRouteGroupByOutputType = {
    id: number
    slug: string
    isActive: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonValue
    metaTitle: string | null
    metaDescription: string | null
    canonicalUrl: string | null
    keywords: string | null
    createdAt: Date
    updatedAt: Date
    _count: ServiceRouteCountAggregateOutputType | null
    _avg: ServiceRouteAvgAggregateOutputType | null
    _sum: ServiceRouteSumAggregateOutputType | null
    _min: ServiceRouteMinAggregateOutputType | null
    _max: ServiceRouteMaxAggregateOutputType | null
  }

  type GetServiceRouteGroupByPayload<T extends ServiceRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRouteGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRouteGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    isActive?: boolean
    title?: boolean
    tagline?: boolean
    heroImage?: boolean
    distance?: boolean
    duration?: boolean
    basePrice?: boolean
    description?: boolean
    highlights?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gallery?: boolean | ServiceRoute$galleryArgs<ExtArgs>
    packages?: boolean | ServiceRoute$packagesArgs<ExtArgs>
    _count?: boolean | ServiceRouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRoute"]>

  export type ServiceRouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    isActive?: boolean
    title?: boolean
    tagline?: boolean
    heroImage?: boolean
    distance?: boolean
    duration?: boolean
    basePrice?: boolean
    description?: boolean
    highlights?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceRoute"]>

  export type ServiceRouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    isActive?: boolean
    title?: boolean
    tagline?: boolean
    heroImage?: boolean
    distance?: boolean
    duration?: boolean
    basePrice?: boolean
    description?: boolean
    highlights?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["serviceRoute"]>

  export type ServiceRouteSelectScalar = {
    id?: boolean
    slug?: boolean
    isActive?: boolean
    title?: boolean
    tagline?: boolean
    heroImage?: boolean
    distance?: boolean
    duration?: boolean
    basePrice?: boolean
    description?: boolean
    highlights?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    keywords?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "isActive" | "title" | "tagline" | "heroImage" | "distance" | "duration" | "basePrice" | "description" | "highlights" | "metaTitle" | "metaDescription" | "canonicalUrl" | "keywords" | "createdAt" | "updatedAt", ExtArgs["result"]["serviceRoute"]>
  export type ServiceRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery?: boolean | ServiceRoute$galleryArgs<ExtArgs>
    packages?: boolean | ServiceRoute$packagesArgs<ExtArgs>
    _count?: boolean | ServiceRouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceRouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceRouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRoute"
    objects: {
      gallery: Prisma.$RouteGalleryPayload<ExtArgs>[]
      packages: Prisma.$VehiclePackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      isActive: boolean
      title: string
      tagline: string
      heroImage: string
      distance: string
      duration: string
      basePrice: number
      description: string
      highlights: Prisma.JsonValue
      metaTitle: string | null
      metaDescription: string | null
      canonicalUrl: string | null
      keywords: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["serviceRoute"]>
    composites: {}
  }

  type ServiceRouteGetPayload<S extends boolean | null | undefined | ServiceRouteDefaultArgs> = $Result.GetResult<Prisma.$ServiceRoutePayload, S>

  type ServiceRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRouteCountAggregateInputType | true
    }

  export interface ServiceRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRoute'], meta: { name: 'ServiceRoute' } }
    /**
     * Find zero or one ServiceRoute that matches the filter.
     * @param {ServiceRouteFindUniqueArgs} args - Arguments to find a ServiceRoute
     * @example
     * // Get one ServiceRoute
     * const serviceRoute = await prisma.serviceRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRouteFindUniqueArgs>(args: SelectSubset<T, ServiceRouteFindUniqueArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRouteFindUniqueOrThrowArgs} args - Arguments to find a ServiceRoute
     * @example
     * // Get one ServiceRoute
     * const serviceRoute = await prisma.serviceRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteFindFirstArgs} args - Arguments to find a ServiceRoute
     * @example
     * // Get one ServiceRoute
     * const serviceRoute = await prisma.serviceRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRouteFindFirstArgs>(args?: SelectSubset<T, ServiceRouteFindFirstArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteFindFirstOrThrowArgs} args - Arguments to find a ServiceRoute
     * @example
     * // Get one ServiceRoute
     * const serviceRoute = await prisma.serviceRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRoutes
     * const serviceRoutes = await prisma.serviceRoute.findMany()
     * 
     * // Get first 10 ServiceRoutes
     * const serviceRoutes = await prisma.serviceRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceRouteWithIdOnly = await prisma.serviceRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceRouteFindManyArgs>(args?: SelectSubset<T, ServiceRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRoute.
     * @param {ServiceRouteCreateArgs} args - Arguments to create a ServiceRoute.
     * @example
     * // Create one ServiceRoute
     * const ServiceRoute = await prisma.serviceRoute.create({
     *   data: {
     *     // ... data to create a ServiceRoute
     *   }
     * })
     * 
     */
    create<T extends ServiceRouteCreateArgs>(args: SelectSubset<T, ServiceRouteCreateArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRoutes.
     * @param {ServiceRouteCreateManyArgs} args - Arguments to create many ServiceRoutes.
     * @example
     * // Create many ServiceRoutes
     * const serviceRoute = await prisma.serviceRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRouteCreateManyArgs>(args?: SelectSubset<T, ServiceRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceRoutes and returns the data saved in the database.
     * @param {ServiceRouteCreateManyAndReturnArgs} args - Arguments to create many ServiceRoutes.
     * @example
     * // Create many ServiceRoutes
     * const serviceRoute = await prisma.serviceRoute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceRoutes and only return the `id`
     * const serviceRouteWithIdOnly = await prisma.serviceRoute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceRouteCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceRouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceRoute.
     * @param {ServiceRouteDeleteArgs} args - Arguments to delete one ServiceRoute.
     * @example
     * // Delete one ServiceRoute
     * const ServiceRoute = await prisma.serviceRoute.delete({
     *   where: {
     *     // ... filter to delete one ServiceRoute
     *   }
     * })
     * 
     */
    delete<T extends ServiceRouteDeleteArgs>(args: SelectSubset<T, ServiceRouteDeleteArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRoute.
     * @param {ServiceRouteUpdateArgs} args - Arguments to update one ServiceRoute.
     * @example
     * // Update one ServiceRoute
     * const serviceRoute = await prisma.serviceRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRouteUpdateArgs>(args: SelectSubset<T, ServiceRouteUpdateArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRoutes.
     * @param {ServiceRouteDeleteManyArgs} args - Arguments to filter ServiceRoutes to delete.
     * @example
     * // Delete a few ServiceRoutes
     * const { count } = await prisma.serviceRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRouteDeleteManyArgs>(args?: SelectSubset<T, ServiceRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRoutes
     * const serviceRoute = await prisma.serviceRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRouteUpdateManyArgs>(args: SelectSubset<T, ServiceRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRoutes and returns the data updated in the database.
     * @param {ServiceRouteUpdateManyAndReturnArgs} args - Arguments to update many ServiceRoutes.
     * @example
     * // Update many ServiceRoutes
     * const serviceRoute = await prisma.serviceRoute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceRoutes and only return the `id`
     * const serviceRouteWithIdOnly = await prisma.serviceRoute.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceRouteUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceRouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceRoute.
     * @param {ServiceRouteUpsertArgs} args - Arguments to update or create a ServiceRoute.
     * @example
     * // Update or create a ServiceRoute
     * const serviceRoute = await prisma.serviceRoute.upsert({
     *   create: {
     *     // ... data to create a ServiceRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRoute we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRouteUpsertArgs>(args: SelectSubset<T, ServiceRouteUpsertArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteCountArgs} args - Arguments to filter ServiceRoutes to count.
     * @example
     * // Count the number of ServiceRoutes
     * const count = await prisma.serviceRoute.count({
     *   where: {
     *     // ... the filter for the ServiceRoutes we want to count
     *   }
     * })
    **/
    count<T extends ServiceRouteCountArgs>(
      args?: Subset<T, ServiceRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceRouteAggregateArgs>(args: Subset<T, ServiceRouteAggregateArgs>): Prisma.PrismaPromise<GetServiceRouteAggregateType<T>>

    /**
     * Group by ServiceRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRouteGroupByArgs} args - Group by arguments.
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
      T extends ServiceRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRouteGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRoute model
   */
  readonly fields: ServiceRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gallery<T extends ServiceRoute$galleryArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRoute$galleryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends ServiceRoute$packagesArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRoute$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceRoute model
   */
  interface ServiceRouteFieldRefs {
    readonly id: FieldRef<"ServiceRoute", 'Int'>
    readonly slug: FieldRef<"ServiceRoute", 'String'>
    readonly isActive: FieldRef<"ServiceRoute", 'Boolean'>
    readonly title: FieldRef<"ServiceRoute", 'String'>
    readonly tagline: FieldRef<"ServiceRoute", 'String'>
    readonly heroImage: FieldRef<"ServiceRoute", 'String'>
    readonly distance: FieldRef<"ServiceRoute", 'String'>
    readonly duration: FieldRef<"ServiceRoute", 'String'>
    readonly basePrice: FieldRef<"ServiceRoute", 'Int'>
    readonly description: FieldRef<"ServiceRoute", 'String'>
    readonly highlights: FieldRef<"ServiceRoute", 'Json'>
    readonly metaTitle: FieldRef<"ServiceRoute", 'String'>
    readonly metaDescription: FieldRef<"ServiceRoute", 'String'>
    readonly canonicalUrl: FieldRef<"ServiceRoute", 'String'>
    readonly keywords: FieldRef<"ServiceRoute", 'String'>
    readonly createdAt: FieldRef<"ServiceRoute", 'DateTime'>
    readonly updatedAt: FieldRef<"ServiceRoute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRoute findUnique
   */
  export type ServiceRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRoute to fetch.
     */
    where: ServiceRouteWhereUniqueInput
  }

  /**
   * ServiceRoute findUniqueOrThrow
   */
  export type ServiceRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRoute to fetch.
     */
    where: ServiceRouteWhereUniqueInput
  }

  /**
   * ServiceRoute findFirst
   */
  export type ServiceRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRoute to fetch.
     */
    where?: ServiceRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRoutes to fetch.
     */
    orderBy?: ServiceRouteOrderByWithRelationInput | ServiceRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRoutes.
     */
    cursor?: ServiceRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRoutes.
     */
    distinct?: ServiceRouteScalarFieldEnum | ServiceRouteScalarFieldEnum[]
  }

  /**
   * ServiceRoute findFirstOrThrow
   */
  export type ServiceRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRoute to fetch.
     */
    where?: ServiceRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRoutes to fetch.
     */
    orderBy?: ServiceRouteOrderByWithRelationInput | ServiceRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRoutes.
     */
    cursor?: ServiceRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRoutes.
     */
    distinct?: ServiceRouteScalarFieldEnum | ServiceRouteScalarFieldEnum[]
  }

  /**
   * ServiceRoute findMany
   */
  export type ServiceRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRoutes to fetch.
     */
    where?: ServiceRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRoutes to fetch.
     */
    orderBy?: ServiceRouteOrderByWithRelationInput | ServiceRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRoutes.
     */
    cursor?: ServiceRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRoutes.
     */
    skip?: number
    distinct?: ServiceRouteScalarFieldEnum | ServiceRouteScalarFieldEnum[]
  }

  /**
   * ServiceRoute create
   */
  export type ServiceRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRoute.
     */
    data: XOR<ServiceRouteCreateInput, ServiceRouteUncheckedCreateInput>
  }

  /**
   * ServiceRoute createMany
   */
  export type ServiceRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRoutes.
     */
    data: ServiceRouteCreateManyInput | ServiceRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRoute createManyAndReturn
   */
  export type ServiceRouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceRoutes.
     */
    data: ServiceRouteCreateManyInput | ServiceRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRoute update
   */
  export type ServiceRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRoute.
     */
    data: XOR<ServiceRouteUpdateInput, ServiceRouteUncheckedUpdateInput>
    /**
     * Choose, which ServiceRoute to update.
     */
    where: ServiceRouteWhereUniqueInput
  }

  /**
   * ServiceRoute updateMany
   */
  export type ServiceRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRoutes.
     */
    data: XOR<ServiceRouteUpdateManyMutationInput, ServiceRouteUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRoutes to update
     */
    where?: ServiceRouteWhereInput
    /**
     * Limit how many ServiceRoutes to update.
     */
    limit?: number
  }

  /**
   * ServiceRoute updateManyAndReturn
   */
  export type ServiceRouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * The data used to update ServiceRoutes.
     */
    data: XOR<ServiceRouteUpdateManyMutationInput, ServiceRouteUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRoutes to update
     */
    where?: ServiceRouteWhereInput
    /**
     * Limit how many ServiceRoutes to update.
     */
    limit?: number
  }

  /**
   * ServiceRoute upsert
   */
  export type ServiceRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRoute to update in case it exists.
     */
    where: ServiceRouteWhereUniqueInput
    /**
     * In case the ServiceRoute found by the `where` argument doesn't exist, create a new ServiceRoute with this data.
     */
    create: XOR<ServiceRouteCreateInput, ServiceRouteUncheckedCreateInput>
    /**
     * In case the ServiceRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRouteUpdateInput, ServiceRouteUncheckedUpdateInput>
  }

  /**
   * ServiceRoute delete
   */
  export type ServiceRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
    /**
     * Filter which ServiceRoute to delete.
     */
    where: ServiceRouteWhereUniqueInput
  }

  /**
   * ServiceRoute deleteMany
   */
  export type ServiceRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRoutes to delete
     */
    where?: ServiceRouteWhereInput
    /**
     * Limit how many ServiceRoutes to delete.
     */
    limit?: number
  }

  /**
   * ServiceRoute.gallery
   */
  export type ServiceRoute$galleryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    where?: RouteGalleryWhereInput
    orderBy?: RouteGalleryOrderByWithRelationInput | RouteGalleryOrderByWithRelationInput[]
    cursor?: RouteGalleryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteGalleryScalarFieldEnum | RouteGalleryScalarFieldEnum[]
  }

  /**
   * ServiceRoute.packages
   */
  export type ServiceRoute$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    where?: VehiclePackageWhereInput
    orderBy?: VehiclePackageOrderByWithRelationInput | VehiclePackageOrderByWithRelationInput[]
    cursor?: VehiclePackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiclePackageScalarFieldEnum | VehiclePackageScalarFieldEnum[]
  }

  /**
   * ServiceRoute without action
   */
  export type ServiceRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRoute
     */
    select?: ServiceRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRoute
     */
    omit?: ServiceRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRouteInclude<ExtArgs> | null
  }


  /**
   * Model VehiclePackage
   */

  export type AggregateVehiclePackage = {
    _count: VehiclePackageCountAggregateOutputType | null
    _avg: VehiclePackageAvgAggregateOutputType | null
    _sum: VehiclePackageSumAggregateOutputType | null
    _min: VehiclePackageMinAggregateOutputType | null
    _max: VehiclePackageMaxAggregateOutputType | null
  }

  export type VehiclePackageAvgAggregateOutputType = {
    id: number | null
    price: number | null
    seats: number | null
    bags: number | null
    routeId: number | null
  }

  export type VehiclePackageSumAggregateOutputType = {
    id: number | null
    price: number | null
    seats: number | null
    bags: number | null
    routeId: number | null
  }

  export type VehiclePackageMinAggregateOutputType = {
    id: number | null
    category: string | null
    carModel: string | null
    image: string | null
    price: number | null
    seats: number | null
    bags: number | null
    routeId: number | null
  }

  export type VehiclePackageMaxAggregateOutputType = {
    id: number | null
    category: string | null
    carModel: string | null
    image: string | null
    price: number | null
    seats: number | null
    bags: number | null
    routeId: number | null
  }

  export type VehiclePackageCountAggregateOutputType = {
    id: number
    category: number
    carModel: number
    image: number
    price: number
    seats: number
    bags: number
    routeId: number
    _all: number
  }


  export type VehiclePackageAvgAggregateInputType = {
    id?: true
    price?: true
    seats?: true
    bags?: true
    routeId?: true
  }

  export type VehiclePackageSumAggregateInputType = {
    id?: true
    price?: true
    seats?: true
    bags?: true
    routeId?: true
  }

  export type VehiclePackageMinAggregateInputType = {
    id?: true
    category?: true
    carModel?: true
    image?: true
    price?: true
    seats?: true
    bags?: true
    routeId?: true
  }

  export type VehiclePackageMaxAggregateInputType = {
    id?: true
    category?: true
    carModel?: true
    image?: true
    price?: true
    seats?: true
    bags?: true
    routeId?: true
  }

  export type VehiclePackageCountAggregateInputType = {
    id?: true
    category?: true
    carModel?: true
    image?: true
    price?: true
    seats?: true
    bags?: true
    routeId?: true
    _all?: true
  }

  export type VehiclePackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehiclePackage to aggregate.
     */
    where?: VehiclePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiclePackages to fetch.
     */
    orderBy?: VehiclePackageOrderByWithRelationInput | VehiclePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiclePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiclePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiclePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehiclePackages
    **/
    _count?: true | VehiclePackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiclePackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiclePackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiclePackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiclePackageMaxAggregateInputType
  }

  export type GetVehiclePackageAggregateType<T extends VehiclePackageAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiclePackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiclePackage[P]>
      : GetScalarType<T[P], AggregateVehiclePackage[P]>
  }




  export type VehiclePackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiclePackageWhereInput
    orderBy?: VehiclePackageOrderByWithAggregationInput | VehiclePackageOrderByWithAggregationInput[]
    by: VehiclePackageScalarFieldEnum[] | VehiclePackageScalarFieldEnum
    having?: VehiclePackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiclePackageCountAggregateInputType | true
    _avg?: VehiclePackageAvgAggregateInputType
    _sum?: VehiclePackageSumAggregateInputType
    _min?: VehiclePackageMinAggregateInputType
    _max?: VehiclePackageMaxAggregateInputType
  }

  export type VehiclePackageGroupByOutputType = {
    id: number
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
    routeId: number
    _count: VehiclePackageCountAggregateOutputType | null
    _avg: VehiclePackageAvgAggregateOutputType | null
    _sum: VehiclePackageSumAggregateOutputType | null
    _min: VehiclePackageMinAggregateOutputType | null
    _max: VehiclePackageMaxAggregateOutputType | null
  }

  type GetVehiclePackageGroupByPayload<T extends VehiclePackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiclePackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiclePackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiclePackageGroupByOutputType[P]>
            : GetScalarType<T[P], VehiclePackageGroupByOutputType[P]>
        }
      >
    >


  export type VehiclePackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    carModel?: boolean
    image?: boolean
    price?: boolean
    seats?: boolean
    bags?: boolean
    routeId?: boolean
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiclePackage"]>

  export type VehiclePackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    carModel?: boolean
    image?: boolean
    price?: boolean
    seats?: boolean
    bags?: boolean
    routeId?: boolean
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiclePackage"]>

  export type VehiclePackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    carModel?: boolean
    image?: boolean
    price?: boolean
    seats?: boolean
    bags?: boolean
    routeId?: boolean
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiclePackage"]>

  export type VehiclePackageSelectScalar = {
    id?: boolean
    category?: boolean
    carModel?: boolean
    image?: boolean
    price?: boolean
    seats?: boolean
    bags?: boolean
    routeId?: boolean
  }

  export type VehiclePackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "carModel" | "image" | "price" | "seats" | "bags" | "routeId", ExtArgs["result"]["vehiclePackage"]>
  export type VehiclePackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }
  export type VehiclePackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }
  export type VehiclePackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }

  export type $VehiclePackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehiclePackage"
    objects: {
      route: Prisma.$ServiceRoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: string
      carModel: string
      image: string
      price: number
      seats: number
      bags: number
      routeId: number
    }, ExtArgs["result"]["vehiclePackage"]>
    composites: {}
  }

  type VehiclePackageGetPayload<S extends boolean | null | undefined | VehiclePackageDefaultArgs> = $Result.GetResult<Prisma.$VehiclePackagePayload, S>

  type VehiclePackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiclePackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiclePackageCountAggregateInputType | true
    }

  export interface VehiclePackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehiclePackage'], meta: { name: 'VehiclePackage' } }
    /**
     * Find zero or one VehiclePackage that matches the filter.
     * @param {VehiclePackageFindUniqueArgs} args - Arguments to find a VehiclePackage
     * @example
     * // Get one VehiclePackage
     * const vehiclePackage = await prisma.vehiclePackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiclePackageFindUniqueArgs>(args: SelectSubset<T, VehiclePackageFindUniqueArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehiclePackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiclePackageFindUniqueOrThrowArgs} args - Arguments to find a VehiclePackage
     * @example
     * // Get one VehiclePackage
     * const vehiclePackage = await prisma.vehiclePackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiclePackageFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiclePackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehiclePackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageFindFirstArgs} args - Arguments to find a VehiclePackage
     * @example
     * // Get one VehiclePackage
     * const vehiclePackage = await prisma.vehiclePackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiclePackageFindFirstArgs>(args?: SelectSubset<T, VehiclePackageFindFirstArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehiclePackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageFindFirstOrThrowArgs} args - Arguments to find a VehiclePackage
     * @example
     * // Get one VehiclePackage
     * const vehiclePackage = await prisma.vehiclePackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiclePackageFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiclePackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehiclePackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehiclePackages
     * const vehiclePackages = await prisma.vehiclePackage.findMany()
     * 
     * // Get first 10 VehiclePackages
     * const vehiclePackages = await prisma.vehiclePackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiclePackageWithIdOnly = await prisma.vehiclePackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiclePackageFindManyArgs>(args?: SelectSubset<T, VehiclePackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehiclePackage.
     * @param {VehiclePackageCreateArgs} args - Arguments to create a VehiclePackage.
     * @example
     * // Create one VehiclePackage
     * const VehiclePackage = await prisma.vehiclePackage.create({
     *   data: {
     *     // ... data to create a VehiclePackage
     *   }
     * })
     * 
     */
    create<T extends VehiclePackageCreateArgs>(args: SelectSubset<T, VehiclePackageCreateArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehiclePackages.
     * @param {VehiclePackageCreateManyArgs} args - Arguments to create many VehiclePackages.
     * @example
     * // Create many VehiclePackages
     * const vehiclePackage = await prisma.vehiclePackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiclePackageCreateManyArgs>(args?: SelectSubset<T, VehiclePackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehiclePackages and returns the data saved in the database.
     * @param {VehiclePackageCreateManyAndReturnArgs} args - Arguments to create many VehiclePackages.
     * @example
     * // Create many VehiclePackages
     * const vehiclePackage = await prisma.vehiclePackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehiclePackages and only return the `id`
     * const vehiclePackageWithIdOnly = await prisma.vehiclePackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiclePackageCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiclePackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehiclePackage.
     * @param {VehiclePackageDeleteArgs} args - Arguments to delete one VehiclePackage.
     * @example
     * // Delete one VehiclePackage
     * const VehiclePackage = await prisma.vehiclePackage.delete({
     *   where: {
     *     // ... filter to delete one VehiclePackage
     *   }
     * })
     * 
     */
    delete<T extends VehiclePackageDeleteArgs>(args: SelectSubset<T, VehiclePackageDeleteArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehiclePackage.
     * @param {VehiclePackageUpdateArgs} args - Arguments to update one VehiclePackage.
     * @example
     * // Update one VehiclePackage
     * const vehiclePackage = await prisma.vehiclePackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiclePackageUpdateArgs>(args: SelectSubset<T, VehiclePackageUpdateArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehiclePackages.
     * @param {VehiclePackageDeleteManyArgs} args - Arguments to filter VehiclePackages to delete.
     * @example
     * // Delete a few VehiclePackages
     * const { count } = await prisma.vehiclePackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiclePackageDeleteManyArgs>(args?: SelectSubset<T, VehiclePackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehiclePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehiclePackages
     * const vehiclePackage = await prisma.vehiclePackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiclePackageUpdateManyArgs>(args: SelectSubset<T, VehiclePackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehiclePackages and returns the data updated in the database.
     * @param {VehiclePackageUpdateManyAndReturnArgs} args - Arguments to update many VehiclePackages.
     * @example
     * // Update many VehiclePackages
     * const vehiclePackage = await prisma.vehiclePackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehiclePackages and only return the `id`
     * const vehiclePackageWithIdOnly = await prisma.vehiclePackage.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehiclePackageUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiclePackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehiclePackage.
     * @param {VehiclePackageUpsertArgs} args - Arguments to update or create a VehiclePackage.
     * @example
     * // Update or create a VehiclePackage
     * const vehiclePackage = await prisma.vehiclePackage.upsert({
     *   create: {
     *     // ... data to create a VehiclePackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehiclePackage we want to update
     *   }
     * })
     */
    upsert<T extends VehiclePackageUpsertArgs>(args: SelectSubset<T, VehiclePackageUpsertArgs<ExtArgs>>): Prisma__VehiclePackageClient<$Result.GetResult<Prisma.$VehiclePackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehiclePackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageCountArgs} args - Arguments to filter VehiclePackages to count.
     * @example
     * // Count the number of VehiclePackages
     * const count = await prisma.vehiclePackage.count({
     *   where: {
     *     // ... the filter for the VehiclePackages we want to count
     *   }
     * })
    **/
    count<T extends VehiclePackageCountArgs>(
      args?: Subset<T, VehiclePackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiclePackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehiclePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiclePackageAggregateArgs>(args: Subset<T, VehiclePackageAggregateArgs>): Prisma.PrismaPromise<GetVehiclePackageAggregateType<T>>

    /**
     * Group by VehiclePackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclePackageGroupByArgs} args - Group by arguments.
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
      T extends VehiclePackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiclePackageGroupByArgs['orderBy'] }
        : { orderBy?: VehiclePackageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiclePackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiclePackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehiclePackage model
   */
  readonly fields: VehiclePackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehiclePackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiclePackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends ServiceRouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRouteDefaultArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VehiclePackage model
   */
  interface VehiclePackageFieldRefs {
    readonly id: FieldRef<"VehiclePackage", 'Int'>
    readonly category: FieldRef<"VehiclePackage", 'String'>
    readonly carModel: FieldRef<"VehiclePackage", 'String'>
    readonly image: FieldRef<"VehiclePackage", 'String'>
    readonly price: FieldRef<"VehiclePackage", 'Int'>
    readonly seats: FieldRef<"VehiclePackage", 'Int'>
    readonly bags: FieldRef<"VehiclePackage", 'Int'>
    readonly routeId: FieldRef<"VehiclePackage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VehiclePackage findUnique
   */
  export type VehiclePackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * Filter, which VehiclePackage to fetch.
     */
    where: VehiclePackageWhereUniqueInput
  }

  /**
   * VehiclePackage findUniqueOrThrow
   */
  export type VehiclePackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * Filter, which VehiclePackage to fetch.
     */
    where: VehiclePackageWhereUniqueInput
  }

  /**
   * VehiclePackage findFirst
   */
  export type VehiclePackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * Filter, which VehiclePackage to fetch.
     */
    where?: VehiclePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiclePackages to fetch.
     */
    orderBy?: VehiclePackageOrderByWithRelationInput | VehiclePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehiclePackages.
     */
    cursor?: VehiclePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiclePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiclePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehiclePackages.
     */
    distinct?: VehiclePackageScalarFieldEnum | VehiclePackageScalarFieldEnum[]
  }

  /**
   * VehiclePackage findFirstOrThrow
   */
  export type VehiclePackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * Filter, which VehiclePackage to fetch.
     */
    where?: VehiclePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiclePackages to fetch.
     */
    orderBy?: VehiclePackageOrderByWithRelationInput | VehiclePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehiclePackages.
     */
    cursor?: VehiclePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiclePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiclePackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehiclePackages.
     */
    distinct?: VehiclePackageScalarFieldEnum | VehiclePackageScalarFieldEnum[]
  }

  /**
   * VehiclePackage findMany
   */
  export type VehiclePackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * Filter, which VehiclePackages to fetch.
     */
    where?: VehiclePackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehiclePackages to fetch.
     */
    orderBy?: VehiclePackageOrderByWithRelationInput | VehiclePackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehiclePackages.
     */
    cursor?: VehiclePackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehiclePackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehiclePackages.
     */
    skip?: number
    distinct?: VehiclePackageScalarFieldEnum | VehiclePackageScalarFieldEnum[]
  }

  /**
   * VehiclePackage create
   */
  export type VehiclePackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * The data needed to create a VehiclePackage.
     */
    data: XOR<VehiclePackageCreateInput, VehiclePackageUncheckedCreateInput>
  }

  /**
   * VehiclePackage createMany
   */
  export type VehiclePackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehiclePackages.
     */
    data: VehiclePackageCreateManyInput | VehiclePackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehiclePackage createManyAndReturn
   */
  export type VehiclePackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * The data used to create many VehiclePackages.
     */
    data: VehiclePackageCreateManyInput | VehiclePackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehiclePackage update
   */
  export type VehiclePackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * The data needed to update a VehiclePackage.
     */
    data: XOR<VehiclePackageUpdateInput, VehiclePackageUncheckedUpdateInput>
    /**
     * Choose, which VehiclePackage to update.
     */
    where: VehiclePackageWhereUniqueInput
  }

  /**
   * VehiclePackage updateMany
   */
  export type VehiclePackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehiclePackages.
     */
    data: XOR<VehiclePackageUpdateManyMutationInput, VehiclePackageUncheckedUpdateManyInput>
    /**
     * Filter which VehiclePackages to update
     */
    where?: VehiclePackageWhereInput
    /**
     * Limit how many VehiclePackages to update.
     */
    limit?: number
  }

  /**
   * VehiclePackage updateManyAndReturn
   */
  export type VehiclePackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * The data used to update VehiclePackages.
     */
    data: XOR<VehiclePackageUpdateManyMutationInput, VehiclePackageUncheckedUpdateManyInput>
    /**
     * Filter which VehiclePackages to update
     */
    where?: VehiclePackageWhereInput
    /**
     * Limit how many VehiclePackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehiclePackage upsert
   */
  export type VehiclePackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * The filter to search for the VehiclePackage to update in case it exists.
     */
    where: VehiclePackageWhereUniqueInput
    /**
     * In case the VehiclePackage found by the `where` argument doesn't exist, create a new VehiclePackage with this data.
     */
    create: XOR<VehiclePackageCreateInput, VehiclePackageUncheckedCreateInput>
    /**
     * In case the VehiclePackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiclePackageUpdateInput, VehiclePackageUncheckedUpdateInput>
  }

  /**
   * VehiclePackage delete
   */
  export type VehiclePackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
    /**
     * Filter which VehiclePackage to delete.
     */
    where: VehiclePackageWhereUniqueInput
  }

  /**
   * VehiclePackage deleteMany
   */
  export type VehiclePackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehiclePackages to delete
     */
    where?: VehiclePackageWhereInput
    /**
     * Limit how many VehiclePackages to delete.
     */
    limit?: number
  }

  /**
   * VehiclePackage without action
   */
  export type VehiclePackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclePackage
     */
    select?: VehiclePackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehiclePackage
     */
    omit?: VehiclePackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiclePackageInclude<ExtArgs> | null
  }


  /**
   * Model RouteGallery
   */

  export type AggregateRouteGallery = {
    _count: RouteGalleryCountAggregateOutputType | null
    _avg: RouteGalleryAvgAggregateOutputType | null
    _sum: RouteGallerySumAggregateOutputType | null
    _min: RouteGalleryMinAggregateOutputType | null
    _max: RouteGalleryMaxAggregateOutputType | null
  }

  export type RouteGalleryAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
  }

  export type RouteGallerySumAggregateOutputType = {
    id: number | null
    routeId: number | null
  }

  export type RouteGalleryMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    altText: string | null
    caption: string | null
    routeId: number | null
  }

  export type RouteGalleryMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    altText: string | null
    caption: string | null
    routeId: number | null
  }

  export type RouteGalleryCountAggregateOutputType = {
    id: number
    imageUrl: number
    altText: number
    caption: number
    routeId: number
    _all: number
  }


  export type RouteGalleryAvgAggregateInputType = {
    id?: true
    routeId?: true
  }

  export type RouteGallerySumAggregateInputType = {
    id?: true
    routeId?: true
  }

  export type RouteGalleryMinAggregateInputType = {
    id?: true
    imageUrl?: true
    altText?: true
    caption?: true
    routeId?: true
  }

  export type RouteGalleryMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    altText?: true
    caption?: true
    routeId?: true
  }

  export type RouteGalleryCountAggregateInputType = {
    id?: true
    imageUrl?: true
    altText?: true
    caption?: true
    routeId?: true
    _all?: true
  }

  export type RouteGalleryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteGallery to aggregate.
     */
    where?: RouteGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteGalleries to fetch.
     */
    orderBy?: RouteGalleryOrderByWithRelationInput | RouteGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteGalleries
    **/
    _count?: true | RouteGalleryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteGalleryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteGallerySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteGalleryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteGalleryMaxAggregateInputType
  }

  export type GetRouteGalleryAggregateType<T extends RouteGalleryAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteGallery[P]>
      : GetScalarType<T[P], AggregateRouteGallery[P]>
  }




  export type RouteGalleryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteGalleryWhereInput
    orderBy?: RouteGalleryOrderByWithAggregationInput | RouteGalleryOrderByWithAggregationInput[]
    by: RouteGalleryScalarFieldEnum[] | RouteGalleryScalarFieldEnum
    having?: RouteGalleryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteGalleryCountAggregateInputType | true
    _avg?: RouteGalleryAvgAggregateInputType
    _sum?: RouteGallerySumAggregateInputType
    _min?: RouteGalleryMinAggregateInputType
    _max?: RouteGalleryMaxAggregateInputType
  }

  export type RouteGalleryGroupByOutputType = {
    id: number
    imageUrl: string
    altText: string | null
    caption: string | null
    routeId: number
    _count: RouteGalleryCountAggregateOutputType | null
    _avg: RouteGalleryAvgAggregateOutputType | null
    _sum: RouteGallerySumAggregateOutputType | null
    _min: RouteGalleryMinAggregateOutputType | null
    _max: RouteGalleryMaxAggregateOutputType | null
  }

  type GetRouteGalleryGroupByPayload<T extends RouteGalleryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGalleryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGalleryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGalleryGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGalleryGroupByOutputType[P]>
        }
      >
    >


  export type RouteGallerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    routeId?: boolean
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeGallery"]>

  export type RouteGallerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    routeId?: boolean
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeGallery"]>

  export type RouteGallerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    routeId?: boolean
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeGallery"]>

  export type RouteGallerySelectScalar = {
    id?: boolean
    imageUrl?: boolean
    altText?: boolean
    caption?: boolean
    routeId?: boolean
  }

  export type RouteGalleryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "altText" | "caption" | "routeId", ExtArgs["result"]["routeGallery"]>
  export type RouteGalleryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }
  export type RouteGalleryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }
  export type RouteGalleryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | ServiceRouteDefaultArgs<ExtArgs>
  }

  export type $RouteGalleryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteGallery"
    objects: {
      route: Prisma.$ServiceRoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      altText: string | null
      caption: string | null
      routeId: number
    }, ExtArgs["result"]["routeGallery"]>
    composites: {}
  }

  type RouteGalleryGetPayload<S extends boolean | null | undefined | RouteGalleryDefaultArgs> = $Result.GetResult<Prisma.$RouteGalleryPayload, S>

  type RouteGalleryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteGalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteGalleryCountAggregateInputType | true
    }

  export interface RouteGalleryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteGallery'], meta: { name: 'RouteGallery' } }
    /**
     * Find zero or one RouteGallery that matches the filter.
     * @param {RouteGalleryFindUniqueArgs} args - Arguments to find a RouteGallery
     * @example
     * // Get one RouteGallery
     * const routeGallery = await prisma.routeGallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteGalleryFindUniqueArgs>(args: SelectSubset<T, RouteGalleryFindUniqueArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteGallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteGalleryFindUniqueOrThrowArgs} args - Arguments to find a RouteGallery
     * @example
     * // Get one RouteGallery
     * const routeGallery = await prisma.routeGallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteGalleryFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteGalleryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteGallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryFindFirstArgs} args - Arguments to find a RouteGallery
     * @example
     * // Get one RouteGallery
     * const routeGallery = await prisma.routeGallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteGalleryFindFirstArgs>(args?: SelectSubset<T, RouteGalleryFindFirstArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteGallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryFindFirstOrThrowArgs} args - Arguments to find a RouteGallery
     * @example
     * // Get one RouteGallery
     * const routeGallery = await prisma.routeGallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteGalleryFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteGalleryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteGalleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteGalleries
     * const routeGalleries = await prisma.routeGallery.findMany()
     * 
     * // Get first 10 RouteGalleries
     * const routeGalleries = await prisma.routeGallery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeGalleryWithIdOnly = await prisma.routeGallery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteGalleryFindManyArgs>(args?: SelectSubset<T, RouteGalleryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteGallery.
     * @param {RouteGalleryCreateArgs} args - Arguments to create a RouteGallery.
     * @example
     * // Create one RouteGallery
     * const RouteGallery = await prisma.routeGallery.create({
     *   data: {
     *     // ... data to create a RouteGallery
     *   }
     * })
     * 
     */
    create<T extends RouteGalleryCreateArgs>(args: SelectSubset<T, RouteGalleryCreateArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteGalleries.
     * @param {RouteGalleryCreateManyArgs} args - Arguments to create many RouteGalleries.
     * @example
     * // Create many RouteGalleries
     * const routeGallery = await prisma.routeGallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteGalleryCreateManyArgs>(args?: SelectSubset<T, RouteGalleryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteGalleries and returns the data saved in the database.
     * @param {RouteGalleryCreateManyAndReturnArgs} args - Arguments to create many RouteGalleries.
     * @example
     * // Create many RouteGalleries
     * const routeGallery = await prisma.routeGallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteGalleries and only return the `id`
     * const routeGalleryWithIdOnly = await prisma.routeGallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteGalleryCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteGalleryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteGallery.
     * @param {RouteGalleryDeleteArgs} args - Arguments to delete one RouteGallery.
     * @example
     * // Delete one RouteGallery
     * const RouteGallery = await prisma.routeGallery.delete({
     *   where: {
     *     // ... filter to delete one RouteGallery
     *   }
     * })
     * 
     */
    delete<T extends RouteGalleryDeleteArgs>(args: SelectSubset<T, RouteGalleryDeleteArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteGallery.
     * @param {RouteGalleryUpdateArgs} args - Arguments to update one RouteGallery.
     * @example
     * // Update one RouteGallery
     * const routeGallery = await prisma.routeGallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteGalleryUpdateArgs>(args: SelectSubset<T, RouteGalleryUpdateArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteGalleries.
     * @param {RouteGalleryDeleteManyArgs} args - Arguments to filter RouteGalleries to delete.
     * @example
     * // Delete a few RouteGalleries
     * const { count } = await prisma.routeGallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteGalleryDeleteManyArgs>(args?: SelectSubset<T, RouteGalleryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteGalleries
     * const routeGallery = await prisma.routeGallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteGalleryUpdateManyArgs>(args: SelectSubset<T, RouteGalleryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteGalleries and returns the data updated in the database.
     * @param {RouteGalleryUpdateManyAndReturnArgs} args - Arguments to update many RouteGalleries.
     * @example
     * // Update many RouteGalleries
     * const routeGallery = await prisma.routeGallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteGalleries and only return the `id`
     * const routeGalleryWithIdOnly = await prisma.routeGallery.updateManyAndReturn({
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
    updateManyAndReturn<T extends RouteGalleryUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteGalleryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteGallery.
     * @param {RouteGalleryUpsertArgs} args - Arguments to update or create a RouteGallery.
     * @example
     * // Update or create a RouteGallery
     * const routeGallery = await prisma.routeGallery.upsert({
     *   create: {
     *     // ... data to create a RouteGallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteGallery we want to update
     *   }
     * })
     */
    upsert<T extends RouteGalleryUpsertArgs>(args: SelectSubset<T, RouteGalleryUpsertArgs<ExtArgs>>): Prisma__RouteGalleryClient<$Result.GetResult<Prisma.$RouteGalleryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteGalleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryCountArgs} args - Arguments to filter RouteGalleries to count.
     * @example
     * // Count the number of RouteGalleries
     * const count = await prisma.routeGallery.count({
     *   where: {
     *     // ... the filter for the RouteGalleries we want to count
     *   }
     * })
    **/
    count<T extends RouteGalleryCountArgs>(
      args?: Subset<T, RouteGalleryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteGalleryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteGalleryAggregateArgs>(args: Subset<T, RouteGalleryAggregateArgs>): Prisma.PrismaPromise<GetRouteGalleryAggregateType<T>>

    /**
     * Group by RouteGallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGalleryGroupByArgs} args - Group by arguments.
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
      T extends RouteGalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGalleryGroupByArgs['orderBy'] }
        : { orderBy?: RouteGalleryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGalleryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGalleryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteGallery model
   */
  readonly fields: RouteGalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteGallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteGalleryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends ServiceRouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRouteDefaultArgs<ExtArgs>>): Prisma__ServiceRouteClient<$Result.GetResult<Prisma.$ServiceRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RouteGallery model
   */
  interface RouteGalleryFieldRefs {
    readonly id: FieldRef<"RouteGallery", 'Int'>
    readonly imageUrl: FieldRef<"RouteGallery", 'String'>
    readonly altText: FieldRef<"RouteGallery", 'String'>
    readonly caption: FieldRef<"RouteGallery", 'String'>
    readonly routeId: FieldRef<"RouteGallery", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RouteGallery findUnique
   */
  export type RouteGalleryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * Filter, which RouteGallery to fetch.
     */
    where: RouteGalleryWhereUniqueInput
  }

  /**
   * RouteGallery findUniqueOrThrow
   */
  export type RouteGalleryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * Filter, which RouteGallery to fetch.
     */
    where: RouteGalleryWhereUniqueInput
  }

  /**
   * RouteGallery findFirst
   */
  export type RouteGalleryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * Filter, which RouteGallery to fetch.
     */
    where?: RouteGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteGalleries to fetch.
     */
    orderBy?: RouteGalleryOrderByWithRelationInput | RouteGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteGalleries.
     */
    cursor?: RouteGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteGalleries.
     */
    distinct?: RouteGalleryScalarFieldEnum | RouteGalleryScalarFieldEnum[]
  }

  /**
   * RouteGallery findFirstOrThrow
   */
  export type RouteGalleryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * Filter, which RouteGallery to fetch.
     */
    where?: RouteGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteGalleries to fetch.
     */
    orderBy?: RouteGalleryOrderByWithRelationInput | RouteGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteGalleries.
     */
    cursor?: RouteGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteGalleries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteGalleries.
     */
    distinct?: RouteGalleryScalarFieldEnum | RouteGalleryScalarFieldEnum[]
  }

  /**
   * RouteGallery findMany
   */
  export type RouteGalleryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * Filter, which RouteGalleries to fetch.
     */
    where?: RouteGalleryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteGalleries to fetch.
     */
    orderBy?: RouteGalleryOrderByWithRelationInput | RouteGalleryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteGalleries.
     */
    cursor?: RouteGalleryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteGalleries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteGalleries.
     */
    skip?: number
    distinct?: RouteGalleryScalarFieldEnum | RouteGalleryScalarFieldEnum[]
  }

  /**
   * RouteGallery create
   */
  export type RouteGalleryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteGallery.
     */
    data: XOR<RouteGalleryCreateInput, RouteGalleryUncheckedCreateInput>
  }

  /**
   * RouteGallery createMany
   */
  export type RouteGalleryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteGalleries.
     */
    data: RouteGalleryCreateManyInput | RouteGalleryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteGallery createManyAndReturn
   */
  export type RouteGalleryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * The data used to create many RouteGalleries.
     */
    data: RouteGalleryCreateManyInput | RouteGalleryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteGallery update
   */
  export type RouteGalleryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteGallery.
     */
    data: XOR<RouteGalleryUpdateInput, RouteGalleryUncheckedUpdateInput>
    /**
     * Choose, which RouteGallery to update.
     */
    where: RouteGalleryWhereUniqueInput
  }

  /**
   * RouteGallery updateMany
   */
  export type RouteGalleryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteGalleries.
     */
    data: XOR<RouteGalleryUpdateManyMutationInput, RouteGalleryUncheckedUpdateManyInput>
    /**
     * Filter which RouteGalleries to update
     */
    where?: RouteGalleryWhereInput
    /**
     * Limit how many RouteGalleries to update.
     */
    limit?: number
  }

  /**
   * RouteGallery updateManyAndReturn
   */
  export type RouteGalleryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * The data used to update RouteGalleries.
     */
    data: XOR<RouteGalleryUpdateManyMutationInput, RouteGalleryUncheckedUpdateManyInput>
    /**
     * Filter which RouteGalleries to update
     */
    where?: RouteGalleryWhereInput
    /**
     * Limit how many RouteGalleries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteGallery upsert
   */
  export type RouteGalleryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteGallery to update in case it exists.
     */
    where: RouteGalleryWhereUniqueInput
    /**
     * In case the RouteGallery found by the `where` argument doesn't exist, create a new RouteGallery with this data.
     */
    create: XOR<RouteGalleryCreateInput, RouteGalleryUncheckedCreateInput>
    /**
     * In case the RouteGallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteGalleryUpdateInput, RouteGalleryUncheckedUpdateInput>
  }

  /**
   * RouteGallery delete
   */
  export type RouteGalleryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
    /**
     * Filter which RouteGallery to delete.
     */
    where: RouteGalleryWhereUniqueInput
  }

  /**
   * RouteGallery deleteMany
   */
  export type RouteGalleryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteGalleries to delete
     */
    where?: RouteGalleryWhereInput
    /**
     * Limit how many RouteGalleries to delete.
     */
    limit?: number
  }

  /**
   * RouteGallery without action
   */
  export type RouteGalleryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteGallery
     */
    select?: RouteGallerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteGallery
     */
    omit?: RouteGalleryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteGalleryInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ServiceRouteScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    isActive: 'isActive',
    title: 'title',
    tagline: 'tagline',
    heroImage: 'heroImage',
    distance: 'distance',
    duration: 'duration',
    basePrice: 'basePrice',
    description: 'description',
    highlights: 'highlights',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    canonicalUrl: 'canonicalUrl',
    keywords: 'keywords',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceRouteScalarFieldEnum = (typeof ServiceRouteScalarFieldEnum)[keyof typeof ServiceRouteScalarFieldEnum]


  export const VehiclePackageScalarFieldEnum: {
    id: 'id',
    category: 'category',
    carModel: 'carModel',
    image: 'image',
    price: 'price',
    seats: 'seats',
    bags: 'bags',
    routeId: 'routeId'
  };

  export type VehiclePackageScalarFieldEnum = (typeof VehiclePackageScalarFieldEnum)[keyof typeof VehiclePackageScalarFieldEnum]


  export const RouteGalleryScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    altText: 'altText',
    caption: 'caption',
    routeId: 'routeId'
  };

  export type RouteGalleryScalarFieldEnum = (typeof RouteGalleryScalarFieldEnum)[keyof typeof RouteGalleryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ServiceRouteWhereInput = {
    AND?: ServiceRouteWhereInput | ServiceRouteWhereInput[]
    OR?: ServiceRouteWhereInput[]
    NOT?: ServiceRouteWhereInput | ServiceRouteWhereInput[]
    id?: IntFilter<"ServiceRoute"> | number
    slug?: StringFilter<"ServiceRoute"> | string
    isActive?: BoolFilter<"ServiceRoute"> | boolean
    title?: StringFilter<"ServiceRoute"> | string
    tagline?: StringFilter<"ServiceRoute"> | string
    heroImage?: StringFilter<"ServiceRoute"> | string
    distance?: StringFilter<"ServiceRoute"> | string
    duration?: StringFilter<"ServiceRoute"> | string
    basePrice?: IntFilter<"ServiceRoute"> | number
    description?: StringFilter<"ServiceRoute"> | string
    highlights?: JsonFilter<"ServiceRoute">
    metaTitle?: StringNullableFilter<"ServiceRoute"> | string | null
    metaDescription?: StringNullableFilter<"ServiceRoute"> | string | null
    canonicalUrl?: StringNullableFilter<"ServiceRoute"> | string | null
    keywords?: StringNullableFilter<"ServiceRoute"> | string | null
    createdAt?: DateTimeFilter<"ServiceRoute"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceRoute"> | Date | string
    gallery?: RouteGalleryListRelationFilter
    packages?: VehiclePackageListRelationFilter
  }

  export type ServiceRouteOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    heroImage?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    highlights?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gallery?: RouteGalleryOrderByRelationAggregateInput
    packages?: VehiclePackageOrderByRelationAggregateInput
  }

  export type ServiceRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: ServiceRouteWhereInput | ServiceRouteWhereInput[]
    OR?: ServiceRouteWhereInput[]
    NOT?: ServiceRouteWhereInput | ServiceRouteWhereInput[]
    isActive?: BoolFilter<"ServiceRoute"> | boolean
    title?: StringFilter<"ServiceRoute"> | string
    tagline?: StringFilter<"ServiceRoute"> | string
    heroImage?: StringFilter<"ServiceRoute"> | string
    distance?: StringFilter<"ServiceRoute"> | string
    duration?: StringFilter<"ServiceRoute"> | string
    basePrice?: IntFilter<"ServiceRoute"> | number
    description?: StringFilter<"ServiceRoute"> | string
    highlights?: JsonFilter<"ServiceRoute">
    metaTitle?: StringNullableFilter<"ServiceRoute"> | string | null
    metaDescription?: StringNullableFilter<"ServiceRoute"> | string | null
    canonicalUrl?: StringNullableFilter<"ServiceRoute"> | string | null
    keywords?: StringNullableFilter<"ServiceRoute"> | string | null
    createdAt?: DateTimeFilter<"ServiceRoute"> | Date | string
    updatedAt?: DateTimeFilter<"ServiceRoute"> | Date | string
    gallery?: RouteGalleryListRelationFilter
    packages?: VehiclePackageListRelationFilter
  }, "id" | "slug">

  export type ServiceRouteOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    heroImage?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    highlights?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    keywords?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceRouteCountOrderByAggregateInput
    _avg?: ServiceRouteAvgOrderByAggregateInput
    _max?: ServiceRouteMaxOrderByAggregateInput
    _min?: ServiceRouteMinOrderByAggregateInput
    _sum?: ServiceRouteSumOrderByAggregateInput
  }

  export type ServiceRouteScalarWhereWithAggregatesInput = {
    AND?: ServiceRouteScalarWhereWithAggregatesInput | ServiceRouteScalarWhereWithAggregatesInput[]
    OR?: ServiceRouteScalarWhereWithAggregatesInput[]
    NOT?: ServiceRouteScalarWhereWithAggregatesInput | ServiceRouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceRoute"> | number
    slug?: StringWithAggregatesFilter<"ServiceRoute"> | string
    isActive?: BoolWithAggregatesFilter<"ServiceRoute"> | boolean
    title?: StringWithAggregatesFilter<"ServiceRoute"> | string
    tagline?: StringWithAggregatesFilter<"ServiceRoute"> | string
    heroImage?: StringWithAggregatesFilter<"ServiceRoute"> | string
    distance?: StringWithAggregatesFilter<"ServiceRoute"> | string
    duration?: StringWithAggregatesFilter<"ServiceRoute"> | string
    basePrice?: IntWithAggregatesFilter<"ServiceRoute"> | number
    description?: StringWithAggregatesFilter<"ServiceRoute"> | string
    highlights?: JsonWithAggregatesFilter<"ServiceRoute">
    metaTitle?: StringNullableWithAggregatesFilter<"ServiceRoute"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"ServiceRoute"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"ServiceRoute"> | string | null
    keywords?: StringNullableWithAggregatesFilter<"ServiceRoute"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ServiceRoute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServiceRoute"> | Date | string
  }

  export type VehiclePackageWhereInput = {
    AND?: VehiclePackageWhereInput | VehiclePackageWhereInput[]
    OR?: VehiclePackageWhereInput[]
    NOT?: VehiclePackageWhereInput | VehiclePackageWhereInput[]
    id?: IntFilter<"VehiclePackage"> | number
    category?: StringFilter<"VehiclePackage"> | string
    carModel?: StringFilter<"VehiclePackage"> | string
    image?: StringFilter<"VehiclePackage"> | string
    price?: IntFilter<"VehiclePackage"> | number
    seats?: IntFilter<"VehiclePackage"> | number
    bags?: IntFilter<"VehiclePackage"> | number
    routeId?: IntFilter<"VehiclePackage"> | number
    route?: XOR<ServiceRouteScalarRelationFilter, ServiceRouteWhereInput>
  }

  export type VehiclePackageOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    carModel?: SortOrder
    image?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
    route?: ServiceRouteOrderByWithRelationInput
  }

  export type VehiclePackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VehiclePackageWhereInput | VehiclePackageWhereInput[]
    OR?: VehiclePackageWhereInput[]
    NOT?: VehiclePackageWhereInput | VehiclePackageWhereInput[]
    category?: StringFilter<"VehiclePackage"> | string
    carModel?: StringFilter<"VehiclePackage"> | string
    image?: StringFilter<"VehiclePackage"> | string
    price?: IntFilter<"VehiclePackage"> | number
    seats?: IntFilter<"VehiclePackage"> | number
    bags?: IntFilter<"VehiclePackage"> | number
    routeId?: IntFilter<"VehiclePackage"> | number
    route?: XOR<ServiceRouteScalarRelationFilter, ServiceRouteWhereInput>
  }, "id">

  export type VehiclePackageOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    carModel?: SortOrder
    image?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
    _count?: VehiclePackageCountOrderByAggregateInput
    _avg?: VehiclePackageAvgOrderByAggregateInput
    _max?: VehiclePackageMaxOrderByAggregateInput
    _min?: VehiclePackageMinOrderByAggregateInput
    _sum?: VehiclePackageSumOrderByAggregateInput
  }

  export type VehiclePackageScalarWhereWithAggregatesInput = {
    AND?: VehiclePackageScalarWhereWithAggregatesInput | VehiclePackageScalarWhereWithAggregatesInput[]
    OR?: VehiclePackageScalarWhereWithAggregatesInput[]
    NOT?: VehiclePackageScalarWhereWithAggregatesInput | VehiclePackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VehiclePackage"> | number
    category?: StringWithAggregatesFilter<"VehiclePackage"> | string
    carModel?: StringWithAggregatesFilter<"VehiclePackage"> | string
    image?: StringWithAggregatesFilter<"VehiclePackage"> | string
    price?: IntWithAggregatesFilter<"VehiclePackage"> | number
    seats?: IntWithAggregatesFilter<"VehiclePackage"> | number
    bags?: IntWithAggregatesFilter<"VehiclePackage"> | number
    routeId?: IntWithAggregatesFilter<"VehiclePackage"> | number
  }

  export type RouteGalleryWhereInput = {
    AND?: RouteGalleryWhereInput | RouteGalleryWhereInput[]
    OR?: RouteGalleryWhereInput[]
    NOT?: RouteGalleryWhereInput | RouteGalleryWhereInput[]
    id?: IntFilter<"RouteGallery"> | number
    imageUrl?: StringFilter<"RouteGallery"> | string
    altText?: StringNullableFilter<"RouteGallery"> | string | null
    caption?: StringNullableFilter<"RouteGallery"> | string | null
    routeId?: IntFilter<"RouteGallery"> | number
    route?: XOR<ServiceRouteScalarRelationFilter, ServiceRouteWhereInput>
  }

  export type RouteGalleryOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    routeId?: SortOrder
    route?: ServiceRouteOrderByWithRelationInput
  }

  export type RouteGalleryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteGalleryWhereInput | RouteGalleryWhereInput[]
    OR?: RouteGalleryWhereInput[]
    NOT?: RouteGalleryWhereInput | RouteGalleryWhereInput[]
    imageUrl?: StringFilter<"RouteGallery"> | string
    altText?: StringNullableFilter<"RouteGallery"> | string | null
    caption?: StringNullableFilter<"RouteGallery"> | string | null
    routeId?: IntFilter<"RouteGallery"> | number
    route?: XOR<ServiceRouteScalarRelationFilter, ServiceRouteWhereInput>
  }, "id">

  export type RouteGalleryOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    routeId?: SortOrder
    _count?: RouteGalleryCountOrderByAggregateInput
    _avg?: RouteGalleryAvgOrderByAggregateInput
    _max?: RouteGalleryMaxOrderByAggregateInput
    _min?: RouteGalleryMinOrderByAggregateInput
    _sum?: RouteGallerySumOrderByAggregateInput
  }

  export type RouteGalleryScalarWhereWithAggregatesInput = {
    AND?: RouteGalleryScalarWhereWithAggregatesInput | RouteGalleryScalarWhereWithAggregatesInput[]
    OR?: RouteGalleryScalarWhereWithAggregatesInput[]
    NOT?: RouteGalleryScalarWhereWithAggregatesInput | RouteGalleryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteGallery"> | number
    imageUrl?: StringWithAggregatesFilter<"RouteGallery"> | string
    altText?: StringNullableWithAggregatesFilter<"RouteGallery"> | string | null
    caption?: StringNullableWithAggregatesFilter<"RouteGallery"> | string | null
    routeId?: IntWithAggregatesFilter<"RouteGallery"> | number
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRouteCreateInput = {
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: RouteGalleryCreateNestedManyWithoutRouteInput
    packages?: VehiclePackageCreateNestedManyWithoutRouteInput
  }

  export type ServiceRouteUncheckedCreateInput = {
    id?: number
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: RouteGalleryUncheckedCreateNestedManyWithoutRouteInput
    packages?: VehiclePackageUncheckedCreateNestedManyWithoutRouteInput
  }

  export type ServiceRouteUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: RouteGalleryUpdateManyWithoutRouteNestedInput
    packages?: VehiclePackageUpdateManyWithoutRouteNestedInput
  }

  export type ServiceRouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: RouteGalleryUncheckedUpdateManyWithoutRouteNestedInput
    packages?: VehiclePackageUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type ServiceRouteCreateManyInput = {
    id?: number
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceRouteUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclePackageCreateInput = {
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
    route: ServiceRouteCreateNestedOneWithoutPackagesInput
  }

  export type VehiclePackageUncheckedCreateInput = {
    id?: number
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
    routeId: number
  }

  export type VehiclePackageUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
    route?: ServiceRouteUpdateOneRequiredWithoutPackagesNestedInput
  }

  export type VehiclePackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type VehiclePackageCreateManyInput = {
    id?: number
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
    routeId: number
  }

  export type VehiclePackageUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
  }

  export type VehiclePackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteGalleryCreateInput = {
    imageUrl: string
    altText?: string | null
    caption?: string | null
    route: ServiceRouteCreateNestedOneWithoutGalleryInput
  }

  export type RouteGalleryUncheckedCreateInput = {
    id?: number
    imageUrl: string
    altText?: string | null
    caption?: string | null
    routeId: number
  }

  export type RouteGalleryUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    route?: ServiceRouteUpdateOneRequiredWithoutGalleryNestedInput
  }

  export type RouteGalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: IntFieldUpdateOperationsInput | number
  }

  export type RouteGalleryCreateManyInput = {
    id?: number
    imageUrl: string
    altText?: string | null
    caption?: string | null
    routeId: number
  }

  export type RouteGalleryUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteGalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: IntFieldUpdateOperationsInput | number
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
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RouteGalleryListRelationFilter = {
    every?: RouteGalleryWhereInput
    some?: RouteGalleryWhereInput
    none?: RouteGalleryWhereInput
  }

  export type VehiclePackageListRelationFilter = {
    every?: VehiclePackageWhereInput
    some?: VehiclePackageWhereInput
    none?: VehiclePackageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RouteGalleryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiclePackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceRouteCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    heroImage?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    highlights?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    canonicalUrl?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceRouteAvgOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
  }

  export type ServiceRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    heroImage?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    canonicalUrl?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceRouteMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    title?: SortOrder
    tagline?: SortOrder
    heroImage?: SortOrder
    distance?: SortOrder
    duration?: SortOrder
    basePrice?: SortOrder
    description?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    canonicalUrl?: SortOrder
    keywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceRouteSumOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ServiceRouteScalarRelationFilter = {
    is?: ServiceRouteWhereInput
    isNot?: ServiceRouteWhereInput
  }

  export type VehiclePackageCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    carModel?: SortOrder
    image?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
  }

  export type VehiclePackageAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
  }

  export type VehiclePackageMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    carModel?: SortOrder
    image?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
  }

  export type VehiclePackageMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    carModel?: SortOrder
    image?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
  }

  export type VehiclePackageSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    seats?: SortOrder
    bags?: SortOrder
    routeId?: SortOrder
  }

  export type RouteGalleryCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    routeId?: SortOrder
  }

  export type RouteGalleryAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
  }

  export type RouteGalleryMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    routeId?: SortOrder
  }

  export type RouteGalleryMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    routeId?: SortOrder
  }

  export type RouteGallerySumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RouteGalleryCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteGalleryCreateWithoutRouteInput, RouteGalleryUncheckedCreateWithoutRouteInput> | RouteGalleryCreateWithoutRouteInput[] | RouteGalleryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteGalleryCreateOrConnectWithoutRouteInput | RouteGalleryCreateOrConnectWithoutRouteInput[]
    createMany?: RouteGalleryCreateManyRouteInputEnvelope
    connect?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
  }

  export type VehiclePackageCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehiclePackageCreateWithoutRouteInput, VehiclePackageUncheckedCreateWithoutRouteInput> | VehiclePackageCreateWithoutRouteInput[] | VehiclePackageUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehiclePackageCreateOrConnectWithoutRouteInput | VehiclePackageCreateOrConnectWithoutRouteInput[]
    createMany?: VehiclePackageCreateManyRouteInputEnvelope
    connect?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
  }

  export type RouteGalleryUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteGalleryCreateWithoutRouteInput, RouteGalleryUncheckedCreateWithoutRouteInput> | RouteGalleryCreateWithoutRouteInput[] | RouteGalleryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteGalleryCreateOrConnectWithoutRouteInput | RouteGalleryCreateOrConnectWithoutRouteInput[]
    createMany?: RouteGalleryCreateManyRouteInputEnvelope
    connect?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
  }

  export type VehiclePackageUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<VehiclePackageCreateWithoutRouteInput, VehiclePackageUncheckedCreateWithoutRouteInput> | VehiclePackageCreateWithoutRouteInput[] | VehiclePackageUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehiclePackageCreateOrConnectWithoutRouteInput | VehiclePackageCreateOrConnectWithoutRouteInput[]
    createMany?: VehiclePackageCreateManyRouteInputEnvelope
    connect?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RouteGalleryUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteGalleryCreateWithoutRouteInput, RouteGalleryUncheckedCreateWithoutRouteInput> | RouteGalleryCreateWithoutRouteInput[] | RouteGalleryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteGalleryCreateOrConnectWithoutRouteInput | RouteGalleryCreateOrConnectWithoutRouteInput[]
    upsert?: RouteGalleryUpsertWithWhereUniqueWithoutRouteInput | RouteGalleryUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteGalleryCreateManyRouteInputEnvelope
    set?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    disconnect?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    delete?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    connect?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    update?: RouteGalleryUpdateWithWhereUniqueWithoutRouteInput | RouteGalleryUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteGalleryUpdateManyWithWhereWithoutRouteInput | RouteGalleryUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteGalleryScalarWhereInput | RouteGalleryScalarWhereInput[]
  }

  export type VehiclePackageUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehiclePackageCreateWithoutRouteInput, VehiclePackageUncheckedCreateWithoutRouteInput> | VehiclePackageCreateWithoutRouteInput[] | VehiclePackageUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehiclePackageCreateOrConnectWithoutRouteInput | VehiclePackageCreateOrConnectWithoutRouteInput[]
    upsert?: VehiclePackageUpsertWithWhereUniqueWithoutRouteInput | VehiclePackageUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: VehiclePackageCreateManyRouteInputEnvelope
    set?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    disconnect?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    delete?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    connect?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    update?: VehiclePackageUpdateWithWhereUniqueWithoutRouteInput | VehiclePackageUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehiclePackageUpdateManyWithWhereWithoutRouteInput | VehiclePackageUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehiclePackageScalarWhereInput | VehiclePackageScalarWhereInput[]
  }

  export type RouteGalleryUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteGalleryCreateWithoutRouteInput, RouteGalleryUncheckedCreateWithoutRouteInput> | RouteGalleryCreateWithoutRouteInput[] | RouteGalleryUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteGalleryCreateOrConnectWithoutRouteInput | RouteGalleryCreateOrConnectWithoutRouteInput[]
    upsert?: RouteGalleryUpsertWithWhereUniqueWithoutRouteInput | RouteGalleryUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteGalleryCreateManyRouteInputEnvelope
    set?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    disconnect?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    delete?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    connect?: RouteGalleryWhereUniqueInput | RouteGalleryWhereUniqueInput[]
    update?: RouteGalleryUpdateWithWhereUniqueWithoutRouteInput | RouteGalleryUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteGalleryUpdateManyWithWhereWithoutRouteInput | RouteGalleryUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteGalleryScalarWhereInput | RouteGalleryScalarWhereInput[]
  }

  export type VehiclePackageUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<VehiclePackageCreateWithoutRouteInput, VehiclePackageUncheckedCreateWithoutRouteInput> | VehiclePackageCreateWithoutRouteInput[] | VehiclePackageUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: VehiclePackageCreateOrConnectWithoutRouteInput | VehiclePackageCreateOrConnectWithoutRouteInput[]
    upsert?: VehiclePackageUpsertWithWhereUniqueWithoutRouteInput | VehiclePackageUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: VehiclePackageCreateManyRouteInputEnvelope
    set?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    disconnect?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    delete?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    connect?: VehiclePackageWhereUniqueInput | VehiclePackageWhereUniqueInput[]
    update?: VehiclePackageUpdateWithWhereUniqueWithoutRouteInput | VehiclePackageUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: VehiclePackageUpdateManyWithWhereWithoutRouteInput | VehiclePackageUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: VehiclePackageScalarWhereInput | VehiclePackageScalarWhereInput[]
  }

  export type ServiceRouteCreateNestedOneWithoutPackagesInput = {
    create?: XOR<ServiceRouteCreateWithoutPackagesInput, ServiceRouteUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: ServiceRouteCreateOrConnectWithoutPackagesInput
    connect?: ServiceRouteWhereUniqueInput
  }

  export type ServiceRouteUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<ServiceRouteCreateWithoutPackagesInput, ServiceRouteUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: ServiceRouteCreateOrConnectWithoutPackagesInput
    upsert?: ServiceRouteUpsertWithoutPackagesInput
    connect?: ServiceRouteWhereUniqueInput
    update?: XOR<XOR<ServiceRouteUpdateToOneWithWhereWithoutPackagesInput, ServiceRouteUpdateWithoutPackagesInput>, ServiceRouteUncheckedUpdateWithoutPackagesInput>
  }

  export type ServiceRouteCreateNestedOneWithoutGalleryInput = {
    create?: XOR<ServiceRouteCreateWithoutGalleryInput, ServiceRouteUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: ServiceRouteCreateOrConnectWithoutGalleryInput
    connect?: ServiceRouteWhereUniqueInput
  }

  export type ServiceRouteUpdateOneRequiredWithoutGalleryNestedInput = {
    create?: XOR<ServiceRouteCreateWithoutGalleryInput, ServiceRouteUncheckedCreateWithoutGalleryInput>
    connectOrCreate?: ServiceRouteCreateOrConnectWithoutGalleryInput
    upsert?: ServiceRouteUpsertWithoutGalleryInput
    connect?: ServiceRouteWhereUniqueInput
    update?: XOR<XOR<ServiceRouteUpdateToOneWithWhereWithoutGalleryInput, ServiceRouteUpdateWithoutGalleryInput>, ServiceRouteUncheckedUpdateWithoutGalleryInput>
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
    not?: NestedStringFilter<$PrismaModel> | string
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
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type RouteGalleryCreateWithoutRouteInput = {
    imageUrl: string
    altText?: string | null
    caption?: string | null
  }

  export type RouteGalleryUncheckedCreateWithoutRouteInput = {
    id?: number
    imageUrl: string
    altText?: string | null
    caption?: string | null
  }

  export type RouteGalleryCreateOrConnectWithoutRouteInput = {
    where: RouteGalleryWhereUniqueInput
    create: XOR<RouteGalleryCreateWithoutRouteInput, RouteGalleryUncheckedCreateWithoutRouteInput>
  }

  export type RouteGalleryCreateManyRouteInputEnvelope = {
    data: RouteGalleryCreateManyRouteInput | RouteGalleryCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type VehiclePackageCreateWithoutRouteInput = {
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
  }

  export type VehiclePackageUncheckedCreateWithoutRouteInput = {
    id?: number
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
  }

  export type VehiclePackageCreateOrConnectWithoutRouteInput = {
    where: VehiclePackageWhereUniqueInput
    create: XOR<VehiclePackageCreateWithoutRouteInput, VehiclePackageUncheckedCreateWithoutRouteInput>
  }

  export type VehiclePackageCreateManyRouteInputEnvelope = {
    data: VehiclePackageCreateManyRouteInput | VehiclePackageCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type RouteGalleryUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteGalleryWhereUniqueInput
    update: XOR<RouteGalleryUpdateWithoutRouteInput, RouteGalleryUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteGalleryCreateWithoutRouteInput, RouteGalleryUncheckedCreateWithoutRouteInput>
  }

  export type RouteGalleryUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteGalleryWhereUniqueInput
    data: XOR<RouteGalleryUpdateWithoutRouteInput, RouteGalleryUncheckedUpdateWithoutRouteInput>
  }

  export type RouteGalleryUpdateManyWithWhereWithoutRouteInput = {
    where: RouteGalleryScalarWhereInput
    data: XOR<RouteGalleryUpdateManyMutationInput, RouteGalleryUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteGalleryScalarWhereInput = {
    AND?: RouteGalleryScalarWhereInput | RouteGalleryScalarWhereInput[]
    OR?: RouteGalleryScalarWhereInput[]
    NOT?: RouteGalleryScalarWhereInput | RouteGalleryScalarWhereInput[]
    id?: IntFilter<"RouteGallery"> | number
    imageUrl?: StringFilter<"RouteGallery"> | string
    altText?: StringNullableFilter<"RouteGallery"> | string | null
    caption?: StringNullableFilter<"RouteGallery"> | string | null
    routeId?: IntFilter<"RouteGallery"> | number
  }

  export type VehiclePackageUpsertWithWhereUniqueWithoutRouteInput = {
    where: VehiclePackageWhereUniqueInput
    update: XOR<VehiclePackageUpdateWithoutRouteInput, VehiclePackageUncheckedUpdateWithoutRouteInput>
    create: XOR<VehiclePackageCreateWithoutRouteInput, VehiclePackageUncheckedCreateWithoutRouteInput>
  }

  export type VehiclePackageUpdateWithWhereUniqueWithoutRouteInput = {
    where: VehiclePackageWhereUniqueInput
    data: XOR<VehiclePackageUpdateWithoutRouteInput, VehiclePackageUncheckedUpdateWithoutRouteInput>
  }

  export type VehiclePackageUpdateManyWithWhereWithoutRouteInput = {
    where: VehiclePackageScalarWhereInput
    data: XOR<VehiclePackageUpdateManyMutationInput, VehiclePackageUncheckedUpdateManyWithoutRouteInput>
  }

  export type VehiclePackageScalarWhereInput = {
    AND?: VehiclePackageScalarWhereInput | VehiclePackageScalarWhereInput[]
    OR?: VehiclePackageScalarWhereInput[]
    NOT?: VehiclePackageScalarWhereInput | VehiclePackageScalarWhereInput[]
    id?: IntFilter<"VehiclePackage"> | number
    category?: StringFilter<"VehiclePackage"> | string
    carModel?: StringFilter<"VehiclePackage"> | string
    image?: StringFilter<"VehiclePackage"> | string
    price?: IntFilter<"VehiclePackage"> | number
    seats?: IntFilter<"VehiclePackage"> | number
    bags?: IntFilter<"VehiclePackage"> | number
    routeId?: IntFilter<"VehiclePackage"> | number
  }

  export type ServiceRouteCreateWithoutPackagesInput = {
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: RouteGalleryCreateNestedManyWithoutRouteInput
  }

  export type ServiceRouteUncheckedCreateWithoutPackagesInput = {
    id?: number
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gallery?: RouteGalleryUncheckedCreateNestedManyWithoutRouteInput
  }

  export type ServiceRouteCreateOrConnectWithoutPackagesInput = {
    where: ServiceRouteWhereUniqueInput
    create: XOR<ServiceRouteCreateWithoutPackagesInput, ServiceRouteUncheckedCreateWithoutPackagesInput>
  }

  export type ServiceRouteUpsertWithoutPackagesInput = {
    update: XOR<ServiceRouteUpdateWithoutPackagesInput, ServiceRouteUncheckedUpdateWithoutPackagesInput>
    create: XOR<ServiceRouteCreateWithoutPackagesInput, ServiceRouteUncheckedCreateWithoutPackagesInput>
    where?: ServiceRouteWhereInput
  }

  export type ServiceRouteUpdateToOneWithWhereWithoutPackagesInput = {
    where?: ServiceRouteWhereInput
    data: XOR<ServiceRouteUpdateWithoutPackagesInput, ServiceRouteUncheckedUpdateWithoutPackagesInput>
  }

  export type ServiceRouteUpdateWithoutPackagesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: RouteGalleryUpdateManyWithoutRouteNestedInput
  }

  export type ServiceRouteUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gallery?: RouteGalleryUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type ServiceRouteCreateWithoutGalleryInput = {
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: VehiclePackageCreateNestedManyWithoutRouteInput
  }

  export type ServiceRouteUncheckedCreateWithoutGalleryInput = {
    id?: number
    slug: string
    isActive?: boolean
    title: string
    tagline: string
    heroImage: string
    distance: string
    duration: string
    basePrice: number
    description: string
    highlights: JsonNullValueInput | InputJsonValue
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    keywords?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    packages?: VehiclePackageUncheckedCreateNestedManyWithoutRouteInput
  }

  export type ServiceRouteCreateOrConnectWithoutGalleryInput = {
    where: ServiceRouteWhereUniqueInput
    create: XOR<ServiceRouteCreateWithoutGalleryInput, ServiceRouteUncheckedCreateWithoutGalleryInput>
  }

  export type ServiceRouteUpsertWithoutGalleryInput = {
    update: XOR<ServiceRouteUpdateWithoutGalleryInput, ServiceRouteUncheckedUpdateWithoutGalleryInput>
    create: XOR<ServiceRouteCreateWithoutGalleryInput, ServiceRouteUncheckedCreateWithoutGalleryInput>
    where?: ServiceRouteWhereInput
  }

  export type ServiceRouteUpdateToOneWithWhereWithoutGalleryInput = {
    where?: ServiceRouteWhereInput
    data: XOR<ServiceRouteUpdateWithoutGalleryInput, ServiceRouteUncheckedUpdateWithoutGalleryInput>
  }

  export type ServiceRouteUpdateWithoutGalleryInput = {
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: VehiclePackageUpdateManyWithoutRouteNestedInput
  }

  export type ServiceRouteUncheckedUpdateWithoutGalleryInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    tagline?: StringFieldUpdateOperationsInput | string
    heroImage?: StringFieldUpdateOperationsInput | string
    distance?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    basePrice?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    keywords?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packages?: VehiclePackageUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteGalleryCreateManyRouteInput = {
    id?: number
    imageUrl: string
    altText?: string | null
    caption?: string | null
  }

  export type VehiclePackageCreateManyRouteInput = {
    id?: number
    category: string
    carModel: string
    image: string
    price: number
    seats: number
    bags: number
  }

  export type RouteGalleryUpdateWithoutRouteInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteGalleryUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteGalleryUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiclePackageUpdateWithoutRouteInput = {
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
  }

  export type VehiclePackageUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
  }

  export type VehiclePackageUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    carModel?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    seats?: IntFieldUpdateOperationsInput | number
    bags?: IntFieldUpdateOperationsInput | number
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
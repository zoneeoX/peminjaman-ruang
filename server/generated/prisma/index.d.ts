
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
 * Model Gedung
 * 
 */
export type Gedung = $Result.DefaultSelection<Prisma.$GedungPayload>
/**
 * Model Ruangan
 * 
 */
export type Ruangan = $Result.DefaultSelection<Prisma.$RuanganPayload>
/**
 * Model Peminjaman
 * 
 */
export type Peminjaman = $Result.DefaultSelection<Prisma.$PeminjamanPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.gedung`: Exposes CRUD operations for the **Gedung** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gedungs
    * const gedungs = await prisma.gedung.findMany()
    * ```
    */
  get gedung(): Prisma.GedungDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ruangan`: Exposes CRUD operations for the **Ruangan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ruangans
    * const ruangans = await prisma.ruangan.findMany()
    * ```
    */
  get ruangan(): Prisma.RuanganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peminjaman`: Exposes CRUD operations for the **Peminjaman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peminjamen
    * const peminjamen = await prisma.peminjaman.findMany()
    * ```
    */
  get peminjaman(): Prisma.PeminjamanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Gedung: 'Gedung',
    Ruangan: 'Ruangan',
    Peminjaman: 'Peminjaman'
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
      modelProps: "user" | "gedung" | "ruangan" | "peminjaman"
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
      Gedung: {
        payload: Prisma.$GedungPayload<ExtArgs>
        fields: Prisma.GedungFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GedungFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GedungFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          findFirst: {
            args: Prisma.GedungFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GedungFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          findMany: {
            args: Prisma.GedungFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>[]
          }
          create: {
            args: Prisma.GedungCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          createMany: {
            args: Prisma.GedungCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GedungCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>[]
          }
          delete: {
            args: Prisma.GedungDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          update: {
            args: Prisma.GedungUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          deleteMany: {
            args: Prisma.GedungDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GedungUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GedungUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>[]
          }
          upsert: {
            args: Prisma.GedungUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GedungPayload>
          }
          aggregate: {
            args: Prisma.GedungAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGedung>
          }
          groupBy: {
            args: Prisma.GedungGroupByArgs<ExtArgs>
            result: $Utils.Optional<GedungGroupByOutputType>[]
          }
          count: {
            args: Prisma.GedungCountArgs<ExtArgs>
            result: $Utils.Optional<GedungCountAggregateOutputType> | number
          }
        }
      }
      Ruangan: {
        payload: Prisma.$RuanganPayload<ExtArgs>
        fields: Prisma.RuanganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuanganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuanganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findFirst: {
            args: Prisma.RuanganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuanganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          findMany: {
            args: Prisma.RuanganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          create: {
            args: Prisma.RuanganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          createMany: {
            args: Prisma.RuanganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuanganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          delete: {
            args: Prisma.RuanganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          update: {
            args: Prisma.RuanganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          deleteMany: {
            args: Prisma.RuanganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuanganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuanganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>[]
          }
          upsert: {
            args: Prisma.RuanganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RuanganPayload>
          }
          aggregate: {
            args: Prisma.RuanganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRuangan>
          }
          groupBy: {
            args: Prisma.RuanganGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuanganGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuanganCountArgs<ExtArgs>
            result: $Utils.Optional<RuanganCountAggregateOutputType> | number
          }
        }
      }
      Peminjaman: {
        payload: Prisma.$PeminjamanPayload<ExtArgs>
        fields: Prisma.PeminjamanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeminjamanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeminjamanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findFirst: {
            args: Prisma.PeminjamanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeminjamanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          findMany: {
            args: Prisma.PeminjamanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          create: {
            args: Prisma.PeminjamanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          createMany: {
            args: Prisma.PeminjamanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeminjamanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          delete: {
            args: Prisma.PeminjamanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          update: {
            args: Prisma.PeminjamanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          deleteMany: {
            args: Prisma.PeminjamanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeminjamanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeminjamanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>[]
          }
          upsert: {
            args: Prisma.PeminjamanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeminjamanPayload>
          }
          aggregate: {
            args: Prisma.PeminjamanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeminjaman>
          }
          groupBy: {
            args: Prisma.PeminjamanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeminjamanCountArgs<ExtArgs>
            result: $Utils.Optional<PeminjamanCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    gedung?: GedungOmit
    ruangan?: RuanganOmit
    peminjaman?: PeminjamanOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    Gedung: number
    Ruangan: number
    Peminjaman: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Gedung?: boolean | UserCountOutputTypeCountGedungArgs
    Ruangan?: boolean | UserCountOutputTypeCountRuanganArgs
    Peminjaman?: boolean | UserCountOutputTypeCountPeminjamanArgs
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
  export type UserCountOutputTypeCountGedungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GedungWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRuanganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
  }


  /**
   * Count Type GedungCountOutputType
   */

  export type GedungCountOutputType = {
    Ruangan: number
  }

  export type GedungCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ruangan?: boolean | GedungCountOutputTypeCountRuanganArgs
  }

  // Custom InputTypes
  /**
   * GedungCountOutputType without action
   */
  export type GedungCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GedungCountOutputType
     */
    select?: GedungCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GedungCountOutputType without action
   */
  export type GedungCountOutputTypeCountRuanganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
  }


  /**
   * Count Type RuanganCountOutputType
   */

  export type RuanganCountOutputType = {
    Peminjaman: number
  }

  export type RuanganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Peminjaman?: boolean | RuanganCountOutputTypeCountPeminjamanArgs
  }

  // Custom InputTypes
  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuanganCountOutputType
     */
    select?: RuanganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuanganCountOutputType without action
   */
  export type RuanganCountOutputTypeCountPeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
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
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
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
    email: string
    password: string
    role: $Enums.Role
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
    email?: boolean
    password?: boolean
    role?: boolean
    Gedung?: boolean | User$GedungArgs<ExtArgs>
    Ruangan?: boolean | User$RuanganArgs<ExtArgs>
    Peminjaman?: boolean | User$PeminjamanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Gedung?: boolean | User$GedungArgs<ExtArgs>
    Ruangan?: boolean | User$RuanganArgs<ExtArgs>
    Peminjaman?: boolean | User$PeminjamanArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Gedung: Prisma.$GedungPayload<ExtArgs>[]
      Ruangan: Prisma.$RuanganPayload<ExtArgs>[]
      Peminjaman: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
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
    Gedung<T extends User$GedungArgs<ExtArgs> = {}>(args?: Subset<T, User$GedungArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ruangan<T extends User$RuanganArgs<ExtArgs> = {}>(args?: Subset<T, User$RuanganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Peminjaman<T extends User$PeminjamanArgs<ExtArgs> = {}>(args?: Subset<T, User$PeminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
   * User.Gedung
   */
  export type User$GedungArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    where?: GedungWhereInput
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    cursor?: GedungWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * User.Ruangan
   */
  export type User$RuanganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    cursor?: RuanganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * User.Peminjaman
   */
  export type User$PeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
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
   * Model Gedung
   */

  export type AggregateGedung = {
    _count: GedungCountAggregateOutputType | null
    _min: GedungMinAggregateOutputType | null
    _max: GedungMaxAggregateOutputType | null
  }

  export type GedungMinAggregateOutputType = {
    id: string | null
    nama: string | null
    authorId: string | null
    created_at: Date | null
  }

  export type GedungMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    authorId: string | null
    created_at: Date | null
  }

  export type GedungCountAggregateOutputType = {
    id: number
    nama: number
    authorId: number
    created_at: number
    _all: number
  }


  export type GedungMinAggregateInputType = {
    id?: true
    nama?: true
    authorId?: true
    created_at?: true
  }

  export type GedungMaxAggregateInputType = {
    id?: true
    nama?: true
    authorId?: true
    created_at?: true
  }

  export type GedungCountAggregateInputType = {
    id?: true
    nama?: true
    authorId?: true
    created_at?: true
    _all?: true
  }

  export type GedungAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gedung to aggregate.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gedungs
    **/
    _count?: true | GedungCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GedungMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GedungMaxAggregateInputType
  }

  export type GetGedungAggregateType<T extends GedungAggregateArgs> = {
        [P in keyof T & keyof AggregateGedung]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGedung[P]>
      : GetScalarType<T[P], AggregateGedung[P]>
  }




  export type GedungGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GedungWhereInput
    orderBy?: GedungOrderByWithAggregationInput | GedungOrderByWithAggregationInput[]
    by: GedungScalarFieldEnum[] | GedungScalarFieldEnum
    having?: GedungScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GedungCountAggregateInputType | true
    _min?: GedungMinAggregateInputType
    _max?: GedungMaxAggregateInputType
  }

  export type GedungGroupByOutputType = {
    id: string
    nama: string
    authorId: string
    created_at: Date
    _count: GedungCountAggregateOutputType | null
    _min: GedungMinAggregateOutputType | null
    _max: GedungMaxAggregateOutputType | null
  }

  type GetGedungGroupByPayload<T extends GedungGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GedungGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GedungGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GedungGroupByOutputType[P]>
            : GetScalarType<T[P], GedungGroupByOutputType[P]>
        }
      >
    >


  export type GedungSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    authorId?: boolean
    created_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    Ruangan?: boolean | Gedung$RuanganArgs<ExtArgs>
    _count?: boolean | GedungCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gedung"]>

  export type GedungSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    authorId?: boolean
    created_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gedung"]>

  export type GedungSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    authorId?: boolean
    created_at?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gedung"]>

  export type GedungSelectScalar = {
    id?: boolean
    nama?: boolean
    authorId?: boolean
    created_at?: boolean
  }

  export type GedungOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "authorId" | "created_at", ExtArgs["result"]["gedung"]>
  export type GedungInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    Ruangan?: boolean | Gedung$RuanganArgs<ExtArgs>
    _count?: boolean | GedungCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GedungIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GedungIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GedungPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gedung"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      Ruangan: Prisma.$RuanganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      authorId: string
      created_at: Date
    }, ExtArgs["result"]["gedung"]>
    composites: {}
  }

  type GedungGetPayload<S extends boolean | null | undefined | GedungDefaultArgs> = $Result.GetResult<Prisma.$GedungPayload, S>

  type GedungCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GedungFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GedungCountAggregateInputType | true
    }

  export interface GedungDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gedung'], meta: { name: 'Gedung' } }
    /**
     * Find zero or one Gedung that matches the filter.
     * @param {GedungFindUniqueArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GedungFindUniqueArgs>(args: SelectSubset<T, GedungFindUniqueArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gedung that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GedungFindUniqueOrThrowArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GedungFindUniqueOrThrowArgs>(args: SelectSubset<T, GedungFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gedung that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungFindFirstArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GedungFindFirstArgs>(args?: SelectSubset<T, GedungFindFirstArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gedung that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungFindFirstOrThrowArgs} args - Arguments to find a Gedung
     * @example
     * // Get one Gedung
     * const gedung = await prisma.gedung.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GedungFindFirstOrThrowArgs>(args?: SelectSubset<T, GedungFindFirstOrThrowArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gedungs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gedungs
     * const gedungs = await prisma.gedung.findMany()
     * 
     * // Get first 10 Gedungs
     * const gedungs = await prisma.gedung.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gedungWithIdOnly = await prisma.gedung.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GedungFindManyArgs>(args?: SelectSubset<T, GedungFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gedung.
     * @param {GedungCreateArgs} args - Arguments to create a Gedung.
     * @example
     * // Create one Gedung
     * const Gedung = await prisma.gedung.create({
     *   data: {
     *     // ... data to create a Gedung
     *   }
     * })
     * 
     */
    create<T extends GedungCreateArgs>(args: SelectSubset<T, GedungCreateArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gedungs.
     * @param {GedungCreateManyArgs} args - Arguments to create many Gedungs.
     * @example
     * // Create many Gedungs
     * const gedung = await prisma.gedung.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GedungCreateManyArgs>(args?: SelectSubset<T, GedungCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gedungs and returns the data saved in the database.
     * @param {GedungCreateManyAndReturnArgs} args - Arguments to create many Gedungs.
     * @example
     * // Create many Gedungs
     * const gedung = await prisma.gedung.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gedungs and only return the `id`
     * const gedungWithIdOnly = await prisma.gedung.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GedungCreateManyAndReturnArgs>(args?: SelectSubset<T, GedungCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gedung.
     * @param {GedungDeleteArgs} args - Arguments to delete one Gedung.
     * @example
     * // Delete one Gedung
     * const Gedung = await prisma.gedung.delete({
     *   where: {
     *     // ... filter to delete one Gedung
     *   }
     * })
     * 
     */
    delete<T extends GedungDeleteArgs>(args: SelectSubset<T, GedungDeleteArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gedung.
     * @param {GedungUpdateArgs} args - Arguments to update one Gedung.
     * @example
     * // Update one Gedung
     * const gedung = await prisma.gedung.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GedungUpdateArgs>(args: SelectSubset<T, GedungUpdateArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gedungs.
     * @param {GedungDeleteManyArgs} args - Arguments to filter Gedungs to delete.
     * @example
     * // Delete a few Gedungs
     * const { count } = await prisma.gedung.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GedungDeleteManyArgs>(args?: SelectSubset<T, GedungDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gedungs
     * const gedung = await prisma.gedung.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GedungUpdateManyArgs>(args: SelectSubset<T, GedungUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gedungs and returns the data updated in the database.
     * @param {GedungUpdateManyAndReturnArgs} args - Arguments to update many Gedungs.
     * @example
     * // Update many Gedungs
     * const gedung = await prisma.gedung.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gedungs and only return the `id`
     * const gedungWithIdOnly = await prisma.gedung.updateManyAndReturn({
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
    updateManyAndReturn<T extends GedungUpdateManyAndReturnArgs>(args: SelectSubset<T, GedungUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gedung.
     * @param {GedungUpsertArgs} args - Arguments to update or create a Gedung.
     * @example
     * // Update or create a Gedung
     * const gedung = await prisma.gedung.upsert({
     *   create: {
     *     // ... data to create a Gedung
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gedung we want to update
     *   }
     * })
     */
    upsert<T extends GedungUpsertArgs>(args: SelectSubset<T, GedungUpsertArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gedungs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungCountArgs} args - Arguments to filter Gedungs to count.
     * @example
     * // Count the number of Gedungs
     * const count = await prisma.gedung.count({
     *   where: {
     *     // ... the filter for the Gedungs we want to count
     *   }
     * })
    **/
    count<T extends GedungCountArgs>(
      args?: Subset<T, GedungCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GedungCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GedungAggregateArgs>(args: Subset<T, GedungAggregateArgs>): Prisma.PrismaPromise<GetGedungAggregateType<T>>

    /**
     * Group by Gedung.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GedungGroupByArgs} args - Group by arguments.
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
      T extends GedungGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GedungGroupByArgs['orderBy'] }
        : { orderBy?: GedungGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GedungGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGedungGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gedung model
   */
  readonly fields: GedungFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gedung.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GedungClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ruangan<T extends Gedung$RuanganArgs<ExtArgs> = {}>(args?: Subset<T, Gedung$RuanganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gedung model
   */
  interface GedungFieldRefs {
    readonly id: FieldRef<"Gedung", 'String'>
    readonly nama: FieldRef<"Gedung", 'String'>
    readonly authorId: FieldRef<"Gedung", 'String'>
    readonly created_at: FieldRef<"Gedung", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Gedung findUnique
   */
  export type GedungFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung findUniqueOrThrow
   */
  export type GedungFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung findFirst
   */
  export type GedungFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gedungs.
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gedungs.
     */
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * Gedung findFirstOrThrow
   */
  export type GedungFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedung to fetch.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gedungs.
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gedungs.
     */
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * Gedung findMany
   */
  export type GedungFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter, which Gedungs to fetch.
     */
    where?: GedungWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gedungs to fetch.
     */
    orderBy?: GedungOrderByWithRelationInput | GedungOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gedungs.
     */
    cursor?: GedungWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gedungs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gedungs.
     */
    skip?: number
    distinct?: GedungScalarFieldEnum | GedungScalarFieldEnum[]
  }

  /**
   * Gedung create
   */
  export type GedungCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * The data needed to create a Gedung.
     */
    data: XOR<GedungCreateInput, GedungUncheckedCreateInput>
  }

  /**
   * Gedung createMany
   */
  export type GedungCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gedungs.
     */
    data: GedungCreateManyInput | GedungCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gedung createManyAndReturn
   */
  export type GedungCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * The data used to create many Gedungs.
     */
    data: GedungCreateManyInput | GedungCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gedung update
   */
  export type GedungUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * The data needed to update a Gedung.
     */
    data: XOR<GedungUpdateInput, GedungUncheckedUpdateInput>
    /**
     * Choose, which Gedung to update.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung updateMany
   */
  export type GedungUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gedungs.
     */
    data: XOR<GedungUpdateManyMutationInput, GedungUncheckedUpdateManyInput>
    /**
     * Filter which Gedungs to update
     */
    where?: GedungWhereInput
    /**
     * Limit how many Gedungs to update.
     */
    limit?: number
  }

  /**
   * Gedung updateManyAndReturn
   */
  export type GedungUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * The data used to update Gedungs.
     */
    data: XOR<GedungUpdateManyMutationInput, GedungUncheckedUpdateManyInput>
    /**
     * Filter which Gedungs to update
     */
    where?: GedungWhereInput
    /**
     * Limit how many Gedungs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Gedung upsert
   */
  export type GedungUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * The filter to search for the Gedung to update in case it exists.
     */
    where: GedungWhereUniqueInput
    /**
     * In case the Gedung found by the `where` argument doesn't exist, create a new Gedung with this data.
     */
    create: XOR<GedungCreateInput, GedungUncheckedCreateInput>
    /**
     * In case the Gedung was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GedungUpdateInput, GedungUncheckedUpdateInput>
  }

  /**
   * Gedung delete
   */
  export type GedungDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
    /**
     * Filter which Gedung to delete.
     */
    where: GedungWhereUniqueInput
  }

  /**
   * Gedung deleteMany
   */
  export type GedungDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gedungs to delete
     */
    where?: GedungWhereInput
    /**
     * Limit how many Gedungs to delete.
     */
    limit?: number
  }

  /**
   * Gedung.Ruangan
   */
  export type Gedung$RuanganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    cursor?: RuanganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Gedung without action
   */
  export type GedungDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gedung
     */
    select?: GedungSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gedung
     */
    omit?: GedungOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GedungInclude<ExtArgs> | null
  }


  /**
   * Model Ruangan
   */

  export type AggregateRuangan = {
    _count: RuanganCountAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  export type RuanganMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    authorId: string | null
    created_at: Date | null
    gedungId: string | null
  }

  export type RuanganMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    authorId: string | null
    created_at: Date | null
    gedungId: string | null
  }

  export type RuanganCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    authorId: number
    created_at: number
    gedungId: number
    _all: number
  }


  export type RuanganMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    authorId?: true
    created_at?: true
    gedungId?: true
  }

  export type RuanganMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    authorId?: true
    created_at?: true
    gedungId?: true
  }

  export type RuanganCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    authorId?: true
    created_at?: true
    gedungId?: true
    _all?: true
  }

  export type RuanganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangan to aggregate.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ruangans
    **/
    _count?: true | RuanganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuanganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuanganMaxAggregateInputType
  }

  export type GetRuanganAggregateType<T extends RuanganAggregateArgs> = {
        [P in keyof T & keyof AggregateRuangan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuangan[P]>
      : GetScalarType<T[P], AggregateRuangan[P]>
  }




  export type RuanganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuanganWhereInput
    orderBy?: RuanganOrderByWithAggregationInput | RuanganOrderByWithAggregationInput[]
    by: RuanganScalarFieldEnum[] | RuanganScalarFieldEnum
    having?: RuanganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuanganCountAggregateInputType | true
    _min?: RuanganMinAggregateInputType
    _max?: RuanganMaxAggregateInputType
  }

  export type RuanganGroupByOutputType = {
    id: string
    nama: string
    deskripsi: string
    authorId: string
    created_at: Date
    gedungId: string
    _count: RuanganCountAggregateOutputType | null
    _min: RuanganMinAggregateOutputType | null
    _max: RuanganMaxAggregateOutputType | null
  }

  type GetRuanganGroupByPayload<T extends RuanganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuanganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuanganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuanganGroupByOutputType[P]>
            : GetScalarType<T[P], RuanganGroupByOutputType[P]>
        }
      >
    >


  export type RuanganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    authorId?: boolean
    created_at?: boolean
    gedungId?: boolean
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    Peminjaman?: boolean | Ruangan$PeminjamanArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    authorId?: boolean
    created_at?: boolean
    gedungId?: boolean
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    authorId?: boolean
    created_at?: boolean
    gedungId?: boolean
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ruangan"]>

  export type RuanganSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    authorId?: boolean
    created_at?: boolean
    gedungId?: boolean
  }

  export type RuanganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "authorId" | "created_at" | "gedungId", ExtArgs["result"]["ruangan"]>
  export type RuanganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    Peminjaman?: boolean | Ruangan$PeminjamanArgs<ExtArgs>
    _count?: boolean | RuanganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuanganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RuanganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gedung?: boolean | GedungDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RuanganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ruangan"
    objects: {
      gedung: Prisma.$GedungPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      Peminjaman: Prisma.$PeminjamanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string
      authorId: string
      created_at: Date
      gedungId: string
    }, ExtArgs["result"]["ruangan"]>
    composites: {}
  }

  type RuanganGetPayload<S extends boolean | null | undefined | RuanganDefaultArgs> = $Result.GetResult<Prisma.$RuanganPayload, S>

  type RuanganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuanganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuanganCountAggregateInputType | true
    }

  export interface RuanganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ruangan'], meta: { name: 'Ruangan' } }
    /**
     * Find zero or one Ruangan that matches the filter.
     * @param {RuanganFindUniqueArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuanganFindUniqueArgs>(args: SelectSubset<T, RuanganFindUniqueArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ruangan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuanganFindUniqueOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuanganFindUniqueOrThrowArgs>(args: SelectSubset<T, RuanganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuanganFindFirstArgs>(args?: SelectSubset<T, RuanganFindFirstArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ruangan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindFirstOrThrowArgs} args - Arguments to find a Ruangan
     * @example
     * // Get one Ruangan
     * const ruangan = await prisma.ruangan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuanganFindFirstOrThrowArgs>(args?: SelectSubset<T, RuanganFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ruangans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ruangans
     * const ruangans = await prisma.ruangan.findMany()
     * 
     * // Get first 10 Ruangans
     * const ruangans = await prisma.ruangan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuanganFindManyArgs>(args?: SelectSubset<T, RuanganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ruangan.
     * @param {RuanganCreateArgs} args - Arguments to create a Ruangan.
     * @example
     * // Create one Ruangan
     * const Ruangan = await prisma.ruangan.create({
     *   data: {
     *     // ... data to create a Ruangan
     *   }
     * })
     * 
     */
    create<T extends RuanganCreateArgs>(args: SelectSubset<T, RuanganCreateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ruangans.
     * @param {RuanganCreateManyArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuanganCreateManyArgs>(args?: SelectSubset<T, RuanganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ruangans and returns the data saved in the database.
     * @param {RuanganCreateManyAndReturnArgs} args - Arguments to create many Ruangans.
     * @example
     * // Create many Ruangans
     * const ruangan = await prisma.ruangan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ruangans and only return the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuanganCreateManyAndReturnArgs>(args?: SelectSubset<T, RuanganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ruangan.
     * @param {RuanganDeleteArgs} args - Arguments to delete one Ruangan.
     * @example
     * // Delete one Ruangan
     * const Ruangan = await prisma.ruangan.delete({
     *   where: {
     *     // ... filter to delete one Ruangan
     *   }
     * })
     * 
     */
    delete<T extends RuanganDeleteArgs>(args: SelectSubset<T, RuanganDeleteArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ruangan.
     * @param {RuanganUpdateArgs} args - Arguments to update one Ruangan.
     * @example
     * // Update one Ruangan
     * const ruangan = await prisma.ruangan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuanganUpdateArgs>(args: SelectSubset<T, RuanganUpdateArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ruangans.
     * @param {RuanganDeleteManyArgs} args - Arguments to filter Ruangans to delete.
     * @example
     * // Delete a few Ruangans
     * const { count } = await prisma.ruangan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuanganDeleteManyArgs>(args?: SelectSubset<T, RuanganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuanganUpdateManyArgs>(args: SelectSubset<T, RuanganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ruangans and returns the data updated in the database.
     * @param {RuanganUpdateManyAndReturnArgs} args - Arguments to update many Ruangans.
     * @example
     * // Update many Ruangans
     * const ruangan = await prisma.ruangan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ruangans and only return the `id`
     * const ruanganWithIdOnly = await prisma.ruangan.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuanganUpdateManyAndReturnArgs>(args: SelectSubset<T, RuanganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ruangan.
     * @param {RuanganUpsertArgs} args - Arguments to update or create a Ruangan.
     * @example
     * // Update or create a Ruangan
     * const ruangan = await prisma.ruangan.upsert({
     *   create: {
     *     // ... data to create a Ruangan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ruangan we want to update
     *   }
     * })
     */
    upsert<T extends RuanganUpsertArgs>(args: SelectSubset<T, RuanganUpsertArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ruangans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganCountArgs} args - Arguments to filter Ruangans to count.
     * @example
     * // Count the number of Ruangans
     * const count = await prisma.ruangan.count({
     *   where: {
     *     // ... the filter for the Ruangans we want to count
     *   }
     * })
    **/
    count<T extends RuanganCountArgs>(
      args?: Subset<T, RuanganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuanganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuanganAggregateArgs>(args: Subset<T, RuanganAggregateArgs>): Prisma.PrismaPromise<GetRuanganAggregateType<T>>

    /**
     * Group by Ruangan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuanganGroupByArgs} args - Group by arguments.
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
      T extends RuanganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuanganGroupByArgs['orderBy'] }
        : { orderBy?: RuanganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuanganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuanganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ruangan model
   */
  readonly fields: RuanganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ruangan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuanganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gedung<T extends GedungDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GedungDefaultArgs<ExtArgs>>): Prisma__GedungClient<$Result.GetResult<Prisma.$GedungPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Peminjaman<T extends Ruangan$PeminjamanArgs<ExtArgs> = {}>(args?: Subset<T, Ruangan$PeminjamanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ruangan model
   */
  interface RuanganFieldRefs {
    readonly id: FieldRef<"Ruangan", 'String'>
    readonly nama: FieldRef<"Ruangan", 'String'>
    readonly deskripsi: FieldRef<"Ruangan", 'String'>
    readonly authorId: FieldRef<"Ruangan", 'String'>
    readonly created_at: FieldRef<"Ruangan", 'DateTime'>
    readonly gedungId: FieldRef<"Ruangan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ruangan findUnique
   */
  export type RuanganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findUniqueOrThrow
   */
  export type RuanganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan findFirst
   */
  export type RuanganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findFirstOrThrow
   */
  export type RuanganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangan to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ruangans.
     */
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan findMany
   */
  export type RuanganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter, which Ruangans to fetch.
     */
    where?: RuanganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ruangans to fetch.
     */
    orderBy?: RuanganOrderByWithRelationInput | RuanganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ruangans.
     */
    cursor?: RuanganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ruangans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ruangans.
     */
    skip?: number
    distinct?: RuanganScalarFieldEnum | RuanganScalarFieldEnum[]
  }

  /**
   * Ruangan create
   */
  export type RuanganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to create a Ruangan.
     */
    data: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
  }

  /**
   * Ruangan createMany
   */
  export type RuanganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ruangan createManyAndReturn
   */
  export type RuanganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to create many Ruangans.
     */
    data: RuanganCreateManyInput | RuanganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruangan update
   */
  export type RuanganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The data needed to update a Ruangan.
     */
    data: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
    /**
     * Choose, which Ruangan to update.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan updateMany
   */
  export type RuanganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
  }

  /**
   * Ruangan updateManyAndReturn
   */
  export type RuanganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * The data used to update Ruangans.
     */
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyInput>
    /**
     * Filter which Ruangans to update
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ruangan upsert
   */
  export type RuanganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * The filter to search for the Ruangan to update in case it exists.
     */
    where: RuanganWhereUniqueInput
    /**
     * In case the Ruangan found by the `where` argument doesn't exist, create a new Ruangan with this data.
     */
    create: XOR<RuanganCreateInput, RuanganUncheckedCreateInput>
    /**
     * In case the Ruangan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuanganUpdateInput, RuanganUncheckedUpdateInput>
  }

  /**
   * Ruangan delete
   */
  export type RuanganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
    /**
     * Filter which Ruangan to delete.
     */
    where: RuanganWhereUniqueInput
  }

  /**
   * Ruangan deleteMany
   */
  export type RuanganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ruangans to delete
     */
    where?: RuanganWhereInput
    /**
     * Limit how many Ruangans to delete.
     */
    limit?: number
  }

  /**
   * Ruangan.Peminjaman
   */
  export type Ruangan$PeminjamanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    cursor?: PeminjamanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Ruangan without action
   */
  export type RuanganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ruangan
     */
    select?: RuanganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ruangan
     */
    omit?: RuanganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuanganInclude<ExtArgs> | null
  }


  /**
   * Model Peminjaman
   */

  export type AggregatePeminjaman = {
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  export type PeminjamanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    ruanganId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.Status | null
    alasan: string | null
    catatan: string | null
    createdAt: Date | null
  }

  export type PeminjamanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    ruanganId: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.Status | null
    alasan: string | null
    catatan: string | null
    createdAt: Date | null
  }

  export type PeminjamanCountAggregateOutputType = {
    id: number
    userId: number
    ruanganId: number
    startTime: number
    endTime: number
    status: number
    alasan: number
    catatan: number
    createdAt: number
    _all: number
  }


  export type PeminjamanMinAggregateInputType = {
    id?: true
    userId?: true
    ruanganId?: true
    startTime?: true
    endTime?: true
    status?: true
    alasan?: true
    catatan?: true
    createdAt?: true
  }

  export type PeminjamanMaxAggregateInputType = {
    id?: true
    userId?: true
    ruanganId?: true
    startTime?: true
    endTime?: true
    status?: true
    alasan?: true
    catatan?: true
    createdAt?: true
  }

  export type PeminjamanCountAggregateInputType = {
    id?: true
    userId?: true
    ruanganId?: true
    startTime?: true
    endTime?: true
    status?: true
    alasan?: true
    catatan?: true
    createdAt?: true
    _all?: true
  }

  export type PeminjamanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjaman to aggregate.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peminjamen
    **/
    _count?: true | PeminjamanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeminjamanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeminjamanMaxAggregateInputType
  }

  export type GetPeminjamanAggregateType<T extends PeminjamanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeminjaman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeminjaman[P]>
      : GetScalarType<T[P], AggregatePeminjaman[P]>
  }




  export type PeminjamanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeminjamanWhereInput
    orderBy?: PeminjamanOrderByWithAggregationInput | PeminjamanOrderByWithAggregationInput[]
    by: PeminjamanScalarFieldEnum[] | PeminjamanScalarFieldEnum
    having?: PeminjamanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeminjamanCountAggregateInputType | true
    _min?: PeminjamanMinAggregateInputType
    _max?: PeminjamanMaxAggregateInputType
  }

  export type PeminjamanGroupByOutputType = {
    id: string
    userId: string
    ruanganId: string
    startTime: Date
    endTime: Date
    status: $Enums.Status
    alasan: string | null
    catatan: string | null
    createdAt: Date
    _count: PeminjamanCountAggregateOutputType | null
    _min: PeminjamanMinAggregateOutputType | null
    _max: PeminjamanMaxAggregateOutputType | null
  }

  type GetPeminjamanGroupByPayload<T extends PeminjamanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeminjamanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeminjamanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
            : GetScalarType<T[P], PeminjamanGroupByOutputType[P]>
        }
      >
    >


  export type PeminjamanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ruanganId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    alasan?: boolean
    catatan?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ruanganId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    alasan?: boolean
    catatan?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ruanganId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    alasan?: boolean
    catatan?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peminjaman"]>

  export type PeminjamanSelectScalar = {
    id?: boolean
    userId?: boolean
    ruanganId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    alasan?: boolean
    catatan?: boolean
    createdAt?: boolean
  }

  export type PeminjamanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "ruanganId" | "startTime" | "endTime" | "status" | "alasan" | "catatan" | "createdAt", ExtArgs["result"]["peminjaman"]>
  export type PeminjamanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }
  export type PeminjamanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }
  export type PeminjamanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ruangan?: boolean | RuanganDefaultArgs<ExtArgs>
  }

  export type $PeminjamanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peminjaman"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ruangan: Prisma.$RuanganPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      ruanganId: string
      startTime: Date
      endTime: Date
      status: $Enums.Status
      alasan: string | null
      catatan: string | null
      createdAt: Date
    }, ExtArgs["result"]["peminjaman"]>
    composites: {}
  }

  type PeminjamanGetPayload<S extends boolean | null | undefined | PeminjamanDefaultArgs> = $Result.GetResult<Prisma.$PeminjamanPayload, S>

  type PeminjamanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeminjamanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeminjamanCountAggregateInputType | true
    }

  export interface PeminjamanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peminjaman'], meta: { name: 'Peminjaman' } }
    /**
     * Find zero or one Peminjaman that matches the filter.
     * @param {PeminjamanFindUniqueArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeminjamanFindUniqueArgs>(args: SelectSubset<T, PeminjamanFindUniqueArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Peminjaman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeminjamanFindUniqueOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeminjamanFindUniqueOrThrowArgs>(args: SelectSubset<T, PeminjamanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeminjamanFindFirstArgs>(args?: SelectSubset<T, PeminjamanFindFirstArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Peminjaman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindFirstOrThrowArgs} args - Arguments to find a Peminjaman
     * @example
     * // Get one Peminjaman
     * const peminjaman = await prisma.peminjaman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeminjamanFindFirstOrThrowArgs>(args?: SelectSubset<T, PeminjamanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Peminjamen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany()
     * 
     * // Get first 10 Peminjamen
     * const peminjamen = await prisma.peminjaman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeminjamanFindManyArgs>(args?: SelectSubset<T, PeminjamanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Peminjaman.
     * @param {PeminjamanCreateArgs} args - Arguments to create a Peminjaman.
     * @example
     * // Create one Peminjaman
     * const Peminjaman = await prisma.peminjaman.create({
     *   data: {
     *     // ... data to create a Peminjaman
     *   }
     * })
     * 
     */
    create<T extends PeminjamanCreateArgs>(args: SelectSubset<T, PeminjamanCreateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Peminjamen.
     * @param {PeminjamanCreateManyArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeminjamanCreateManyArgs>(args?: SelectSubset<T, PeminjamanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peminjamen and returns the data saved in the database.
     * @param {PeminjamanCreateManyAndReturnArgs} args - Arguments to create many Peminjamen.
     * @example
     * // Create many Peminjamen
     * const peminjaman = await prisma.peminjaman.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peminjamen and only return the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeminjamanCreateManyAndReturnArgs>(args?: SelectSubset<T, PeminjamanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Peminjaman.
     * @param {PeminjamanDeleteArgs} args - Arguments to delete one Peminjaman.
     * @example
     * // Delete one Peminjaman
     * const Peminjaman = await prisma.peminjaman.delete({
     *   where: {
     *     // ... filter to delete one Peminjaman
     *   }
     * })
     * 
     */
    delete<T extends PeminjamanDeleteArgs>(args: SelectSubset<T, PeminjamanDeleteArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Peminjaman.
     * @param {PeminjamanUpdateArgs} args - Arguments to update one Peminjaman.
     * @example
     * // Update one Peminjaman
     * const peminjaman = await prisma.peminjaman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeminjamanUpdateArgs>(args: SelectSubset<T, PeminjamanUpdateArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Peminjamen.
     * @param {PeminjamanDeleteManyArgs} args - Arguments to filter Peminjamen to delete.
     * @example
     * // Delete a few Peminjamen
     * const { count } = await prisma.peminjaman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeminjamanDeleteManyArgs>(args?: SelectSubset<T, PeminjamanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeminjamanUpdateManyArgs>(args: SelectSubset<T, PeminjamanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peminjamen and returns the data updated in the database.
     * @param {PeminjamanUpdateManyAndReturnArgs} args - Arguments to update many Peminjamen.
     * @example
     * // Update many Peminjamen
     * const peminjaman = await prisma.peminjaman.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Peminjamen and only return the `id`
     * const peminjamanWithIdOnly = await prisma.peminjaman.updateManyAndReturn({
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
    updateManyAndReturn<T extends PeminjamanUpdateManyAndReturnArgs>(args: SelectSubset<T, PeminjamanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Peminjaman.
     * @param {PeminjamanUpsertArgs} args - Arguments to update or create a Peminjaman.
     * @example
     * // Update or create a Peminjaman
     * const peminjaman = await prisma.peminjaman.upsert({
     *   create: {
     *     // ... data to create a Peminjaman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peminjaman we want to update
     *   }
     * })
     */
    upsert<T extends PeminjamanUpsertArgs>(args: SelectSubset<T, PeminjamanUpsertArgs<ExtArgs>>): Prisma__PeminjamanClient<$Result.GetResult<Prisma.$PeminjamanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Peminjamen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanCountArgs} args - Arguments to filter Peminjamen to count.
     * @example
     * // Count the number of Peminjamen
     * const count = await prisma.peminjaman.count({
     *   where: {
     *     // ... the filter for the Peminjamen we want to count
     *   }
     * })
    **/
    count<T extends PeminjamanCountArgs>(
      args?: Subset<T, PeminjamanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeminjamanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeminjamanAggregateArgs>(args: Subset<T, PeminjamanAggregateArgs>): Prisma.PrismaPromise<GetPeminjamanAggregateType<T>>

    /**
     * Group by Peminjaman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeminjamanGroupByArgs} args - Group by arguments.
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
      T extends PeminjamanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeminjamanGroupByArgs['orderBy'] }
        : { orderBy?: PeminjamanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeminjamanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeminjamanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peminjaman model
   */
  readonly fields: PeminjamanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peminjaman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeminjamanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ruangan<T extends RuanganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuanganDefaultArgs<ExtArgs>>): Prisma__RuanganClient<$Result.GetResult<Prisma.$RuanganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Peminjaman model
   */
  interface PeminjamanFieldRefs {
    readonly id: FieldRef<"Peminjaman", 'String'>
    readonly userId: FieldRef<"Peminjaman", 'String'>
    readonly ruanganId: FieldRef<"Peminjaman", 'String'>
    readonly startTime: FieldRef<"Peminjaman", 'DateTime'>
    readonly endTime: FieldRef<"Peminjaman", 'DateTime'>
    readonly status: FieldRef<"Peminjaman", 'Status'>
    readonly alasan: FieldRef<"Peminjaman", 'String'>
    readonly catatan: FieldRef<"Peminjaman", 'String'>
    readonly createdAt: FieldRef<"Peminjaman", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Peminjaman findUnique
   */
  export type PeminjamanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findUniqueOrThrow
   */
  export type PeminjamanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman findFirst
   */
  export type PeminjamanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findFirstOrThrow
   */
  export type PeminjamanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjaman to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peminjamen.
     */
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman findMany
   */
  export type PeminjamanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter, which Peminjamen to fetch.
     */
    where?: PeminjamanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peminjamen to fetch.
     */
    orderBy?: PeminjamanOrderByWithRelationInput | PeminjamanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peminjamen.
     */
    cursor?: PeminjamanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peminjamen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peminjamen.
     */
    skip?: number
    distinct?: PeminjamanScalarFieldEnum | PeminjamanScalarFieldEnum[]
  }

  /**
   * Peminjaman create
   */
  export type PeminjamanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to create a Peminjaman.
     */
    data: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
  }

  /**
   * Peminjaman createMany
   */
  export type PeminjamanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peminjaman createManyAndReturn
   */
  export type PeminjamanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * The data used to create many Peminjamen.
     */
    data: PeminjamanCreateManyInput | PeminjamanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peminjaman update
   */
  export type PeminjamanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The data needed to update a Peminjaman.
     */
    data: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
    /**
     * Choose, which Peminjaman to update.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman updateMany
   */
  export type PeminjamanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
  }

  /**
   * Peminjaman updateManyAndReturn
   */
  export type PeminjamanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * The data used to update Peminjamen.
     */
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyInput>
    /**
     * Filter which Peminjamen to update
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peminjaman upsert
   */
  export type PeminjamanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * The filter to search for the Peminjaman to update in case it exists.
     */
    where: PeminjamanWhereUniqueInput
    /**
     * In case the Peminjaman found by the `where` argument doesn't exist, create a new Peminjaman with this data.
     */
    create: XOR<PeminjamanCreateInput, PeminjamanUncheckedCreateInput>
    /**
     * In case the Peminjaman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeminjamanUpdateInput, PeminjamanUncheckedUpdateInput>
  }

  /**
   * Peminjaman delete
   */
  export type PeminjamanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
    /**
     * Filter which Peminjaman to delete.
     */
    where: PeminjamanWhereUniqueInput
  }

  /**
   * Peminjaman deleteMany
   */
  export type PeminjamanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peminjamen to delete
     */
    where?: PeminjamanWhereInput
    /**
     * Limit how many Peminjamen to delete.
     */
    limit?: number
  }

  /**
   * Peminjaman without action
   */
  export type PeminjamanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peminjaman
     */
    select?: PeminjamanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Peminjaman
     */
    omit?: PeminjamanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeminjamanInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GedungScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    authorId: 'authorId',
    created_at: 'created_at'
  };

  export type GedungScalarFieldEnum = (typeof GedungScalarFieldEnum)[keyof typeof GedungScalarFieldEnum]


  export const RuanganScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    authorId: 'authorId',
    created_at: 'created_at',
    gedungId: 'gedungId'
  };

  export type RuanganScalarFieldEnum = (typeof RuanganScalarFieldEnum)[keyof typeof RuanganScalarFieldEnum]


  export const PeminjamanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ruanganId: 'ruanganId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    alasan: 'alasan',
    catatan: 'catatan',
    createdAt: 'createdAt'
  };

  export type PeminjamanScalarFieldEnum = (typeof PeminjamanScalarFieldEnum)[keyof typeof PeminjamanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    Gedung?: GedungListRelationFilter
    Ruangan?: RuanganListRelationFilter
    Peminjaman?: PeminjamanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    Gedung?: GedungOrderByRelationAggregateInput
    Ruangan?: RuanganOrderByRelationAggregateInput
    Peminjaman?: PeminjamanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    Gedung?: GedungListRelationFilter
    Ruangan?: RuanganListRelationFilter
    Peminjaman?: PeminjamanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type GedungWhereInput = {
    AND?: GedungWhereInput | GedungWhereInput[]
    OR?: GedungWhereInput[]
    NOT?: GedungWhereInput | GedungWhereInput[]
    id?: StringFilter<"Gedung"> | string
    nama?: StringFilter<"Gedung"> | string
    authorId?: StringFilter<"Gedung"> | string
    created_at?: DateTimeFilter<"Gedung"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    Ruangan?: RuanganListRelationFilter
  }

  export type GedungOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    author?: UserOrderByWithRelationInput
    Ruangan?: RuanganOrderByRelationAggregateInput
  }

  export type GedungWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: GedungWhereInput | GedungWhereInput[]
    OR?: GedungWhereInput[]
    NOT?: GedungWhereInput | GedungWhereInput[]
    authorId?: StringFilter<"Gedung"> | string
    created_at?: DateTimeFilter<"Gedung"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    Ruangan?: RuanganListRelationFilter
  }, "id" | "nama">

  export type GedungOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    _count?: GedungCountOrderByAggregateInput
    _max?: GedungMaxOrderByAggregateInput
    _min?: GedungMinOrderByAggregateInput
  }

  export type GedungScalarWhereWithAggregatesInput = {
    AND?: GedungScalarWhereWithAggregatesInput | GedungScalarWhereWithAggregatesInput[]
    OR?: GedungScalarWhereWithAggregatesInput[]
    NOT?: GedungScalarWhereWithAggregatesInput | GedungScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Gedung"> | string
    nama?: StringWithAggregatesFilter<"Gedung"> | string
    authorId?: StringWithAggregatesFilter<"Gedung"> | string
    created_at?: DateTimeWithAggregatesFilter<"Gedung"> | Date | string
  }

  export type RuanganWhereInput = {
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    id?: StringFilter<"Ruangan"> | string
    nama?: StringFilter<"Ruangan"> | string
    deskripsi?: StringFilter<"Ruangan"> | string
    authorId?: StringFilter<"Ruangan"> | string
    created_at?: DateTimeFilter<"Ruangan"> | Date | string
    gedungId?: StringFilter<"Ruangan"> | string
    gedung?: XOR<GedungScalarRelationFilter, GedungWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    Peminjaman?: PeminjamanListRelationFilter
  }

  export type RuanganOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    gedungId?: SortOrder
    gedung?: GedungOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    Peminjaman?: PeminjamanOrderByRelationAggregateInput
  }

  export type RuanganWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: RuanganWhereInput | RuanganWhereInput[]
    OR?: RuanganWhereInput[]
    NOT?: RuanganWhereInput | RuanganWhereInput[]
    deskripsi?: StringFilter<"Ruangan"> | string
    authorId?: StringFilter<"Ruangan"> | string
    created_at?: DateTimeFilter<"Ruangan"> | Date | string
    gedungId?: StringFilter<"Ruangan"> | string
    gedung?: XOR<GedungScalarRelationFilter, GedungWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    Peminjaman?: PeminjamanListRelationFilter
  }, "id" | "nama">

  export type RuanganOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    gedungId?: SortOrder
    _count?: RuanganCountOrderByAggregateInput
    _max?: RuanganMaxOrderByAggregateInput
    _min?: RuanganMinOrderByAggregateInput
  }

  export type RuanganScalarWhereWithAggregatesInput = {
    AND?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    OR?: RuanganScalarWhereWithAggregatesInput[]
    NOT?: RuanganScalarWhereWithAggregatesInput | RuanganScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ruangan"> | string
    nama?: StringWithAggregatesFilter<"Ruangan"> | string
    deskripsi?: StringWithAggregatesFilter<"Ruangan"> | string
    authorId?: StringWithAggregatesFilter<"Ruangan"> | string
    created_at?: DateTimeWithAggregatesFilter<"Ruangan"> | Date | string
    gedungId?: StringWithAggregatesFilter<"Ruangan"> | string
  }

  export type PeminjamanWhereInput = {
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    id?: StringFilter<"Peminjaman"> | string
    userId?: StringFilter<"Peminjaman"> | string
    ruanganId?: StringFilter<"Peminjaman"> | string
    startTime?: DateTimeFilter<"Peminjaman"> | Date | string
    endTime?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusFilter<"Peminjaman"> | $Enums.Status
    alasan?: StringNullableFilter<"Peminjaman"> | string | null
    catatan?: StringNullableFilter<"Peminjaman"> | string | null
    createdAt?: DateTimeFilter<"Peminjaman"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ruangan?: XOR<RuanganScalarRelationFilter, RuanganWhereInput>
  }

  export type PeminjamanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ruanganId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    alasan?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ruangan?: RuanganOrderByWithRelationInput
  }

  export type PeminjamanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PeminjamanWhereInput | PeminjamanWhereInput[]
    OR?: PeminjamanWhereInput[]
    NOT?: PeminjamanWhereInput | PeminjamanWhereInput[]
    userId?: StringFilter<"Peminjaman"> | string
    ruanganId?: StringFilter<"Peminjaman"> | string
    startTime?: DateTimeFilter<"Peminjaman"> | Date | string
    endTime?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusFilter<"Peminjaman"> | $Enums.Status
    alasan?: StringNullableFilter<"Peminjaman"> | string | null
    catatan?: StringNullableFilter<"Peminjaman"> | string | null
    createdAt?: DateTimeFilter<"Peminjaman"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ruangan?: XOR<RuanganScalarRelationFilter, RuanganWhereInput>
  }, "id">

  export type PeminjamanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ruanganId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    alasan?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PeminjamanCountOrderByAggregateInput
    _max?: PeminjamanMaxOrderByAggregateInput
    _min?: PeminjamanMinOrderByAggregateInput
  }

  export type PeminjamanScalarWhereWithAggregatesInput = {
    AND?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    OR?: PeminjamanScalarWhereWithAggregatesInput[]
    NOT?: PeminjamanScalarWhereWithAggregatesInput | PeminjamanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Peminjaman"> | string
    userId?: StringWithAggregatesFilter<"Peminjaman"> | string
    ruanganId?: StringWithAggregatesFilter<"Peminjaman"> | string
    startTime?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
    status?: EnumStatusWithAggregatesFilter<"Peminjaman"> | $Enums.Status
    alasan?: StringNullableWithAggregatesFilter<"Peminjaman"> | string | null
    catatan?: StringNullableWithAggregatesFilter<"Peminjaman"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Peminjaman"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Gedung?: GedungCreateNestedManyWithoutAuthorInput
    Ruangan?: RuanganCreateNestedManyWithoutAuthorInput
    Peminjaman?: PeminjamanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Gedung?: GedungUncheckedCreateNestedManyWithoutAuthorInput
    Ruangan?: RuanganUncheckedCreateNestedManyWithoutAuthorInput
    Peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Gedung?: GedungUpdateManyWithoutAuthorNestedInput
    Ruangan?: RuanganUpdateManyWithoutAuthorNestedInput
    Peminjaman?: PeminjamanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Gedung?: GedungUncheckedUpdateManyWithoutAuthorNestedInput
    Ruangan?: RuanganUncheckedUpdateManyWithoutAuthorNestedInput
    Peminjaman?: PeminjamanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type GedungCreateInput = {
    id?: string
    nama: string
    created_at?: Date | string
    author: UserCreateNestedOneWithoutGedungInput
    Ruangan?: RuanganCreateNestedManyWithoutGedungInput
  }

  export type GedungUncheckedCreateInput = {
    id?: string
    nama: string
    authorId: string
    created_at?: Date | string
    Ruangan?: RuanganUncheckedCreateNestedManyWithoutGedungInput
  }

  export type GedungUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutGedungNestedInput
    Ruangan?: RuanganUpdateManyWithoutGedungNestedInput
  }

  export type GedungUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Ruangan?: RuanganUncheckedUpdateManyWithoutGedungNestedInput
  }

  export type GedungCreateManyInput = {
    id?: string
    nama: string
    authorId: string
    created_at?: Date | string
  }

  export type GedungUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GedungUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuanganCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    created_at?: Date | string
    gedung: GedungCreateNestedOneWithoutRuanganInput
    author: UserCreateNestedOneWithoutRuanganInput
    Peminjaman?: PeminjamanCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi: string
    authorId: string
    created_at?: Date | string
    gedungId: string
    Peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedung?: GedungUpdateOneRequiredWithoutRuanganNestedInput
    author?: UserUpdateOneRequiredWithoutRuanganNestedInput
    Peminjaman?: PeminjamanUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedungId?: StringFieldUpdateOperationsInput | string
    Peminjaman?: PeminjamanUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganCreateManyInput = {
    id?: string
    nama: string
    deskripsi: string
    authorId: string
    created_at?: Date | string
    gedungId: string
  }

  export type RuanganUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuanganUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedungId?: StringFieldUpdateOperationsInput | string
  }

  export type PeminjamanCreateInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPeminjamanInput
    ruangan: RuanganCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateInput = {
    id?: string
    userId: string
    ruanganId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
  }

  export type PeminjamanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeminjamanNestedInput
    ruangan?: RuanganUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruanganId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateManyInput = {
    id?: string
    userId: string
    ruanganId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
  }

  export type PeminjamanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ruanganId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type GedungListRelationFilter = {
    every?: GedungWhereInput
    some?: GedungWhereInput
    none?: GedungWhereInput
  }

  export type RuanganListRelationFilter = {
    every?: RuanganWhereInput
    some?: RuanganWhereInput
    none?: RuanganWhereInput
  }

  export type PeminjamanListRelationFilter = {
    every?: PeminjamanWhereInput
    some?: PeminjamanWhereInput
    none?: PeminjamanWhereInput
  }

  export type GedungOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RuanganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeminjamanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GedungCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
  }

  export type GedungMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
  }

  export type GedungMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
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

  export type GedungScalarRelationFilter = {
    is?: GedungWhereInput
    isNot?: GedungWhereInput
  }

  export type RuanganCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    gedungId?: SortOrder
  }

  export type RuanganMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    gedungId?: SortOrder
  }

  export type RuanganMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    authorId?: SortOrder
    created_at?: SortOrder
    gedungId?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type RuanganScalarRelationFilter = {
    is?: RuanganWhereInput
    isNot?: RuanganWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PeminjamanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ruanganId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    alasan?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
  }

  export type PeminjamanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ruanganId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    alasan?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
  }

  export type PeminjamanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ruanganId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    alasan?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type GedungCreateNestedManyWithoutAuthorInput = {
    create?: XOR<GedungCreateWithoutAuthorInput, GedungUncheckedCreateWithoutAuthorInput> | GedungCreateWithoutAuthorInput[] | GedungUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GedungCreateOrConnectWithoutAuthorInput | GedungCreateOrConnectWithoutAuthorInput[]
    createMany?: GedungCreateManyAuthorInputEnvelope
    connect?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
  }

  export type RuanganCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RuanganCreateWithoutAuthorInput, RuanganUncheckedCreateWithoutAuthorInput> | RuanganCreateWithoutAuthorInput[] | RuanganUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutAuthorInput | RuanganCreateOrConnectWithoutAuthorInput[]
    createMany?: RuanganCreateManyAuthorInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type PeminjamanCreateNestedManyWithoutUserInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type GedungUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<GedungCreateWithoutAuthorInput, GedungUncheckedCreateWithoutAuthorInput> | GedungCreateWithoutAuthorInput[] | GedungUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GedungCreateOrConnectWithoutAuthorInput | GedungCreateOrConnectWithoutAuthorInput[]
    createMany?: GedungCreateManyAuthorInputEnvelope
    connect?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
  }

  export type RuanganUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RuanganCreateWithoutAuthorInput, RuanganUncheckedCreateWithoutAuthorInput> | RuanganCreateWithoutAuthorInput[] | RuanganUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutAuthorInput | RuanganCreateOrConnectWithoutAuthorInput[]
    createMany?: RuanganCreateManyAuthorInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type GedungUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<GedungCreateWithoutAuthorInput, GedungUncheckedCreateWithoutAuthorInput> | GedungCreateWithoutAuthorInput[] | GedungUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GedungCreateOrConnectWithoutAuthorInput | GedungCreateOrConnectWithoutAuthorInput[]
    upsert?: GedungUpsertWithWhereUniqueWithoutAuthorInput | GedungUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: GedungCreateManyAuthorInputEnvelope
    set?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    disconnect?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    delete?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    connect?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    update?: GedungUpdateWithWhereUniqueWithoutAuthorInput | GedungUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: GedungUpdateManyWithWhereWithoutAuthorInput | GedungUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: GedungScalarWhereInput | GedungScalarWhereInput[]
  }

  export type RuanganUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RuanganCreateWithoutAuthorInput, RuanganUncheckedCreateWithoutAuthorInput> | RuanganCreateWithoutAuthorInput[] | RuanganUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutAuthorInput | RuanganCreateOrConnectWithoutAuthorInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutAuthorInput | RuanganUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RuanganCreateManyAuthorInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutAuthorInput | RuanganUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutAuthorInput | RuanganUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type PeminjamanUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutUserInput | PeminjamanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutUserInput | PeminjamanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutUserInput | PeminjamanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type GedungUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<GedungCreateWithoutAuthorInput, GedungUncheckedCreateWithoutAuthorInput> | GedungCreateWithoutAuthorInput[] | GedungUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: GedungCreateOrConnectWithoutAuthorInput | GedungCreateOrConnectWithoutAuthorInput[]
    upsert?: GedungUpsertWithWhereUniqueWithoutAuthorInput | GedungUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: GedungCreateManyAuthorInputEnvelope
    set?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    disconnect?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    delete?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    connect?: GedungWhereUniqueInput | GedungWhereUniqueInput[]
    update?: GedungUpdateWithWhereUniqueWithoutAuthorInput | GedungUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: GedungUpdateManyWithWhereWithoutAuthorInput | GedungUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: GedungScalarWhereInput | GedungScalarWhereInput[]
  }

  export type RuanganUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RuanganCreateWithoutAuthorInput, RuanganUncheckedCreateWithoutAuthorInput> | RuanganCreateWithoutAuthorInput[] | RuanganUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutAuthorInput | RuanganCreateOrConnectWithoutAuthorInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutAuthorInput | RuanganUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RuanganCreateManyAuthorInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutAuthorInput | RuanganUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutAuthorInput | RuanganUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type PeminjamanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput> | PeminjamanCreateWithoutUserInput[] | PeminjamanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutUserInput | PeminjamanCreateOrConnectWithoutUserInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutUserInput | PeminjamanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PeminjamanCreateManyUserInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutUserInput | PeminjamanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutUserInput | PeminjamanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGedungInput = {
    create?: XOR<UserCreateWithoutGedungInput, UserUncheckedCreateWithoutGedungInput>
    connectOrCreate?: UserCreateOrConnectWithoutGedungInput
    connect?: UserWhereUniqueInput
  }

  export type RuanganCreateNestedManyWithoutGedungInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type RuanganUncheckedCreateNestedManyWithoutGedungInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutGedungNestedInput = {
    create?: XOR<UserCreateWithoutGedungInput, UserUncheckedCreateWithoutGedungInput>
    connectOrCreate?: UserCreateOrConnectWithoutGedungInput
    upsert?: UserUpsertWithoutGedungInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGedungInput, UserUpdateWithoutGedungInput>, UserUncheckedUpdateWithoutGedungInput>
  }

  export type RuanganUpdateManyWithoutGedungNestedInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutGedungInput | RuanganUpsertWithWhereUniqueWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutGedungInput | RuanganUpdateWithWhereUniqueWithoutGedungInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutGedungInput | RuanganUpdateManyWithWhereWithoutGedungInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type RuanganUncheckedUpdateManyWithoutGedungNestedInput = {
    create?: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput> | RuanganCreateWithoutGedungInput[] | RuanganUncheckedCreateWithoutGedungInput[]
    connectOrCreate?: RuanganCreateOrConnectWithoutGedungInput | RuanganCreateOrConnectWithoutGedungInput[]
    upsert?: RuanganUpsertWithWhereUniqueWithoutGedungInput | RuanganUpsertWithWhereUniqueWithoutGedungInput[]
    createMany?: RuanganCreateManyGedungInputEnvelope
    set?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    disconnect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    delete?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    connect?: RuanganWhereUniqueInput | RuanganWhereUniqueInput[]
    update?: RuanganUpdateWithWhereUniqueWithoutGedungInput | RuanganUpdateWithWhereUniqueWithoutGedungInput[]
    updateMany?: RuanganUpdateManyWithWhereWithoutGedungInput | RuanganUpdateManyWithWhereWithoutGedungInput[]
    deleteMany?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
  }

  export type GedungCreateNestedOneWithoutRuanganInput = {
    create?: XOR<GedungCreateWithoutRuanganInput, GedungUncheckedCreateWithoutRuanganInput>
    connectOrCreate?: GedungCreateOrConnectWithoutRuanganInput
    connect?: GedungWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRuanganInput = {
    create?: XOR<UserCreateWithoutRuanganInput, UserUncheckedCreateWithoutRuanganInput>
    connectOrCreate?: UserCreateOrConnectWithoutRuanganInput
    connect?: UserWhereUniqueInput
  }

  export type PeminjamanCreateNestedManyWithoutRuanganInput = {
    create?: XOR<PeminjamanCreateWithoutRuanganInput, PeminjamanUncheckedCreateWithoutRuanganInput> | PeminjamanCreateWithoutRuanganInput[] | PeminjamanUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutRuanganInput | PeminjamanCreateOrConnectWithoutRuanganInput[]
    createMany?: PeminjamanCreateManyRuanganInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type PeminjamanUncheckedCreateNestedManyWithoutRuanganInput = {
    create?: XOR<PeminjamanCreateWithoutRuanganInput, PeminjamanUncheckedCreateWithoutRuanganInput> | PeminjamanCreateWithoutRuanganInput[] | PeminjamanUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutRuanganInput | PeminjamanCreateOrConnectWithoutRuanganInput[]
    createMany?: PeminjamanCreateManyRuanganInputEnvelope
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
  }

  export type GedungUpdateOneRequiredWithoutRuanganNestedInput = {
    create?: XOR<GedungCreateWithoutRuanganInput, GedungUncheckedCreateWithoutRuanganInput>
    connectOrCreate?: GedungCreateOrConnectWithoutRuanganInput
    upsert?: GedungUpsertWithoutRuanganInput
    connect?: GedungWhereUniqueInput
    update?: XOR<XOR<GedungUpdateToOneWithWhereWithoutRuanganInput, GedungUpdateWithoutRuanganInput>, GedungUncheckedUpdateWithoutRuanganInput>
  }

  export type UserUpdateOneRequiredWithoutRuanganNestedInput = {
    create?: XOR<UserCreateWithoutRuanganInput, UserUncheckedCreateWithoutRuanganInput>
    connectOrCreate?: UserCreateOrConnectWithoutRuanganInput
    upsert?: UserUpsertWithoutRuanganInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRuanganInput, UserUpdateWithoutRuanganInput>, UserUncheckedUpdateWithoutRuanganInput>
  }

  export type PeminjamanUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<PeminjamanCreateWithoutRuanganInput, PeminjamanUncheckedCreateWithoutRuanganInput> | PeminjamanCreateWithoutRuanganInput[] | PeminjamanUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutRuanganInput | PeminjamanCreateOrConnectWithoutRuanganInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutRuanganInput | PeminjamanUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: PeminjamanCreateManyRuanganInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutRuanganInput | PeminjamanUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutRuanganInput | PeminjamanUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type PeminjamanUncheckedUpdateManyWithoutRuanganNestedInput = {
    create?: XOR<PeminjamanCreateWithoutRuanganInput, PeminjamanUncheckedCreateWithoutRuanganInput> | PeminjamanCreateWithoutRuanganInput[] | PeminjamanUncheckedCreateWithoutRuanganInput[]
    connectOrCreate?: PeminjamanCreateOrConnectWithoutRuanganInput | PeminjamanCreateOrConnectWithoutRuanganInput[]
    upsert?: PeminjamanUpsertWithWhereUniqueWithoutRuanganInput | PeminjamanUpsertWithWhereUniqueWithoutRuanganInput[]
    createMany?: PeminjamanCreateManyRuanganInputEnvelope
    set?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    disconnect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    delete?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    connect?: PeminjamanWhereUniqueInput | PeminjamanWhereUniqueInput[]
    update?: PeminjamanUpdateWithWhereUniqueWithoutRuanganInput | PeminjamanUpdateWithWhereUniqueWithoutRuanganInput[]
    updateMany?: PeminjamanUpdateManyWithWhereWithoutRuanganInput | PeminjamanUpdateManyWithWhereWithoutRuanganInput[]
    deleteMany?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeminjamanInput
    connect?: UserWhereUniqueInput
  }

  export type RuanganCreateNestedOneWithoutPeminjamanInput = {
    create?: XOR<RuanganCreateWithoutPeminjamanInput, RuanganUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutPeminjamanInput
    connect?: RuanganWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: UserCreateOrConnectWithoutPeminjamanInput
    upsert?: UserUpsertWithoutPeminjamanInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPeminjamanInput, UserUpdateWithoutPeminjamanInput>, UserUncheckedUpdateWithoutPeminjamanInput>
  }

  export type RuanganUpdateOneRequiredWithoutPeminjamanNestedInput = {
    create?: XOR<RuanganCreateWithoutPeminjamanInput, RuanganUncheckedCreateWithoutPeminjamanInput>
    connectOrCreate?: RuanganCreateOrConnectWithoutPeminjamanInput
    upsert?: RuanganUpsertWithoutPeminjamanInput
    connect?: RuanganWhereUniqueInput
    update?: XOR<XOR<RuanganUpdateToOneWithWhereWithoutPeminjamanInput, RuanganUpdateWithoutPeminjamanInput>, RuanganUncheckedUpdateWithoutPeminjamanInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type GedungCreateWithoutAuthorInput = {
    id?: string
    nama: string
    created_at?: Date | string
    Ruangan?: RuanganCreateNestedManyWithoutGedungInput
  }

  export type GedungUncheckedCreateWithoutAuthorInput = {
    id?: string
    nama: string
    created_at?: Date | string
    Ruangan?: RuanganUncheckedCreateNestedManyWithoutGedungInput
  }

  export type GedungCreateOrConnectWithoutAuthorInput = {
    where: GedungWhereUniqueInput
    create: XOR<GedungCreateWithoutAuthorInput, GedungUncheckedCreateWithoutAuthorInput>
  }

  export type GedungCreateManyAuthorInputEnvelope = {
    data: GedungCreateManyAuthorInput | GedungCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RuanganCreateWithoutAuthorInput = {
    id?: string
    nama: string
    deskripsi: string
    created_at?: Date | string
    gedung: GedungCreateNestedOneWithoutRuanganInput
    Peminjaman?: PeminjamanCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateWithoutAuthorInput = {
    id?: string
    nama: string
    deskripsi: string
    created_at?: Date | string
    gedungId: string
    Peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganCreateOrConnectWithoutAuthorInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutAuthorInput, RuanganUncheckedCreateWithoutAuthorInput>
  }

  export type RuanganCreateManyAuthorInputEnvelope = {
    data: RuanganCreateManyAuthorInput | RuanganCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PeminjamanCreateWithoutUserInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
    ruangan: RuanganCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutUserInput = {
    id?: string
    ruanganId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
  }

  export type PeminjamanCreateOrConnectWithoutUserInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput>
  }

  export type PeminjamanCreateManyUserInputEnvelope = {
    data: PeminjamanCreateManyUserInput | PeminjamanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GedungUpsertWithWhereUniqueWithoutAuthorInput = {
    where: GedungWhereUniqueInput
    update: XOR<GedungUpdateWithoutAuthorInput, GedungUncheckedUpdateWithoutAuthorInput>
    create: XOR<GedungCreateWithoutAuthorInput, GedungUncheckedCreateWithoutAuthorInput>
  }

  export type GedungUpdateWithWhereUniqueWithoutAuthorInput = {
    where: GedungWhereUniqueInput
    data: XOR<GedungUpdateWithoutAuthorInput, GedungUncheckedUpdateWithoutAuthorInput>
  }

  export type GedungUpdateManyWithWhereWithoutAuthorInput = {
    where: GedungScalarWhereInput
    data: XOR<GedungUpdateManyMutationInput, GedungUncheckedUpdateManyWithoutAuthorInput>
  }

  export type GedungScalarWhereInput = {
    AND?: GedungScalarWhereInput | GedungScalarWhereInput[]
    OR?: GedungScalarWhereInput[]
    NOT?: GedungScalarWhereInput | GedungScalarWhereInput[]
    id?: StringFilter<"Gedung"> | string
    nama?: StringFilter<"Gedung"> | string
    authorId?: StringFilter<"Gedung"> | string
    created_at?: DateTimeFilter<"Gedung"> | Date | string
  }

  export type RuanganUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RuanganWhereUniqueInput
    update: XOR<RuanganUpdateWithoutAuthorInput, RuanganUncheckedUpdateWithoutAuthorInput>
    create: XOR<RuanganCreateWithoutAuthorInput, RuanganUncheckedCreateWithoutAuthorInput>
  }

  export type RuanganUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RuanganWhereUniqueInput
    data: XOR<RuanganUpdateWithoutAuthorInput, RuanganUncheckedUpdateWithoutAuthorInput>
  }

  export type RuanganUpdateManyWithWhereWithoutAuthorInput = {
    where: RuanganScalarWhereInput
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RuanganScalarWhereInput = {
    AND?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
    OR?: RuanganScalarWhereInput[]
    NOT?: RuanganScalarWhereInput | RuanganScalarWhereInput[]
    id?: StringFilter<"Ruangan"> | string
    nama?: StringFilter<"Ruangan"> | string
    deskripsi?: StringFilter<"Ruangan"> | string
    authorId?: StringFilter<"Ruangan"> | string
    created_at?: DateTimeFilter<"Ruangan"> | Date | string
    gedungId?: StringFilter<"Ruangan"> | string
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutUserInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutUserInput, PeminjamanUncheckedUpdateWithoutUserInput>
    create: XOR<PeminjamanCreateWithoutUserInput, PeminjamanUncheckedCreateWithoutUserInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutUserInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutUserInput, PeminjamanUncheckedUpdateWithoutUserInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutUserInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutUserInput>
  }

  export type PeminjamanScalarWhereInput = {
    AND?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    OR?: PeminjamanScalarWhereInput[]
    NOT?: PeminjamanScalarWhereInput | PeminjamanScalarWhereInput[]
    id?: StringFilter<"Peminjaman"> | string
    userId?: StringFilter<"Peminjaman"> | string
    ruanganId?: StringFilter<"Peminjaman"> | string
    startTime?: DateTimeFilter<"Peminjaman"> | Date | string
    endTime?: DateTimeFilter<"Peminjaman"> | Date | string
    status?: EnumStatusFilter<"Peminjaman"> | $Enums.Status
    alasan?: StringNullableFilter<"Peminjaman"> | string | null
    catatan?: StringNullableFilter<"Peminjaman"> | string | null
    createdAt?: DateTimeFilter<"Peminjaman"> | Date | string
  }

  export type UserCreateWithoutGedungInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Ruangan?: RuanganCreateNestedManyWithoutAuthorInput
    Peminjaman?: PeminjamanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGedungInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Ruangan?: RuanganUncheckedCreateNestedManyWithoutAuthorInput
    Peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGedungInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGedungInput, UserUncheckedCreateWithoutGedungInput>
  }

  export type RuanganCreateWithoutGedungInput = {
    id?: string
    nama: string
    deskripsi: string
    created_at?: Date | string
    author: UserCreateNestedOneWithoutRuanganInput
    Peminjaman?: PeminjamanCreateNestedManyWithoutRuanganInput
  }

  export type RuanganUncheckedCreateWithoutGedungInput = {
    id?: string
    nama: string
    deskripsi: string
    authorId: string
    created_at?: Date | string
    Peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutRuanganInput
  }

  export type RuanganCreateOrConnectWithoutGedungInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput>
  }

  export type RuanganCreateManyGedungInputEnvelope = {
    data: RuanganCreateManyGedungInput | RuanganCreateManyGedungInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGedungInput = {
    update: XOR<UserUpdateWithoutGedungInput, UserUncheckedUpdateWithoutGedungInput>
    create: XOR<UserCreateWithoutGedungInput, UserUncheckedCreateWithoutGedungInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGedungInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGedungInput, UserUncheckedUpdateWithoutGedungInput>
  }

  export type UserUpdateWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Ruangan?: RuanganUpdateManyWithoutAuthorNestedInput
    Peminjaman?: PeminjamanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Ruangan?: RuanganUncheckedUpdateManyWithoutAuthorNestedInput
    Peminjaman?: PeminjamanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RuanganUpsertWithWhereUniqueWithoutGedungInput = {
    where: RuanganWhereUniqueInput
    update: XOR<RuanganUpdateWithoutGedungInput, RuanganUncheckedUpdateWithoutGedungInput>
    create: XOR<RuanganCreateWithoutGedungInput, RuanganUncheckedCreateWithoutGedungInput>
  }

  export type RuanganUpdateWithWhereUniqueWithoutGedungInput = {
    where: RuanganWhereUniqueInput
    data: XOR<RuanganUpdateWithoutGedungInput, RuanganUncheckedUpdateWithoutGedungInput>
  }

  export type RuanganUpdateManyWithWhereWithoutGedungInput = {
    where: RuanganScalarWhereInput
    data: XOR<RuanganUpdateManyMutationInput, RuanganUncheckedUpdateManyWithoutGedungInput>
  }

  export type GedungCreateWithoutRuanganInput = {
    id?: string
    nama: string
    created_at?: Date | string
    author: UserCreateNestedOneWithoutGedungInput
  }

  export type GedungUncheckedCreateWithoutRuanganInput = {
    id?: string
    nama: string
    authorId: string
    created_at?: Date | string
  }

  export type GedungCreateOrConnectWithoutRuanganInput = {
    where: GedungWhereUniqueInput
    create: XOR<GedungCreateWithoutRuanganInput, GedungUncheckedCreateWithoutRuanganInput>
  }

  export type UserCreateWithoutRuanganInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Gedung?: GedungCreateNestedManyWithoutAuthorInput
    Peminjaman?: PeminjamanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRuanganInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Gedung?: GedungUncheckedCreateNestedManyWithoutAuthorInput
    Peminjaman?: PeminjamanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRuanganInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRuanganInput, UserUncheckedCreateWithoutRuanganInput>
  }

  export type PeminjamanCreateWithoutRuanganInput = {
    id?: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPeminjamanInput
  }

  export type PeminjamanUncheckedCreateWithoutRuanganInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
  }

  export type PeminjamanCreateOrConnectWithoutRuanganInput = {
    where: PeminjamanWhereUniqueInput
    create: XOR<PeminjamanCreateWithoutRuanganInput, PeminjamanUncheckedCreateWithoutRuanganInput>
  }

  export type PeminjamanCreateManyRuanganInputEnvelope = {
    data: PeminjamanCreateManyRuanganInput | PeminjamanCreateManyRuanganInput[]
    skipDuplicates?: boolean
  }

  export type GedungUpsertWithoutRuanganInput = {
    update: XOR<GedungUpdateWithoutRuanganInput, GedungUncheckedUpdateWithoutRuanganInput>
    create: XOR<GedungCreateWithoutRuanganInput, GedungUncheckedCreateWithoutRuanganInput>
    where?: GedungWhereInput
  }

  export type GedungUpdateToOneWithWhereWithoutRuanganInput = {
    where?: GedungWhereInput
    data: XOR<GedungUpdateWithoutRuanganInput, GedungUncheckedUpdateWithoutRuanganInput>
  }

  export type GedungUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutGedungNestedInput
  }

  export type GedungUncheckedUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutRuanganInput = {
    update: XOR<UserUpdateWithoutRuanganInput, UserUncheckedUpdateWithoutRuanganInput>
    create: XOR<UserCreateWithoutRuanganInput, UserUncheckedCreateWithoutRuanganInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRuanganInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRuanganInput, UserUncheckedUpdateWithoutRuanganInput>
  }

  export type UserUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Gedung?: GedungUpdateManyWithoutAuthorNestedInput
    Peminjaman?: PeminjamanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Gedung?: GedungUncheckedUpdateManyWithoutAuthorNestedInput
    Peminjaman?: PeminjamanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PeminjamanUpsertWithWhereUniqueWithoutRuanganInput = {
    where: PeminjamanWhereUniqueInput
    update: XOR<PeminjamanUpdateWithoutRuanganInput, PeminjamanUncheckedUpdateWithoutRuanganInput>
    create: XOR<PeminjamanCreateWithoutRuanganInput, PeminjamanUncheckedCreateWithoutRuanganInput>
  }

  export type PeminjamanUpdateWithWhereUniqueWithoutRuanganInput = {
    where: PeminjamanWhereUniqueInput
    data: XOR<PeminjamanUpdateWithoutRuanganInput, PeminjamanUncheckedUpdateWithoutRuanganInput>
  }

  export type PeminjamanUpdateManyWithWhereWithoutRuanganInput = {
    where: PeminjamanScalarWhereInput
    data: XOR<PeminjamanUpdateManyMutationInput, PeminjamanUncheckedUpdateManyWithoutRuanganInput>
  }

  export type UserCreateWithoutPeminjamanInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Gedung?: GedungCreateNestedManyWithoutAuthorInput
    Ruangan?: RuanganCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutPeminjamanInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    Gedung?: GedungUncheckedCreateNestedManyWithoutAuthorInput
    Ruangan?: RuanganUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPeminjamanInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
  }

  export type RuanganCreateWithoutPeminjamanInput = {
    id?: string
    nama: string
    deskripsi: string
    created_at?: Date | string
    gedung: GedungCreateNestedOneWithoutRuanganInput
    author: UserCreateNestedOneWithoutRuanganInput
  }

  export type RuanganUncheckedCreateWithoutPeminjamanInput = {
    id?: string
    nama: string
    deskripsi: string
    authorId: string
    created_at?: Date | string
    gedungId: string
  }

  export type RuanganCreateOrConnectWithoutPeminjamanInput = {
    where: RuanganWhereUniqueInput
    create: XOR<RuanganCreateWithoutPeminjamanInput, RuanganUncheckedCreateWithoutPeminjamanInput>
  }

  export type UserUpsertWithoutPeminjamanInput = {
    update: XOR<UserUpdateWithoutPeminjamanInput, UserUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<UserCreateWithoutPeminjamanInput, UserUncheckedCreateWithoutPeminjamanInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPeminjamanInput, UserUncheckedUpdateWithoutPeminjamanInput>
  }

  export type UserUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Gedung?: GedungUpdateManyWithoutAuthorNestedInput
    Ruangan?: RuanganUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    Gedung?: GedungUncheckedUpdateManyWithoutAuthorNestedInput
    Ruangan?: RuanganUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type RuanganUpsertWithoutPeminjamanInput = {
    update: XOR<RuanganUpdateWithoutPeminjamanInput, RuanganUncheckedUpdateWithoutPeminjamanInput>
    create: XOR<RuanganCreateWithoutPeminjamanInput, RuanganUncheckedCreateWithoutPeminjamanInput>
    where?: RuanganWhereInput
  }

  export type RuanganUpdateToOneWithWhereWithoutPeminjamanInput = {
    where?: RuanganWhereInput
    data: XOR<RuanganUpdateWithoutPeminjamanInput, RuanganUncheckedUpdateWithoutPeminjamanInput>
  }

  export type RuanganUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedung?: GedungUpdateOneRequiredWithoutRuanganNestedInput
    author?: UserUpdateOneRequiredWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateWithoutPeminjamanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedungId?: StringFieldUpdateOperationsInput | string
  }

  export type GedungCreateManyAuthorInput = {
    id?: string
    nama: string
    created_at?: Date | string
  }

  export type RuanganCreateManyAuthorInput = {
    id?: string
    nama: string
    deskripsi: string
    created_at?: Date | string
    gedungId: string
  }

  export type PeminjamanCreateManyUserInput = {
    id?: string
    ruanganId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
  }

  export type GedungUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Ruangan?: RuanganUpdateManyWithoutGedungNestedInput
  }

  export type GedungUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Ruangan?: RuanganUncheckedUpdateManyWithoutGedungNestedInput
  }

  export type GedungUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuanganUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedung?: GedungUpdateOneRequiredWithoutRuanganNestedInput
    Peminjaman?: PeminjamanUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedungId?: StringFieldUpdateOperationsInput | string
    Peminjaman?: PeminjamanUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    gedungId?: StringFieldUpdateOperationsInput | string
  }

  export type PeminjamanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ruangan?: RuanganUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruanganId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ruanganId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RuanganCreateManyGedungInput = {
    id?: string
    nama: string
    deskripsi: string
    authorId: string
    created_at?: Date | string
  }

  export type RuanganUpdateWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRuanganNestedInput
    Peminjaman?: PeminjamanUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Peminjaman?: PeminjamanUncheckedUpdateManyWithoutRuanganNestedInput
  }

  export type RuanganUncheckedUpdateManyWithoutGedungInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanCreateManyRuanganInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.Status
    alasan?: string | null
    catatan?: string | null
    createdAt?: Date | string
  }

  export type PeminjamanUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPeminjamanNestedInput
  }

  export type PeminjamanUncheckedUpdateWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeminjamanUncheckedUpdateManyWithoutRuanganInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    alasan?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
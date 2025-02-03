/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useCallback } from 'react';
import { useMutation, useQuery } from 'react-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import type {
  CreatePetsBody,
  Error,
  ListPetsNestedArrayParams,
  ListPetsParams,
  Pet,
  PetsArray,
  PetsNestedArray,
} from '../model';
import { useCustomClient } from '../mutator/custom-client';
import type { ErrorType, BodyType } from '../mutator/custom-client';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const useListPetsHook = () => {
  const listPets = useCustomClient<PetsArray>();

  return useCallback(
    (params?: ListPetsParams, version: number = 1, signal?: AbortSignal) => {
      return listPets({
        url: `/v${version}/pets`,
        method: 'GET',
        params,
        signal,
      });
    },
    [listPets],
  );
};

export const getListPetsQueryKey = (
  params?: ListPetsParams,
  version: number = 1,
) => {
  return [`/v${version}/pets`, ...(params ? [params] : [])] as const;
};

export const useListPetsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

  const listPets = useListPetsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
  > = ({ signal }) => listPets(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
>;
export type ListPetsQueryError = ErrorType<Error>;

/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsParams,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export const useCreatePetsHook = () => {
  const createPets = useCustomClient<void>();

  return useCallback(
    (
      createPetsBody: BodyType<CreatePetsBody>,
      version: number = 1,
      signal?: AbortSignal,
    ) => {
      return createPets({
        url: `/v${version}/pets`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: createPetsBody,
        signal,
      });
    },
    [createPets],
  );
};

export const useCreatePetsMutationOptions = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: BodyType<CreatePetsBody>; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: BodyType<CreatePetsBody>; version?: number },
  TContext
> => {
  const mutationKey = ['createPets'];
  const { mutation: mutationOptions } = options
    ? options.mutation &&
      'mutationKey' in options.mutation &&
      options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const createPets = useCreatePetsHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    { data: BodyType<CreatePetsBody>; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>
>;
export type CreatePetsMutationBody = BodyType<CreatePetsBody>;
export type CreatePetsMutationError = ErrorType<Error>;

/**
 * @summary Create a pet
 */
export const useCreatePets = <
  TError = ErrorType<Error>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: BodyType<CreatePetsBody>; version?: number },
    TContext
  >;
}): UseMutationResult<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: BodyType<CreatePetsBody>; version?: number },
  TContext
> => {
  const mutationOptions = useCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary List all pets as nested array
 */
export const useListPetsNestedArrayHook = () => {
  const listPetsNestedArray = useCustomClient<PetsNestedArray>();

  return useCallback(
    (
      params?: ListPetsNestedArrayParams,
      version: number = 1,
      signal?: AbortSignal,
    ) => {
      return listPetsNestedArray({
        url: `/v${version}/pets-nested-array`,
        method: 'GET',
        params,
        signal,
      });
    },
    [listPetsNestedArray],
  );
};

export const getListPetsNestedArrayQueryKey = (
  params?: ListPetsNestedArrayParams,
  version: number = 1,
) => {
  return [
    `/v${version}/pets-nested-array`,
    ...(params ? [params] : []),
  ] as const;
};

export const useListPetsNestedArrayQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getListPetsNestedArrayQueryKey(params, version);

  const listPetsNestedArray = useListPetsNestedArrayHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>
  > = ({ signal }) => listPetsNestedArray(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!version,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ListPetsNestedArrayQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>
>;
export type ListPetsNestedArrayQueryError = ErrorType<Error>;

/**
 * @summary List all pets as nested array
 */

export function useListPetsNestedArray<
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
  TError = ErrorType<Error>,
>(
  params?: ListPetsNestedArrayParams,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsNestedArrayHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useListPetsNestedArrayQueryOptions(
    params,
    version,
    options,
  );

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdHook = () => {
  const showPetById = useCustomClient<Pet>();

  return useCallback(
    (petId: string, version: number = 1, signal?: AbortSignal) => {
      return showPetById({
        url: `/v${version}/pets/${petId}`,
        method: 'GET',
        signal,
      });
    },
    [showPetById],
  );
};

export const getShowPetByIdQueryKey = (petId: string, version: number = 1) => {
  return [`/v${version}/pets/${petId}`] as const;
};

export const useShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

  const showPetById = useShowPetByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
  > = ({ signal }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!(version && petId),
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
>;
export type ShowPetByIdQueryError = ErrorType<Error>;

/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = ErrorType<Error>,
>(
  petId: string,
  version: number = 1,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = useShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

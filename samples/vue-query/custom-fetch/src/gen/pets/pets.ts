/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/vue-query';
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseMutationReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query';
import { computed, unref } from 'vue';
import type { MaybeRef } from 'vue';
import type {
  CreatePetsBodyItem,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '.././models';
import { customFetch } from '../../custom-fetch';

// https://stackoverflow.com/questions/49579094/typescript-conditional-types-filter-out-readonly-properties-pick-only-requir/49579497#49579497
type IfEquals<X, Y, A = X, B = never> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type DistributeReadOnlyOverUnions<T> = T extends any ? NonReadonly<T> : never;

type Writable<T> = Pick<T, WritableKeys<T>>;
type NonReadonly<T> = [T] extends [UnionToIntersection<T>]
  ? {
      [P in keyof Writable<T>]: T[P] extends object
        ? NonReadonly<NonNullable<T[P]>>
        : T[P];
    }
  : DistributeReadOnlyOverUnions<T>;

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

/**
 * @summary List all pets
 */
export type listPetsResponse = {
  data: Pets;
  status: number;
};

export const getListPetsUrl = (params?: ListPetsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString());
    }
  });

  return normalizedParams.size
    ? `http://localhost:8000/pets?${normalizedParams.toString()}`
    : `http://localhost:8000/pets`;
};

export const listPets = async (
  params?: ListPetsParams,
  options?: RequestInit,
): Promise<listPetsResponse> => {
  return customFetch<Promise<listPetsResponse>>(getListPetsUrl(params), {
    ...options,
    method: 'GET',
  });
};

export const getListPetsQueryKey = (params?: MaybeRef<ListPetsParams>) => {
  return [
    'http:',
    'localhost:8000',
    'pets',
    ...(params ? [params] : []),
  ] as const;
};

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params?: MaybeRef<ListPetsParams>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(unref(params), { signal, ...requestOptions });

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData
  >;
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = unknown;

/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = unknown,
>(
  params?: MaybeRef<ListPetsParams>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = unref(queryOptions).queryKey as QueryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export type createPetsResponse = {
  data: Pet;
  status: number;
};

export const getCreatePetsUrl = () => {
  return `http://localhost:8000/pets`;
};

export const createPets = async (
  createPetsBodyItem: CreatePetsBodyItem[],
  options?: RequestInit,
): Promise<createPetsResponse> => {
  return customFetch<Promise<createPetsResponse>>(getCreatePetsUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPetsBodyItem),
  });
};

export const getCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBodyItem[] },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBodyItem[] },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBodyItem[] }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBodyItem[];
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBodyItem[] },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationReturnType<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBodyItem[] },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Update a pet
 */
export type updatePetsResponse = {
  data: Pet;
  status: number;
};

export const getUpdatePetsUrl = () => {
  return `http://localhost:8000/pets`;
};

export const updatePets = async (
  pet: NonReadonly<Pet>,
  options?: RequestInit,
): Promise<updatePetsResponse> => {
  return customFetch<Promise<updatePetsResponse>>(getUpdatePetsUrl(), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(pet),
  });
};

export const getUpdatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePets>>,
    TError,
    { data: NonReadonly<Pet> },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updatePets>>,
  TError,
  { data: NonReadonly<Pet> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updatePets>>,
    { data: NonReadonly<Pet> }
  > = (props) => {
    const { data } = props ?? {};

    return updatePets(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof updatePets>>
>;
export type UpdatePetsMutationBody = NonReadonly<Pet>;
export type UpdatePetsMutationError = Error;

/**
 * @summary Update a pet
 */
export const useUpdatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updatePets>>,
    TError,
    { data: NonReadonly<Pet> },
    TContext
  >;
  request?: SecondParameter<typeof customFetch>;
}): UseMutationReturnType<
  Awaited<ReturnType<typeof updatePets>>,
  TError,
  { data: NonReadonly<Pet> },
  TContext
> => {
  const mutationOptions = getUpdatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Info for a specific pet
 */
export type showPetByIdResponse = {
  data: Pet;
  status: number;
};

export const getShowPetByIdUrl = (petId: string) => {
  return `http://localhost:8000/pets/${petId}`;
};

export const showPetById = async (
  petId: string,
  options?: RequestInit,
): Promise<showPetByIdResponse> => {
  return customFetch<Promise<showPetByIdResponse>>(getShowPetByIdUrl(petId), {
    ...options,
    method: 'GET',
  });
};

export const getShowPetByIdQueryKey = (petId: MaybeRef<string>) => {
  return ['http:', 'localhost:8000', 'pets', petId] as const;
};

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(unref(petId), { signal, ...requestOptions });

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(petId)),
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>;
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string>,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customFetch>;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getShowPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = unref(queryOptions).queryKey as QueryKey;

  return query;
}

/**
 * Generated by orval v7.4.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type {
  CreatePetsBodyItem,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '.././models';
import { customFetch } from '../../../custom-fetch';

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

/**
 * @summary List all pets
 */
export type listPetsResponse = {
  data: Pets;
  status: number;
  headers: Headers;
};

export const getListPetsUrl = (params?: ListPetsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString());
    }
  });

  return normalizedParams.size
    ? `http://localhost:3000/pets?${normalizedParams.toString()}`
    : `http://localhost:3000/pets`;
};

export const listPets = async (
  params?: ListPetsParams,
  options?: RequestInit,
): Promise<listPetsResponse> => {
  return customFetch<listPetsResponse>(getListPetsUrl(params), {
    ...options,
    method: 'GET',
  });
};

/**
 * @summary Create a pet
 */
export type createPetsResponse = {
  data: Pet | Error;
  status: number;
  headers: Headers;
};

export const getCreatePetsUrl = () => {
  return `http://localhost:3000/pets`;
};

export const createPets = async (
  createPetsBodyItem: CreatePetsBodyItem[],
  options?: RequestInit,
): Promise<createPetsResponse> => {
  return customFetch<createPetsResponse>(getCreatePetsUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPetsBodyItem),
  });
};

/**
 * @summary Update a pet
 */
export type updatePetsResponse = {
  data: Pet | Error;
  status: number;
  headers: Headers;
};

export const getUpdatePetsUrl = () => {
  return `http://localhost:3000/pets`;
};

export const updatePets = async (
  pet: NonReadonly<Pet>,
  options?: RequestInit,
): Promise<updatePetsResponse> => {
  return customFetch<updatePetsResponse>(getUpdatePetsUrl(), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(pet),
  });
};

/**
 * @summary Info for a specific pet
 */
export type showPetByIdResponse = {
  data: Pet | Error;
  status: number;
  headers: Headers;
};

export const getShowPetByIdUrl = (petId: string) => {
  return `http://localhost:3000/pets/${petId}`;
};

export const showPetById = async (
  petId: string,
  options?: RequestInit,
): Promise<showPetByIdResponse> => {
  return customFetch<showPetByIdResponse>(getShowPetByIdUrl(petId), {
    ...options,
    method: 'GET',
  });
};

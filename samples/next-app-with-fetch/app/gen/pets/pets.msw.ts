/**
 * Generated by orval v7.4.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { Cat, Dachshund, Dog, Labradoodle, Pet, Pets } from '.././models';

export const getListPetsResponseLabradoodleMock = (
  overrideResponse: Partial<Labradoodle> = {},
): Labradoodle => ({
  ...{
    cuteness: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Labradoodle'] as const),
  },
  ...overrideResponse,
});

export const getListPetsResponseDachshundMock = (
  overrideResponse: Partial<Dachshund> = {},
): Dachshund => ({
  ...{
    length: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Dachshund'] as const),
  },
  ...overrideResponse,
});

export const getListPetsResponseDogMock = (
  overrideResponse: Omit<Partial<Dog>, 'breed'> = {},
): Dog => ({
  ...faker.helpers.arrayElement([
    {
      ...getListPetsResponseLabradoodleMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
    {
      ...getListPetsResponseDachshundMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
  ]),
  ...overrideResponse,
});

export const getListPetsResponseCatMock = (
  overrideResponse: Partial<Cat> = {},
): Cat => ({
  ...{
    petsRequested: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    type: faker.helpers.arrayElement(['cat'] as const),
  },
  ...overrideResponse,
});

export const getListPetsResponseMock = (): Pets =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() =>
    faker.helpers.arrayElement([
      {
        ...getListPetsResponseDogMock(),
        '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
        id: faker.number.int({ min: undefined, max: undefined }),
        name: faker.string.alpha(20),
        tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
        email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
        callingCode: faker.helpers.arrayElement([
          faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
          undefined,
        ]),
        country: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            "People's Republic of China",
            'Uruguay',
          ] as const),
          undefined,
        ]),
      },
      {
        ...getListPetsResponseCatMock(),
        '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
        id: faker.number.int({ min: undefined, max: undefined }),
        name: faker.string.alpha(20),
        tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
        email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
        callingCode: faker.helpers.arrayElement([
          faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
          undefined,
        ]),
        country: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            "People's Republic of China",
            'Uruguay',
          ] as const),
          undefined,
        ]),
      },
    ]),
  );

export const getCreatePetsResponseLabradoodleMock = (
  overrideResponse: Partial<Labradoodle> = {},
): Labradoodle => ({
  ...{
    cuteness: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Labradoodle'] as const),
  },
  ...overrideResponse,
});

export const getCreatePetsResponseDachshundMock = (
  overrideResponse: Partial<Dachshund> = {},
): Dachshund => ({
  ...{
    length: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Dachshund'] as const),
  },
  ...overrideResponse,
});

export const getCreatePetsResponseDogMock = (
  overrideResponse: Omit<Partial<Dog>, 'breed'> = {},
): Dog => ({
  ...faker.helpers.arrayElement([
    {
      ...getCreatePetsResponseLabradoodleMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
    {
      ...getCreatePetsResponseDachshundMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
  ]),
  ...overrideResponse,
});

export const getCreatePetsResponseCatMock = (
  overrideResponse: Partial<Cat> = {},
): Cat => ({
  ...{
    petsRequested: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    type: faker.helpers.arrayElement(['cat'] as const),
  },
  ...overrideResponse,
});

export const getCreatePetsResponseMock = (): Pet =>
  faker.helpers.arrayElement([
    {
      ...getCreatePetsResponseDogMock(),
      '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.string.alpha(20),
      tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
    },
    {
      ...getCreatePetsResponseCatMock(),
      '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.string.alpha(20),
      tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
    },
  ]);

export const getUpdatePetsResponseLabradoodleMock = (
  overrideResponse: Partial<Labradoodle> = {},
): Labradoodle => ({
  ...{
    cuteness: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Labradoodle'] as const),
  },
  ...overrideResponse,
});

export const getUpdatePetsResponseDachshundMock = (
  overrideResponse: Partial<Dachshund> = {},
): Dachshund => ({
  ...{
    length: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Dachshund'] as const),
  },
  ...overrideResponse,
});

export const getUpdatePetsResponseDogMock = (
  overrideResponse: Omit<Partial<Dog>, 'breed'> = {},
): Dog => ({
  ...faker.helpers.arrayElement([
    {
      ...getUpdatePetsResponseLabradoodleMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
    {
      ...getUpdatePetsResponseDachshundMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
  ]),
  ...overrideResponse,
});

export const getUpdatePetsResponseCatMock = (
  overrideResponse: Partial<Cat> = {},
): Cat => ({
  ...{
    petsRequested: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    type: faker.helpers.arrayElement(['cat'] as const),
  },
  ...overrideResponse,
});

export const getUpdatePetsResponseMock = (): Pet =>
  faker.helpers.arrayElement([
    {
      ...getUpdatePetsResponseDogMock(),
      '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.string.alpha(20),
      tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
    },
    {
      ...getUpdatePetsResponseCatMock(),
      '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.string.alpha(20),
      tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
    },
  ]);

export const getShowPetByIdResponseLabradoodleMock = (
  overrideResponse: Partial<Labradoodle> = {},
): Labradoodle => ({
  ...{
    cuteness: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Labradoodle'] as const),
  },
  ...overrideResponse,
});

export const getShowPetByIdResponseDachshundMock = (
  overrideResponse: Partial<Dachshund> = {},
): Dachshund => ({
  ...{
    length: faker.number.int({ min: undefined, max: undefined }),
    breed: faker.helpers.arrayElement(['Dachshund'] as const),
  },
  ...overrideResponse,
});

export const getShowPetByIdResponseDogMock = (
  overrideResponse: Omit<Partial<Dog>, 'breed'> = {},
): Dog => ({
  ...faker.helpers.arrayElement([
    {
      ...getShowPetByIdResponseLabradoodleMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
    {
      ...getShowPetByIdResponseDachshundMock(),
      barksPerMinute: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        undefined,
      ]),
      type: faker.helpers.arrayElement(['dog'] as const),
    },
  ]),
  ...overrideResponse,
});

export const getShowPetByIdResponseCatMock = (
  overrideResponse: Partial<Cat> = {},
): Cat => ({
  ...{
    petsRequested: faker.helpers.arrayElement([
      faker.number.int({ min: undefined, max: undefined }),
      undefined,
    ]),
    type: faker.helpers.arrayElement(['cat'] as const),
  },
  ...overrideResponse,
});

export const getShowPetByIdResponseMock = (): Pet =>
  faker.helpers.arrayElement([
    {
      ...getShowPetByIdResponseDogMock(),
      '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.string.alpha(20),
      tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
    },
    {
      ...getShowPetByIdResponseCatMock(),
      '@id': faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: faker.string.alpha(20),
      tag: faker.helpers.arrayElement([faker.string.alpha(20), undefined]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
    },
  ]);

export const getListPetsMockHandler = (
  overrideResponse?:
    | Pets
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pets> | Pets),
) => {
  return http.get('*/pets', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getListPetsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getCreatePetsMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.post>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.post('*/pets', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getCreatePetsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getUpdatePetsMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.put>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.put('*/pets', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getUpdatePetsResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};

export const getShowPetByIdMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.get('*/pets/:petId', async (info) => {
    await delay(1000);

    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getShowPetByIdResponseMock(),
      ),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  });
};
export const getPetsMock = () => [
  getListPetsMockHandler(),
  getCreatePetsMockHandler(),
  getUpdatePetsMockHandler(),
  getShowPetByIdMockHandler(),
];

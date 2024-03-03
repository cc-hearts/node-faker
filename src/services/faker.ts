import { faker } from '@faker-js/faker';

const enum FieldType {
  ADDRESS = 'address',
  EMAIL = 'email',
  TEXT = 'text',
  NUMBER = 'number',
  ARRAY = 'array',
  OBJECT = 'object',
  BOOLEAN = 'boolean',
  STRING = 'string',
}

export interface FieldSchema {
  field: string;
  type: FieldType;
  children?: FieldSchema[]
}


function generatorAddress() {
  return faker.location.city()
}
export function mockFakerValue(fieldSchema: FieldSchema) {
  switch (fieldSchema.type) {
    case FieldType.ADDRESS:
      return generatorAddress();
    case FieldType.EMAIL:
      return faker.internet.email();
    case FieldType.TEXT:
      return faker.lorem.sentence();
    default:
      return null
  }
}
import { DataBuilder } from "./data-builder";
import { DataSchema } from "./data-schema";
import { IDataFactoryConfig } from "./interfaces";

export class DataFactory {
  static create(entity: DataSchema, config: IDataFactoryConfig = {}) {
    return new DataBuilder(entity, config.variation);
  }
}

import { IResolverObject } from "apollo-server-express";

const PhotoMetadata: IResolverObject = {
  typeId: par => par.type_id,
  typeName: par => par.type_name,
  isPrimary: par => par.is_primary
};

export default PhotoMetadata;

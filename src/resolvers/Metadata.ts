import { IResolverObject } from "apollo-server-express";

const Metadata: IResolverObject = {
  customFields: par => par.custom_fields
};

export default Metadata;

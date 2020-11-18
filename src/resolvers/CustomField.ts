import { IResolverObject } from "apollo-server-express";

const CustomField: IResolverObject = {
  displayName: par => par.display_name,
  variableName: par => par.variable_name
};

export default CustomField;

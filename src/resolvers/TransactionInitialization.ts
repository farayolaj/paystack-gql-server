import { IResolverObject } from "apollo-server-express";

const TransactionInitialization: IResolverObject = {
  authorizationUrl: par => par.authorization_url,
  accessCode: par => par.access_code
};

export default TransactionInitialization;
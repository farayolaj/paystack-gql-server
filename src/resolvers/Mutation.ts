import { IResolverObject } from "apollo-server-express";
import { objKeysToSnakeCase, setHeaders, buildResponse } from "../util";
import * as TransactionApi from '../api/TransactionApi';

const Mutation: IResolverObject = {
  initializeTransaction: async (_par, { options={} }, { req, res }) => {
    options = objKeysToSnakeCase(options);
    const apiKey = req.headers.authorization;
    try {
      const apiRes = await TransactionApi.initializeTransaction(options, apiKey);

      setHeaders(apiRes.headers, res);
      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }
  }
}

export default Mutation;

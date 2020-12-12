import { IResolverObject } from "apollo-server-express";
import * as TransactionApi from "../api/TransactionApi";
import { buildResponse, objKeysToSnakeCase, setHeaders } from "../util";

const Query: IResolverObject = {
  verifyTransaction: async (_par, { reference }, { req, res }) => {
    const apiKey = req.headers.authorization;
    try {
      const apiRes = await TransactionApi.verifyTransaction(reference, apiKey);
      setHeaders(apiRes.headers, res);
      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }
  },
  allTransactions: async (_par, { paging={}, options={} }, { req, res }) => {
    options = objKeysToSnakeCase(options);
    const apiKey = req.headers.authorization;
    try {
      const apiRes = await TransactionApi.getAllTransactions({ ...paging, ...options }, apiKey);

      setHeaders(apiRes.headers, res);

      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }
  },
  transaction: async (_par, { id }, { req, res }) => {
    const apiKey = req.headers.authorization;

    try {
      const apiRes = await TransactionApi.getTransaction(id, apiKey);

      setHeaders(apiRes.headers, res);

      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }

  },
  timeline: async (_par, { id, reference }, { req, res }) => {
    const apiKey = req.headers.authorization;

    try {
      const apiRes = await TransactionApi.getTimeline(id || reference, apiKey);

      setHeaders(apiRes.headers, res);

      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }

  },
  transactionTotals: async (_par, { paging, filter }, { req, res }) => {
    const apiKey = req.headers.authorization;

    const options = { ...paging, ...filter };

    try {
      const apiRes = await TransactionApi.getTotals(options, apiKey);

      setHeaders(apiRes.headers, res);

      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }
  },
  exportTransactions: async (_par, { paging, filter, options }, { req, res }) => {
    options = objKeysToSnakeCase(options);
    const apiKey = req.headers.authorization;
    options = { ...paging, ...filter, ...options };

    try {
      const apiRes = await TransactionApi.exportTransactions(options, apiKey);

      setHeaders(apiRes.headers, res);

      return buildResponse(apiRes.statusCode, apiRes.data);
    } catch (error) {
      throw error;
    }
  },
};

export default Query;
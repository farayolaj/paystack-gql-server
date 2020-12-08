import express from 'express';

type Headers = Record<string, string>;

/**
 * Set headers on an express response object
 * @param headers Headers you want to set
 * @param res Express response object
 */
export function setHeaders(headers: Headers, res: express.Response): void {
  Object.entries<string>(headers).forEach(([headerKey, headerValue]) => {
    if (!res.headersSent) res.setHeader(headerKey, headerValue);
  });
}

type PaystackResponse = {
  status: boolean,
  message: string,
  data: Record<string, any>,
  meta?: Record<string, any>
};

type GQLResponse = {
  statusCode: number
  status: boolean,
  message: string,
  data: Record<string, any>
  meta?: Record<string, any>
}

/**
 * Build up a response to correspond with the general response format as described in the schema
 * @param statusCode Status code fro Paystack response
 * @param res Response from Paystack API
 */
export function buildResponse(statusCode: number, res: PaystackResponse): GQLResponse {
  const out = {
    statusCode,
    ...res,
    data: res.data
  };
  if (res.meta) out.meta = res.meta;
  return out;
}

export function setAuthorizationHeader(apiKey: string) {
  return {
    Authorization: apiKey
  };
}

export function camelCaseToSnakeCase(word: string) {
    return word.replace(/[A-Z]/, substr => {
      return '_'+substr.toLowerCase();
    });
}

export function objKeysToSnakeCase(obj: Record<string, any>) {
  if (!obj) return obj;
  const newObj: typeof obj = {};
  Object.entries(obj).forEach(([ key, value ]) => {
    const newValue = typeof value === 'object' ? objKeysToSnakeCase(value) : value
    newObj[camelCaseToSnakeCase(key)] = newValue;
  });
  return newObj;
}
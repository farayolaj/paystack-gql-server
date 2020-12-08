import axios from 'axios';
import { setAuthorizationHeader } from '../util';

const ApiInstance = axios.create({
  baseURL: 'https://api.paystack.co/transaction',
  validateStatus: status => status > 0
});

export async function initializeTransaction(data: Record<string, any>, apiKey: string) {
  const res = await ApiInstance.post('/initialize', data, {
    headers: setAuthorizationHeader(apiKey)
  });
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status
  };
}

export async function verifyTransaction(reference: string, apiKey: string) {
  const res = await ApiInstance.get(`/verify/${reference}`, {
    headers: setAuthorizationHeader(apiKey)
  });
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status
  };
}

export async function getAllTransactions(options: Record<string, any>, apiKey: string) {
  const res = await ApiInstance.get('', {
    params: options,
    headers: setAuthorizationHeader(apiKey)
  });
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status
  };
}

export async function getTransaction(id: string, apiKey: string) {
  const res = await ApiInstance.get(`/${id}`, {
    headers: setAuthorizationHeader(apiKey)
  });
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status
  };
}

export async function getTimeline(id: string, apiKey: string) {
  const res = await ApiInstance.get(`timeline/${id}`, {
    headers: setAuthorizationHeader(apiKey)
  });
  return {
    data: res.data,
    headers: res.headers,
    statusCode: res.status
  };
}
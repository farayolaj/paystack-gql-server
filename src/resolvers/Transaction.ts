import { IResolverObject } from "apollo-server-express";

const Transaction: IResolverObject = {
  gatewayResponse: par => par.gateway_response,
  paidAt: par => par.paid_at,
  createdAt: par => par.created_at,
  ipAddress: par => par.ip_address,
  feeSplit: par => par.fee_split,
  requestedAmount: par => par.requested_amount,
  transactionDate: par => par.transaction_date
};

export default Transaction;

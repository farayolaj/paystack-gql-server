import { IResolverObject } from "apollo-server-express";

const TransactionTotal: IResolverObject = {
  totalTransactions: par => par.total_transactions,
  uniqueCustomers: par => par.unique_customers,
  totalVolume: par => par.total_volume,
  totalVolumeByCurrency: par => par.total_volume_by_currency,
  pendingTransfers: par => par.pending_transfers,
  pendingTransfersByCurrency: par => par.pending_transfers_by_currency
};

export default TransactionTotal;

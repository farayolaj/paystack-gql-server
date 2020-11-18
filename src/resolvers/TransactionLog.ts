import { IResolverObject } from "apollo-server-express";

const TransactionLog: IResolverObject = {
  startTime: par => par.start_time,
  timeSpent: par => par.time_spent
};

export default TransactionLog;

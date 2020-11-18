import { IResolverObject } from "apollo-server-express";

const Customer : IResolverObject = {
  firstName: par => par.first_name,
  lastName: par => par.last_name,
  customerCode: par => par. customer_code,
  createdAt: par => par.created_at,
  updatedAt: par => par.updated_at,
  riskAction: par => par.risk_action
};

export default Customer;

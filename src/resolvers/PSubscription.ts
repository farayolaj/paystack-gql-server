import { IResolverObject } from "apollo-server-express";

const Subscription: IResolverObject = {
  subscriptionCode: par => par.subscription_code,
  emailToken: par => par.email_token,
  easyCronId: par => par.easy_cron_id,
  cronExpression: par => par.cron_expression,
  nextPaymentDate: par => par.next_payment_date,
  openInvoice: par => par.open_invoice,
  createdAt: par => par.created_at,
  updatedAt: par => par.updated_at
};

export default Subscription;

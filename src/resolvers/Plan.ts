import { IResolverObject } from "apollo-server-express";

const Plan: IResolverObject = {
  planCode: par => par.plan_code,
  sendInvoices: par => par.send_invoices,
  sendSms: par => par.send_sms,
  hostedPage: par => par.hosted_page,
  hostedPageUrl: par => par.hosted_page_url,
  hostedPageSummary: par => par.hosted_page_summary,
  createdAt: par => par.created_at,
  updatedAt: par => par.updated_at
};

export default Plan;

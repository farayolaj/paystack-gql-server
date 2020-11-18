import { IResolverObject } from "apollo-server-express";

const Authorization: IResolverObject = {
  authorizationCode: par => par.authorization_code,
  cardType: par => par.card_type,
  expMonth: par => par.exp_month,
  expYear: par => par.exp_year,
  countryCode: par => par.country_code,
  accountName: par => par.account_name
}

export default Authorization;
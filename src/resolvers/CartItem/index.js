import resolveShopFromShopId from "@reactioncommerce/api-utils/graphql/resolveShopFromShopId.js";
import { encodeCartItemOpaqueId } from "../../xforms/id.js";
import productTags from "./productTags.js";

export default {
  _id: (node) => encodeCartItemOpaqueId(node._id),
  productTags,
  shop: resolveShopFromShopId,
  price: getTargetCurrencyPrice,
};

async function getTargetCurrencyPrice(cartItem, connectionArgs, context, info) {
  const currencyCode = context.account.profile.currency;
  return currencyCode ? {
    amount: context.queries.getExchangedPrice(cartItem.price.amount, currencyCode),
    currencyCode,
  }: cartItem.price
}
import { decodeCartItemsOpaqueIds, decodeCartOpaqueId, decodeShopOpaqueId } from "../../xforms/id.js";

export default async function updateCartCurrency(parentResult, { cartId, currencyCode, cartToken }, context) {
  return context.mutations.updateCartCurrency(context, {
	  cartId: decodeCartOpaqueId(cartId),
	  currencyCode,
	  cartToken,
  });
}

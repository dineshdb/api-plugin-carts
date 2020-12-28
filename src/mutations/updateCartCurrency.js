import ReactionError from "@reactioncommerce/reaction-error";
import getCartById from "../util/getCartById.js";

export default async function updateCartCurrency(context, input) {
  const { cartId, currencyCode, cartToken} = input;

  const cart = await getCartById(context, cartId, { cartToken, throwIfNotFound: true });
  if(!currencyCode) {
    throw new ReactionError("Invalid currencyCode");
  }

  const newCart = {...cart, currencyCode,};
  const savedCart = await context.mutations.saveCart(context, newCart);
  return { cart: savedCart };
}

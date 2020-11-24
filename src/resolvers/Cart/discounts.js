import getCurrencyDefinitionByCode from "@reactioncommerce/api-utils/getCurrencyDefinitionByCode.js";

export default function getDiscounts(cart, _, context) {
    cart.billing = cart.billing || [];
    return cart.billing.map(b => {
        const {_id, amount,  currencyCode, data: {discountId, code}, method, createdAt,} = b;
        return {
            id: _id,
            appliedAt: createdAt,
            amount,
            currencyCode,
            discountCode: code,
            discountId,
            method,
        }
    })
}
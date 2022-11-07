import { $authHost } from "./index";

export const fetchCart = async () => {
    const { data } = await $authHost.get("api/cart");
    return data;
};

/**
 * Adds a product to the cart.
 * @property {CartProduct} cartProduct
 * @returns {Promise<Object>}
 */
export const addProductToCart = async (cartProduct) => {
    const { data } = await $authHost.post("api/cart", cartProduct);
    return data;
};

/**
 * Deletes a product from the cart.
 * @param cartProductId
 * @returns {Promise<Object>}
 */
export const deleteProductFromCart = async (cartProductId) => {
    const { data } = await $authHost.delete(`api/cart/${cartProductId}`);
    return data;
};

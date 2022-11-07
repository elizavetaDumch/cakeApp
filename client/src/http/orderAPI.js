import { $authHost } from "./index";

export const createOrder = async (formData) => {
    const { data } = await $authHost.post("api/order", formData);
    return data;
};

export const fetchOrders = async () => {
    const { data } = await $authHost.get("api/order");
    return data;
};

export const fetchOrder = async (id) => {
    const { data } = await $authHost.get(`api/order/${id}`);
    return data;
};

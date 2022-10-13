import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type_cake', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type_cake')
    return data
}

export const createCake = async (cake) => {
    const { data } = await $authHost.post('api/cake', cake)
    return data
}

export const fetchCakes = async (typeCakeId, page, limit) => {
    const { data } = await $host.get('api/cake', { params: { typeCakeId, page, limit } })
    return data
}

export const fetchWeights = async (typeCakeId) => {
    const { data } = await $host.get('api/weight', {params: { typeCakeId }})
    return data
}
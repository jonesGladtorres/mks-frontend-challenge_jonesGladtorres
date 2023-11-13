import { api } from "./api"

export const getProducts = async () => {
    try {
        const { data } = await api.get('')
        return data
    } catch (error) {
        return error
    }
}
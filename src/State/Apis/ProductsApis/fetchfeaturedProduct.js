import { fetchFeatureProducts } from "../../Slices/ProductSlices";
import axios from "axios"
const featchFeaturedProductsApi = () => {
    return async dispatch => {
        const response = await axios.get("https://fakestoreapi.com/products?limit=5")
        const data = await response.data
        console.log(data)
        dispatch(fetchFeatureProducts(data))
    }
}

export { featchFeaturedProductsApi }
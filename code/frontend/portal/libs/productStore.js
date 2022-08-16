import ProductData from "../utils/products.json";
export const getAllProducts = async () => {
    return ProductData;
}
export const getProductBySlug = async (productSlug) => {
    return ProductData.find((product) => product.slug === productSlug);
}
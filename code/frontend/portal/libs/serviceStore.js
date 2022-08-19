import ServiceData from "../utils/services.json";
export const getAllServices = async () => {
    return ServiceData;
}
export const getServiceBySlug = async (serviceSlug) => {
    return ServiceData.find((service) => service.slug === serviceSlug);
}
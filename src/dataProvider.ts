import jsonServerProvider from "ra-data-json-server";

// URL directe de l'API simulée (json-server)
const API_URL = "http://127.0.0.1:3002";
// Export du dataProvider
export const dataProvider = jsonServerProvider(API_URL);

import jsonServerProvider from "ra-data-json-server";

// URL directe de l'API simulée (json-server)
const API_URL = "http://localhost:3002";

// Export du dataProvider
export const dataProvider = jsonServerProvider(API_URL);

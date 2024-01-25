import { Product } from "@/types/product.modal";

export const getProducts = async (): Promise<Product[]> => {
  let products;
  const url = "https://api.escuelajs.co/api/v1/products";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    products = JSON.parse(result);
  } catch (error) {
    console.error(error);
  }

  return products as Product[];
};

import { Category } from "@/types/product.modal";

export const getCategory = async (): Promise<Category[]> => {
  let category;
  const url = "https://api.escuelajs.co/api/v1/categories";
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    category = JSON.parse(result);
  } catch (error) {
    console.error(error);
  }

  return category as Category[];
};

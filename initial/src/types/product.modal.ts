export type Product = {
  id: number;
  title: string;
  price: string;
  images: string[];
  description: string;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

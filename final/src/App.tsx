import { useQuery } from "@tanstack/react-query";
import "./app.css";
import { getProducts } from "./lib/products";
import FiltreSection from "./components/FiltreSection";
import { getCategory } from "./lib/category";

function App() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });

  return (
    <main className="w-4/6 mx-auto  h-screen p-3">
      <h1 className="text-center text-4xl font-bold mt-3">
        Astuces React & Framer motion
      </h1>
      <FiltreSection products={products} category={category} />
    </main>
  );
}

export default App;

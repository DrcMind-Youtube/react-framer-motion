import { Category, Product } from "@/types/product.modal";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

type Props = {
  products: Product[] | undefined;
  category: Category[] | undefined;
};

export default function FiltreSection({ products, category }: Props) {
  const [filterData, setFilterData] = useState<Product[] | undefined>(products);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilterData(products);
  }, [products]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setFilterData(products);
    } else {
      const filtered = products?.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filtered);
    }
  };

  const handleFilter = (category: string) => {
    setFilter(category);

    if (category === "") {
      setFilterData(products);
    } else {
      const filtered = products?.filter(
        (product) => product.category.name === category
      );
      setFilterData(filtered);
    }
  };

  return (
    <section className=" w-full ">
      <div className="flex justify-center items-center mt-4">
        <input
          type="text"
          placeholder="Rechercher un produit"
          onChange={(e) => handleSearch(e)}
          name="search"
          className="border-2 border-gray-300 p-2 rounded-md max-w-xs w-full"
        />
      </div>

      {/* filter  */}

      <div className="flex justify-center items-center w-full mt-5 gap-3">
        <button
          className={`rounded-md bg-slate-300 text-slate-700 p-2 text-center text-sm font-medium hover:text-white hover:bg-gray-700 transition`}
          onClick={() => handleFilter("")}
        >
          Tous
        </button>
        {category?.map((cat) => (
          <button
            className={`rounded-md bg-slate-300 text-slate-700 p-2 text-center text-sm font-medium hover:text-white hover:bg-gray-700 transition
               ${filter === cat.name && "bg-gray-700 text-white"}
             `}
            onClick={() => handleFilter(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* produits */}

      <h2 className="text-2xl font-bold mt-2 text-center">
        Nos produits {filter} ({filterData?.length})
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-5">
        {filterData?.map((product) => (
          <AnimatePresence>
            <ProductCard product={product} key={product.id} />
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
}

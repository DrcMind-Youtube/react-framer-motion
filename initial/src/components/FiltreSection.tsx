type Props = {};

export default function FiltreSection({}: Props) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handleFilter = (category: string) => {};

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

      <div className="flex justify-center items-center w-full mt-5 gap-3"></div>

      {/* produits */}

      <h2 className="text-2xl font-bold mt-2 text-center">Nos produits</h2>

      <div className="grid grid-cols-4 gap-4 mt-5"></div>
    </section>
  );
}

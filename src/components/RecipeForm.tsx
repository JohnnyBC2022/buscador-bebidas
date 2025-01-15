import { ChangeEvent, useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function RecipeForm() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: '',
    category: ''
  })
  
  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);

  useEffect(() => {
    fetchCategories();
  }, []);
  
  const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
    setSearchFilters({
      ...searchFilters,
      [e.target.name] : e.target.value
    })
  }
  
  return (
    <form className="p-10 my-32 space-y-6 rounded-lg shadow md:w-1/2 2xl:w-1/3 bg-rose-400">
      <div className="space-y-4">
        <label
          htmlFor="ingredient"
          className="block text-lg font-extrabold text-white uppercase"
        >
          Nombre o Ingredientes
        </label>

        <input
          id="ingredient"
          type="text"
          name="ingredient"
          className="w-full p-3 rounded-lg focus:outline-none"
          placeholder="Nombre o Ingrediente: Ej. Vodka, Tequila, "
          onChange={handleChange}
          value={searchFilters.ingredient}
        />
      </div>
      <div className="space-y-4">
        <label
          htmlFor="category"
          className="block text-lg font-extrabold text-white uppercase"
        >
          Categoría
        </label>

        <select
          id="category"
          name="category"
          className="w-full p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
          value={searchFilters.category}
        >
          <option value="">-- Selecciona --</option>
          {categories.drinks.map((category) => (
            <option value={category.strCategory} key={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value="Buscar Receta"
        className="w-full p-2 font-extrabold text-white uppercase rounded-lg cursor-pointer bg-rose-800 hover:bg-rose-900"
      />
    </form>
  );
}

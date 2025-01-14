

export default function RecipeForm() {
  return (
    <form
            className="md:w-1/2 2xl:w-1/3 bg-rose-400 my-32 p-10 rounded-lg shadow space-y-6"
          >
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Nombre o Ingredientes
              </label>

              <input
                id="ingredient"
                type="text"
                name="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Nombre o Ingrediente: Ej. Vodka, Tequila, "
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="category"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Categoría
              </label>

              <select
                id="category"
                name="category"
                className="p-3 w-full rounded-lg focus:outline-none"
              >
                <option value="">-- Selecciona --</option>
              </select>
            </div>
            <input
              type="submit"
              value="Buscar Receta"
              className="cursor-pointer bg-rose-800 hover:bg-rose-900 text-white font-extrabold w-full rounded-lg p-2 uppercase"
            />
          </form>
  )
}

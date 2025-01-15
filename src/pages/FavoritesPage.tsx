import { useMemo } from "react";
import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  const hasFavorites = useMemo(()=>favorites.length,[favorites])
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      {hasFavorites ? (
        <section className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-4">
        {favorites.map((recipe) => (
          <DrinkCard key={recipe.idDrink} drink={recipe} />
        ))}
      </section>
      ) : (
        <p className="my-10 text-2xl text-center">Vuelve a la página de inicio, busca recetas y los favoritos se mostrarán aquí</p>
      )}
    </>
  );
}

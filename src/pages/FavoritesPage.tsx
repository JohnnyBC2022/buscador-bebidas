import DrinkCard from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      <section className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-4">
        {favorites.map((recipe) => (
          <DrinkCard key={recipe.idDrink} drink={recipe} />
        ))}
      </section>
    </>
  );
}

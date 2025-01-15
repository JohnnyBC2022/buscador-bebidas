import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RecipeModal from "../components/RecipeModal";
import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage);
  

  useEffect(() => {
    loadFromStorage();
  }, []);
  return (
    <>
      <Header />
      <main className="container py-16 mx-auto">
        <Outlet />
      </main>
      <RecipeModal />
    </>
  );
}

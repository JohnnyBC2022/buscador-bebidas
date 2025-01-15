import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RecipeModal from "../components/RecipeModal";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container py-16 mx-auto">
        <Outlet />
      </main>
      <RecipeModal/>
    </>
  );
}

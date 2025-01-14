import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import RecipeForm from "./RecipeForm";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  return (
    <header className={isHome ? "bg-header bg-cover bg-center bg-no-repeat" :"bg-zinc-800"}>
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-48" src="/logo.png" alt="logotipo" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 uppercase font-bold text-2xl"
                  : "text-white uppercase font-bold text-2xl"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? "text-rose-500 uppercase font-bold text-2xl"
                  : "text-white uppercase font-bold text-2xl"
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <RecipeForm/>
        )}
      </div>
    </header>
  );
}

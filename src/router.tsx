import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

// Al hacer esta importación de esta manera, lo que conseguimos es que no se descargan todas las páginas, al hacer el build de la aplicación no lo construye todo en un solo archivo, el de la página de favoritos lo construye en otro archivo y solo se descargará esta página cuando se acceda a ella, lo que mejora la performance de la página web y la experiencia de la página será mejor
const IndexPage = lazy(() => import("./pages/IndexPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Cargando...">
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path="/favoritos"
            element={
              // Aquí se puede sustituir por un spinner de carga
              <Suspense fallback="Cargando...">
                <FavoritesPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

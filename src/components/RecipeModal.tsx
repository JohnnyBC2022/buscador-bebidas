import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

export default function RecipeModal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite);
  const favoriteExists = useAppStore((state) => state.favoriteExists);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal list-none">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                  <DialogTitle
                    as="h3"
                    className="my-5 text-4xl font-extrabold text-center text-gray-900"
                  >
                    {selectedRecipe.strDrink}
                  </DialogTitle>
                  <img
                    src={selectedRecipe.strDrinkThumb}
                    alt={`Imágen de ${selectedRecipe.strDrink}`}
                    className="mx-auto border-4 border-black w-96"
                  />
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-gray-900"
                  >
                    Ingredientes y Cantidades
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle
                    as="h3"
                    className="my-5 text-2xl font-extrabold text-gray-900"
                  >
                    Instrucciones
                  </DialogTitle>
                  <p className="text-lg">
                    {selectedRecipe.strInstructionsES
                      ? selectedRecipe.strInstructionsES
                      : selectedRecipe.strInstructions}
                  </p>

                  <div className="flex justify-between gap-4 mt-5">
                    <button
                      type="button"
                      className="w-full p-3 font-bold text-white uppercase bg-gray-600 rounded shadow hover:bg-gray-500"
                      onClick={closeModal}
                    >
                      Cerrar
                    </button>
                    <button
                      type="button"
                      className="w-full p-3 font-bold text-white uppercase rounded shadow bg-rose-400 hover:bg-rose-500"
                      onClick={() => {
                        handleClickFavorite(selectedRecipe);
                      }}
                    >
                      {favoriteExists(selectedRecipe.idDrink)
                        ? "Eliminar de Favoritos"
                        : "Añadir a Favoritos"}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

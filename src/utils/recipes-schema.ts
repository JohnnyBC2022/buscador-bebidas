import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        }))
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
})

export const DrinkAPIResponse = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIResponse = z.object({
    drinks: z.array(DrinkAPIResponse)
})

export const RecipeApiResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strInstructionsES: z.string().nullable().optional(),
    strIngredient1: z.string().nullable().optional(),
    strIngredient2: z.string().nullable().optional(),
    strIngredient3: z.string().nullable().optional(),
    strIngredient4: z.string().nullable().optional(),
    strIngredient5: z.string().nullable().optional(),
    strIngredient6: z.string().nullable().optional(),
    strIngredient7: z.string().nullable().optional(),
    strIngredient8: z.string().nullable().optional(),
    strIngredient9: z.string().nullable().optional(),
    strIngredient10: z.string().nullable().optional(),
    strIngredient11: z.string().nullable().optional(),
    strIngredient12: z.string().nullable().optional(),
    strIngredient13: z.string().nullable().optional(),
    strIngredient14: z.string().nullable().optional(),
    strIngredient15: z.string().nullable().optional(),
    strMeasure1: z.string().nullable().optional(),
    strMeasure2: z.string().nullable().optional(),
    strMeasure3: z.string().nullable().optional(),
    strMeasure4: z.string().nullable().optional(),
    strMeasure5: z.string().nullable().optional(),
    strMeasure6: z.string().nullable().optional(),
    strMeasure7: z.string().nullable().optional(),
    strMeasure8: z.string().nullable().optional(),
    strMeasure9: z.string().nullable().optional(),
    strMeasure10: z.string().nullable().optional(),
    strMeasure11: z.string().nullable().optional(),
    strMeasure12: z.string().nullable().optional(),
    strMeasure13: z.string().nullable().optional(),
    strMeasure14: z.string().nullable().optional(),
    strMeasure15: z.string().nullable().optional(),
})
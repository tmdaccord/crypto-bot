import {Action, createReducer, on} from '@ngrx/store';
import * as BotActions from './bot.actions';
import {Bot} from '../bot.model';

export interface State {
  bots: Bot[];
}

export const initialState: State = {
  bots: []
};

const botReducer = createReducer(
  initialState,
  // on(BotActions.setBots, (state, {bots}) => ({
  //   ...state,
  //   bots: [...bots]
  // })),
  // on(BotActions.addBot, (state, {bot}) => ({
  //   ...state,
  //   recipes: [...state.recipes, recipe]
  // })),
  // on(BotActions.updateBot, (state, {index, recipe}) => {{
  //   const updatedRecipe = {
  //     ...state.recipes[index],
  //     ...recipe
  //   };
  //   const updatedRecipes = [...state.recipes];
  //   updatedRecipes[index] = updatedRecipe;
  //   return {
  //     ...state,
  //     recipes: updatedRecipes
  //   };
  // }}),
  // on(BotActions.deleteBot, (state, {index}) => {
  //   return {
  //     ...state,
  //     recipes: state.recipes.filter((recipe, recipeIndex) => {
  //       return recipeIndex !== index;
  //     })
  //   };
  // }),






  // on(ShoppingListActions.addIngredients, (state, {ingredients}) => ({
  //   ...state,
  //   ingredients: [...state.ingredients, ...ingredients]
  // })),
  // on(ShoppingListActions.updateIngredient, (state, {ingredient}) => {
  //   const newIngredients = [...state.ingredients];
  //   newIngredients[state.editedIngredientIndex] = ingredient;
  //   return {
  //     ...state,
  //     ingredients: newIngredients,
  //     editedIngredient: null,
  //     editedIngredientIndex: -1
  //   };
  // }),
  // on(ShoppingListActions.deleteIngredient, (state) => {
  //   // const newIngredients = [...state.ingredients];
  //   // newIngredients.splice(state.editedIngredientIndex, 1);
  //   return {
  //     ...state,
  //     ingredients: state.ingredients.filter((ig, igIndex) => {
  //       return igIndex !== state.editedIngredientIndex;
  //     }),
  //     editedIngredient: null,
  //     editedIngredientIndex: -1
  //   };
  // }),
  // on(ShoppingListActions.startEdit, (state, {index}) => {
  //   return {
  //     ...state,
  //     editedIngredient: {...state.ingredients[index]},
  //     editedIngredientIndex: index
  //   };
  // }),
  // on(ShoppingListActions.stopEdit, (state) => {
  //   return {
  //     ...state,
  //     editedIngredient: null,
  //     editedIngredientIndex: -1
  //   };
  // })
);

export function reducer(state: State | undefined, action: Action) {
  return botReducer(state, action);
}

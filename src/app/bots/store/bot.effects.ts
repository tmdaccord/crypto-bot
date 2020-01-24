import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as BotActions from './bot.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class BotEffects {
  storeBots$ = createEffect(
    () => this.actions$.pipe(
      ofType(BotActions.addBot),
      withLatestFrom(this.store.select('userBots')),
      switchMap(([action, botsState]) => {
        return this.httpClient.put('https://ng-crypto-bot.firebaseio.com/user-bots.json',
          botsState.bots
        ).pipe(
          map(() => {
            return action;
          })
        );
      })
    ),
    {dispatch: false}
  );


//   fetchRecipes$ = createEffect(() => this.actions$.pipe(
//     ofType(RecipeActions.fetchRecipes),
//     switchMap(() => {
//       return this.httpClient.get<Recipe[]>('https://ng-recipe-book-a334f.firebaseio.com/recipes.json').pipe(
//         map(recipes => {
//           return recipes.map(recipe => {
//             return {
//               ...recipe,
//               ingredients: recipe.ingredients ? recipe.ingredients : []
//             };
//           });
//         }),
//         map(recipes => {
//           return RecipeActions.setRecipes({recipes});
//         })
//       );
//     })
//   ));
//
//   storeRecipes$ = createEffect(
//     () => this.actions$.pipe(
//       ofType(RecipeActions.storeRecipes),
//       withLatestFrom(this.store.select('recipes')),
//       switchMap(([action, recipesState]) => {
//         return this.httpClient.put('https://ng-recipe-book-a334f.firebaseio.com/recipes.json',
//           recipesState.recipes
//         ).pipe(
//           map(() => {
//             return action;
//           })
//         );
//       })
//     ),
//     {dispatch: false}
//   );
//
  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<AppState>) {
  }
}

import { createAction, props } from '@ngrx/store';
import {Bot} from "../bot.model";

// export const setBots = createAction('[Bots] Set Bots', props<{bots: Bot[]}>());
// export const fetchBots = createAction('[Bots] Fetch Bots');
export const addBot = createAction('[Bots] Add Bot', props<{bot: Bot}>());
// export const updateBot = createAction('[Bots] Update Bot', props<{index: number, bot: Bot}>());
// export const deleteBot = createAction('[Bots] Delete Bot', props<{index: number}>());
// export const storeBots = createAction('[Bots] Store Bot');

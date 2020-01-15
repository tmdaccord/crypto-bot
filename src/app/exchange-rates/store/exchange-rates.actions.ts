import {createAction, props} from '@ngrx/store';
import {Rate} from '../rate.model';

export const fetchRates = createAction('[Exchange Rates] Fetch Rates');
export const fetchRatesFail = createAction('[Exchange Rates] Fetch Rates Fail', props<{error: string}>());
export const setRates = createAction('[Exchange Rates] Set Rates', props<{rates: Rate[]}>());

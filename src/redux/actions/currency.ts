import { createAction } from '../helpers'
import {
  SWAP_CURRENCY,
  CHANGE_CHURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_SUCCESS,
  CONVERSION_ERROR,
} from '../constants';
import { TCurrencies, ICurrencyApi } from '../types'

export const swapCurreny = () => createAction(SWAP_CURRENCY)
import { Reducer } from 'redux'
import {
  SWAP_CURRENCY,
  CHANGE_CHURRENCY_AMOUNT,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  CONVERSION_SUCCESS,
  CONVERSION_ERROR,
} from '../constants';
import * as currencyActions from '../actions/currency'
import { ExtractActions, ICurrencyApi,TCurrencies } from '../types';

interface IState {
  readonly baseCurrency: TCurrencies
  readonly quoteCurrency: TCurrencies
  readonly amount: number
  readonly error: string | boolean
  readonly conversions: {[key in TCurrencies]?: ICurrencyApi}
}
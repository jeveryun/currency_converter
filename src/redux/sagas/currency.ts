import { takeEvery, select, call, put } from 'redux-saga/effects'
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
} from '../constants';
import { TCurrencies, ExtractActions } from '../types'
import * as currencyActions from '../actions/currency'
import { baseCurrencySelector } from '../selectors/currency'
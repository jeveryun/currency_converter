import { createStore, applyMiddleware} from 'redux'
import createSageMiddleware from 'redux-saga'
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers'
import { rootSaga} from './sagas'

export function configureStore(key = 'root') {
  const persistConfig: PersistConfig = {
    key,
    storage,
    version: 1
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const sagaMiddleware = createSageMiddleware()

  const store = createStore(
    persistConfig,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor}
}
import { configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux'
import { rootReducer } from './combineReducers'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

export type RootState = ReturnType<ReturnType<typeof store>['getState']>
export type AppDispatch = ReturnType<typeof store>['dispatch']

const { dispatch } = store

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector
const useDispatch = () => useAppDispatch<AppDispatch>()

export { store, dispatch, useSelector, useDispatch }

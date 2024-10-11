import { combineReducers } from 'redux'
import { contactFormReducer } from '@/state/slices/contactFormSlice'

export const rootReducer = combineReducers({
  contact: contactFormReducer,
})

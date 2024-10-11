import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/state/store/store'

export enum ContactFormActions {
  NAME = '@CONTACT_FORM',
  SEND_MESSAGE = '@CONTACT_FORM/SEND_MESSAGE',
  SEND_THANK_YOU = '@CONTACT_FORM/SEND_THANK_YOU',
}

export interface ContactFormParams {
  name: string
  email: string
  message: string
  captchaToken?: string
}

interface ContactState {
  formData: ContactFormParams
  loading: boolean
  error: string | null
}

export const INITIAL_CONTACT_FORM_STATE: ContactState = {
  formData: { name: '', email: '', message: '', captchaToken: '' },
  loading: false,
  error: null,
}

export const sendMessageAsync = createAsyncThunk<
  { message: string },
  ContactFormParams,
  { state: RootState; rejectValue: string }
>(ContactFormActions.SEND_MESSAGE, async (payload, { dispatch, rejectWithValue }) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.ok) {
      dispatch(sendThankYouAsync(payload))
    }
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to send message')
  }
})

export const sendThankYouAsync = createAsyncThunk<
  void,
  ContactFormParams,
  { state: RootState; rejectValue: string }
>(ContactFormActions.SEND_THANK_YOU, async (payload, { dispatch, rejectWithValue }) => {
  try {
    await fetch('/api/thank-you', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch (error: any) {
    return rejectWithValue(error.message || 'Failed to send thank-you message')
  }
})

const contactFormSlice = createSlice({
  name: ContactFormActions.NAME,
  initialState: INITIAL_CONTACT_FORM_STATE,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<ContactFormParams>>) => {
      state.formData = { ...state.formData, ...action.payload }
    },
    resetForm: (state) => {
      state.formData = INITIAL_CONTACT_FORM_STATE.formData
      state.error = null
    },
  },
})

export const { setFormData, resetForm } = contactFormSlice.actions
export const contactFormReducer = contactFormSlice.reducer

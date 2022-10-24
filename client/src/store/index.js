import { configureStore } from '@reduxjs/toolkit'
import marvelous from './slice/index.js'

export const store =  configureStore({
  reducer: {
    marvelous
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
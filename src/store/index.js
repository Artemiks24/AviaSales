import { configureStore } from '@reduxjs/toolkit'

import aviaSlice from './aviaSlice'

export default configureStore({ reducer: aviaSlice })

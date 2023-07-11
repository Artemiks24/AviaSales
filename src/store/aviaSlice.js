/* eslint-disable consistent-return */
/* eslint-disable func-names */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { ALLSTOPS, NOSTOPS, ONESTOPS, THREESOPS, TWOSTOPS } from '../components/TicketList/consts'

function generateRandomId() {
  const randomNumber = Math.random() * 10
  return randomNumber.toString()
}

// eslint-disable-next-line prefer-arrow-callback
export const fetchTickets = createAsyncThunk('aviaSales/fetchaviaSales', async function (_, { rejectWithValue }) {
  try {
    const idURL = 'https://aviasales-test-api.kata.academy/search'
    const responseId = await fetch(idURL)
    if (!responseId.ok) {
      throw new Error('Could not fetch')
    }
    const res = await responseId.json()
    const resId = res.searchId
    const ticletsURL = `https://aviasales-test-api.kata.academy/tickets?searchId=${resId}`
    const responseTicket = await fetch(ticletsURL)
    if (!responseTicket.ok) {
      throw new Error('Could not fetch')
    }
    const tickets = await responseTicket.json()
    return tickets
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const aviaSlice = createSlice({
  name: 'aviaSales',
  initialState: {
    boxes: [
      { id: 0, text: ALLSTOPS, checked: false },
      { id: 1, text: NOSTOPS, checked: false, stops: 0 },
      { id: 2, text: ONESTOPS, checked: false, stops: 1 },
      { id: 3, text: TWOSTOPS, checked: false, stops: 2 },
      { id: 4, text: THREESOPS, checked: false, stops: 3 },
    ],
    btns: [
      { id: 0, text: 'самый дешёвый', active: false },
      { id: 1, text: 'самый быстрый', active: false },
    ],
    tickets: [],
    status: null,
    error: null,
    count: 5,
  },
  reducers: {
    changeCheckedBoxes(state, action) {
      const { payload } = action
      const allChecked = state.boxes[0].checked

      if (payload === 0) {
        state.boxes.forEach((box) => {
          box.checked = !allChecked
        })
      } else {
        const currentBox = state.boxes.find((box) => box.id === payload)

        if (currentBox) {
          currentBox.checked = !currentBox.checked
        }

        const otherBoxes = state.boxes.slice(1).every((box) => box.checked)

        state.boxes[0].checked = otherBoxes
      }
    },
    changeActiveBtns(state, action) {
      const { payload } = action

      state.btns.forEach((btn) => {
        if (btn.id === payload) {
          btn.active = true
        } else {
          btn.active = false
        }
        if (btn.text === 'самый дешёвый' && btn.active) {
          state.tickets.sort((a, b) => a.ticket.price - b.ticket.price)
        }

        if (btn.text === 'самый быстрый' && btn.active) {
          state.tickets.sort(
            (a, b) =>
              a.ticket.segments[0].duration +
              a.ticket.segments[1].duration -
              (b.ticket.segments[0].duration + b.ticket.segments[1].duration)
          )
        }
      })
    },
    showMoreTickets(state) {
      state.count += 5
    },
  },

  extraReducers: {
    [fetchTickets.pending]: (state) => {
      state.status = 'loading...'
      state.error = null
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.tickets = action.payload.tickets.map((ticket) => ({ id: generateRandomId(), ticket }))
    },
    [fetchTickets.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export const { changeCheckedBoxes, changeActiveBtns, showMoreTickets } = aviaSlice.actions

export default aviaSlice.reducer

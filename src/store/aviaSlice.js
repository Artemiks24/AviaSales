import { createSlice } from '@reduxjs/toolkit'

const aviaSlice = createSlice({
  name: 'aviaSales',
  initialState: {
    boxes: [
      { id: 0, text: 'Все', checked: false },
      { id: 1, text: 'Без пересадок', checked: false },
      { id: 2, text: '1 пересадка', checked: false },
      { id: 3, text: '2 пересадки', checked: false },
      { id: 4, text: '3 пересадки', checked: false },
    ],
    btns: [
      { id: 0, text: 'самый дешёвый', active: false },
      { id: 1, text: 'самый быстрый', active: false },
    ],
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
      const currentBtn = state.btns.find((btn) => btn.id === payload)

      if (currentBtn) {
        if (!currentBtn.active) {
          state.btns.forEach((btn) => {
            if (btn.id === payload) {
              btn.active = true
            } else {
              btn.active = false
            }
          })
        } else {
          currentBtn.active = false
        }
      }
    },
  },
})

export const { changeCheckedBoxes, changeActiveBtns } = aviaSlice.actions

export default aviaSlice.reducer

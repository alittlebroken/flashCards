import { createSlice } from '@reduxjs/toolkit';

/*
cards: {
    cards: {
      '789': {
        id: '789',
        front: 'front text',
        back: 'back text'
      },
      '101': {
        id: '101',
        front: 'front text',
        back: 'back text'
      },
      '102': {
        id: '102',
        front: 'front text',
        back: 'back text'
      },
    }
  }
}
*/

const options = {
  name: 'cards',
  initialState: { cards: {} },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id: id,
        front: front,
        back: back
      }
    },
  },
}

const cardSlice = createSlice(options);

export const selectCards = state => state.cards.cards;
export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;

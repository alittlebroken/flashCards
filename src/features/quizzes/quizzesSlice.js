import { createSlice } from '@reduxjs/toolkit';
import { addQuizToTopic } from '../topics/topicsSlice.js';

const initialState = {
  quizzes: {}
};

/*
quizzes: {
    quizzes: {
      '456': {
        id: '456',
        topicId: '123',
        name: 'quiz for example topic',
        cardIds: ['789', '101', '102']
      }
    }
  },
*/

const options = {
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      console.log(action.payload)
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      }
    }
  }
};

const quizzes = createSlice(options);

// action creator thunk
export function newQuiz(payload){

  return async function addNewQuizThunk(dispatch){

    dispatch(addQuiz(payload));
    dispatch(addQuizToTopic({ quizId: payload.id, topicId: payload.topicId }));

  };
};

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzes.actions;
export default quizzes.reducer;

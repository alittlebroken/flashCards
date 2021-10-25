import { createSlice } from '@reduxjs/toolkit';

// Configure the slice

/*

{
  topics: {
    topics: {
      '123': {
        id: '123',
        name: 'example topic',
        icon: 'icon url',
        quizIds: ['456']
      }
    }
  },

*/

const sliceOptions = {
  name: 'topics',
  initialState: { topics: {} },
  reducers: {
    addTopic: (state, action) => {
      state.topics[action.payload.id] = {
        id:  action.payload.id,
        name: action.payload.name,
        icon: action.payload.icon,
        quizIds: action.payload.quizIds
      }
    },
    addQuizToTopic: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
};

// create the slice and pass in it's config
const topics = createSlice(sliceOptions);

// Create the select for the topics
export const selectTopics = state => state.topics.topics;

// Export the actions and topic slice
export const { addTopic, addQuizToTopic }  = topics.actions;
export default topics.reducer;

/**
 * @overview
 *
 * @since 0.3.0
 * @author Stefan Rimaila <stefan@rimaila.fi>
 * @module app/reducers/quest
 */
import R from 'ramda';
import { ApiEvents } from '../actions/game';
import createReducer from './create-reducer';

const initialState = {};

const QuestState = {
  0: 'ZERO',
  1: 'FIFTY',
  2: 'EIGHTY',
  3: 'DONE'
};

/**
 * @param {Object} questObj
 * @param {Object} quests
 */
const updateQuests = (questObj, quests) => ({ ...questObj, ...quests });

const startQuest = (questObj, id) => ({
  ...questObj,
  ...{
    [id]: { ...questObj[id], state: 1 }
  }
});

export default createReducer(initialState, {
  [ApiEvents.GET_QUEST_LIST](state, action) {
    return { ...state, quests: updateQuests(state.quests, action.payload.quests) };
  },
  [ApiEvents.START_QUEST](state, action) {
    return { ...state };
  },
  [ApiEvents.STOP_QUEST](state, action) {
    return { ...state };
  }
});

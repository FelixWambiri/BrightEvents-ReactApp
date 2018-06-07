import expect from 'expect';
import * as actions from '../../src/actions/events';
import eventReducer from '../../src/reducers/event.reducer';

describe('eventReducer', () => {
  it('should return one specific event', () => {
    const initialState = {};
    const event = { name: 'another name' };
    const action = actions.singleEventFetched(event);
    const newState = eventReducer(initialState, action);
    expect(newState).toEqual(event);
  });
});

import * as actions from '../../src/actions/events';
import eventReducer from '../../src/reducers/events';
import expect from 'expect';

describe('events Reducer', () => {
  it('Should return all the events', () => {
    const initialState = [];
    const event = { name: 'another name' };
    const action = actions.allEventsFetched(event);
    const newState = eventReducer(initialState, action);
    expect(newState).toEqual({ name: 'another name' });
  });
});

describe('events Reducer', () => {
  it('Should delete an event', () => {
    const initialState = [];
    const event = { name: 'another name' };
    const action = actions.eventDeleted(event);
    const newState = eventReducer(initialState, action);
    expect(newState).toEqual([]);
  });
});


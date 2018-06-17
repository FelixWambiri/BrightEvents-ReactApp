import expect from 'expect';
import * as actions from '../../src/actions/events';
import * as types from '../../src/types';


describe('Events Action Creators', () => {
  describe('Events fetched action creator', () => {
    it('Returns all events', () => {
      const data = { name: 'Swim' };
      const expectedAction = {
        type: types.EVENTS_FETCHED,
        data,
      };
      expect(actions.eventsFetched(data)).toEqual(expectedAction);
    });
  });
  describe('My events fetched action creator', () => {
    it('Returns my events', () => {
      const data = {};
      const expectedAction = {
        type: types.MY_EVENTS_FETCHED,
        data,
      };
      expect(actions.myEventsFetched(data)).toEqual(expectedAction);
    });
  });
  describe('Request success action creator', () => {
    it('Shows that a request has been successful', () => {
      const data = {};
      const expectedAction = {
        type: types.ALL_EVENTS_FETCHED,
        data,
      };
      expect(actions.allEventsFetched(data)).toEqual(expectedAction);
    });
  });
});

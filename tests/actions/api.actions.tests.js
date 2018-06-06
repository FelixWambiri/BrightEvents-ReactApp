import expect from 'expect';
import * as actions from '../../src/actions/api.actions';
import * as types from '../../src/types';

describe('Api Action Creators', () => {
  describe('Request failed action creator', () => {
    it('Returns an error object after a request fails', () => {
      expect(true).toEqual(true);
      const error = {};
      const expectedAction = {
        type: types.REQUEST_FAILED,
        error,
      };
      expect(actions.requestFailed(error)).toEqual(expectedAction);
    });
  });
  describe('Request started action creator', () => {
    it('It shows a request has started', () => {
      const expectedAction = {
        type: types.REQUEST_STARTED,
      };
      expect(actions.requestStarted()).toEqual(expectedAction);
    });
  });
  describe('Request success action creator', () => {
    it('Shows that a request has been successful', () => {
      const expectedAction = {
        type: types.REQUEST_SUCCESS,
      };
      expect(actions.requestSuccess()).toEqual(expectedAction);
    });
  });
});


import expect from 'expect';
import * as actions from '../../src/actions/auth';
import * as types from '../../src/types';

describe('User Authentication Action Creators', () => {
  describe('User login action creator', () => {
    it('Returns a user object', () => {
      const user = {
        email: 'felix@gmail.com',
        password: 'password',
      };
      const expectedAction = {
        type: types.USER_LOGGED_IN,
        user,
      };
      expect(actions.userLoggedIn(user)).toEqual(expectedAction);
    });
  });
  describe('User logout action creator', () => {
    it('Logs out a user', () => {
      const user = {
        email: 'felix@gmail.com',
        password: 'password',
      };
      const expectedAction = {
        type: types.USER_LOGGED_OUT,
      };
      expect(actions.userLoggedOut(user)).toEqual(expectedAction);
    });
  });
});

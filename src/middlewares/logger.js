export default store => next => (action) => {
  console.groupCollapsed('Dispatching ', action.type);
  console.log('State Before ', store.getState());
  next(action);
  console.log('State After ', store.getState());
  console.groupEnd();
};

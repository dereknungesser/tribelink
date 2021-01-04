const LOAD_ALL = 'events/LOAD_ALL';

const load = eventList => ({
    type: LOAD_ALL,
    eventList,
});

export const getEvents = () => async dispatch => {
    const response = await fetch(`/api/events`);

    if (response.ok) {
      const {eventList} = await response.json();
      dispatch(load(eventList));
    }
  };


function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD_ALL: {
      const allEvents = {};
      action.eventList.forEach(eventList => {
        allEvents[eventList.id] = eventList;
      });
      return {
        ...allEvents,
        ...state,
        list: action.eventList
      };
    }
    default:
      return state;
  }
}

export default reducer;

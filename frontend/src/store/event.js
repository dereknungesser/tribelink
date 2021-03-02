import Cookies from 'js-cookie';

const LOAD_ALL = 'event/LOAD_ALL';
const ADD_ONE = 'event/ADD_ONE'

const load = eventList => ({
    type: LOAD_ALL,
    eventList,
});

const addEvent = event => ({
  type: ADD_ONE,
  event,
});

export const getEvents = () => async dispatch => {
    const response = await fetch(`/api/events`);

    if (response.ok) {
      const {eventList} = await response.json();
      dispatch(load(eventList));
    }
  };

export const createEvent = (payload) => async dispatch => {
  const response = await fetch(`/api/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'XSRF-Token': Cookies.get('XSRF-TOKEN')
    },
    body: JSON.stringify(payload),
  });

  if(response.ok){
    const event = await response.json()
    dispatch(addEvent(event))
    return event
  }
}


function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ONE:
      let newState = Object.assign({}, state, { [action.event.id]: action.event });
      return newState;
    case LOAD_ALL:
      return action.eventList;
    default:
      return state;
  }
}

export default reducer;

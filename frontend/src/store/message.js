import Cookies from 'js-cookie';

const LOAD_ALL = 'message/LOAD_ALL';
const ADD_ONE = 'message/ADD_ONE'

const load = list => ({
    type: LOAD_ALL,
    list,
});

const addMessage = message => ({
  type: ADD_ONE,
  message,
});

export const getMessages = () => async dispatch => {
    const response = await fetch(`/api/messages/`);

    if (response.ok) {
      const {messagesList} = await response.json();
      dispatch(load(messagesList));
    }
  };

export const createMessage = (payload) => async dispatch => {
  console.log(JSON.stringify(payload))
  const response = await fetch(`/api/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'XSRF-Token': Cookies.get('XSRF-TOKEN')
    },
    body: JSON.stringify(payload),
  });

  if(response.ok){
    const message = await response.json()
    dispatch(addMessage(message))
    return message
  }
}

function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_ONE:
      let newState = Object.assign({}, state, { [action.message.id]: action.message });
      return newState;
    case LOAD_ALL:
      return action.list;
    default:
      return state;
  }
}

export default reducer;

const LOAD = 'message/LOAD';
const ADD_ONE = 'message/ADD_ONE'

const load = list => ({
    type: LOAD,
    list,
});

const addOneMessage = message => ({
  type: ADD_ONE,
  message,
});

export const getMessages = () => async dispatch => {
    const response = await fetch(`/api/messages`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

export const createMessage = (createdMessage) => async dispatch => {
  const response = await fetch(`/api/messages`, {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    body: JSON.stringify(createdMessage)
  });

  if(response.ok){
    const message = await response.json()
    dispatch(addOneMessage(message))
    return message
  }
}

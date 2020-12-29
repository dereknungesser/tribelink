const LOAD = 'message/LOAD';

const load = list => ({
    type: LOAD,
    list,
  });

export const getMessages = () => async dispatch => {
    const response = await fetch(`/api/message`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

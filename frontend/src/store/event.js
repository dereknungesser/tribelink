const LOAD = 'event/LOAD';

const load = list => ({
    type: LOAD,
    list,
});

export const getEvents = () => async dispatch => {
    const response = await fetch(`/api/events`);

    if (response.ok) {
      const list = await response.json();
      dispatch(load(list));
    }
  };

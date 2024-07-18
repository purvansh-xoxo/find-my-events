export const fetchEvents = () => async dispatch => {
  const response = await fetch('http://localhost:5000/events');
  const data = await response.json();
  dispatch({ type: 'FETCH_EVENTS', payload: data });
};

export const addEvent = event => async dispatch => {
  const response = await fetch('http://localhost:5000/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });
  const data = await response.json();
  dispatch({ type: 'ADD_EVENT', payload: data });
};

export const deleteEvent = id => async dispatch => {
  await fetch(`http://localhost:5000/events/${id}`, { method: 'DELETE' });
  dispatch({ type: 'DELETE_EVENT', payload: id });
};

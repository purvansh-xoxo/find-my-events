import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents, deleteEvent } from '../actions/eventActions';
import { Link } from 'react-router-dom';

const EventList = () => {
  const events = useSelector(state => state.events.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <button onClick={() => dispatch(deleteEvent(event.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add-event">Add Event</Link>
    </div>
  );
};

export default EventList;

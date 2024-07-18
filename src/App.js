import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EventList from './components/EventList';
import AddEvent from './components/AddEvent';
import { useHistory } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="App">
      <h1>Upcoming Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.title} - {event.date} - {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


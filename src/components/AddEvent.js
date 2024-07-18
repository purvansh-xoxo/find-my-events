import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../actions/eventActions';
import { useHistory } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

const AddEvent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = e => {
    e.preventDefault();
    const newEvent = { title, description, date, location };
    dispatch(addEvent(newEvent));
    history.push('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default AddEvent;

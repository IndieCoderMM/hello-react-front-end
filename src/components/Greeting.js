import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRandomGreeting } from '../redux/greetings';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <section className="page">
      <h1>Random Greeting</h1>
      <h2>{greeting}</h2>
      <Link to="/">
        <button type="button">Back to Home</button>
      </Link>
      <small>{error}</small>
    </section>
  );
}

export default Greeting;

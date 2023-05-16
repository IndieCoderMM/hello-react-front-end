import React from 'react';
import { Link } from 'react-router-dom';

function Greeting() {
  const greeting = 'hello world';
  return (
    <section className="page">
      <h1>Random Greeting</h1>
      <h2>{greeting}</h2>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
}

export default Greeting;

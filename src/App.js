import React from 'react';

function App(props) {
  const facts = props.facts.map((f, i) => <li key={i}>{f.text}</li>);
  return <ul>{facts}</ul>;
}

export default App;

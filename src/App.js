import React from 'react';

export default props => <ul>{props.facts.map((f, i) => <li key={i}>{f.text}</li>)}</ul>;

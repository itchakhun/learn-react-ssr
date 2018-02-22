import fetch from 'isomorphic-fetch';

const getFacts = () => fetch('https://ssr-react-firebaseio.com/facts.json').then(r => r.json);

export default getFacts;

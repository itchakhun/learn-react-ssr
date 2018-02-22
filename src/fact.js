import fs from 'isomorphic-fetch';

const getFacts = () => fs('https://learnreactssr.firebaseio.com/facts.json').then(r => r.json());

export default getFacts;

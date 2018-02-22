import * as functions from 'firebase-functions';
import React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import App from './src/App';
import getFacts from './src/fact';

const app = express();

app.get('**', (req, res) => {
  getFacts().then((facts) => {
    const html = renderToString(<App facts={facts} />);
    res.set('Cache-Control', 'public, max-age=600 s-maxage=1200');
    res.send(html);
  });
});

export const learnReactSSR = () => functions.https.onRequest(app);

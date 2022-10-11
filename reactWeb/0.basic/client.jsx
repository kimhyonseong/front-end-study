const React = require('react');
const ReactDom = require('react-dom/client');
const LikeButton = require('./LikeButton');

ReactDom.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <LikeButton />
    </React.StrictMode>
);
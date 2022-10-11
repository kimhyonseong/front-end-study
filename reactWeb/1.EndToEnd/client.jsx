const React = require('react');
const ReactDom = require('react-dom/client');
const EndToEnd = require('./EndToEnd');

ReactDom.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <EndToEnd />
    </React.StrictMode>
);
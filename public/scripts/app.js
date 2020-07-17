console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js</p>;
var template = /*#__PURE__*/ React.createElement(
  'h1',
  {
    id: 'some-id',
  },
  'Something new'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Name:
//  p -> Age:
//  p -> Location:
// Render templateTwo instead of template
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Name: Name'
  ),
  React.createElement(
    'p',
    null,
    'Age: Age'
  ),
  React.createElement(
    'p',
    null,
    'Location: Location'
  )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

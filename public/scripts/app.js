'use strict';

console.log('App.js is running!');

// create app object title/subtitle
// user title/subtitle in the template
// render template

// JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
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

var user = {
  name: 'Name',
  age: 26,
  location: 'Location'
};
var username = 'Name2';
var userAge = 27;
var userLocation = 'New York';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase() + '!'
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
// Create a templateTwo var JSX expression
// div
//  h1 -> Name:
//  p -> Age:
//  p -> Location:
// Render templateTwo instead of template

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

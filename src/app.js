console.log('App.js is running!');

// create app object title/subtitle
// user title/subtitle in the template
// render template

// JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Name',
  age: 26,
  location: 'Location',
};
var username = 'Name2';
var userAge = 27;
var userLocation = 'New York';

var templateTwo = (
  <div>
    <h1>{`${user.name.toUpperCase()}!`}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
// Create a templateTwo var JSX expression
// div
//  h1 -> Name:
//  p -> Age:
//  p -> Location:
// Render templateTwo instead of template

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

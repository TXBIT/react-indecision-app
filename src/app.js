console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// Create a templateTwo var JSX expression
// div
//  h1 -> Name:
//  p -> Age:
//  p -> Location:
// Render templateTwo instead of template
var templateTwo = (
  <div>
    <h1>Name: Name</h1>
    <p>Age: Age</p>
    <p>Location: Location</p>
  </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

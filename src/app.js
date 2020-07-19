class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Setup options props for Options component
// Render the length of the array
// Render new p tag for each option (set text, set key)

class Options extends React.Component {
  render() {
    return (
      <div>
        {this.props.options.map((option, index) => (
          <Option key={index} option={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.option}</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>AddOption component here</div>;
  }
}

// Option -> Option component here

const jsx = <IndecisionApp />;

ReactDOM.render(jsx, document.getElementById('app'));

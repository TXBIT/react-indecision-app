// props: count - setup default prop value to 0

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleAddOne() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 };
    });
  }

  handleReset(count) {
    this.setState(() => {
      return { count };
    });
    // this.setState({ count: 0 });
    // this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={() => this.handleReset(count)}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0,
};

ReactDOM.render(<Counter count={-10} />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

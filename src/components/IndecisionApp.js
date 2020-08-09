import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption = (option) => {
    if (!option) return 'Enter valid value to add item';
    else if (this.state.options.indexOf(option) > -1)
      return 'This item already exists';

    // this.setState((prevState) => ({ options: [...prevState.options, option] }));
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    console.log('Component Did Mount! Fetching Data...');
    try {
      this.setState(() => ({
        options: localStorage.getItem('options')
          ? JSON.parse(localStorage.getItem('options'))
          : [],
      }));
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log('Component Did Update! Saving Data...');
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount!');
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0 ? true : false}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

import React, { Component } from 'react';

import AsyncSelect from 'react-select/async';
import { colourOptions } from '../data';

type State = {
  inputValue: string,
};

const filterColors = (inputValue: string) => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default class WithCallbacks extends Component<State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    const inputValue = newValue;
    this.setState({ inputValue });
    return inputValue;
  };
  render() {
    return (
      <div>
        <pre>inputValue: "{this.state.inputValue}"</pre>
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

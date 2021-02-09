import React from "react";
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count:0
  };

  Add = () => {
    this.setState(current => ({
      count: current.count + 1  // current는 섹시한 스타일
      // count : this.state.count + 1 (같은 것, 그러나, state에 의존적인 표현)
    }));
  }
  Minus = () => {
    this.setState(current => ({
      count: current.count -1 
    }));
  }
  render(){
    return(
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.Add}>Add</button>
        <button onClick={this.Minus}>Minus</button>
      </div>
    )
  }
}
export default App;

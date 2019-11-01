import React, { Component } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const rangeValues = [
  1,2,3, 4,5, 6, 7, 8, 9, 10
]

class InputRangedouble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 5,
      value2: 10,
      value3: 10,
      value4: {
        min: 5,
        max: 10,
      },
      value5: {
        min: 3,
        max: 7,
      },
    };
  }

  onSelectRange = (e) => {
    const { value } = e.target;
   // console.log(value, "values");
    this.setState({
      value 
    })
  }

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <InputRange
          maxValue={10}
          minValue={0}
          value={value}
          onChange={value => this.setState({ value })}/>

        <select 
          style={{ marginTop: 20, width: "70px"}} 
          name="customSearch" 
          className="custom-search-select" 
          onChange={this.onSelectRange} 
          value={value && value || this.state.value}
          >
          {rangeValues.map(items => <option>{Number(items)}</option>)}
        </select>
      </React.Fragment>
    );
  }
}

export default InputRangedouble

import React from 'react';

import { getData } from './../controller/posts';

const Page = React.createClass({
  getInitialState(){
    return {
      number: "0"
    }
  },
  handleClick() {
    let number = getData(parseInt(this.state.number) + 1);
    this.setState(
      Object.assign(this.state, {
        number: number
      })
    );
  },
  componentDidMount() {
    let data = this.props.data;
    if(isNaN(data)){
      data = "0";
    }
    this.setState(
      Object.assign(this.state, {
        number: data
      })
    );
  },
  render() {
    const that = this;
    const click = (e) => {
      that.handleClick.call(that,e);
    };
    return (
        <div onClick={click}>
          <input type="button" value={`${this.props.data}`}/>
          <p>{this.state.number}</p>
        </div>
    )
  }
})

export default Page;
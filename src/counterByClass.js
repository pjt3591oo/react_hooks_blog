import React from 'react';

class CounterByClass extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0
    }

    this.onIncreament = this.onIncreament.bind(this)
    this.onDecreament = this.onDecreament.bind(this)
  }
  onIncreament (e) {
    this.setState(() => {
      return {num: this.state.num + 1};
    });
  }

  onDecreament (e) {
    this.setState(() => {
      return {num: this.state.num - 1};
    });
  }
  render () {
    return (
      <div>
        <h2>클래스 기반 카운터 입니다.</h2>
        <p>현재 카운트 된 수{this.state.num}  </p>
        <button onClick={this.onIncreament}>증가</button>
        <button onClick={this.onDecreament}>감소</button>
      </div>
    )
  }
}

export default CounterByClass
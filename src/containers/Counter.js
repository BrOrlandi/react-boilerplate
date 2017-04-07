import React from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from '../actions/counterActions';

let Counter = ({counter, onIncrement, onDecrement, onReset}) => {
  return(
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => onIncrement()}>Increment</button>
      <button onClick={() => onDecrement()}>Decrement</button>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  )
};

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement(counter) {
        dispatch(incrementCounter(counter))
    },
    onDecrement(counter) {
        dispatch(decrementCounter(counter))
    },
    onReset() {
        dispatch(resetCounter())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

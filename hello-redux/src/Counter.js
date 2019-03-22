import React, { Component } from "react";
import { connect } from "react-redux";

function Counter({count, onIncrement}) {
  return (
    <div className="Counter">
      <button onClick={onIncrement}>{count}</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({type: 'INCREMENT'}),
  };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export { Counter, CounterContainer };

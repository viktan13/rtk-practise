import React from 'react';
import {connect} from "react-redux";


const Counter = (props) => {



    return (
        <div>
            <button onClick={props.increment}>+</button>
            <h3>{props.count}</h3>
            <button onClick={props.decrement}>-</button>
        </div>
    );
};
const mapStateToProps = state => ({
    count: state.counter.count
})
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: 'counter/increment'}),
    decrement: () => dispatch({type: 'counter/decrement'})
})
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

import React from 'react';
import Counter from "./components/Counter";
import './App.css'
import {connect} from "react-redux";

const App = (props) => {
    return (
        <div className={"App"}>
          <h1>Counter</h1>
            <h2>Version: {props.version}</h2>
          <Counter />
        </div>
    );
};
const mapStateToProps = state => ({
    version: state.counter.version
})
export default connect(mapStateToProps)(App);

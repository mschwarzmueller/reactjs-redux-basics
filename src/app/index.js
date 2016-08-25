import {render} from "react-dom";
import React from "react";
import {createStore} from "redux";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payload;
            break;
        case "SUBTRACT":
            state = state - action.payload;
            break;
    }
    return state;
};


const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});
store.dispatch({
    type: "ADD",
    payload: 22
});
store.dispatch({
    type: "SUBTRACT",
    payload: 80
});
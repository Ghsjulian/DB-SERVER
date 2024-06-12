import React, { useReducer } from "react";

const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                token: action.payload
            };
        case "SAVE_USER_INFO":
            return {
                ...state,
                session : action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                token: action.payload
            };
        default:
            throw new Error();
    }
};
export { Reducer };

/*   How To Use   */
/*
const initialState = {
    data: [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" }
        // ... add more products here
    ]
};
const [state, dispatch] = useReducer(reducer, initialState);
    const handleRemoveProduct = productId => {
        dispatch({ type: "REMOVE_PRODUCT", payload: productId });
    };
    */

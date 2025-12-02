import { useReducer } from "react";
import counterReducer from "../Reducers/counterReducer";

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div style={{ textAlign: "center" }}>
            <h1> Count : {state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>


        </div>
    )
}
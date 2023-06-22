import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  const dispatch=useDispatch()

  return (
    <div
      style={{ backgroundColor: "black", width: "100%", height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="text-center text-primary">Counter App</h1>
      <div style={{ fontSize: "50px" }}>{count}</div>
      <div className="mt-3">
        <button onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
        <button onClick={()=>dispatch(decrement())} className="btn btn-danger ms-5">Decrement</button>
        <button onClick={()=>dispatch(incrementByAmount(30))} className="btn btn-warning ms-5">Increment 30</button>
        <button onClick={()=>dispatch(reset())} className="btn btn-primary ms-5">Reset</button>
      </div>
    </div>
  );
}

export default Counter;

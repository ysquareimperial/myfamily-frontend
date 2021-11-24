import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { decremnt, increment, incrementByAmount } from "../redux/conterSlice";

export default function FamilyTreeComp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <h4 className="text-center homeBorder mb-5">
        <Button color="primary" onClick={() => dispatch(increment())}>INCREMENT</Button>
        <span>{count}</span>
        <Button color="primary" onClick={() => dispatch(decremnt())}>DECREMENT</Button>
        <Button color="primary" onClick={() => dispatch(incrementByAmount())}>Test</Button>

      </h4>
    </>
  );
}
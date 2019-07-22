import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import uuid from "uuid/v1";

export const CounterComponent = () => {
  const counter = useSelector(state => state.value);
  const saved = useSelector(state => state.savedValues);
  const MoreThanSelector = createSelector(
    state => state.savedValues,
    saved => saved.filter(item => item.value > 50)
  );

  const filteredList = useSelector(MoreThanSelector);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1>{counter}</h1>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+10</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-10</button>
        <button
          onClick={() =>
            dispatch({ type: "SAVE_VALUE", value: counter, id: uuid() })
          }
        >
          SAVE
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      </div>
      <div>
        <h1>Saved</h1>
      </div>
      <ul className="saved">
        {saved.map(item => (
          <li
            onClick={() => dispatch({ type: "DELETE_VALUE", id: item.id })}
            key={item.id}
          >
            {item.value}
          </li>
        ))}
      </ul>
      <h1>More than 50</h1>
      {filteredList.map(item => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  );
};

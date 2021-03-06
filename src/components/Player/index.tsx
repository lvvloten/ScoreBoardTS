import React from "react";
import { TPlayer } from "../../entities/Player";
import { incrementScore } from "../../store/matches/actions";
import { useDispatch } from "react-redux";

interface Props extends TPlayer {
  matchId: number;
}

export default function Player(props: Props) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(incrementScore(props.id, props.matchId));
  }

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.score}</p>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/store";
import { Actions } from "../types/feedback";

import Card from "./Card";
import "../assests/FeedbackItem.css";

type Feedback = {
  id: number;
  text: string;
  rating: number;
};

type Props = {
  feedback: Feedback;
};

const FeedbackItem: React.FC<Props> = ({ feedback }) => {
  const { dispatch } = useContext(GlobalContext);

  const handleRemoveFeedbback = (id: number) => {
    dispatch({ type: Actions.REMOVE_FEEDBACK, payload: id });
  };

  return (
    <div>
      <Card>
        <div className="num-display">{feedback.rating}</div>
        <button
          type="button"
          className="close"
          onClick={() => handleRemoveFeedbback(feedback.id)}
        >
          X
        </button>
        <p className="text-display">{feedback.text}</p>
      </Card>
    </div>
  );
};

export default FeedbackItem;

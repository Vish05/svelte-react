import React from "react";
import { observer } from "mobx-react-lite";
import feedbackStore from "../stores/FeedbackStore";

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
  return (
    <div>
      <Card>
        <div className="num-display">{feedback.rating}</div>
        <button
          type="button"
          className="close"
          onClick={() => feedbackStore.removeFeedback(feedback)}
        >
          X
        </button>
        <p className="text-display">{feedback.text}</p>
      </Card>
    </div>
  );
};

export default observer(FeedbackItem);

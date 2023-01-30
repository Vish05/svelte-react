import React, { useContext } from "react";
import { GlobalContext } from "../context/store";

import FeedbackItem from "./FeedbackItem";

export default function FeedbackList() {
  const { state: feedbackStates } = useContext(GlobalContext);

  return (
    <React.Fragment>
      {feedbackStates.feedbacks.length > 0 ? (
        <React.Fragment>
          {feedbackStates.feedbacks.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
}

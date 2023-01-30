import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import feedbackStore from "../stores/FeedbackStore";

import FeedbackItem from "./FeedbackItem";

const FeedbackList = observer(() => {
  useEffect(() => {
    feedbackStore.fetchFeedbacks();
  }, []);

  return (
    <React.Fragment>
      {feedbackStore.getFeedbacks.length > 0 ? (
        <React.Fragment>
          {feedbackStore.getFeedbacks.map((feedback) => (
            <FeedbackItem key={feedback.id} feedback={feedback} />
          ))}
        </React.Fragment>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
});

export default FeedbackList;

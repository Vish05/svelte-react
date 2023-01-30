import { IFeedbackState, FeedActions, Actions } from "../types/feedback";

export default function appReducer(
  state: IFeedbackState,
  action: FeedActions
): IFeedbackState {
  switch (action.type) {
    case Actions.ADD_FEEDBACK:
      return {
        ...state,
        feedbacks: [action.payload, ...state.feedbacks],
      };

    case Actions.REMOVE_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.filter(
          (feedback) => feedback.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

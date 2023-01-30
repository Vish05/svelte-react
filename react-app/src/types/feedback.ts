import React from "react";

type IFeedback = {
  id: number;
  text: string;
  rating: number;
};

export interface IFeedbackState {
  feedbacks: IFeedback[];
}

export type IContextModel = {
  state: IFeedbackState;
  dispatch: React.Dispatch<FeedActions>;
};

export enum Actions {
  ADD_FEEDBACK = "ADD_FEEDBACK",
  REMOVE_FEEDBACK = "REMOVE_FEEDBACK",
}

export type FeedActions =
  | { type: Actions.ADD_FEEDBACK; payload: IFeedback }
  | { type: Actions.REMOVE_FEEDBACK; payload: number };

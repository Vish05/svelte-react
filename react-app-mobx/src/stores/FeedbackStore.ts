import { makeObservable, observable, computed, action } from "mobx";
import { IFeedback } from "../types/feedback";

class FeedbackStore {
  feedbacks: IFeedback[] = [];

  constructor() {
    makeObservable(this, {
      feedbacks: observable,
      fetchFeedbacks: action,
      addFeedback: action,
      removeFeedback: action,
      getFeedbacks: computed,
    });
  }

  async fetchFeedbacks() {
    await fetch("dummy-data.json")
      .then((resp) => resp.json())
      .then((feedbacks) => (this.feedbacks = feedbacks));
  }

  addFeedback(feedbackText: string, rating: number) {
    const newFeedback: IFeedback = {
      id: this.feedbacks.length + 1,
      text: feedbackText,
      rating: rating,
    };
    this.feedbacks.unshift(newFeedback);
  }

  removeFeedback(feedback: IFeedback) {
    this.feedbacks.splice(this.feedbacks.indexOf(feedback), 1);
  }

  get getFeedbacks() {
    return this.feedbacks;
  }
}

const feedbackStore = new FeedbackStore();

export default feedbackStore;

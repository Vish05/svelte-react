import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/store";
import { Actions } from "../types/feedback";
import RatingSelect from "./RatingSelect";
import { MIN_LENGTH, MIN_LENGTH_CHARACTER_MESSAGE } from "../constant";
import Button from "./Button";
import Card from "./Card";

import "../assests/FeedbackForm.css";

export default function FeedbackForm() {
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedRating, setSelectedRating] = useState(10);

  const { dispatch } = useContext(GlobalContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      const newFeedback = {
        id: Math.floor(Math.random() * 100),
        text: feedbackText,
        rating: selectedRating,
      };
      dispatch({ type: Actions.ADD_FEEDBACK, payload: newFeedback });
      setFeedbackText("");
      setMessage("");
      setBtnDisabled(true);
    }
  };

  const formValidation = () => {
    let isValid = true;
    if (feedbackText.trim().length <= MIN_LENGTH) {
      setMessage(MIN_LENGTH_CHARACTER_MESSAGE);
      isValid = false;
      setBtnDisabled(true);
    }
    return isValid;
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setBtnDisabled(false);
    setFeedbackText(event.currentTarget.value);
  };

  return (
    <Card>
      <header>
        <h2>How would you rate our 5G Plans?</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <RatingSelect
          setRating={setSelectedRating}
          defaultRating={selectedRating}
        />
        <div className="input-group">
          <input
            type="text"
            value={feedbackText}
            onChange={handleChange}
            placeholder="Tell us something about our service"
          />
          <Button disabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

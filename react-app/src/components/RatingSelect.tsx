import React, { ChangeEvent } from "react";
import "../assests/RatingSelect.css";

type InputEvent = ChangeEvent<HTMLInputElement>;

interface Props {
  setRating: (val: number) => void;
  defaultRating: number;
}

const RatingSelect: React.FC<Props> = ({
  setRating,
  defaultRating: rating,
}) => {
  return (
    <ul className="rating">
      {[...Array(10)].map((e, i) => {
        const id = `num${i + 1}`;
        const number = `${i + 1}`;
        return (
          <li>
            <input
              type="radio"
              id={id}
              name="rating"
              value={number}
              onChange={(e: InputEvent) => setRating(+e.target.value)}
              checked={rating === +number}
            />
            <label htmlFor={id}>{number}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default RatingSelect;

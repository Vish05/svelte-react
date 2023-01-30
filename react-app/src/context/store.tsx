import React, { createContext, useReducer } from "react";
import { IContextModel, IFeedbackState } from "../types/feedback";

import appReducer from "./AppReducer";

type ProviderProps = {
  children: React.ReactNode;
};

const initialState: IFeedbackState = {
  feedbacks: [
    {
      id: 1,
      text: "Best experience for me, Providing best and cheap postpaid and prepaid plan as copmpair other provider",
      rating: 10,
    },
    {
      id: 2,
      text: "Cheap Rate,Network and other services are best",
      rating: 9,
    },
    {
      id: 3,
      text: "Providing best and cheap postpaid and prepaid plan as copmpair other provider",
      rating: 10,
    },
  ],
};

export const GlobalContext = createContext({} as IContextModel);

export const GlobalProvider = (props: ProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

import React, { useState, createContext } from "react";
import { useClickOutside } from "./../hooks/useClickOutside";

export const SignOutContext = createContext();

const SignOutContextProvider = (props) => {
  const { visible, setVisible, ref } = useClickOutside(false);

  const [drawerOpen, setDrawerState] = useState(false);

  function changeDrawerState() {
    // setDrawerState((prevState) => !prevState);
    setVisible(true);
    setDrawerState((prevState) => {
      if (visible === false && prevState === true) return true;
      else return !prevState;
      //   return !prevState;
    });
  }

  return (
    <SignOutContext.Provider
      value={{ visible, drawerOpen, changeDrawerState, ref }}
    >
      {props.children}
    </SignOutContext.Provider>
  );
};

export default SignOutContextProvider;

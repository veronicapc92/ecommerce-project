import React, { createContext, useState } from "react";

export const FilterDropdownContext = createContext();

const FilterDropdownContextProvider = (props) => {
  let [filterDropdownOpen, setFilterDropdown] = useState(false);

  function handleFilterDropdown() {
    setFilterDropdown((prevState) => {
      return !prevState;
    });
  }
  return (
    <FilterDropdownContext.Provider
      value={{ filterDropdownOpen, handleFilterDropdown }}
    >
      {props.children}
    </FilterDropdownContext.Provider>
  );
};

export default FilterDropdownContextProvider;

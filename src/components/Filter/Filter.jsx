import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setFilter(filter));

  const changeFilterValue = e => {
    handleFilterChange(e.currentTarget.value);
  };  

    return (
        <FilterLabel>
          Find contacts by name
          <FilterInput
            type="text"
            onChange={changeFilterValue}
          />
        </FilterLabel>
      )
};
  
  export default Filter;

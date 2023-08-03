import { ADD_ITEM , SET_PARENT,SET_SELECTED } from "./type";

export const addItem = (item) => ({
    // console.log(item);
  type: ADD_ITEM,
  payload: item,
});

export const setParent = (data) => ({
  type: SET_PARENT,
  payload: data,
});

export const setSelectedValue = (data) => ({
  type: SET_SELECTED,
  payload: data,
});

import { createStore } from "@reduxjs/toolkit";

// Actions
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

// Action types
const TaskActionTypes = {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
};

// Reducer
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    default:
      return state;
  }
};

const store = createStore(taskReducer);
export default store;
// module.exports = store;

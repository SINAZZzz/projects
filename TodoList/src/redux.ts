import  {createStore}  from 'redux';

//  actions
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

// interface actions
interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: string;
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: number;
}

interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: number;
}

// type actions
type TaskActionTypes = AddTaskAction | RemoveTaskAction | ToggleTaskAction;

// interface reducer
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
        case ADD_TASK:
            return { 
                ...state,
                tasks:[
                    ...state.tasks,
                    {
                      id: state.tasks.length + 1,
                      text: action.payload,
                      completed: false,
                    },
                  ],
            }
            case REMOVE_TASK:
                return {
                  ...state,
                  tasks: state.tasks.filter(task => task.id !== action.payload),
                };
            case TOGGLE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.map(task =>
                        task.id === action.payload ? { ...task, completed: !task.completed } : task
                      ),
                    };

            default:
                return state;
    }
}

const store = createStore(taskReducer);

export default store
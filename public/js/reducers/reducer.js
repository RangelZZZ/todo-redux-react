export default function reducer(state = {todolist: [], filterName: "ALL"}, action) {
    switch (action.type) {
        case "ADD": {
            state.todolist.push({value: action.text, completed: false});
            return state;
        }
        case "DELETE": {
            state.todolist.splice(action.text, 1);
            return state;
        }

        case "CHANGE_STATE": {
            state.todolist[action.text].completed = !state.todolist[action.text].completed;

            return state;
        }

        case "SET_FILTER": {
            state.filterName = action.filterName;

            return state;
        }

        default:
            return state;
    }
}
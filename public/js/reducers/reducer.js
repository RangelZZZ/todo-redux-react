export default function reducer(state = {todolist: []}, action) {
    switch (action.type) {
        case "ADD": {
            state.todolist.push({value: action.text, completed: false});
            return state;
        }
        case "DELETE": {
            state.todolist.splice(action.text, 1);
            return state;
        }
        case "ALL": {
            return state;
        }
        case "CHANGE_STATE": {
            state.todolist[action.text].completed = !state.todolist[action.text].completed;

            return state;
        }

        default:
            return state;
    }
}
export default function reducer(state = {todolist: []}, action) {
    switch (action.type) {
        case "ADD": {
            state.todolist.push({value: action.text, completed: false});
            return state;
        }

        default:
            return state;
    }
}
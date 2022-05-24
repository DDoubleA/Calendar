const CHAGNE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const CLEARALL = 'todos/CLEARALL'
const EDIT = 'todos/EDIT'

export const changeInput = (id, input) => ({
    type : CHAGNE_INPUT,
    id,
    input
});

let id = 0;

export const insert = ( text, time, date) =>({
    type : INSERT,
    todo: {
        id : id++,
        text,
        time : time,
        date : date
    }
});

export const toggle = id => ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
});

export const clearall = date => ({
    type : CLEARALL,
    date
})

//////////////action function //////////

const initialState = {
    input :"ge",
    todos : []
};

function todos(state = initialState, action){
    switch(action.type){
        case CHAGNE_INPUT:
            console.log(action.input)
            console.log(action.id)
            // console.log(todo.id)
            return {
                ...state,
                todos: state.todos.map((todo) =>
                  todo.id == action.id ? {...todo, text:action.input} : todo)
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case REMOVE:
            console.log("remove")
            return {
                ...state,
                todos: state.todos.filter((todo) =>
                  todo.id != action.id)
            }
        case CLEARALL:
            return {
                ...state,
                todos : state.todos.filter((todo) => 
                    todo.date != action.date)
            }
        // case TOGGLE:
        //     return {
        //         ...state,
        //         todos: state.todos.map(todo =>
        //             todo.id === action.id ? {...todo, done :!todo.done } : todo 
        //         )
        //     };
        default:
            return { ...state };
    }
    
}

export default todos;
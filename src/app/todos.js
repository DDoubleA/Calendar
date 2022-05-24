const CHAGNE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const EDIT = 'todos/EDIT'

export const changeInput = input => ({
    type : CHAGNE_INPUT,
    input
});

let id = 3;

export const insert = (text, time, date) =>({
    type : INSERT,
    todo: {
        id : id++,
        text,
        time : time,
        date : date
    }
});

export const toggle = id = ({
    type : TOGGLE,
    id
});

export const remove = id => ({
    type : REMOVE,
    id
});

//////////////action function //////////

const initialState = {
    input :"ge",
    todos : [{
        id : 1,
        text : "제발성공",
        time : "22:00",
        date : "2022-05-16"
    }, {
        id : 2,
        text : "제발성공해라",
        time : "23:00",
        date : "2022-05-16"
    }]
};

function todos(state = initialState, action){
    switch(action.type){
        case CHAGNE_INPUT:
            return {
                ...state,
                input : action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? {...todo, done :!todo.done } : todo 
                )
            };
        default:
            return { ...state };
    }
    
}

export default todos;
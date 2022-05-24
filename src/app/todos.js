const CHAGNE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const EDIT = 'todos/EDIT'

export const changeInput = input => ({
    type : CHAGNE_INPUT,
    input
});

let id = 1;

export const insert = (text, time) =>({
    type : INSERT,
    todo: {
        id : id++,
        text,
        done : false,
        time : time
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
        done : false,
        time : "22:00"
    }, {
        id : 2,
        text : "제발성공해라",
        done : false,
        time : "23:00"
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
    }
}

export default todos;
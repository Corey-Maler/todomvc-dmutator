import { dMutator } from '../../lib/Mutator';

import { AppInterface } from '../AppInterface';

export const createTodo = dMutator((payload, state) => {
    console.log('creating todo', payload);
    return {
        ...state,
        todos: [...state.todos, {text: payload, id: state.todos.lenght, completed: false}],
    }
});

export const completeTodo = dMutator((payload, state) => {
    console.log('complete todo', payload);
    const todos = state.todos.map((todo) => {
        if (todo.id !== payload.id) return todo;
        return {...todo, completed: !todo.completed};
    });
    return {
        ...state,
        todos,
    }
});

export const editTodo = dMutator(({etodo, newText}, state) => {
    return {
        ...state,
        todos: state.todos.map((todo) => {
            if (todo !== etodo) return todo;
            return {...todo, text: newText};
        })
    }
});

export const clearCompleted = dMutator((payload, state) => {
    return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
    }
});

export const completeAll = dMutator((payload, state) => {
    return {
        ...state,
        todos: state.todos.map(todo => ({...todo, completed: true}))
    }
});

export const deleteTodo = dMutator(({todo}, state) => ({
    ...state,
    todos: state.todos.filter( t => t !== todo),
}))
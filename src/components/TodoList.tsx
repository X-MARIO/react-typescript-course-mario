import React from 'react';

import {TodoInterface} from '../types/todo';
import {TodoItem} from './index';

interface TodoListProps {
    todos: TodoInterface[]
}

const TodoList: React.FC<TodoListProps> = ({todos}): React.ReactElement => {
        return (
            <div>
                {todos.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo}/>
                    )
                })}
            </div>
        );
    }
;

export default TodoList;
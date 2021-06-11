import React from 'react';
import {TodoInterface} from '../types/todo';


export interface TodoItemProps {
    todo: TodoInterface
}

const TodoItem: React.FC<TodoItemProps> = ({todo}): React.ReactElement => {
    return (
        <div>
            <input type='checkbox' checked={todo.completed}/>
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;
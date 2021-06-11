import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {TodoList} from '../components';

import {TodoInterface} from '../types/todo';

const TodosPage: React.FC = (): React.ReactElement => {
    const [todos, setTodos] = useState<TodoInterface[]>([])

    useEffect(() => {
        FetchTodosAction()
    }, [])

    const FetchTodosAction = async () => {
        try {
            const response = await axios.get<TodoInterface[]>(`https://jsonplaceholder.typicode.com/todos`, {
                params: {_limit: 10}
            })
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <TodoList todos={todos}/>
    );
};

export default TodosPage;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import {UserList} from '../components';

import {UserInterface} from '../types/user';

const UsersPage: React.FC = (): React.ReactElement => {
    const [users, setUsers] = useState<UserInterface[]>([])
    const history = useHistory()

    useEffect(() => {
        FetchUsersAction()
    }, [])

    const FetchUsersAction = async () => {
        try {
            const response = await axios.get<UserInterface[]>(`https://jsonplaceholder.typicode.com/users`)
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <UserList users={users} onClick={(user) => history.push('/users/' + user.id)}/>
    );
};

export default UsersPage;
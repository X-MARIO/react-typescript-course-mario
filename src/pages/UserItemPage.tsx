import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom';

import {UserInterface} from '../types/user';

interface UserItemPageParams {
    id: string
}

const UserItemPage: React.FC = (): React.ReactElement => {
    const [user, setUser] = useState<UserInterface | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useHistory()

    useEffect(() => {
        FetchUserAction()
    }, [])

    const FetchUserAction = async () => {
        try {
            const response = await axios.get<UserInterface>(`https://jsonplaceholder.typicode.com/users/` + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
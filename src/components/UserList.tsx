import React from 'react';

import {UserInterface} from '../types/user';
import {UserItem} from './index';


interface UserListProps {
    users: UserInterface[],
    onClick: (user: UserInterface) => void
}

const UserList: React.FC<UserListProps> = ({users, onClick}): React.ReactElement => {
        return (
            <div>
                {users.map((user) => {
                    return (
                        <UserItem key={user.id} user={user} onClick={onClick}/>
                    )
                })}
            </div>
        );
    }
;

export default UserList;
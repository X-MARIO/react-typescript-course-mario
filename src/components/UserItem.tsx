import React from 'react';
import {UserInterface} from '../types/user';

export interface UserItemProps {
    user: UserInterface,
    onClick: (user: UserInterface) => void
}

const UserItem: React.FC<UserItemProps> = ({user, onClick}): React.ReactElement => {
    return (
        <div style={{padding: 15, border: '1px solid grey'}} onClick={() => onClick(user)}>
            {user.id}. {user.name} проживает в городе {user.address.city} на на улице {user.address.street}
        </div>
    );
};

export default UserItem;
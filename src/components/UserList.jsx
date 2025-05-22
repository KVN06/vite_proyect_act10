import { useState } from 'react';
import './css/UserList.css';
import { UserCard } from './UserCard';

export const UserList = ({ users, onDeleteUser }) => {
    return (
        <div className="user-list">
            {users.map(user => (
                <UserCard 
                    key={user.id} 
                    user={user}
                    onDelete={onDeleteUser}
                />
            ))}
        </div>
    );
}

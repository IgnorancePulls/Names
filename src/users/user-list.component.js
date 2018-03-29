import React from 'react';

const UserListComponent = ({users, onUserClick}) => {
    return (
        <ul>
            {
                users.map((user, index) => (
                    <li>{user.name}</li>
                ))
            }
        </ul>
    )
};

export default UserListComponent;
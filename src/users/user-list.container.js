import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserListComponent from './user-list.component';

const mapStateToProps = (state) => {
    return {
        users: state.UsersStore.users
    }
};

class UserList extends Component {
    render() {
        return (
            <div>
                <h1>user-list</h1>
                <UserListComponent
                    users={this.props.users}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(UserList);
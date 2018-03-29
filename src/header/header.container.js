import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeaderComponent from './header.component';
import { LoadUsers } from "../store/user.actions";

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(LoadUsers())
    }
};

class Header extends Component {
    render() {
        return (
            <HeaderComponent
                getUsers = {this.props.getUsers}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
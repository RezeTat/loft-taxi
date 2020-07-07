import React, {Component} from 'react'
import {withAuth} from './AuthContext'
import PropTypes from "prop-types";

export class Profile extends Component{
    unauthenticate =()=>{
        this.props.logOut();
        this.props.navigate ('login')
    }
    render() {
        return <p>Profile. <button onClick={this.unauthenticate}>Выйти</button> </p>
    }
}

Profile.propTypes = {
    unauthenticate: PropTypes.func
};

export const ProfileWithAuth = withAuth(Profile)
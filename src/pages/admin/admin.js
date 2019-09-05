import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import memeoryUtils from '../../utils/memoryUtils';
class Admin extends Component {


    render() {

        const user = memeoryUtils.user
        if(!user.id) {
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <h2>后台管理</h2>
                <div>Hello {user.name}</div>
            </div>
        );
    }
}

export default Admin;
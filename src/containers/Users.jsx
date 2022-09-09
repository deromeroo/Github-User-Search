import React from 'react';
import NotFound from '../components/NotFound';
import User from '../components/User';
import useGithubUsers from '../hooks/useGithubUsers'

const Users = (props) => {

    const {inputUser} = props;
    const api = `https://api.github.com/users/${inputUser}`
    const users = useGithubUsers(api);

    if( users === 'Not Found') {
        return (
            <NotFound />
        )
    } 

    return (
        <User  users={users}/>
    )
    
}

export default Users
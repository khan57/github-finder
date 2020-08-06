import React, { Component } from 'react';
import PropTypes from 'prop-types';


 const  UserItem = ({ user:{avatar_url,html_url,login} }) => {

    
        // const {avatar_url,html_url,login} = props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url} style={{width:"60px"}} className="round-img" />
                <h3> {login} </h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm  my-1">More</a>
                </div>
            </div>
        )
    
}

UserItem.propTypes={
    user:PropTypes.object.isRequired
}

export default UserItem

import React, { useState, useEffect } from 'react'
import './Profile.css'

const Profile = (props) => {

    const {avatarImage, firstName, lastName, phone, email, bio} = props.profile

    return ( 
        <div>
            <h3 className="text-center">Profile</h3>
            <div className="profile-content">
                <div className="profile-left"><img className="profile-image" src={avatarImage} alt={firstName}/></div>
                <div className="profile-right">                    
                    <table className="profile-table" cellSpacing="0" cellPadding="0">                
                        <tbody>
                            <tr>
                                <td width="90">First name</td>
                                <td className="text-muted">{firstName}</td>
                            </tr>
                            <tr>
                                <td>Last name</td>
                                <td className="text-muted">{lastName}</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td className="text-muted">{phone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td className="text-muted">{email}</td>
                            </tr>
                            <tr valign="top">
                                <td>Bio</td>
                                <td className="text-muted">{bio}</td>
                            </tr>                           
                        </tbody>
                    </table>                 
                </div>
            </div>
        </div>
    );
}
 
export default Profile;
import React from 'react';
import { Link } from 'react-router-dom';
import "./Layout.css"

const Layout = (props) => {

    const {title, logoImage} = props.site
    const {firstName} = props.profile

    return ( 
        <main className="layout">
            <div className="layout-header">
                <div><Link to="/"><img className="layout-logo" src={logoImage} alt="Realtor.com" height="50" width="50"/></Link></div>
                <h1>{title}</h1>
                <div className="font-weight-bold"><Link to="/profile">Welcome {firstName}</Link></div>
            </div>
            <div className="layout-content">
                {props.children}
            </div>
        </main>
    );
}

export default Layout;
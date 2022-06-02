import { React, useContext } from "react"
import { AuthContext } from "../../AuthContext.js"
import { NavLink } from "react-router-dom"

import Profile from "../profile/Profile.js"
import LoginModal from "../login/LoginModal.js"
import './NavBar.css'

export default function NavBar() {
    const auth = useContext(AuthContext)

    return (        
        <div className="top-bar">
            <div>
                <h1 className="mainHeader">
                    <NavLink to="/">FILMOTEEKA</NavLink>
                </h1>
            </div>
            <div>
                { auth.isAuthenticated ? <Profile /> : <LoginModal /> }
            </div>
        </div>
    )
}
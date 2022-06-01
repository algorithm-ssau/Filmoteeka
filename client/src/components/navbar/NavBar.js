import React from "react"
import { useAuth } from "../../hooks/auth.hook.js";

import Profile from "../profile/Profile.js";
import LoginModal from "../login/LoginModal.js";
import './NavBar.css'

export default function NavBar() {
    const { token } = useAuth();
    const isAuthenticated = !!token;

    return (        
        <div className="top-bar">
            <div>
                <h1 className="mainHeader">FILMOTEEKA</h1>
            </div>
            <div>
                { isAuthenticated ? <Profile /> : <LoginModal /> }
            </div>
        </div>
    )
}
import React from "react";
import { useAuth } from "../hooks/auth.hook.js";
import { AuthContext } from "../AuthContext.js";
import NavBar from "../components/navbar/NavBar.js";

export const ProfilePage = () => {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <NavBar />

      <h1>Profile settings page</h1>
      <h1>Profile settings page</h1>
      <h1>Profile settings page</h1>
      <h1>Profile settings page</h1>
    </AuthContext.Provider>
  );
};

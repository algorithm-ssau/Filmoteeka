import { React, useState } from "react"
import { useAuth } from "../hooks/auth.hook.js"
import { AuthContext } from "../AuthContext.js"

import NavBar from "../components/navbar/NavBar.js"
import CategoriesContext from "../components/categories/categoriesContext.js"
import CategoriesList from "../components/categories/CategoriesList.js"
import { Loader } from "../components/loader/Loader.js"

export const MainPage = () => {
    const { login, logout, token, userId, ready } = useAuth()
    const isAuthenticated = !!token
    
    const [categories, setCategories] = useState([
        { id: 0, name: "Драмма", selected: true, averageRaiting: 1 },
        { id: 1, name: "Комедия", selected: false, averageRaiting: 7 },
        { id: 2, name: "Детективы", selected: false, averageRaiting: 5 },
        { id: 3, name: "Ужасы", selected: false, averageRaiting: 10 },
    ]);

    function selectCategory(id) {
        setCategories(
            categories.map((category) => {
                category.selected = category.id === id
                return category
            })
        );
    }

    if (!ready) {
        return <Loader />
    }

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
            <CategoriesContext.Provider value={{ selectFunction: selectCategory }}>
                <>
                    <NavBar />

                    <div className="categoriesWrapper">
                        {categories.length ? (
                        <CategoriesList categories={categories} />
                        ) : (
                        <p>No items</p>
                        )}
                    </div>
                </>
            </CategoriesContext.Provider>
        </AuthContext.Provider>
    )
}
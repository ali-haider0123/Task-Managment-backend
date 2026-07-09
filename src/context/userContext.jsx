
import { useState, useEffect } from "react";
import { UserContext } from "./UserContextCreate";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null)

    function Logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUser(null);
    }


    useEffect(() => {

        const user = localStorage.getItem("user")
        setUser(JSON.parse(user))
    }, [])


    return (
        <UserContext.Provider value={{ user, setUser, Logout }}>
            {children}
        </UserContext.Provider>
    )
}
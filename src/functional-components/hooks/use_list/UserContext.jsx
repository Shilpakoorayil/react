import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider =({children}) => {
    const [users,setUsers]=useState({
        name:"ShilpaKoorayil",
        age:34,
    })

    return(
              <UserContext.Provider value={{users,setUsers}}>
                {children}
              </UserContext.Provider>
    )
}
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("users_db");

        if (userToken && userStorage) {
            const users = JSON.parse(userStorage);
            const userTokenParsed = JSON.parse(userToken);
            const hasUser = users?.filter(
                (user) => user.email === userTokenParsed.email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email,password) => {
        const usersStorage = JSON.parse(localStorage.getItem('users_db'));

        const hasUser = userStorage?filter((user) => user.email === email);

        if(hasUser?.length) {
            if (hasUser[0].email ===email && has user[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setitem('user_token',JSON.stringify({email,token}));
                setUser({ email,password});
                return;
            }else {
                return "email ou senha incorretors";
            }
            else{
                return 'usuraruio não cadastrado'
            }

        }
    }


    const signup = (email , password) => {
        const usersStorage = JSON.parse(localStorage,getItem('users_db'))
        
        const hasUser = usersStorage?.filter((user) => user.email === em)
   
        if(hasUser?.length){
            return 'ja tem uma conta com esse email';
        }
        let newUser;

        if(usersStorage){
            nre
        }
   
   
    }   



    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

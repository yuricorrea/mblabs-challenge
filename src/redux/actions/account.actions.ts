import { User } from "../reducers/account.reducer";
import Types from "../types/account.types";

export const doLogin = (user: User) => (dispatch, getState): boolean => {
    const { users } = getState().account;
    const u = getUser(users, user);
    if (u){
        dispatch({
            type: Types.LOGIN,
            user,
        });
        return true;
    }
    return false;
};

export const doLogout = () => ({
    type: Types.LOGOUT,
});

export const doRegister = (user: User) => (dispatch, getState): boolean => {
    const { users } = getState().account;
    const usr = users.find(u => u.user.toLowerCase() == user.user.toLocaleLowerCase());
    if(!usr){
        dispatch({
            type: Types.REGISTER,
            user,
        });
        return true;
    }
    return false;
}

const getUser = (users: User[], user: User): User|undefined => {
    return users.find(u =>
        u.user.toLowerCase() === user.user.toLowerCase() && u.password == user.password
    );
}


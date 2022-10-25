import Types from "../types/account.types";

export type User = {
    user: string,
    password: string
}

type T = {
    users: User[],
    currentUser: User | null,
}

type A = {
    type: string,
    user: User
}

const initialState: T = {
    users: [],
    currentUser: null,
}

const getUser = (state: T, user: User): User|undefined => {
    return state.users.find(u =>
        u.user.toLowerCase() === user.user.toLowerCase() && u.password == user.password
    );
}

const accountReducer = (state=initialState, action: A) => {
    const { type, user } = action;
    let found:undefined|User;
    switch (type){
        case Types.LOGIN:
            found = getUser(state, user);
            if (!found){
                return state;
            }
            return {
                ...state,
                currentUser: user,
            };
        case Types.LOGOUT:
            return {
                ...state,
                currentUser: null,
            };
        case Types.REGISTER:
            found = state.users.find(u =>
                u.user.toLowerCase() === user.user.toLowerCase()
            );
            if(found){
                return {
                    ...state,
                    currentUser: null,
                };
            }
            return {
                ...state,
                users: [
                    ...state.users,
                    user,
                ],
                currentUser: user,
            }
        default:
            return state;
    }
}

export default accountReducer;

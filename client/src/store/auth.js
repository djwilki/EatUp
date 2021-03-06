import Cookies from 'js-cookie';

const SET_USER = "auth/SET_USER";
const REMOVE_USER = "auth/REMOVE_USER";

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}


export const login = (email, password) => {
    return async dispatch => {
        const res = await fetch("/api/session", {
            method: 'put',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ email, password }),
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
        return res.user;
    }
};

export const logout = (email, password, name) => {
    return async dispatch => {
        const res = await fetch('/api/session', {
            method: "delete",
            headers: {
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ email, password, name }),
        });
        console.log(res);
        if (res.ok) {
            dispatch(removeUser());
        }
    }
}

window.login = login;

export const signUp = (email, password, name) => {
    return async dispatch => {
        const res = await fetch('/api/users', {
            method: "post",
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ email, password, name }),
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(setUser(res.data.user));
        }
    }
}

window.signUp = signUp;

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case REMOVE_USER:
            return {};
        default:
            return state;
    }
}

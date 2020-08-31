import Cookies from 'js-cookie';

const SET_USER = "auth/SET_USER";
const MAKE_USER = "auth/MAKE_USER";

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};

export const makeUser = (userData) => {
    return {
        type: MAKE_USER,
        userData
    }
}

export const signUp = (email, password, location) => {
    return async dispatch => {
        const res = await fetch("/api/users", {
            method: 'post',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ email, password, location }),
        })
        res.data = await res.json();
        if (res.ok) {
            dispatch(makeUser(res.data.userData));
        }
        return res.user;
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

window.login = login;

export default function authReducer(state = {}, action) {
    switch (action.type){
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}

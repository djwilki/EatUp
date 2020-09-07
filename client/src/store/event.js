import Cookies from 'js-cookie';

const SET_EVENT = "content/SET_EVENT"
const DELETE_EVENT = "content/DELETE_EVENT"

export const setContent = (event) => {
    return {
        type: SET_EVENT,
        event
    }
};


export const deleteContent = () => {
    return {
        type: DELETE_EVENT,
    }
};


export const deleteEvent = (id) =>{
    return async dispatch => {
        const res = await fetch(`/api/events/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
        });
        if (res.ok) {
            dispatch(deleteContent());
        }
    }
}



export const fetchEventPage = (id) => {
    return async dispatch => {
        const res = await fetch(`/api/events/${id}`, {
            method: 'get',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(setContent(res.data));
        }
    }
}



export default function contentReducer(state = {}, action) {
    switch (action.type) {
        case SET_EVENT:
            return {
                ...state,
                event: action.event
            };
        case DELETE_EVENT:
            return {...state,
                event: {}
            };
        default:
            return state;
    }
}

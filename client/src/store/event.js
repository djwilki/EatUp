import Cookies from 'js-cookie';

const MAKE_EVENT = "content/MAKE_EVENT"
const SET_EVENT = "content/SET_EVENT"
const DELETE_EVENT = "content/DELETE_EVENT"
const EDIT_EVENT = "content/EDIT_EVENT"

export const editContent = (event) => {
    return {
        type: EDIT_EVENT,
    }
}

export const makeContent = (event) => {
    return {
        type: MAKE_EVENT,
    }
}

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

export const editEvent = (obj, eventId) =>{
    return async dispatch => {
        const res = await fetch(`/api/events/${eventId}`, {
            method: 'put',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify(obj),
        });
        if (res.ok) {
            dispatch(deleteContent());
        }
    }
}

export const makeEvent = ({groupId, date, description, name, seats, userId}) =>{
    return async dispatch => {
        const res = await fetch(`/api/events/`, {
            method: 'post',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({groupId, date, description, name, seats, userId}),
        });
        if (res.ok) {
            dispatch(deleteContent());
        }
    }
}


export const deleteEvent = (id) => {
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
        case MAKE_EVENT:
            return{
                ...state
            }
        case SET_EVENT:
            return {
                ...state,
                event: action.event
            };
        case DELETE_EVENT:
            return {
                ...state,
                event: {}
            };
        default:
            return state;
    }
}

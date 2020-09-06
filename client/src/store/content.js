import Cookies from 'js-cookie';

const SET_CONTENT = "content/SET_CONTENT"

export const setContent = (content) => {
    return {
        type: SET_CONTENT,
        content
    }
};



// export const fetchHomePage = (userId) => {
//     return async dispatch => {
//         const res = await fetch("/api/events", {
//             method: 'get',
//             headers: {
//                 "Content-Type": 'application/json',
//                 "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
//             },
//             body: JSON.stringify({ userId }),
//         });
//         res.data = await res.json();
//         if (res.ok) {
//             dispatch(setContent(res.data));
//         }
//     }
// };

export const fetchHomePage = (id) => {
    return async dispatch => {
        const res = await fetch(`/api/users/${id}/events/`, {
            method: 'get',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
        });
        res.data = await res.json();
        if (res.ok) {
            console.log(res.data);
            dispatch(setContent(res.data));
        }
    }
};

window.fetchHomePage = fetchHomePage;


export default function contentReducer(state = {}, action) {
    switch (action.type) {
        case SET_CONTENT:
            return {
                ...state,
                content: action.content
            };
        default:
            return state;
    }
}

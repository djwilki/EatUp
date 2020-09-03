const SET_CONTENT = "content/SET_CONTENT"

export const setContent = (user) => {
    return {
        type: SET_CONTENT,
        user
    }
};

export const fillHomePage = (userId) => {
    return async dispatch => {
        const res = await fetch("/api/events", {
            method: 'get',
            headers: {
                "Content-Type": 'application/json',
                "XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            },
            body: JSON.stringify({ userId }),
        });
        res.data = await res.json();
        if (res.ok) {
            dispatch(setContent(res.data));
        }
        // return res.user;
    }
};

window.fillHomePage = fillHomePage;

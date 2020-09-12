export const login = () => {
    return {
        type: 'LOGIN',
        payload: true
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
        payload: false
    };
};

export const menuCreate = (menu) => {
    return {
        type: "MENU_CREATE",
        payload: menu
    };
};

export const menuRead = () => {
    return {
        type: "MENU_READ"
    };
};

export const menuUpdate = () => {
    return {
        type: "MENU_UPDATE"
    };
};

export const menuDelete = () => {
    return {
        type: "MENU_DELETE"
    };
};
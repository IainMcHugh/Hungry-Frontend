const menuCrudReducer = (state = {}, action) => {
    switch(action.type){
        case "MENU_CREATE":
            // create
            state = action.payload;
            break;
        case "MENU_READ":
            // read
            break;
        case "MENU_UPDATE":
            // update
            break;
        case "MENU_DELETE":
            // delete
            state = {};
            break;
    }
    return state;
}

export default menuCrudReducer;
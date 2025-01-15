import { createStore,combineReducers } from "redux";
import { usersReducers } from "./reducers/usersReducers";

const rootReduser= combineReducers({
    user:usersReducers


});

export const store = createStore(rootReduser);
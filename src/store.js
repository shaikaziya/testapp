import {createStore} from "redux";

import rootReducer from "./reducers/index";


const store=createStore(rootReducer,window._REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION_())

export default store
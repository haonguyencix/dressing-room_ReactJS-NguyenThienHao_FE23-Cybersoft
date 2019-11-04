import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import FilterReducer from "./filterReducer";
import ModelReducer from "./modelReducer";

const rootReducer = combineReducers({
    // state store lưu trữ
    products: ProductReducer,
    filter: FilterReducer,
    model: ModelReducer
})

export default rootReducer;
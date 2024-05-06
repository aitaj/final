import { createStore, applyMiddleware, combineReducers, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryReducer } from "../admin/pages/Category/reducers";
import { sizeReducer } from "../admin/pages/Size/reducers";
import { locationReducer } from "../admin/pages/Location/reducers";
import { subcategoryReducer } from "../admin/pages/Subcategory/reducers";
import { brendReducer } from "../admin/pages/Brend/reducers";
import { colourReducer } from "../admin/pages/Colour/reducers";
import { materialReducer } from "../admin/pages/Material/reducers";
import { productReducer } from "../admin/pages/Product/reducers";
import { productImageReducer } from "../admin/pages/ProductImage/reducers";
import { companyReducer } from "../admin/pages/Company/reducers";
import { loginUser } from "../Authorization/Signin/actions";
import { secondHandProductReducer } from "../admin/pages/SecondHand/reducers";


const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {};

const initialState = {
  userInfo: userInfoFromLocalStorage,
};
const reducers = combineReducers({
  categories: categoryReducer,
  sizes: sizeReducer,
  locations: locationReducer,
  subcategories: subcategoryReducer,
  brends: brendReducer,
  colours: colourReducer,
  materials: materialReducer,
  products: productReducer,
  productImages: productImageReducer,
  companies: companyReducer,
  userInfo:loginUser,
  secondHandProducts:secondHandProductReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
// const OtherComponent = React.lazy(() => import("./OtherComponent"));
import Home from "./pages/Home";
import BasketPage from "./pages/BasketPage";
import Signin from "./Authorization/Signin/Signin";
import Register from "./Authorization/Register/Register";
import Category from "./admin/pages/Category/Category";
import HomeAdmin from "./admin/pages/Home/HomeAdmin";
import Size from "./admin/pages/Size/Size";
import Location from "./admin/pages/Location/Location";
import Brend from "./admin/pages/Brend/Brend";
import Subcategory from "./admin/pages/Subcategory/Subcategory";
import SizeDetailed from "./admin/pages/Size/SizeDetailed";
import LocationDetailed from "./admin/pages/Location/LocationDetailed";
import SubcategoryDetailed from "./admin/pages/Subcategory/SubcategoryDetailed";
import BrendDetailed from "./admin/pages/Brend/BrendDetailed";
import ColourDetailed from "./admin/pages/Colour/ColourDetailed";
import MaterialDetailed from "./admin/pages/Material/MaterialDetailed";
import CategoryDetailed from "./admin/pages/Category/CategoryDetailed";
import ProductDetailed from "./admin/pages/Product/ProductDetailed";
import ProductImageDetailed from "./admin/pages/ProductImage/ProductImageDetailed";
import Colour from "./admin/pages/Colour/Colour";
import Material from "./admin/pages/Material/Material";
import ProductAdmin from "./admin/pages/Product/ProductAdmin";
import ProductImage from "./admin/pages/ProductImage/ProductImage";
import Company from "./admin/pages/Company/Company";
import CompanyDetailed from "./admin/pages/Company/CompanyDetailed";
import ProductWithDetails from "./pages/ProductWithDetails";
import ProductWithDetailsAdmin from "./admin/pages/Product/ProductWithDetails";
import SecondHandProductDetailed from "./admin/pages/SecondHand/SecondHandProductDetailed";
import SecondHandProduct from "./admin/pages/SecondHand/SecondHandProduct";
import SecondHandProductsPage from "./pages/SecondHandProductsPage";
import SecondHandPage from "./pages/SecondHandPage";
import SigninAdmin from "./Authorization/Signin/SigninAdmin/SigninAdmin";
function App() {
  const ProtectedRoute = ({ location, children, ...rest }) => {
    return localStorage.getItem("userInfo") !== null ? (
      <Route {...rest}>{children}</Route>
    ) : (
      <Redirect
        to={{
          pathname: "/admin/login",
          state: { from: location },
        }}
      />
    );
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/category:10/subcategory:46"
            component={SecondHandPage}
          ></Route>
          <Route
            exact
            path="/category:10/subcategory:47"
            component={SecondHandProductsPage}
          ></Route>
          <Route exact path="/basket" component={BasketPage}></Route>
          <Route exact path="/login" component={Signin}></Route>
          <Route exact path="/admin/login" component={SigninAdmin}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/secondhandproducts" component={SecondHandPage}></Route>
          <Route
            path="/secondhandproductsall"
            component={SecondHandProductsPage}
          ></Route>
          <Route path="/products/:id" component={ProductWithDetails}></Route>
          <ProtectedRoute
            exact
            path="/admin/"
            component={HomeAdmin}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/categories"
            component={Category}
          ></ProtectedRoute>{" "}
          <ProtectedRoute
            exact
            path="/admin/products/:id"
            component={ProductWithDetailsAdmin}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/sizes"
            component={Size}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/locations"
            component={Location}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/brends"
            component={Brend}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/colours"
            component={Colour}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/materials"
            component={Material}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/products"
            component={ProductAdmin}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/productimages"
            component={ProductImage}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/companies"
            component={Company}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/subcategories"
            component={Subcategory}
          ></ProtectedRoute>{" "}
          <ProtectedRoute
            exact
            path="/admin/secondhandproducts"
            component={SecondHandProduct}
          ></ProtectedRoute>
          <ProtectedRoute path={`/admin/sizes/:id`} component={SizeDetailed} />
          <ProtectedRoute
            path={`/admin/locations/:id`}
            component={LocationDetailed}
          />
          <ProtectedRoute
            exact
            path="/admin/subcategories/:id"
            component={SubcategoryDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/brends/:id"
            component={BrendDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/colours/:id"
            component={ColourDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/materials/:id"
            component={MaterialDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/categories/:id"
            component={CategoryDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/products/:id"
            component={ProductDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/productimages/:id"
            component={ProductImageDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/companies/:id"
            component={CompanyDetailed}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/secondhandproducts/:id"
            component={SecondHandProductDetailed}
          ></ProtectedRoute>
          <Route path="*" component={() => "404 NOT FOUND"}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

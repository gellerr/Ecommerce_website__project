import { React, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }

    dispatch(getInitialData());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PrivateRoute component={Home} />} />
        <Route
          path="/category/*"
          element={<PrivateRoute component={Category} />}
        />

        <Route
          path="/products/*"
          element={<PrivateRoute component={Products} />}
        />
        <Route path="/orders/*" element={<PrivateRoute component={Orders} />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
